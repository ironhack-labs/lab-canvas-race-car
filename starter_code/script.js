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

  constructor(x, y){
    this.x = x;
    this.y = y;
  }

}

let canvas = new Board(500,300);

let back = new Background(-50,50,150,250,350,450)

let car = new Car(115,340);

canvas.setCanvasDimensions();

back.drawBackground();

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
  debugger;
  setInterval(function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvas.setCanvasDimensions();
    back.drawBackground();
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
    ctx.drawImage(carImage,car.x,car.y,70,100);
  },1000/60);
} 