// setup(canvas, draw11)
window.onload = function() {
  var canvas = document.querySelector("#game");
  var offset = 0;

  /** @type {CanvasRenderingContext2D} */
  var ctx = canvas.getContext('2d');

  canvas.setAttribute("height", window.innerHeight);
  canvas.setAttribute("width", window.innerWidth/2);
  // setup(canvas,draw);
  // drawRoad(ctx);
  // drawMiddleLine(ctx,offset);
  // march(ctx,offset);
  // drawBugga(ctx);

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    drawRoad(ctx);
    drawMiddleLine(ctx,offset);
    // march(ctx,offset);
    drawBugga(ctx);
  }
  // function drawMiddleLine() {
  //   ctx.beginPath();
  //   ctx.setLineDash([50,50]);
  //   ctx.lineDashOffset = -offset;
  //   ctx.strokeStyle = `rgba(255, 255, 255, 1)`
  //   ctx.lineWidth = 10;
  //   ctx.moveTo(w2,0)
  //   ctx.lineTo(w2,h)
  //   ctx.stroke()
  // }

  // function march() {
  //   offset++;
  //   if (offset > 50) {
  //     offset = 0;
  // }
  //   drawMiddleLine(ctx,offset);
  //   setTimeout(march, 20);
  // }
};

