function Car(canvas, ctx, url) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.image = new Image();
  this.url = url;
  var RIGHT_KEY = 39;
  var LEFT_KEY = 37;
  var SPACE = 32;
  this.x = 210.5;

  // this.audio = new Audio('sound.mp3');
  this.image.src = this.url;

  this.image.onload = function () {
    this.width = this.image.width * 0.5;
    this.height = this.image.height * 0.5;
    this.y = this.canvas.height - this.height;
  }.bind(this)


  document.onkeydown = function (event) {
    var d = 10;

    switch (event.keyCode) {
      case RIGHT_KEY:
        this.x += d;
        break;
      case LEFT_KEY:
        this.x -= d;
        break;
      // case SPACE:
      //   console.log("da");
      //   this.audio.play();
      //   break;

    }

  }.bind(this);
};


Car.prototype.drawImage = function () {

  this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.x, this.canvas.height - this.height, this.width, this.height);

}



