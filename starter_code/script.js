window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function Canvas() {
    this.canvas = document.querySelector("#my-canvas");
    this.ctx = this.canvas.getContext('2d');
    this.x = 30;
    this.y = 0;
    this.width = 240;
    this.height = 450;
    this.offset = 0;
    this.counter = 0;
    this.obstacles = [];
    this.car = new Car(this.canvas);
  }

  var score = document.querySelector("#score").innerText

  Canvas.prototype.moveAll = function () {
    setInterval(function () {
      this.clearAll();
      this.checkCollision();
      this.obstacles.forEach(function (obstacle) {
        obstacle.move();
      })
      this.drawAll();


      this.counter++
      document.querySelector("#score").innerText = this.counter
      
      if (this.counter % 100 === 0) {
        this.obstacles.push(new Obstacle(this.canvas));
      }
    }.bind(this), 1000 / this.car.fps)
  }

  Canvas.prototype.drawAll = function () {
    this.drawRoad();
    this.drawDashed();
    this.drawLines();
    this.obstacles.forEach(function (obstacle) {
      obstacle.draw();
    })
    this.car.draw(this.ctx);
  }

  Canvas.prototype.drawRoad = function () {
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  Canvas.prototype.drawLines = function () {
    this.ctx.setLineDash([0, 0])
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 10, this.y);
    this.ctx.lineTo(this.x + 10, this.height);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(this.width + 20, this.y);
    this.ctx.lineTo(this.width + 20, this.height);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  Canvas.prototype.drawDashed = function () {
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.setLineDash([6, 10]);
    this.ctx.moveTo(this.canvas.width / 2, this.y - 20);
    this.ctx.lineTo(this.canvas.width / 2, this.height + 100);
    this.ctx.lineDashOffset = -this.offset;
    this.offset++;
    if (this.offset === 100) {
      this.offset = 0;
    }
    this.ctx.stroke();
    this.ctx.closePath();

  }

  function Car(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 30;
    this.width = 30;
    this.height= 22;
    this.fps = 60;
    this.img = new Image();
    this.img.src = "./images/car.png";
    this.setListeners();
  }

  Car.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.x - 15, this.y, this.width, this.height);
  }

  Car.prototype.setListeners = function () {
    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37:
          this.x -= 5;
          break;

        case 39:
          this.x += 5;
          break;
      }
    }.bind(this);
  }

  Canvas.prototype.checkCollision = function () {
    this.obstacles.forEach(function (obstacle) {
      if (this.car.x + this.car.width >= obstacle.x &&
        obstacle.x + obstacle.width >= this.car.x &&
        this.car.y + this.car.height >= obstacle.y &&
        obstacle.height + obstacle.y >= this.car.y) {
        location.reload()
      }
    }.bind(this))
    if (this.car.x <= 50) {
      this.car.x = 50;
    } else if (this.car.x >= 250) {
      this.car.x = 250;
    } else {
      return true;
    }
  }
  Canvas.prototype.clearAll = function () {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  function Obstacle(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = getRndInteger(50, 150);
    this.y = 0;
    this.width = getRndInteger(50, 100);
    this.height = 5;
  }

  Obstacle.prototype.draw = function () {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  Obstacle.prototype.move = function () {
    this.y++;
  }


  var canvas = new Canvas();

  //var car = new Car(canvas.canvas);

  function startGame() {
    canvas.drawAll();
    canvas.moveAll();


  };

}