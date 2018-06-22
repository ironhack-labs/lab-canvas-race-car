window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    function Car() {
      this.x = 220;
      this.y = 580;
      this.maxSpeed = 1;
      this.sX = 100;
      this.frames = 0;
      this.img = new Image();
      this.img.src = "images/car.png";
    }
    Car.prototype.moveLeft = function() {
      this.sX = -this.maxSpeed * 20;
    };
    Car.prototype.moveRight = function() {
      this.sX = this.maxSpeed * 20;
    };
    Car.prototype.move = function() {
      this.x += this.sX;
    };
    Car.prototype.draw = function(ctx) {
      imgScale = 640 / 480;
      ctx.drawImage(this.img, this.x, this.y, 45 * imgScale, 105);
    };

    Car.prototype.score = function() {
      var points = (Math.floor(this.frames/5))
      this.ctx.font = '18px serif';
      this.ctx.fillStyle = 'black';
      this.ctx.fillText('Score: '+points, 350, 50);
    }
    var car = new Car();
    function move() {
      car.move();
    }

    
    function draw(ctx) {
      car.draw(ctx);
    }
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          if (car.x > 50) {
            car.moveLeft();
            move();
          }
          break;
        case 39:
          if (car.x < 360) {
            car.moveRight();
            move();
            break;
          }
      }
    };

    var y2 = 0;
    var y3 = 0;
    var lastTime = 0;
    function updateCanvas(time) {
      var delta = time - lastTime;
      lastTime = time;

      var speedPxSec = 50;
      var speed = (speedPxSec / 1000) * delta; // in px per msec

      y2 = (y2 + speed * 1.4) % 700;
      y3 = (y3 + speed * 1) % 700;
      ctx.clearRect(0, 0, 450, 700);
      car.frames ++
      //car.score()
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 30, 700, "red");
      ctx.fillStyle = "gray";
      ctx.fillRect(30, 0, 390, 700);
      ctx.clearRect(40, 0, 10, 700);
      ctx.strokeStyle = "white";
      ctx.fillStyle = "white";
      ctx.setLineDash([30, 40]);
      //cth.lineDashOffset = -1++
      ctx.moveTo(225, 0);
      ctx.lineTo(225, 700);
      ctx.fillStyle = "red";
      ctx.fillRect(50, y2, 230, 40);
      ctx.fillRect(300, y3, 100, 40);
      ctx.stroke();
      ctx.clearRect(400, 0, 10, 700);
      ctx.fillStyle = "green";
      ctx.fillRect(420, 0, 30, 700);
      
      //move();

      draw(ctx);
      /*if((y2<=105) && (car.x<225)){
        alert("You lose!!")
        location.reload()
      }*/
      window.requestAnimationFrame(updateCanvas);
    }
    window.requestAnimationFrame(updateCanvas);
  }
};
