
var canvas = document.getElementById("canvas");
var ctx = canvas.msGetInputContext("2d");

var cW=canvas.width;
var cH=canvas.height;

function drawRoad() {
  ctx.fillStyle = "#7F7F7F";
  ctx.fillRect(0, 0, cW, cH);

  ctx.lineWidth = cW * .2;
  ctx.strokeStyle = "#007F00";
  ctx.strokeRect(0, -cH * .1, cW, cH * 1.2);

  ctx.lineWidth = cW * .015;
  ctx.strokeStyle = "#FFFFFF";
  ctx.strokeRect(cW * .12, -cH * .1, cW * (1 - 0.24), cH * 1.2);

  ctx.beginPath();
  ctx.lineDashOffset = 30;
  ctx.setLineDash([cW / 15, cW / 15]);
  ctx.strokeStyle = "#FFFFFF";
  ctx.strokeWidth = cW * .15;
  ctx.moveTo(cW / 2, 0);
  ctx.lineTo(cW / 2, cH);
  ctx.stroke();
}

drawRoad();

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

  }
};
