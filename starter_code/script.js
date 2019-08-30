const w = 500;
const h = 0;
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
let counter = 0;
startGame = () => {
  myCanvasdDOMEl = document.getElementById("myCanvas");
  ctx = myCanvasdDOMEl.getContext("2d");
  
  setInterval(() => {
    counter++;

    ctx.clearRect(0, 0, 500, 800);
    drawRoad(ctx);
    console.log(car.src)
    car.drawCar();
  }, 10);
};
class Car {
  constructor(ctx, xParam, yParam) {
    this.positions = {
      x: xParam,
      y: yParam
    };
    this.speed = 25;
    
    this.gameCharacter = new Image();
    this.gameCharacter.src = "./images/car.png";
  }

  
  drawCar() {
    ctx.drawImage(this.gameCharacter, this.positions.x, this.positions.y)
  }

  moveLeft() {
    if (this.positions.x >= 60) {
      this.positions.x -= this.speed;
    }
  }
  moveRight() {
    if (this.positions.x <= w) {
      this.positions.x += this.speed;
    }
  }
}
let car = new car;
drawRoad = ctx => {
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 500, 800);

  ctx.fillStyle = "#AAAAAA";
  ctx.fillRect(40, 0, 420, 800);

  ctx.beginPath();
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(50, 0, 400, 800);

  ctx.beginPath();
  ctx.fillStyle = "#AAAAAA";
  ctx.fillRect(60, 0, 380, 800);

  function moveLine() {
    ctx.setLineDash([5, 10]);
    ctx.lineDashOffset = counter;
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 7;

    ctx.moveTo(250, 0);
    ctx.lineTo(250, 800);
    ctx.stroke();
    ctx.closePath();
    console.log(counter);
  }
  moveLine();
};

// function draw() {
//   let car = new Image();
//   car.src = "images/car.png";

//   car.onload = function() {
//     let car = new Image();
//     car.src = "images/car.png";
//     ctx.drawImage(car, that.w / 2, that.h);
//   };
// }


// function draw() {
//   let car = new Image();
//   car.src = "images/car.png";
//   cxt.drawImage(car, 250, 0).bind(cxt);
// }
// LO PROBE TAMBIEN DE ESTA MANERA
// let car = {
//   image: new Image().src ="./images/car.png",
//   x: 0,
//   y: 0,

// moveRight : function(){
//   if(car.x < w){
//     car.x++;
//      }
//     },
// moveLeft : function() {
//   if (car.x > 0){
//     car.x--;
//   }
// }

// }
