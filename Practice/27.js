// Guess random number from 1-10

function display() {
  let random = Math.floor(Math.random() * 10) + 1;

  let a = 10;

  if (a == random) {
    console.log("You guessed correct");
  } else {
    console.log("You guessed incorrect")
  }
}
display();
