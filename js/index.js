let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")
let game = new Game(canvas)
let player = new Player(canvas)
let road = new Road(canvas)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    road.draw()
    player.draw()
    game.startLoop();
  }

  const setPlayerDirection = (event) => { //Error con la dirección 
    if (event.code === "ArrowRight") {
      game.player.setDirection(1);
      
    } else if (event.code === "ArrowLeft") {
      game.player.setDirection(-1);

      //game.player.update()
    }
  };

  document.addEventListener("keydown", setPlayerDirection)

};


