
var keyLeft = 37;
var keyRight = 39;

function Canvas(id) {

  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.x = 0;
  this.y = 0;
  this.xCar = 175;
  this.fps = 60;
  this.vx = 20;
  this.dashLineWidth = 6;
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
  this.ctx.fillStyle = '#FFFDFF';
  this.dashLineDraw();

  this.carImg();

  this.ctx.closePath();


}
Canvas.prototype.carImg = function () {
  var img = new Image()
  img.src = './images/car.png';
  img.onload = function () { // para que la referencie dentro de un metódo y pasarle su contexto
    this.ctx.drawImage(img, this.xCar, 520, 50, 100);
  }.bind(this);
}

Canvas.prototype.dashLineDraw = function () {

  for (var i = 1; i <= 14; i++) {
    var inc = 30;
    this.ctx.fillRect(this.x + 197, (this.y - 15) + i * (inc + 20), this.dashLineWidth, this.dashLineHeight);
  }

}

window.onload = function () {




  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  var road = new Canvas("road");
  road.draw();
  function startGame() {
    setInterval(function () {
      road.draw();
      road.setListeners();

    }, 1000 / this.fps);


  }


};


