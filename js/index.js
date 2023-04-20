const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const playerCar= new Car()

const game= new Game(ctx, canvas.width,canvas.height, player)


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.start()
  }
};


// Moving the car Left and Right
document.addEventListener("keydown", (e) => {
  switch (e.code) {

    case "ArrowLeft":
      player.speedX -= 1;
      break;

    case "ArrowRight":
      player.speedX += 1;
      break;
  }
});