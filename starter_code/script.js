// setup(canvas, draw11)
window.onload = function() {
  var canvas = document.querySelector("#game");

  /** @type {CanvasRenderingContext2D} */
  var ctx = canvas.getContext('2d');

  canvas.setAttribute("height", window.innerHeight);
  canvas.setAttribute("width", window.innerWidth/2);
  // setup(canvas,draw);
  
  // ctx.beginPath();
  // ctx.fillRect(25, 25, 100, 100);
  // ctx.stroke();
  // var lineHeight = 200;
  // ctx.strokeStyle = red;
  // ctx.moveTo(i, h2 - lineHeight / 2)
  // ctx.lineTo(i, h2 + lineHeight / 2)
  // ctx.stroke();
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    drawRoad(ctx);
  }
};
