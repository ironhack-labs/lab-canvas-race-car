var car = new Car();

function Car (){
  this.source = "images/car.png";
  this.x = 265;
  this.y = 550;
  this.maxSpeed = 2;
  this.direction = 0;
  this.img = new Image();
  this.maxRigth = 480;
  this.maxLeft = 50;
}

Car.prototype.drawCar = function(){
  that=this;
  this.img.onload = function() {ctx.drawImage(that.img, that.x, that.y, 70, 100);}
  this.img.src = car.source;
};

Car.prototype.moveLeft = function() {
  this.direction = -this.maxSpeed;
  this.move();
}

Car.prototype.moveRight = function() {
  this.direction = this.maxSpeed;
  this.move();
}

Car.prototype.move =function() {
  if ((this.x>this.maxLeft) && (this.x<this.maxRigth)){
    this.x += this.direction;
  } else {
    this.x = 300;
    this.direction = 0;
  }
  this.draw();
}

Car.prototype.draw = function() { 
  ctx.drawImage(this.img, this.x, this.y, 70, 100);
  console.log(this.x, this.y);
}


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    car.drawCar();
  };
  function startGame() {
    //draw the path
    ctx = document.getElementById("game-canvas").getContext("2d");
    drawThePath();
    var count=1;
    function updateCanvas() {
      count++;
    ctx.clearRect(0,0,600,700);
    car.move(ctx);
    drawThePath(count);
    car.draw(ctx);
    window.requestAnimationFrame(updateCanvas);
  }

window.requestAnimationFrame(updateCanvas);  

}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      break;
    case 39:
      car.moveRight();
      break;
  }
}

function drawThePath(i){
  ctx.fillStyle = "rgb(0, 193, 49)";
  ctx.fillRect(0 ,0 ,600 , 700);
  ctx.fillStyle = "rgb(198, 198, 198)";
  ctx.fillRect(50 ,0 ,500 , 700);
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(70 ,0 ,20 , 700);
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(510 ,0 ,20 , 700);
  ctx.strokeStyle = "rgb(255, 255, 255)";
  ctx.setLineDash([40, 30]);
  ctx.lineDashOffset = -2*(car.direction**2*i);;
  ctx.lineWidth = 10;
  ctx.moveTo(300, 0);
  ctx.lineTo(300, 700);
  ctx.stroke();
}


}

