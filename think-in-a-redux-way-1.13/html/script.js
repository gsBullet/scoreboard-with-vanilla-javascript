const matchTemplate = document.querySelector(".match");
const resetButton = document.querySelector(".lws-reset");
const addMatchButton = document.querySelector(".lws-addMatch");

matchTemplate
  .querySelector(".incrementForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    updateScore(event.target, true);
    event.target.reset();
  });

matchTemplate
  .querySelector(".decrementForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    updateScore(event.target, false);
    event.target.reset();
  });

addMatchButton.addEventListener("click", () => {
  const allMatches = document.querySelector(".all-matches");
  const matchTemplate = document.querySelector(".match").cloneNode(true);

  const matchCount = allMatches.children.length + 1;

  matchTemplate.querySelector(
    ".lws-matchName"
  ).textContent = `Match ${matchCount}`;

  matchTemplate.querySelector(".lws-singleResult").textContemt = 0;

  matchTemplate
    .querySelector(".incrementForm")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      updateScore(event.target, true);
      event.target.reset();
    });

  matchTemplate
    .querySelector(".decrementForm")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      updateScore(event.target, false);
      event.target.reset();
    });

  allMatches.appendChild(matchTemplate);
});

resetButton.addEventListener(
  "click",
  (resetScoreElement = () => {
    const scoreElement = document.querySelectorAll(".lws-singleResult");
    scoreElement.forEach((element) => {
      element.textContent = 0;
    });
    updateTotalScore();
  })
);

const updateScore = (form, isIncrement) => {
  const matchSection = form.closest(".match");
  const scoreElement = matchSection.querySelector(".lws-singleResult");
  const inputValue = parseInt(form.querySelector("input").value);
  let currentScore = parseInt(scoreElement.textContent);

  if (isNaN(isIncrement)) return;

  if (isIncrement) {
    currentScore += inputValue;
  } else {
    currentScore -= inputValue;
    if (currentScore < 0) currentScore = 0;
  }

  scoreElement.textContent = currentScore;
  updateTotalScore();
};

const updateTotalScore = () => {
  const totalScoreElemt = document.querySelector(".total");
  const scoreElement = document.querySelectorAll(".lws-singleResult");
  let totalScore = 0;

  scoreElement.forEach((element) => {
    totalScore += parseInt(element.textContent);
  });

  totalScoreElemt.textContent = `Total: ${totalScore}`;
};
