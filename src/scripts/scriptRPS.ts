document.addEventListener("DOMContentLoaded", () => {
  const points = document.getElementById("points") as HTMLElement;
  const scissors = document.getElementById("scissors") as HTMLElement;
  const stone = document.getElementById("stone") as HTMLElement;
  const paper = document.getElementById("paper") as HTMLElement;
  const fightBtn = document.getElementById("fight") as HTMLButtonElement;
  const domChoices = document.getElementById("choices") as HTMLElement;
  const choices = ["scissors", "stone", "paper"];

  let userPoints = 0;
  let aiPoints = 0;

  let userChoice = "";

  scissors.addEventListener("click", () => {
    userChoice = "scissors";
    scissors.classList.toggle("picked");
    stone.classList.remove("picked");
    paper.classList.remove("picked");
    if (userChoice) {
      fightBtn.disabled = false;
    }
  });
  stone.addEventListener("click", () => {
    userChoice = "stone";
    stone.classList.toggle("picked");
    scissors.classList.remove("picked");
    paper.classList.remove("picked");
    if (userChoice) {
      fightBtn.disabled = false;
    }
  });
  paper.addEventListener("click", () => {
    userChoice = "paper";
    paper.classList.toggle("picked");
    stone.classList.remove("picked");
    scissors.classList.remove("picked");
    if (userChoice) {
      fightBtn.disabled = false;
    }
  });

  fightBtn.addEventListener("click", () => {
    const rand = Math.floor(Math.random() * 3);
    const aiChoice = choices[rand] || "";

    domChoices.textContent = `User picked: ${userChoice} - AI picked: ${aiChoice}`;

    if (userChoice === "scissors" && aiChoice === "paper") {
      userPoints++;
    } else if (userChoice === "scissors" && aiChoice === "stone") {
      aiPoints++;
    } else if (userChoice === "stone" && aiChoice === "scissors") {
      userPoints++;
    } else if (userChoice === "stone" && aiChoice === "paper") {
      aiPoints++;
    } else if (userChoice === "paper" && aiChoice === "stone") {
      userPoints++;
    } else if (userChoice === "paper" && aiChoice === "scissors") {
      aiPoints++;
    }

    points.textContent = `${userPoints} : ${aiPoints}`;

    if (userPoints === 3) {
      winningDuh("PLAYER WON");
    }
    if (aiPoints === 3) {
      winningDuh("AI WON");
    }
  });

  function winningDuh(whoWon: string) {
    setTimeout(() => {
      alert(whoWon);
      points.textContent = "0 : 0";
      userPoints = 0;
      aiPoints = 0;
      userChoice = "";
    }, 1000);
    fightBtn.disabled = true;
    paper.classList.remove("picked");
    stone.classList.remove("picked");
    scissors.classList.remove("picked");
    domChoices.textContent = "";
  }
});
