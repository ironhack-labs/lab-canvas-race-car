window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  document.onkeydown = function(event){
    if(event.keyCode == 37 || event.keyCode == 39){
      if(event.keyCode == 37) app.posCar -=10;
      else app.posCar += 10;
      app.createObstacles();
    } 
  }
  var intervalIDObs;


  function startGame() {
    app.drawBackground();
    app.moveDiscLines();
    intervalIDObs = setInterval(function(){
      var obs = app.createObstacles();
      app.arrObs.push(obs)
    },3500);
  }
  
  var app = new App();
  
  function App(){
    this.canvas = document.querySelector("#canvasExp");
    this.ctx = this.canvas.getContext('2d');
    this.w = 700;
    this.h = 900;
    this.posCar = 340;
    this.arrObs = [];
  }
  App.prototype.drawBackground = function(){
    this.ctx.fillStyle = "rgb(0,200,0)";
    this.ctx.fillRect(0, 0, 700, 900);

    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(80, 0, 540, 900);

    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(100, 0, 10, 900);
    this.ctx.fillRect(590, 0, 10, 900);
    

  }
  App.prototype.moveDiscLines = function(){
    var yPos = -600;
    var that = this;
    var intervalID = setInterval(function () {
        that.ctx.clearRect(0, 0, that.w, that.h);
        that.drawBackground();
        that.ctx.beginPath();
        that.ctx.strokeStyle = "#fff";
        that.ctx.lineWidth = 5;
        that.ctx.setLineDash([30, 30]);
        that.ctx.moveTo(345, yPos);
        that.ctx.lineTo(345, that.h);
        that.ctx.stroke();
        that.ctx.closePath();
        if(yPos == 0){
            yPos = -600;
        }
        yPos+=4;
        app.drawCar(intervalID);
        app.drawObstacle(that.arrObs);
    }, 30)
  }
  App.prototype.drawCar = function(interval){
    var img = document.querySelector("#car");
    var posXCar = this.posCar;
    var posYCar = this.h-200;
    this.ctx.drawImage(img, posXCar, posYCar, 70, 100);
    checkColision();
    function checkColision(){
      app.arrObs.forEach(function(element){
        if(((posXCar < element.posX + element.width)&&(posXCar+70 >element.posX))&& posYCar == element.posY){
          clearInterval(interval);
          clearInterval(intervalIDObs);
          alert("Vaya guarrazo te has metido fitipaldi");
        }
      });
    }
  }
  App.prototype.drawObstacle = function(arrObstacles){
    for(var i = 0; i < arrObstacles.length; i++){
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(arrObstacles[i].posX,arrObstacles[i].posY,arrObstacles[i].width,arrObstacles[i].heigth)
      arrObstacles[i].posY +=4
    }
  }
  App.prototype.createObstacles = function(){
    var obstacle = new Obstacles();
    return obstacle;
  }
  function Obstacles(){
    this.width = parseInt((Math.random()*100) + 150);
    this.heigth = 20;
    this.posX = parseInt((Math.random()*600));
    this.posY = 0;
  }
};
