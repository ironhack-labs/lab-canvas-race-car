/** @type HTMLCanvasElement */
let canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
let ctx = canvasDOMEl.getContext("2d");

class Board {

constructor(height, width){
    this.height = height;
    this.width = width;
  } 

setCanvasDimensions() {
    canvasDOMEl.setAttribute("height", this.height);
    canvasDOMEl.setAttribute("width", this.width);
  }

}

class Background {

  constructor(pos0,pos1,pos2,pos3,pos4,pos5){
    this.arr = [pos0,pos1,pos2,pos3,pos4,pos5]
  }

  drawBackground(){
    ctx.fillStyle= "grey";
    ctx.fillRect(20,0,260,500);
    ctx.fillStyle= "white";
    ctx.fillRect(30,0,10,500);
    ctx.fillStyle= "white";
    ctx.fillRect(260,0,10,500);
    ctx.fillRect(145,0,10,500);
    ctx.fillStyle= "grey";
    ctx.fillRect(145,this.arr[0],10,50);
    ctx.fillRect(145,this.arr[1],10,50);
    ctx.fillRect(145,this.arr[2],10,50);
    ctx.fillRect(145,this.arr[3],10,50);
    ctx.fillRect(145,this.arr[4],10,50);
    ctx.fillRect(145,this.arr[5],10,50);
  }

}

class Car {

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

}

class Obstacle {

  constructor(pos0x, pos0y, pos1x,pos1y){
    this.arrX = [pos0x,pos1x];
    this.arrY = [pos0y, pos1y];
  }

  drawObject(){
    ctx.fillStyle= "brown";
    ctx.fillRect(this.arrX[0],this.arrY[0],60,20);
    ctx.fillRect(this.arrX[1],this.arrY[1],60,20);
  }

}

let canvas = new Board(500,300);

let back = new Background(-50,50,150,250,350,450);

let car = new Car(115,340);

let obs = new Obstacle(100, 10, 200, 290);

canvas.setCanvasDimensions();

back.drawBackground();

obs.drawObject();

let carImage = new Image();
carImage.src = "images/car.png";

carImage.onload = function(){
  ctx.drawImage(carImage,car.x,car.y,70,100);
}

window.onload = function() {
  document.getElementById("start-button").onclick = function(btn) {
    btn.preventDefault();
    startGame();
  }
};

function startGame(){
  setInterval(function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvas.setCanvasDimensions();
    back.drawBackground();
    obs.drawObject();
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
    for(let i=0; i<back.arr.length; i++){
      if(back.arr[i] === 500){
        back.arr[i] = -100;
      }else{
        back.arr[i] += 1;
      }
    }
    for(let j=0; j<obs.arrY.length; j++){
      if(obs.arrY[j] === 500){
        obs.arrY[j] = -150;
      }else{
        obs.arrY[j] +=1;
      }
    }
    ctx.drawImage(carImage,car.x,car.y,70,100);
  },1000/60);
} 