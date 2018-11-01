window.onload = function () {

  

  document.getElementById("start-button").onclick = function () {
    
    startGame();
  };

  function startGame() {

   canvas.startRendering(); 
   canvas.setListeners();

  }

  function Canvas(id, color) {
    this.canvas = document.getElementById('canv');
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.counter = 0;
    this.x = 0;
    this.y = 0;
    this.grassWidth = 50;
    this.sideLineWidth = 16;
    this.carPosition= 175;
    this.carSpeed=10;
    // this.width = document.querySelector('#canv').getAttribute("width");
    // this.height
  }

  Canvas.prototype.draw = function () {
    //Asphalt
    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(0, 0, 400, 622);
    //Grass
    this.ctx.fillStyle = "#008000";
    this.ctx.fillRect(0, 0, this.grassWidth, 622);
    this.ctx.fillStyle = "#008000";
    this.ctx.fillRect(400 - this.grassWidth, 0, this.grassWidth, 622);
    //Sidelines
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(this.grassWidth + this.sideLineWidth, 0, this.sideLineWidth, 622);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(400 - this.grassWidth - 2 * this.sideLineWidth, 0, this.sideLineWidth, 622);
    this.drawDashedLine();
    this.drawCar();
  }

  Canvas.prototype.drawDashedLine = function () {
    //MidDashedLine
    this.ctx.strokeStyle = "white";
    this.ctx.setLineDash([35, 25]);
    this.ctx.lineDashOffset = 65;
    this.ctx.beginPath();
    this.ctx.moveTo(200, 0);
    this.ctx.lineTo(200, 622);
    this.ctx.lineWidth = 10;
    this.ctx.stroke();
  }

  Canvas.prototype.drawCar = function () {
    var carImg = new Image();
    carImg.src = "./images/car.png";
    carImg.onload = function() {
      this.ctx.drawImage(carImg, this.carPosition, 500, 50, 100);

    }.bind(this)
  }

  Canvas.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  Canvas.prototype.move = function(){
    // this.carPosition += 1;
  }

  Canvas.prototype.startRendering = function() {
  
    setInterval(function() {
      this.clear();
      this.move();
      this.draw();
      
      // this.counter++;
      
      // if(this.counter % 110 == 0) {
      //   //this.generateCircles();
      // }
    }.bind(this), 1000/this.fps);
  }

  Canvas.prototype.setListeners = function() {
    document.onkeydown = function(e) {
      e.preventDefault();
      var KEY_UP = 38;
      var KEY_RIGHT = 39;
      var KEY_DOWN = 40;
      var KEY_LEFT = 37;
      switch(e.keyCode) {
        case KEY_LEFT: 
          this.carPosition -= this.carSpeed;
          break; 
        // case KEY_UP: 
        //   this.y -= this.vy;
        //   break; 
        case KEY_RIGHT: 
          this.carPosition += this.carSpeed;
          break; 
        // case KEY_DOWN: 
        //   this.y += this.vy;
        //   break; 
      }
    }.bind(this);
  }

  var canvas = new Canvas;
  canvas.draw()
}

