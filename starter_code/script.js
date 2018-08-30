window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    function Car() {
      this.x = 120;
      this.y = 370;
      this.img = new Image();
      this.img.src = "images/car.png";
    }

    Car.prototype.drawCar = function(ctx) {
      ctx.drawImage(this.img, this.x, this.y, 60, 120);
    };

    Car.prototype.goRight = function() {
      this.x += 25;
    };

    Car.prototype.goLeft = function() {
      this.x -= 25;
    };

    var car = new Car();

    document.onkeydown = function(e) {
      if (e.keyCode == 39 && car.x < 270) {
        car.goRight();
      } else if (e.keyCode == 37 && car.x > 30) {
        car.goLeft();
      }
    };

    car.drawCar(ctx);

    boundFunction = function() {
      car.drawCar(ctx);
    };

    function updateCanvas() {
      ctx.clearRect(0, 0, 300, 500);
      ctx.fillStyle = "#428200";
      ctx.fillRect(0, 0, 20, 500);
      ctx.fillStyle = "#808080";
      ctx.fillRect(20, 0, 5, 500);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(25, 0, 5, 500);
      ctx.fillStyle = "#808080";
      ctx.fillRect(30, 0, 240, 500);
      ctx.strokeStyle = "#ffffff";
      ctx.fillStyle = "#ffffff";
      ctx.setLineDash([15, 10]);
      ctx.moveTo(150, 0);
      ctx.lineTo(150, 500);
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.fillRect(270, 0, 5, 500);
      ctx.fillStyle = "#808080";
      ctx.fillRect(275, 0, 5, 500);
      ctx.fillStyle = "#428200";
      ctx.fillRect(280, 0, 20, 500);

      boundFunction(ctx);
      window.requestAnimationFrame(updateCanvas);
    }
    window.requestAnimationFrame(updateCanvas);
  }
};
