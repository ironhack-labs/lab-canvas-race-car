//let game = new Game(canvas)
//let car = new Car(canvas)
//let road = new Road(canvas)
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    newGameOver()
    let canvas = document.querySelector("#canvas")
    const setPlayerDirection = (event) => {
      if (event.code === "ArrowRight") {
        game.car.setDirection(10);
        game.car.update()
      } else if (event.code === "ArrowLeft") {
        game.car.setDirection(-10);
        game.car.update()
      }
    };

    document.addEventListener("keydown", setPlayerDirection)
    //road.drawRoad()
    //car.draw()
    const game = new Game(canvas);
    game.startLoop();
  }
  function newGameOver(){
    if(document.querySelector(".game-over")){
      document.querySelector(".game-over").remove();
    }
  }
}