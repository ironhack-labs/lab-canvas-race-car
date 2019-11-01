/*jshint esversion: 6 */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    console.log("entre");
    road();
    startGame();
    draw(car);
    boundries();
    generateObstacles() ;
    drawObstacles();

  };
  function startGame() {

  }//end of start game functgion
}; // window onload function

function road() {
  this.x = 0;
  this.y = 0;
  this.width = canvas.width;
  this.height = canvas.height;
  //luines
  ctx.fillStyle = '#008100';
  ctx.fillRect(0,0,40,canvas.height);
  ctx.fillRect(canvas.width - 40,0,40,canvas.height);
  //lienas verdes
  ctx.fillStyle = '#808080';
  ctx.fillRect(40,0,12,canvas.height);
  ctx.fillRect(canvas.width - 52,0,12,canvas.height);
  //centro gris
  ctx.fillRect(64,0,312,canvas.height);
  //dashed lines
  ctx.strokeStyle = '#fff';
  ctx.setLineDash([24, 22]);
  ctx.beginPath();
  ctx.lineWidth="6";
  ctx.moveTo(220,0);
  ctx.lineTo(220, 660);
  ctx.stroke();
}

let car = {
  x: 200,
  y: canvas.height - 120,
  moveLeft: function() {
    this.x -= 25;
  },
  moveRight: function() {
    this.x += 25;
  }
};

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      console.log('left', car);
      break;
    case 39:
      car.moveRight();
      console.log('right', car);
      break;
  }
  updateCanvas();
};

function draw(car){
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, car.x, car.y, 50,90);
  };
  img.src = "images/car.png";
}//end fuction draw

//GENERATE OBSTACLES
let obs = [];

class Obstacles{
  constructor(){
    this.width = Math.floor(Math.random()* 180);
    this.height = 10;
    this.x = Math.floor(Math.random()* canvas.width);
    this.y = 0;
    this.vy = 1;
  }
  drawObstacle(){
    ctx.fillStyle = 'red';
    if (this.width < 80){
      this.width = 80;
    }
    if (this.x > 340){
      this.x = 340;
    }
    else if (this.x < 40){
      this.x = 40;
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.y+= 4;
  }
}

function generateObstacles() {
  if (frames % 100 === 0){
    obstacle = new Obstacles();
    obs.push(obstacle);
    console.log(obstacle);
  }
}

function drawObstacles(){
  obs.forEach(obstacle => obs.drawObstacle());
}


// function generateObstacles(){
// if (frames % 20 === 0){
//   const randomPosition = (Math.floor(Math.random()* canvas.width) + 50)-40;
//   const obst = new Obs(randomPosition);
//   obstacle.push(obs);
// }
// }

function boundries(){
  //console.log(car.x)
  if(car.x <= 40){
    car.x = 40;
  } else if(car.x >= 350){
    car.x = 350;
  }
}

function updateCanvas() {
  clearCanvas();
  draw(car);
  road();
  boundries();
  generateObstacles() ;
  drawObstacles();

}



function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
