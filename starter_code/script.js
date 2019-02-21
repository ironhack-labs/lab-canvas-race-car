"use strict";
var gameBoard;

function GameBoardConstr() {
  this.width = 350;
  this.heigth = 600;
  this.score = 0;
  this.ctx = document.getElementById("mycanvas").getContext("2d");
  this.clearCanvas = this.ctx.clearRect(0, 0, this.width, this.heigth);
};

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    // create board
    gameBoard = new GameBoardConstr();
    // clear board
    gameBoard.clearCanvas;
    // create road
    gameBoard.createRoad();
  }
};

GameBoardConstr.prototype.createRoad = function () {
  // start grey
  this.ctx.fillStyle = "grey";
  this.ctx.fillRect(0, 0, this.width, this.heigth);
  // green lanes
  var widthGr = 25;
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(0, 0, widthGr, this.heigth);
  this.ctx.fillRect(this.width - widthGr, 0, widthGr, this.heigth);
  // white lines (outer)
  this.ctx.clearRect(widthGr + 10, 0, 10, this.heigth);
  this.ctx.clearRect(this.width - widthGr - 10 - 10, 0, 10, this.heigth);
  // white lines (dashed)
  this.ctx.beginPath();
  this.ctx.setLineDash([15, 15]);
  this.ctx.strokeStyle = "white";
  this.ctx.lineWidth = 4;
  this.ctx.moveTo(this.width / 2, this.heigth + 15 / 2);
  this.ctx.lineTo(this.width / 2, 0);
  this.ctx.stroke();
}