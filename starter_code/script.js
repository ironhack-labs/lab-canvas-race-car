window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var frames = 0;
    var obstacles = [];

    function component(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
      this.update = function() {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      };
      this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
      };
    }

    var car = {
      x: 250,
      moveLeft: function() {
        this.x -= 25;
      },
      moveRight: function() {
        this.x += 25;
      }
    };

    function drawRoad(x, y) {
      ctx.fillStyle = "grey";
      ctx.fillRect(x, y, 600, 900); //Draws a filled rectangle.

      ctx.fillStyle = "green";
      ctx.fillRect(x + 550, y, 50, 900); //Clears the specified rectangular area, making it fully transparent.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 60, y, 20, 900); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 520, y, 20, 900); //Draws a filled rectangle.

      ctx.fillStyle = "green";
      ctx.fillRect(x, y, 50, 900); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 25, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 100, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 175, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 250, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 325, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 400, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 475, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 550, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 625, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 700, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 775, 10, 40); //Draws a filled rectangle.

      ctx.fillStyle = "white";
      ctx.fillRect(x + 290, y + 850, 10, 40); //Draws a filled rectangle.
    }

    function updateCanvas() {
      ctx.clearRect(0, 0, 600, 900);
      drawRoad(0, 0);
      playerBounds();
      draw(car);
      frames += 1;
      createObstacles();
    }

    var rightBorder = canvas.width - 80;

    function playerBounds() {
      if (car.x < 0) {
        car.x = 0;
      }

      if (car.x > rightBorder) {
        car.x = rightBorder;
      }
    }

    function draw(car) {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, car.x, 750, 80, 150);
      };
      img.src = "images/car.png";
    }

    function createObstacles() {
      if (frames % 240 === 0) {
        y = 0;
        minWidth = 20;
        maxWidth = 200;
        width = Math.floor(
          Math.random() * (maxWidth - minWidth + 1) + minWidth
        );
        minGap = 80;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        obstacles.push(new component(width, 20, "red", 0, y));
        obstacles.push(
          new component(y + width + gap, 20, "red", width + gap, y)
        );
      }
      for (i = 0; i < obstacles.length; i += 1) {
        obstacles[i].y += 1;
        obstacles[i].update();
        console.log(obstacles[0]);
      }
    }

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          console.log("left", car);
          break;
        case 39:
          car.moveRight();
          console.log("right", car);
          break;
      }
      updateCanvas();
    };
    this.interval = setInterval(updateCanvas, 5);
  }
};
