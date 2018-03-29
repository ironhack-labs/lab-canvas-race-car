function Canvas(id) {
    var canvas = document.getElementById(id);
    this.w = 500;
    this.h = 600;
    this.ctx = canvas.getContext("2d");
    this.coche = new Image();
    this.coche.src = "images/car.png";
    console.log(this.coche.width,this.coche.height);
    this.coche.onload = function() {
      this.drawImage();
    }.bind(this);
  }