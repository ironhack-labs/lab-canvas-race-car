window.onload = function() {
  document.getElementById("start-button").onclick = function() {

      //var ctx = document.getElementById("myCanvas")
      var canvas = new Canvas("myCanvas");



      setInterval(function() {
          canvas.startGame();
      }.bind(this), 1000 / 60);

  };

  function Canvas(id) {

      this.canvas = document.getElementById(id);
      this.ctx = this.canvas.getContext("2d");
      this.fps = 60;
      this.x = 0;
      this.y = 0;
      this.width = 350;
      this.height = 700;
      this.offset = 0;

  }

  Canvas.prototype.drawBoard = function() {

      this.rect(this.width, this.height, this.x, this.y, "rgb(109,109,109)") //gris fondo
      this.rect(this.width - 330, this.height, this.x, this.y, "rgb(8, 112, 0)"); //verde izdqui
      this.rect(this.width - 340, this.height, this.x + 30, this.y, "rgb(255,255,255)"); //blanco izquierd
      this.rect(this.width - 330, this.height, this.width - 20, this.y, "rgb(8, 112, 0)"); //verde derecha
      this.rect(this.width - 340, this.height, this.width - 40, this.y, "rgb(255,255,255") //blanco derecha
      this.obstacles();


  }

  Canvas.prototype.rect = function(width, height, x, y, color) {
      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, width, height);
      this.ctx.closePath();

  }

  Canvas.prototype.cleanAndDraw = function() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawBoard();
      this.ctx.setLineDash([15, 30]);
      this.ctx.lineDashOffset -= 1;
      this.ctx.beginPath()
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 5;
      this.ctx.moveTo(this.width / 2, 0);
      this.ctx.lineTo(this.width / 2, this.height);
      this.ctx.stroke();
      this.ctx.closePath();
      this.loadCar();
      // this.ctx.strokeRect(this.width / 2, 50, 100, 500);


  }

  Canvas.prototype.startGame = function() {
      this.cleanAndDraw();

  }

  Canvas.prototype.loadCar = function() {
      var img = new Image();
      img.src = "images/car.png";
      this.ctx.drawImage(img, this.width / 2.3, this.height / 1.2, 50, 100);


  }

  Canvas.prototype.obstacles = function(){
    this.rect(100, 25, this.x, this.y, "rgb(117,0,0)");
      
  }

}