//SETTING UP
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

//GLOBAL VARS
const GAME_WIDTH = 500;
const GAME_HEIGHT= 700;
let frames=0;
let score=0;
const wallArray=[];
let requestId= undefined;

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
      //doesnt need height

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

    collision(item){
      return (
        this.position.x < item.width &&
        this.position.x + this.width > item.x &&
        this.position.y < item.y + item.height &&
        this.position.y + this.height > item.y
      )
      }
      gameOver(){
        ctx.font= "70px arial";
        ctx.fillText("GAME OVER", 50,150)
        ctx.fillStyle = "black"
        ctx.fillText(`SCORE: ${score}`, 50,230)
    }
  }

  class Obstacle {
    constructor(x,y,width,height){
      this.width= width;
      this.height= height;
      this.x = x,
      this.y = y;
      }

    draw(){
      this.y += 5;
      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.rect(this.x, this.y, this.width, this.height)
      ctx.fill();
    }
  }

//ENTITIES
const bg = new Background()
const car = new User (GAME_WIDTH, GAME_HEIGHT)

//GAME ENGINE
//window.onload = () => {
//  document.getElementById('start-button').onclick = () => {
//    startGame();
//  };
//};
document.getElementById("start-button").onclick = function(){
  if(!requestId){
    startGame();
  }
}


  //obstacles
function generateWalls(){
  //limit
  if (frames % 170 ===0 || frames % 60 ===0){
   let width = Math.floor(Math.random() * (500-10)) + 10;
    let x = Math.floor(Math.random() * (500-10)) + 10;
    if ( width < 250 && x >= 65 < 300){
      const wall = new Obstacle (x, 0, width,50);
      wallArray.push(wall);
    }
  }
}

function drawWalls(){
  wallArray.forEach((wall,index_wall)=>{
    wall.draw();

    if(car.collision(wall)){
      requestId = undefined;
      car.gameOver();
    }
  })
}
  //TIME LOOP
function update(){
  frames++;
  ctx.clearRect(0,0,500,700)
  bg.draw(ctx);
  car.draw(ctx);
  generateWalls();
  drawWalls();
  scoring();

  if(requestId){
    requestAnimationFrame(update)
  }
}

function startGame() {
  requestId = requestAnimationFrame(update)
}

function scoring(){
  wallArray.forEach((wall, index_wall)=>{
    if(wall.y === canvas.height ){
    score +=1;}
      })
      ctx.font= "30px arial";
      ctx.fillStyle = "white"
      ctx.fillText(`SCORE: ${score}`, 70,50)
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