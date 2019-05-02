window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    RaceCarApp.init('game-board')
    console.log("juego iniciado")
    RaceCarApp.drawRoad()
    RaceCarApp.drawPlayer('images/car.png')
  }
};