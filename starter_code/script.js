class Car {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

let car = new Car(115,340);

/** @type HTMLCanvasElement */
let canvasDOMEl = document.getElementById("canvas");


/** @type CanvasRenderingContext2D */
let ctx = canvasDOMEl.getContext("2d");

let w = 300;
let h = 500;

function setCanvasDimensions() {
  canvasDOMEl.setAttribute("height", h);
  canvasDOMEl.setAttribute("width", w);
}

window.onresize = setCanvasDimensions;

setCanvasDimensions();

/*setInterval(() => {
    ctx.save();
    ctx.translate(randomInt(0, w), randomInt(0, h));
    new ConcentricCircles(randomInt(5, 5));
    ctx.restore();
}, 10)*/

function drawBackground(){
  ctx.fillStyle= "grey";
  ctx.fillRect(20,0,260,500);
  ctx.fillStyle= "white";
  ctx.fillRect(30,0,10,500);
  ctx.fillStyle= "white";
  ctx.fillRect(260,0,10,500);
}


let carImage = new Image();
carImage.src = "images/car.png";


carImage.onload = function(){
  ctx.drawImage(carImage,car.x,car.y,70,100);
}

drawBackground();

function startGame(){
  
  setInterval(function() {
    ctx.clearRect(0,0,w,h);
    drawBackground();
    window.onkeydown = function(e) {
      switch (e.key) {
        case "ArrowRight":
          car.x +=1;
          break; 
        case "ArrowLeft":
          car.x -= 1;
          break;
      }
    }
    ctx.drawImage(carImage,car.x,car.y,70,100);
  },1000/60);
} 
  
  
  
  


window.onload = function() {
  document.getElementById("start-button").onclick = function(btn) {
    btn.preventDefault();
    startGame();
  }
};



/*let coords = {
  x: w2,
  y: h2
 };
 let radius = 100;
 let color = "black";
 function drawCircle(color) {
  ctx.clearRect(0, 0, w, h);
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(coords.x, coords.y, radius, 0, PI_DOUBLE);
  ctx.fill();
  ctx.closePath();
 }
 let speed = 30;
 window.onkeydown = function(e) {
  switch (e.key) {
    case "ArrowRight":
      coords.x += speed;
      break;
    case "ArrowUp":
      coords.y -= speed;
      if (coords.y < -radius) {
        coords.y = h + radius;
      }
      break;
    case "ArrowLeft":
      coords.x -= speed;
      break;
    case "ArrowDown":
      coords.y += speed;
      if (coords.y > h + radius) {
        coords.y = -radius;
      }
      break;
  }
  if (e.code === "Space") {
    color = "red";
  }
  drawCircle(color);
 };*/