window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
var game = new Game();
game.playGame();
  }
};

function Game() {
var ctx ;
}
Game.prototype.playGame = function () {
  this.canvasInit();
  this.roadInit();
  this.carInit();
};

Game.prototype.canvasInit = function () {

    var canvas = document.getElementById("myCanvas");
    canvas.width = 500;
    canvas.height = 800;
    this.ctx = canvas.getContext("2d");
};

Game.prototype.roadInit = function () {
  var road = new Road();
  road.draw(this.ctx);
};

Game.prototype.carInit = function () {
  var car = new Car();
  car.draw(this.ctx);

};