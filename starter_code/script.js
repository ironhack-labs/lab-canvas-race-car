window.onload = function () {
  document.getElementById ('start-button').onclick = function () {
    startGame ();
  };

  function startGame () {
    game.drawBackground ();
    game.drawDashedLine ();
    game.drawCar ();
    game.addKeyboardControls ();
  }

  function Game () {
    this.canvas = document.getElementById ('canvasExp');
    this.ctx = this.canvas.getContext ('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.img = new Image ();
    this.img.src = 'images/car.png';
  }
  Game.prototype.drawBackground = function () {
    this.ctx.fillStyle = '#008000';
    this.ctx.fillRect (0, 0, this.width, this.height);

    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect (50, 0, 700, 1200);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect (60, 0, 10, 1200);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect (730, 0, 10, 1200);
  };

  Game.prototype.drawDashedLine = function () {
    this.ctx.beginPath ();
    this.ctx.lineWidth = "10";
    this.ctx.strokeStyle = "#ffffff"; 
    this.ctx.setLineDash ([40, 40]);
    this.ctx.moveTo (400, 0);
    this.ctx.lineTo (400, 1200);
    this.ctx.stroke ();
  };
  
  Game.prototype.drawCar = function () {
    this.ctx.drawImage (this.img, 315, 800, 180, 350);
  };

  var car = {
    x: 0,
    moveLeft: function () {
      this.x--;

      if (this.x > 0) {
        this.x = 0;
      }
    },
    moveRigth: function () {
      this.x++;

      if (this.x > 10) {
        this.x = 10;
      }
    },
  };

  Game.prototype.addKeyboardControls = function () {
    document.onkeydown = function (KeyboardEvent) {
      switch (KeyboardEvent.keyCode) {
        case 37:
          car.moveLeft;
          break;
        case 39:
          car.moveRigth;
          break;
      }
    };
  };

  var game = new Game ();
};
