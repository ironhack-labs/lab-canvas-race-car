const canvas = document.getElementById('game-board')
const ctx = canvas.getContext('2d');
let height = canvas.height;
let width = canvas.width;


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
  //posição
    
  }
};

//pista
function road(){
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0 , 400 , height)
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0 , 35 , height);
  ctx.fillRect(width-35, 0 , 35 , height);
  ctx.fillStyle = "white";
  ctx.fillRect(40, 0 , 5 , height)
  ctx.fillRect(width-45, 0 , 5 , height);
  ctx.strokeStyle= "white";
  ctx.lineWidth=4;
  ctx.beginPath();
  ctx.setLineDash([20,15]);
  ctx.moveTo(197,0);
  ctx.lineTo(197,height);
  ctx.stroke();
}

//car
let car = {
  x:180,
  y:460,
  moveLeft: function() {
    this.x-=40  
  },
  moveRight:function() {
    this.x+=40  
  },
}

function drawCar(Car){
  let img = new Image();
  img.onload = function (){
    ctx.drawImage(img, car.x, car.y, 40,70);
  }
  img.src = 'images/car.png';
}

//obstacle

let obst = []
//
//function ObstaclesP(x){
//  this.x=x
//  this.y=0
//}
//
//function shuf(){
//  return 30 + Math.floor(Math.random() * 100);
//}
//setInterval(function(){
//  const myObstacle = new ObstacleP (shuf());
//  obst.push(myObstacle);
//}, 1500)
//
//
//for(let i = 0; i < obstacles.length; i++){
//  obstacles[i].y += 1;
//  ctx.rect(obstacles[i].x, obstacles[i].y, 20, 20);
//  ctx.fillStyle = "red";
//  ctx.fill();
//}

//função draw
function draw(){
  ctx.clearRect(0,0,width,height)
  road();
  drawCar();
}

draw();

//botões
document.onkeydown = function(e) {
  switch (e.keyCode){
    case 37:
      car.x -= 40;
      draw();
    break;
    case 39:
      car.x += 40;
      draw();
    break;
  }
}


function Grid(size=10){
  let width = canvas.width;
  let height = canvas.height;
  for (let x = 0; x <= width; x += size) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
  }  
  for (let y = 0; y <= height; y += size) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
  }
  ctx.lineWidth=3;
  ctx.setLineDash([0,0]);
  ctx.strokeStyle = "black";
  ctx.stroke();
  return "yay!"
}
//Grid(20);