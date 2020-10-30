window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.querySelector("#canvas");

    const setCarDirection = (event) => {
      if (event.code === "ArrowRight") {
        game.car.setDirection(1);
        game.car.update()
      } else if (event.code === "ArrowLeft") {
        game.car.setDirection(-1);
        game.car.update()
      }
    };
    document.addEventListener("keydown", setCarDirection);
    const game = new Game(canvas);
    game.startLoop();
  }
};