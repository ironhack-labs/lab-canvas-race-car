function CarCanvas() {
  this.ctx = document.getElementById("myCanvas").getContext("2d");
}

CarCanvas.prototype._CreateRoad = function () {
  var c = this.ctx;
  // Green for the sides.
  c.fillStyle = "#2C821A";
  c.fillRect(0,0,25,600);
  c.fillRect(325,0,25,600);
  // Grey for the road.
  c.fillStyle = "#606060";
  c.fillRect(25,0,300,600);
  // White for the side lines.
  c.fillStyle = "#FFFFFF";
  c.fillRect(35,0,15,600);
  c.fillRect(300,0,15,600);
  // Paint the middle lines consecutively until height is filled.
  var count= 10;
  for (var i = 0; i < 12; i++) {
    c.fillRect(170,count,10,30);
    count+= 50;
  }
};


CarCanvas.prototype._UpdateCanvas = function(car, obstacle, x, c) {
      this.ctx.clearRect(0,0,350,600);
      this._CreateRoad();
      car._AddCar(this);
      obstacle._CreateObstacles(this);
      this._AddPoints(c);
      this._CheckIfCrash(car, obstacle, x);
};

CarCanvas.prototype._CheckIfCrash = function(car, obstacle, x) {
    var loose = false;
    if((car.x < (obstacle.x1+150)) && (car.y < (obstacle.y1+30))) {
      clearInterval(x);
      alert("You crashed!!");
      loose = true;
    }
    if((car.x+40 > obstacle.x2 && car.x < obstacle.x2+150)  && (car.y < (obstacle.y2+30))) {
      clearInterval(x);
      alert("You crashed!!");
      loose = true;
    }
    if((car.x+40 > obstacle.x2 && car.x < obstacle.x3+150)  && (car.y < (obstacle.y3+30))) {
      clearInterval(x);
      alert("You crashed!!");
      loose = true;
    }
    if (loose) this._GameOver();
};

CarCanvas.prototype._AddPoints = function(c) {
  this.ctx.font="30px Georgia";
  this.ctx.fillStyle = "#000000";
  this.ctx.fillText("Points: "+c,190,50);
};

CarCanvas.prototype._GameOver = function() {
  this.ctx.fillStyle = "#000000";
  this.ctx.fillRect(50, 200, 250, 180);
  this.ctx.fillStyle = "#FF0000";
  this.ctx.font="45px Georgia";
  this.ctx.fillText("Game Over!",60,300);
};
