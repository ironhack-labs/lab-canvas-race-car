// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//    startGame();
//   };
//   document.getElementById(
//     "game-board"
//   ).innerHTML = `<canvas height='500px' width='300px'><canvas>`;
//var myObstacle=[]


// function startGame() {
//   game = new Game()
//   updateCanvas()
//   //myObstacle = new component(10, 200, "red", 300, 120); 
// }

class Car {
  constructor() {
    this.width = 50;
    this.height = 70;
    this.x = 150;
    this.y = 400;
    this.imgsrc = 'images/car.png';
    this.ctx = document.getElementById('race-canvas').getContext('2d');
  }

  drawCar() {
    let image = new Image();
    image.src = this.imgsrc;
    this.ctx.drawImage(image, this.x, this.y, this.width, this.height);
    
  }
}
class Game {
  constructor() {
    this.car = new Car();
  }
}

let game = new Game()
let allObstacles = [] 



var canvas = document.getElementById('race-canvas');
var ctx = canvas.getContext('2d');
let w= 350;
let h=500;





class Obstacle {
  constructor(y) {
    this.width = Math.floor(Math.random()*100);
    this.height = 20;
    this.x = Math.floor(Math.random()*200);
    this.y = y;
    this.color = "#"+((1<<24)*Math.random()|0).toString(16)
  }
}

//  let allObstacles = [
//  {width:'50px', height:'10px', x:20, y:2},
//   {width:'50px', height:'10px', x:20, y:13},
//   {width:'50px', height:'10px', x:20, y:19},
//  ]


function createObstacles(){
  for(let i=0; i<100; i++){
    allObstacles.push(  new Obstacle(i*-100)  )
  }
}
 
function updateAndDrawObstacles(){
  for(let i=0; i<100; i++){
    allObstacles[i].y++;
    let obs = allObstacles[i];

    ctx.fillStyle = obs.color
    ctx.fillRect(obs.x, obs.y, obs.width, obs.height)
  }   
}

    document.onkeydown = function(e){
      console.log("====", e)
      switch(e.keyCode){
        case 37: game.car.x-=5; console.log("moving left"); break;
        case 38: game.car.y-=5; console.log("moving up"); break;
        case 39: game.car.x+=5; console.log("moving right"); break;
        case 40: game.car.y+=5; console.log("moving down"); break;
      }
      //updateCanvas();
    } 
  

function updateCanvas(){ //This keeps erasing and redrawing everything.
  console.log('update')
  ctx.clearRect(0,0,w,h)
  game.car.drawCar()
  updateAndDrawObstacles()
  window.requestAnimationFrame(updateCanvas)
  
}


createObstacles()
updateCanvas()




