window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
var game = new Game();
game.canvasInit();
game.roadInit();
  }
};

function Game() {
var ctx ;
}

Game.prototype.canvasInit = function () {

      var canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 800;
    this.ctx = canvas.getContext("2d");
};

Game.prototype.roadInit = function () {
  var road = new Road();
  road.draw(this.ctx);
};
