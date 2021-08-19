
window.onload = () => {
  document.getElementById('start-button').onclick = () => {

    startGame();



  };
}
 
const game = {

  canvas : document.getElementById("canvas"),

  positionCarX : 210,
  positionCarY : 500,
  arrObstacle : [],
 

  init: function (){
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 500;
    this.canvas.height = 700;
  },

  start: function(){
    this.interval = setInterval(updateGame , 20);
  },

  startObstacle: function(){
    this.intervalObj = setInterval(this.obstacleGenerator,4000);
  },

  clear: function (){
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
  },

  printBackground: function (){//PRINT BACKGROUND
    const ctx = this.context;
    ctx.fillStyle="green";
    ctx.fillRect(0, 0, 50, 700);
    ctx.fillRect(450, 0, 50, 700);
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(50, 0, 400, 700);
    ctx.fillStyle = "white";
    ctx.fillRect (60, 0, 15, 700);
    ctx.fillRect (425, 0, 15, 700);

    let lineY = 90;
    for (let i = 0; i<20; i++){
      ctx.strokeStyle = "white";
      ctx.moveTo(250, lineY*i+20);
      ctx.lineTo(250, lineY*i+60);
      ctx.lineWidth = 10;
      ctx.stroke();
     } 
    },//PRINT BACKGROUND

  
  printCar: function(){//PRINT CAR

    const ctx = this.context;
    const carImage = new Image();
    carImage.src = "../images/car.png"
    ctx.drawImage(carImage, game.positionCarX, game.positionCarY, 80, 160);
    

  },
  moveCarLeft: function(){

    if(game.positionCarX < 15){
      game.positionCarX == 10;
    }
    else{
      game.positionCarX -=10;
    }
  },
  moveCarRigth: function(){
    if (game.positionCarX > 400){
      game.positionCarX == 490;
    }
    else{
      game.positionCarX +=10;
    }
  },
  /*
  randomSize(){
    let rdSize = Math.floor(50+Math.random()*200);
  },
  randomPosition(){
    let rdPosition = Math.floor(Math.random()*500);
  },
*/
  obstacleGenerator: function(){

    let rdSize = Math.floor(50+Math.random()*200);
    let rdPosition = Math.floor(Math.random()*500);
  
    const canv = document.getElementById("canvas");
    const ctx = canv.getContext("2d");
    ctx.fillStyle="red";
    this.arrObstacle.push(ctx.fillRect(rdPosition, 0, rdSize, 30));
   
  }
  };//FIN CONST GAME

function startGame() {
  game.init();
  game.start();
  game.startObstacle();
  
  
  
  };

function updateGame() {
  game.clear();
  game.printBackground();
  game.printCar();
  game.obstacleGenerator();
  
  
};


document.onkeydown = function(e) {
  
  switch (e.keyCode) {
    case 37: game.moveCarLeft();  break;
    case 39: game.moveCarRigth(); break;
  }
}
