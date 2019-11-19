window.onload = function(){
  // canvas
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext("2d");
  let speed = 1;

  // global
  let raceCarImage = './images/car.png';
  let frames = 0;
  let obstacles=[];
  let score = 0;
  //class declaration

  class Line{
    constructor(x,y,w,h,color){
      this.x = x ? x : 0;
      this.y = y ? y : 0;
      this.w = w ? w : 50;
      this.h = h ? h : 50;
      this.color = color ? color : 'green';
      
    }
    draw(){
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
      ctx.fill();
      ctx.closePath();
    }
    drawDottedLine(){
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
      ctx.fill();
      ctx.closePath();
    }
  }
 
  class raceCar{
    constructor(obstacle){
      this.x= 250;
      this.y = 700;
      this.width = 50;
      this.height = 50;
      this.image = new Image ();
      this.image.src= raceCarImage;
      this.image.onload = this.draw.bind(this);
      this.obstacle = obstacle;
    }
    draw(){
       ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    
    checkCollition(obstacle){
      if(obstacle.y >= this.y -30 ){
        gameOver();
        return;
      }
    }
    
   
  }
  class Obstacle{
    constructor(x,y,w,h,color) {
      this.x = x ? x : 60;
      this.y = y ? y : 0;
      this.w = w ? w : 200;
      this.h = h ? h : 60;
      this.color = color ? color:'red';
    }
    draw(){
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
      ctx.fill();
      ctx.closePath();
    }

  }
  //Instances
 
  let car = new raceCar();

  
  let yardRight = new Line(0 , 0 , 30 , canvas.height);
  let yardLeft = new Line (470 , 0,30,canvas.height);
  let lineLeft = new Line (30,0, 15, canvas.height, 'gray');
  let lineRight = new Line(455,0,15,canvas.height,'gray');
  let speedway = new Line(55, 0, 390, canvas.height, 'gray');
  let centraLine = new Line(250, 0, 10, canvas.height, '#fff');

  //main functions  
  function start(){
   
    interval = setInterval(update, 1000 / 60);
  }
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frames++;
    drawBoard();
    generateObstacles();
    drawObstacles();
    printScore();
    score+=.1;
    obstacles.forEach(obstacle =>{
      obstacle.y+=speed;
      car.checkCollition(obstacle);
      obstacle.draw();
    });

  }

  //Aux functions
  function drawBoard(){
    yardRight.draw();
    yardLeft.draw();
    lineLeft.draw();
    lineRight.draw();
    speedway.draw();
    centraLine.draw();
    car.draw();
  }
  function printScore (){
    ctx.font = "40px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: "+ Math.round(score), 200, 800);
  }
  function generateObstacles(){
    let times = [200];
    let i = Math.floor(Math.random() * times.length);
    if (frames % times[i] !== 0) return;

      let randomPosX= Math.floor(Math.random()*250+50);
      let randomWith = Math.floor(Math.random() * 150+80);
      
        let newObstacle = new Obstacle (randomPosX,0,randomWith,40,"#870007");
        obstacles.push (newObstacle);
  }

  function drawObstacles(){
    obstacles.forEach(obstacle =>{
      obstacle.draw();
    });
  }
  function gameOver() {
    clearInterval(interval);
    ctx.font = "60px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", 100, 200);
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("FINAL SCORE: "+ Math.round(score), 150, 400);
  }
  
  //listeners
  addEventListener("keydown" , e =>{
    switch(e.which) {
      case 37:
          car.x -=20;
          break;
      case 39:
          car.x +=20;
          break;
      default:
          break;
    }
  });

  document.getElementById("start-button").onclick = function() {
    start();
  };
};