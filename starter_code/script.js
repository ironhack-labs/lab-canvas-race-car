
var keyLeft = 37;
var keyRight = 39;


function Canvas(id) {

  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.x = 0;
  this.y = 0;
  this.xCar = 175;
  this.yCar = 520;
  this.xObs = 180;
  this.yObs = 20;
  this.obsWidth = 180;
  this.obsHeight = 20;
  this.fps = 60;
  this.vx = 20;
  this.dashLineWidth = 6;
  this.offSet = 0;
  // this.dashLine = [];
  this.dashLineHeight = 20;
  this.grassWidth = 25;
  this.roadWidth = 350;
  this.whiteLineWidth = 10;
  this.height = 650;

  // this.fps = 60;

}


Canvas.prototype.setListeners = function () {

  document.onkeydown = function (e) {
    e.preventDefault();
    switch (e.keyCode) {
      case keyLeft:
        if (this.xCar > 20) {
          this.xCar -= this.vx;
        }
        break;
      case keyRight:
        if (this.xCar < 335) {
          this.xCar += this.vx;
        }
        break;
    }

  }.bind(this);
}

Canvas.prototype.obstacleMove = function(){

  if(this.yObs > 665){ // si el obstaculo sale de pantalla
    this.yObs = -20;
    this.obsWidth = (Math.random()*210)+70;
    this.xObs = Math.random()* 180;
  }else{
    this.yObs += 1;
  }  
}

Canvas.prototype.obstacleDraw = function(){

  this.ctx.fillStyle = '#880007';
  this.ctx.fillRect(this.xObs, this.yObs, this.obsWidth, this.obsHeight);  // césped izq

}

Canvas.prototype.clear = function(){

  this.ctx.clearRect(0, 0, 400, this.height);
}

Canvas.prototype.draw = function () {

  this.ctx.beginPath();
  this.ctx.fillStyle = '#008101';
  this.ctx.fillRect(this.x, this.y, this.grassWidth, this.height);  // césped izq
  this.ctx.fillStyle = '#008101';
  this.ctx.fillRect(this.x + 375, this.y, this.grassWidth, this.height);  // césped dch
  this.ctx.fillStyle = '#808080';
  this.ctx.fillRect(this.x + 25, this.y, this.roadWidth, this.height);  // calzada
  this.ctx.fillStyle = '#FFFDFF';
  this.ctx.fillRect(this.x + 35, this.y, this.whiteLineWidth, this.height);  // linea blc izq
  this.ctx.fillStyle = '#FFFDFF';
  this.ctx.fillRect(this.x + 355, this.y, this.whiteLineWidth, this.height);  // linea blc dch
  // this.ctx.fillStyle = '#FFFDFF';
  this.dashLineDraw();

  this.carImg();
  this.obstacleDraw();
  this.ctx.closePath();
}

Canvas.prototype.collision = function(){
  if( this.xCar+50 >= this.xObs && this.xObs+this.obsWidth >= this.xCar &&
    this.yCar+100 >= this.yObs && this.yObs+this.obsHeight >= this.yCar){
    return true;

  }

}
Canvas.prototype.carImg = function () {
  var img = new Image()
  img.src = './images/car.png';
  img.onload = function () { // para que la referencie dentro de un metódo y pasarle su contexto
    this.ctx.drawImage(img, this.xCar, this.yCar, 50, 100);
  }.bind(this);
}

Canvas.prototype.dashLineDraw = function () { 
    this.ctx.strokeStyle = '#FFFDFF';
    this.ctx.lineWidth=5;    
    this.ctx.setLineDash([20, 40]);   
    this.ctx.lineDashOffset = this.offset;  
    this.ctx.moveTo(200, 0);
    this.ctx.lineTo(200, 650);
    this.ctx.stroke();
}

window.onload = function () {

  document.getElementById("start-button").onclick = function () {
   startGame();
   window.reload(); 
  };

  var road = new Canvas("road");
  road.draw();
  function startGame() {
    var counter=0;

   var id = setInterval(function () {
      // road.clear()
      road.draw();
      // road.obstacleDraw();
      road.offset = -counter% 60; 
      road.setListeners();
      road.obstacleMove();
      if(road.collision()){
        clearInterval(id);
        alert ("Game Over");
      }
      counter++;

    }, 1000 / this.fps);


  }


};


