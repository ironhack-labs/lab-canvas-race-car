
window.onload = function() {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function Canvas (elem){
    this.canvas = document.getElementById(elem);
    this.ctx = this.canvas.getContext("2d");
    this.width = 700;
    this.height = 900;

   
  }
  Canvas.prototype.drawRect = function (x, y, width, height) {
    this.ctx.fillRect(x, y, width, height)

  }
  Canvas.prototype.draw = function () {
    this.ctx.fillStyle = "green"
    this.drawRect(0, 0, 700, 900);
    this.ctx.fillStyle = "grey"
    this.drawRect(70, 0, 560, 900);
    this.ctx.fillStyle = "white"
    this.drawRect(90, 0, 20, 900);
    this.drawRect(590, 0, 20, 900);
    var posX = 345;
    for (var posY = 0 ; posY <= 810 ; posY += 90 ){
      this.drawRect(posX, posY, 20, 50);
    }
    this.drawCar();
    

  }
  Canvas.prototype.drawCar = function(){
    this.img = new Image();
    this.img.src = "images/car.png";
    this.img.onload = function () {
      this.ctx.drawImage(this.img, 200, 700, 60, 120);
    }.bind(this)


  }
  var canvas = new Canvas('my-canvas');
  $('#my-canvas').hide();

  function startGame() {
  $('#my-canvas').show(); 
  canvas.draw(); 
  
  }

  
};




