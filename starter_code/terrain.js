function Canvas(id) {
  var canvas = document.getElementById("canvas");
  canvas.width = 400;
  canvas.height = 550;
  this.ctx = canvas.getContext("2d");

  var img = new Image();
  img.src = "./images/car.png";

  img.onload = (function() {
    this.ctx.drawImage(img, 179, 425, 50, 100);
  }).bind(this);
}


Canvas.prototype.drawRect = function(x, y, width, height, color) {
  this.ctx.beginPath();
  this.ctx.rect(x, y, width, height);
  this.ctx.fillStyle = color;
  this.ctx.fill();
  this.ctx.closePath();
};



Canvas.prototype.draw = function() {
  this.drawRect(0, 0, 400, 700, "#088A08"); //verde
  this.drawRect(30, 0, 340, 700, "#848484"); // gris
  this.drawRect(37, 0, 325, 700, "#FFFFFF"); //blanco
  this.drawRect(45, 0, 309, 700, "#848484"); //gris

  /*lineas de la carretera*/
  this.drawRect(200, 0, 8, 30, "#FFFFFF");
  this.drawRect(200, 50, 8, 30, "#FFFFFF");
  this.drawRect(200, 110, 8, 30, "#FFFFFF");
  this.drawRect(200, 170, 8, 30, "#FFFFFF");
  this.drawRect(200, 230, 8, 30, "#FFFFFF");
  this.drawRect(200, 290, 8, 30, "#FFFFFF");
  this.drawRect(200, 350, 8, 30, "#FFFFFF");
  this.drawRect(200, 410, 8, 30, "#FFFFFF");
  this.drawRect(200, 470, 8, 30, "#FFFFFF");
  this.drawRect(200, 530, 8, 30, "#FFFFFF");

};

var canvas = new Canvas("canvas");
canvas.draw();
