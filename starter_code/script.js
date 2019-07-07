//window.onload = ()=>{
  document.getElementById("start-button").onclick = function() {

let gameBoard = {
    canvas : document.createElement("canvas"),
    start: function(){
      this.canvas.width = 700;
      this.canvas.height = 500;
      this.context = this.canvas.getContext("2d");
      document.body.append(this.canvas);
      let board = document.querySelector("#game-board");
      board.append(this.canvas);
      this.frames = 78;
      this.interval = setInterval(updateGameBoard,20);
    },
    background:function(){
      this.context.fillStyle = "green";
      this.context.fillRect(0,0,700,500);
      this.context.fillStyle = "gray";
      this.context.fillRect(60,0,580,500);
      this.context.fillStyle = "white";
      this.context.fillRect(80,0,20,this.canvas.height)
      this.context.fillRect(600,0,20,this.canvas.height)
    },
    clear:function(){
      this.context.clearRect(0,0,this.canvas.width, this.canvas.height) 
    }
}

class Car {
  constructor(x,y,width,height,source){
    this.image = new Image();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.source = source;
    this.dx = 0;
  }
  draw(){
    this.image.src =this.source;
    gameBoard.context.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
  newPos(){
    if((this.dx > 0 && this.x < 560) || (this.dx < 0 && this.x >= 100))
     this.x += this.dx;  
     else
     this.dx = 0; 
  }

}
let player = new Car(230,300,40,80,'/images/car.png');
gameBoard.start();

window.onkeydown=(e)=>{  
  switch(e.keyCode){
    case 37:
      player.dx = -4; 
    break;
    case 39:
     player.dx = 4;
    break;
  }
}
window.onkeyup = ()=>{
  player.dx = 0;
}
  

 class Component{
     constructor(x,y,width,height,color){
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.color = color; 
     }
     update(){
       gameBoard.context.fillStyle = this.color;
       gameBoard.context.fillRect(this.x, this.y, this.width, this.height);
     }
     newPos(){
       this.y += 1;
     }
  }

  let middleLinesArray = [];
   
  function movelines (){
    middleLinesArray.forEach((middleLine)=>{
      middleLine.update();
      middleLine.y += 5;
    });
    
    if(gameBoard.frames % 20 == 0){
      middleLinesArray.push(new Component(345,-20,8,30,'white'))
    }
  }

  const minXpositionLeft = 450;
  const maxXpositionLeft = 600;
  const minXpositionRight = 100;
  const maxXpositionRight = 250;
  let minWidth = 70;
  let maxWidth = 200;
    
  let obstaclesArray = [];
   function obstacles (){
    obstaclesArray.forEach((obstacle)=>{
      obstacle.update();
      obstacle.y += 5;
    });
    if(gameBoard.frames % 70 == 0){
  
  
     if(obstaclesArray.length % 2 == 0 ){
      let width = Math.random() * maxWidth + minWidth;
      let xPosition = Math.random() * (maxXpositionRight-minXpositionRight) + minXpositionRight;
      obstaclesArray.push(new Component(xPosition ,-20,width,10,'red'))
    }else{
      let width = Math.random() * maxWidth + minWidth;
      let xPosition = Math.random() * (maxXpositionLeft-minXpositionLeft) + minXpositionLeft;
      obstaclesArray.push(new Component(xPosition-width,-20,width,10,'blue'))}
    }
 }
  
  function updateGameBoard(){
  gameBoard.clear();
  gameBoard.background();
  movelines() ; 
  player.newPos();
   obstacles ();
  player.draw();
  gameBoard.frames += 1;
  }
  
 };

//};
