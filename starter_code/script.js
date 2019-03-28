window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

   var canvas = document.querySelector("#container")
    /** @type {CanvasRenderingContext2D} */
    var ctx = canvas.getContext('2d');
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    var dimensions = 400;
    var color='red';

  function startGame() {
   

    draw(ctx,w,h,color,dimensions);
  }
};

function draw (ctx,w,h,color,dimensions){
  drawRoad(ctx, 0, h, 'green', 400);
  drawRoad(ctx, 25, h, 'gray', 350);
  drawRoad(ctx, 35, h, 'white', 330);
  drawRoad(ctx, 45, h, 'gray', 310);
  drawLine(ctx,h);
}

function drawRoad(ctx,w,h,color,dimensions) {
  ctx.beginPath()
  //ctx.setLineDash([0])
  ctx.fillStyle = color
  ctx.rect(0+w, 0, dimensions, h)
  ctx.fill()
  ctx.restore()
  ctx.closePath()
}

function drawLine(ctx,h){
  ctx.beginPath()
  ctx.strokeStyle = `white`
  ctx.lineWidth = 5
  ctx.setLineDash([10, 0, 10])
  ctx.moveTo(200, 0)
  ctx.lineTo(200, h)
  ctx.stroke()
  ctx.closePath()
}





// function drawRoad(ctx,w,h) {
//   var dimensions = 400

//       ctx.beginPath()
//       ctx.fillStyle = 'green'
//       ctx.rect(0, 0, dimensions, h)
//       ctx.fill()
//       ctx.restore()
//       ctx.closePath()

//       ctx.beginPath()
//       ctx.fillStyle = 'gray'
//       ctx.rect(25, 0, dimensions - 50, h)
//       ctx.fill()
//       ctx.restore()
//       ctx.closePath()

//       ctx.stroke()
// }