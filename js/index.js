//SETTING UP
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

//GLOBAL VARS
const GAME_WIDTH = 500;
const GAME_HEIGHT= 700;
let frames=0;
let score=0;

//CLASSES
class Background {
  constructor(){
    this.x=0;
    this.y=0;
    this.width= canvas.width;
    this.height= canvas.height;
  this.img= new Image();
  this.img.src = "images/road.png"
  }

  draw(ctx){
  //moves background trough postive y axis
  this.y ++
  if(this.y > +canvas.height){
    this.y=0
  }

  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  //background loop. "this.y - this.height"
  ctx.drawImage(this.img, this.x, this.y-this.height, this.width, this.height)
  }
  }
 
  class User {
    constructor(gameWidth, gameHeight){
      this.width= 100;
      this.height= 150;
      this.gameWidth=gameWidth;
 

      this.img= new Image();
      this.img.src= "images/car.png"

      this.maxSpeed = 10;
      this.speed = 0;

      //object position
      this.position = {
        x: gameWidth / 2 - this.width /2,
        y: gameHeight-this.height -10,
      }
    }

    draw(ctx){
      ctx.drawImage(this.img,this.position.x, this.position.y, this.width, this.height)
    }
    
    moveLeft(){
      this.speed = -this.maxSpeed;
      this.position.x += this.speed;
      //stop it from getting out
      if(this.position.x<0) this.position.x=0;
    }

    moveRight(){
      this.speed = this.maxSpeed;
      this.position.x += this.speed;
      //stop it from getting out
      if(this.position.x + this.width > this.gameWidth) this.position.x= this.gameWidth - this.width;
    }

    stop(){
      this.speed=this.maxSpeed;
    }
  }



//ENTITIES
const bg = new Background()
const car = new User (GAME_WIDTH, GAME_HEIGHT)

//GAME ENGINE
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};

  //TIME LOOP
function update(){
  frames++;
  ctx.clearRect(0,0,500,700)
  bg.draw(ctx);
  car.draw(ctx);
  

  if(requestId){
    requestAnimationFrame(update)
  }
}

function startGame() {
  requestId = requestAnimationFrame(update)

}

// KEYCODES
document.addEventListener('keydown', event =>{
  switch(event.keyCode){
    case 37:
    car.moveLeft();
      break;

    case 39:
      car.moveRight();
      break;
  }
});

document.addEventListener('keyup', event =>{
  switch(event.keyCode){
    case 37:
    if(car.speed<0)  
      car.stop();
      break;

    case 39:
    if(car.speed>0)
      car.stop();
      break;
  }
});