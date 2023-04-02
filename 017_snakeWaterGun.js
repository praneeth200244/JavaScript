let members = ['S','W','G'];
let userPoints = 0;
let computerPoints = 0;

const calculatePoints = ((userInput, computerInput) => {
  if (userInput == computerInput) {
    return;
  } else if ((userInput == 'S' && computerInput == 'W') || (userInput == 'W' && computerInput == 'G') || (userInput == 'G' && computerInput == 'S')) {
    userPoints++;
  } else {
    computerPoints++;
  }
})

const declareWinner = (() => {
  alert("User points: " + userPoints + " Computer points: " + computerPoints);
  if (userPoints > computerPoints) {
    alert("You win the game....");
  } else {
    alert("You loose....");
  }
});

let continuePlaying = true;
do {
  alert("Enter\nS---->Snake\nW---->Water\nG---->Gun");
  let userInput = prompt("Enter your choice: ");
  let computerInput = members[Math.floor(Math.random()*3)];
  calculatePoints(userInput, computerInput);
  continuePlaying = confirm("Do you wish to continue?");
  if (!continuePlaying) {
    declareWinner();
  }
} while (continuePlaying);

