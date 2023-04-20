const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const playerCar = new Car()                                            // Creates an instance of the Car/Player class
const game = new Game(ctx, canvas.width, canvas.height, playerCar)     // Creates an instance of the Game class 

window.onload = () => {
  document.getElementById('start-button').onclick = () => {            // when button is clicked run startGame() function.
    startGame(); 
  };

  function startGame() {
    game.start()                                                       // starts running the game
  } 
};

document.addEventListener("keydown", (e) => {                        // creates event listener for key press to move the car
  switch (e.code) {
    case "ArrowLeft":
      playerCar.moveLeft()
    break;
    case "ArrowRight":
      playerCar.moveRight()
    break;
  }
});

