window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    console.log("-Inicio del juego-")
    gameRD.init("game-board");
    console.log("-Carga de back")
    gameRD.drawBackground();
    console.log("-carga del coche")
    gameRD.drawMovingCar()
    console.log("-carga block")
    gameRD.drawBlocks()
    console.log("-carga event")
    gameRD.setEventListeners()

    gameRD.setIntervals()
  };

};
