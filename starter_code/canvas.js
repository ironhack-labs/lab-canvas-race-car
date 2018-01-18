var ctx;
var car;
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    $("#game-board").html('<canvas id="canvas"></canvas>');
    $("#canvas").attr({
      height: window.innerHeight,
      width: 600
    });
    var cv = document.getElementById("canvas");
    ctx = cv.getContext("2d");
    showRoad();
    //showCar();
  }
};

function showRoad() {
  //altura
  var vHeight = window.innerHeight;
  //carretera
  ctx.fillStyle = "#1e8400";
  ctx.fillRect(0, 0, 600, window.innerHeight);
  ctx.fillStyle = "#a0a0a0";
  ctx.fillRect(60, 0, 480, window.innerHeight);
  ctx.fillStyle = "#fff";
  ctx.fillRect(80, 0, 10, window.innerHeight);
  ctx.fillRect(510, 0, 10, window.innerHeight);
  ctx.strokeStyle = "#fff";
  ctx.setLineDash([30, 20]);
  ctx.moveTo(298, 0);
  ctx.lineWidth = 8;
  ctx.lineTo(298, window.innerHeight);
  ctx.stroke();

}
