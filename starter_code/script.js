// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//    startGame();
//   };
//   document.getElementById(
//     "game-board"
//   ).innerHTML = `<canvas height='500px' width='300px'><canvas>`;



function startGame() {
  game = new Game()
  updateCanvas()
}

var canvas = document.getElementById('race-canvas');
var ctx = canvas.getContext('2d');
let w= 350;
let h=500;




class Game {
  constructor() {
    this.car = new Car();
  }
}

class Car {
  constructor() {
    this.width = 50;
    this.height = 70;
    this.x = 150;
    this.y = 400;
    this.speedX = 0;
    this.speedY = 0;
    this.imgsrc = 'images/car.png';
    this.ctx = document.getElementById('race-canvas').getContext('2d');
  }

  drawCar() {
    let image = new Image();
    image.src = this.imgsrc;
    this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
    
  }
}

 let allObstacles = [
 {width:'50px', height:'10px', x:20, y:2},
  {width:'50px', height:'10px', x:20, y:13},
  {width:'50px', height:'10px', x:20, y:19},
 ]
 function drawObstacle(){
   for(i=0;i<=y;i++)
   return i;
 }
class Obstacle {
  constructor() {
    this.width = 50;
    this.height = 70;
    this.color = red;
    this.x = 30;
    this.y = 100;
    this.speedX = 0;
    this.speedY = 0;
    this.ctx = document.getElementById('race-canvas').getContext('2d');
  


  }
}
/*function Obstacles() {
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    var x = myGameArea.canvas.width;
    var minHeight = 20;
    var maxHeight = 200;
    var height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    var minGap = 50;
    var maxGap = 200;
    var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(10, height, "red", x, 0));
    myObstacles.push(
      new Component(10, x - height - gap, "red", x, height + gap)
    );
  }
}
  var myObstacles = [];

var myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 120
}*/




    document.onkeydown = function(e){
      console.log("====", e)
      switch(e.keyCode){
        case 37: game.car.x-=5; console.log("moving left"); break;
        case 38: game.car.y-=5; console.log("moving up"); break;
        case 39: game.car.x+=5; console.log("moving right"); break;
        case 40: game.car.y+=5; console.log("moving down"); break;
      }
      updateCanvas();
    } 


function updateCanvas(){
  ctx.clearRect(0,0,w,h)
  game.car.drawCar()
  window.requestAnimationFrame(updateCanvas)
  
}


/*function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
}*/

function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  obstacles.update();
}



game = new Game()
updateCanvas()
updateObstacles()



