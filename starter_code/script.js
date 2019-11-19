window.onload = function(){
  // canvas
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext("2d");
  // global
  let raceCarImage = './images/car.png';
  //clases declaration
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
      //this.image.onload = ()=> ctx.drawImage(this.image, 230, 480, 50, 100);
    }
    draw(){
       //abajo
       //if (this.y < canvas.height - this.height) this.y += 2;
       ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    
  }
  //instances
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
   
    yardRight.draw();
    yardLeft.draw();
    lineLeft.draw();
    lineRight.draw();
    speedway.draw();
    centraLine.draw();
    car.draw();
  }
  
  function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    board.draw();
  
  }
  
    document.getElementById("start-button").onclick = function() {
      start();
    };
  };