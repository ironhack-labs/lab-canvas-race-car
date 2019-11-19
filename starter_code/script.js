window.onload = function(){
  // canvas
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext("2d");

  // global
  let raceCarImage = './images/car.png';

  let frames = 0;
  let obstacles=[];

  //class declaration
  class Board{
    constructor(canvas){
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      
    }    
  }
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
    constructor(){
      this.x= 250;
      this.y = 700;
      this.width = 50;
      this.height = 50;
      this.image = new Image ();
      this.image.src= raceCarImage;
      this.image.onload = this.draw.bind(this);
    }
    draw(){
       ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
      //ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
      ctx.fill();
      ctx.closePath();
    }
    move(){

    }
  }
  //Instances
  let board = new Board(canvas);
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
    obstacles.forEach(obstacle =>{
      obstacle.y+=1;
      obstacle.draw();
    });
  }
  function drawBoard(){
    yardRight.draw();
    yardLeft.draw();
    lineLeft.draw();
    lineRight.draw();
    speedway.draw();
    centraLine.draw();
    car.draw();
  }
  function generateObstacles(){
    console.log("Inside obstacles");
    let times = [200];
    let i = Math.floor(Math.random() * times.length);
    if (frames % times[i] !== 0) return;

      let randomPosX= Math.floor(Math.random()*(260 - 60 +10)+60);
      let randomPosY= Math.floor(Math.random()* (800 - 50+20)+50);
      console.log(randomPosY);
      let randomWith = Math.floor(Math.random() * 150+50);
      
        let newObstacle = new Obstacle (randomPosX,randomPosY,randomWith,40,"red");
        obstacles.push (newObstacle);
  }
  function drawObstacles(){
    obstacles.forEach(obstacle =>{
      obstacle.draw();
    });
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