

ctx.fillStyle = '#84010c';
// ctx.fillRect(100, 0, 50, 50);
// ctx.fillRect(300, 0, 50, 50);
// ctx.fillRect(500, 0, 50, 50);

let speed1 = 0;
let speed2 = 0;
let speed3 = 0;

function clearCanvas() {
  ctx.clearRect(0, 0, 700, 450); // 700 and 450 are canvas width and height
}

function drawCanvas(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function updateCanvas() {
  // in order to see animation, let's change speed1,2 and 3 on every call
  speed1 += 1;
  speed2 += 2;
  speed3 += 3;

  // clear the canvas
  clearCanvas();

  // redraw the canvas
  setInterval(()=>{
    drawCanvas(50, speed1, 100, 50, 'red');
  }, 2000)
  setInterval(()=>{
   
  }, 2000)
  drawCanvas(150, speed2, 150, 50, 'red');
  drawCanvas(250, speed3, 250, 50, 'red');

  requestAnimationFrame(updateCanvas);
}

updateCanvas()


quiero dibubar rectangulos que vayan bajando por la pagina cada x tiempo


class Obstacles {
    constructor(){
    this.width = width
    this.heigth = heigth
    this.x =
    this.y =
    }

    drawObstacle(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    }
}