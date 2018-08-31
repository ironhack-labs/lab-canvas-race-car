
window.onload = function() {
  // Object Obstacle
  function Obstacle(id,x,y,w){
    this.id=id;
    this.x=x||25;
    this.y=y||0
    this.width=w||25;
    this.height=25
    this.speed=4;
  }
  Obstacle.prototype.move=function(){
    console.log("move obstacle")
    this.y=this.y+this.speed
    if(this.y > canvas.height){
      console.log(window)
      deleteObstacle(this.id)
      // clearInterval(intervalId)
      console.log(this)
    }
    if(this.y > canvas.height-car.height-this.height-5){
      console.log(car.y,this.y)
      if(car.x < this.x + this.width && car.x + car.width > this.x){
        console.log("colision")
        clearInterval(intervalId) 
      }
    }
  }
  Obstacle.prototype.draw=function(){
    console.log("dibujando",this.x,this.y,this.width)
    ctx.fillStyle="black";  
    ctx.fillRect(this.x,this.y,this.width,this.height)
  }
  //Object Car
  function Car(){
    var self=this ;
    this.carImage = new Image();
    this.carImage.src="./images/car.png";
    this.x=canvas.width/2-25/2;
    console.log(canvas.width,canvas.height)
    this.y=canvas.height-55;
    this.width=25;
    this.height=50;
    this.speed=5;
    this.carImage.onload=function(){
      ctx.drawImage(self.carImage, self.x, self.y, self.width, self.height)
    }
  }
  Car.prototype.draw=function(){
    ctx.drawImage(this.carImage, this.x, this.y, this.width, this.height)
  }
  Car.prototype.moveLeft=function(){
    if(this.x>0){
      this.x=this.x-this.speed
    }
  }
  Car.prototype.moveRight=function(){
    if(this.x < canvas.width - this.width){

      this.x=this.x+this.speed
    }
  }
  var game=document.getElementById('game-board');
  var canvas=document.createElement('canvas');
  var ctx=canvas.getContext("2d");
  var GREY = "#808080";
  var GREEN = "#3a8200";
  var ARROW_LEFT=37;
  var ARROW_RIGHT=39;
  var obstacles=[];
  var intervalId=0
  var car;
  var lastObstacle=new Date();
  var time=0;
  var points=0;
  var started=false;
  canvas.width=400;
  canvas.height=500;
  game.appendChild(canvas)
  car=new Car();
  drawRoad();
  // startObstacles();
  document.getElementById("start-button").onclick = function() {
    if(started==false){
      started=true;
      startGame();
      document.getElementById("start-button").innerHTML="StopGame"
      document.getElementById("start-button").style="background-color:#870007"
    }else{
      started=false;
      stopGame();
      drawRoad();
      document.getElementById("start-button").innerHTML="StartGame"
      document.getElementById("start-button").style="background-color:#2b8700"
    }
  };
  function startGame() {
    time=1 ;
    drawRoad()
    car.draw()
    randomObstacle()
    drawObstacles()
    intervalId=setInterval(drawGame,1000/30)
    document.onkeydown=function(event){
      switch (event.keyCode) {
        case ARROW_LEFT:
          car.moveLeft()
          break;
          case ARROW_RIGHT:
          car.moveRight()
          break;
        default:{
        }
          break;
      }
    }
     // Set source path
    // ctx.strokeRect(35,0,canvas.width-25*2,canvas.height)
    // ctx.fillStyle=white;
  }
  function stopGame(){
    clearInterval(intervalId)
    points=0;
    obstacles=[]
  }
  function drawGame(){
    drawRoad();
    randomObstacle();
    drawObstacles();
    car.draw();
    drawPoints();
  }
  function drawRoad(){
    // ctx.restore();
    ctx.setLineDash([])
    ctx.fillStyle=GREEN;
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle=GREY;
    ctx.fillRect(25,0,canvas.width-25*2,canvas.height)
    ctx.strokeStyle="white";
    ctx.lineWidth=10;
    ctx.beginPath()
    ctx.moveTo(40,0)
    ctx.lineTo(40,canvas.height)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(canvas.width-40,0)
    ctx.lineTo(canvas.width-40,canvas.height)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(canvas.width/2,25)
    ctx.lineTo(canvas.width/2,canvas.height)
    ctx.setLineDash([20,10]);
    ctx.lineWidth=5;
    ctx.stroke()
  }
  function drawObstacles(){
    console.log(obstacles.length)
    obstacles.forEach(function(obstacle){
      obstacle.move();
      obstacle.draw();
    })
  }
  function createObstacle(x,y,w){
    console.log("create")
    obstacles.push(new Obstacle(obstacles.length,x,y,w))
  }
  function deleteObstacle(id){
    points+=obstacles[id].width
    delete obstacles[id]
  }
  function randomObstacle(){
    var now=new Date()
    var ramdomX,randomW;
    if(now.getTime() - lastObstacle.getTime() > 2000 ){
      console.log(obstacles.length)
      console.log(now.getTime()-lastObstacle.getTime())
      randomX=Math.floor(Math.random()*(canvas.width-25)+25)
      randomW=Math.floor(Math.random()*200+25)
      createObstacle(randomX,0,randomW)  
      lastObstacle=now
    }
  }
  function drawPoints(){
    ctx.font="30px Verdana"
    ctx.fillText("Points: "+points,canvas.width/2-25,25)
  }
};
