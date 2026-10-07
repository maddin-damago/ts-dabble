document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("click-me") as HTMLElement;
  const input = document.getElementById("guess") as HTMLInputElement;
  const feedback = document.getElementById("feedback") as HTMLElement;

  let stringFeedback = "";

  btn.addEventListener("click", () => {
    feedback.classList.remove("won");
    stringFeedback = checkGuess(input.value);
    feedback.textContent = stringFeedback;
    input.value = "";
    input.focus();
    if (stringFeedback.toLowerCase() === "you won") {
      feedback.classList.add("won");
    }
  });
});

let target = Math.floor(Math.random() * 10) + 1;
function checkGuess(guess: string): string {
  const intGuess = parseInt(guess || "");
  if (intGuess === target) {
    return "You won";
  }
  if (intGuess < target) {
    return "My number is higher";
  }
  if (intGuess > target) {
    return "My number is lower";
  }
  return "Please enter a number between 1 and 10";
}

/**
 * Gegeben ist ein Array von Brettspielen
 * ["Die Siedler von Catan", "Twilight Imperium", "Nemesis", "Arkham Horror", "Fallout the Board game", "Dark Souls the Board"]
 * im HTML macht ihr eine liste ul oder ol aber die li elemente fügt ihr per code zu
 */

const brettspiele = [
  "Die Siedler von Catan",
  "Twilight Imperium",
  "Nemesis",
  "Arkham Horror",
  "Fallout the Board Game",
  "Dark Souls the Board Game",
];

const list = document.getElementById("liste") as HTMLElement;

brettspiele.map((bs) => {
  let li = document.createElement("li");
  li.textContent = bs;
  list.append(li);
  li.style.cursor = "pointer";
  li.style.padding = "10px 20px";
  li.addEventListener("click", () => {
    li.classList.toggle("played");
  });
});
