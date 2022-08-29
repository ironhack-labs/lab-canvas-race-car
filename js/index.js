window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
 //function startGame(){}
};
/////
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
//CANVAS SIZE: 500 X 700

//IMAGES
const carImg = new Image()
carImg.src = "images/car.png";


//DRAW ROAD
function drawRoad(){
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 500, 700);
  ctx.fillStyle = "grey";
  ctx.fillRect(40, 0, 420, 700);
  ctx.beginPath();
  ctx.moveTo(60,0);
  ctx.lineTo(60, 710);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 10;
  ctx.moveTo(440,710);
  ctx.lineTo(440,0);
  ctx.stroke();
  ctx.closePath();
  //CENTER LINE
  ctx.beginPath();
  ctx.moveTo(250,710);
  ctx.lineTo(250,0);
  ctx.setLineDash([35, 30]);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.closePath();
}
drawRoad();

class Car{
  constructor(x,y,w,h,image){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = image;
  }
  left(){
    if ( this.x + this.w > 30){
      this.x -= 20;
    }
  }
  right(){
   
    if ( this.x + this.w < 450){
      this.x += 20;
    }
  }
  drawItself(){
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  }
}
//ARRAY OF OBSTACLES
obstaclesArray = [];

class Obstacles{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  drawItself(){
    ctx.fillStyle = "violet";
    ctx.fillRect(this.x, this.y, this.w, this.y);
  }
}

function keys(blueCar){
  document.addEventListener("keyup", (evento)=>{
    console.log(evento.code)
    switch(evento.code){
      case "ArrowRight":
        blueCar.right();
        break;
      case "ArrowLeft":
        blueCar.left();
        break;
    }
  })
}

function createObstacles(){
  let num = Math.floor(Math.random()* (600 - 10) + 10)
  let yRandom = Math.floor(Math.random() * 700)
  let xRandom = Math.floor(Math.random() * 500)
  if (num == 12){
    let obstacles = new Obstacles(0,yRandom, 200,5);
    obstaclesArray.push(obstacles);
  }
}

//START THE GAME
function startGame() {
  let blueCar = new Car(200,480,100,200,carImg);
  keys(blueCar);
  blueCar.drawItself();
  obstaclesArray = [];

//SET INTERVAL
idInterval = setInterval(() =>{
  ctx.clearRect(0,0,500,700);
  drawRoad();
  blueCar.drawItself();
  obstaclesArray.forEach((obstacles, i)=> {
    obstacles.drawItself();
   
  })

  createObstacles();
},1000/200);
}
startGame();