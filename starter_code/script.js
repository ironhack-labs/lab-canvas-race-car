window.onload = function() {
  var player = "";
  var ctx = document.getElementById("game").getContext("2d");
  var counter = 0;
  var obstacles = [];
  var interval = "";

  document.getElementById("start-button").onclick = function() {
    stop();
    ctx.clearRect(0, 0, 400, 900);
    player = new Car(169, 760, 62, 127);
    counter = 0;
    obstacles = [];
    drawStreet();
    player.update();
    interval = setInterval(updateCanvas, 15);
    console.log("Start InvertvalID: ", interval);
  };

  // document.onkeyup = function(e) {
  //   stop();
  // };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38:
        moveUp();
        break;
      case 40:
        moveDown();
        break;
      case 37:
        moveLeft();
        break;
      case 39:
        moveRight();
        break;
      case 66:
        console.log("Stoppping IntervalID: ", interval);
        stop();
        break;
    }
  };

  function stop() {
    clearInterval(interval);
    console.log("stop:", interval);
    ctx.font = "40px bold";
    ctx.fillStyle = "red";
    ctx.fillText("Gameover!", 120, 400);
    player.speedY = 0;
  }

  // document.onkeyup = function(e) {
  //   player.speedX = 0;
  //   player.speedY = 0;
  // };

  function Component(x, y, width, height, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedY = 2;
    this.update = function() {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.move = function() {
      this.y += this.speedY;
      var xwidth = this.x + this.width;
      if (
        this.y <= player.y &&
        this.y >= player.y - 10 &&
        ((this.x < player.x || this.x < player.x + player.width) &&
          player.x <= xwidth)
      ) {
        console.log("Check " + this.x + " < " + player.x + " < " + xwidth);
        console.log(this);
        stop();
        console.log("Game over!");
      }
    };
  }

  function Car(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "images/car.png";
    this.update = function() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }
  function moveUp() {
    if (player.y - 7 > 0) {
      player.y -= 7;
    }
  }

  function moveDown() {
    if (player.y + 7 < 760) {
      player.y += 7;
    }
  }
  function moveLeft() {
    if (player.x - 7 > 0) {
      player.x -= 7;
    }
  }

  function moveRight() {
    if (player.x + 7 < 335) {
      player.x += 7;
    }
  }
  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  function updateCanvas() {
    if (counter % 250 === 0) {
      var ran1 = randomNumber(300);
      obstacles.push(new Component(0, 0, ran1, 10, "black"));
      var ran = randomNumber(300 - ran1);
      obstacles.push(new Component(400 - ran, 0, ran, 10, "black"));
    }
    ctx.clearRect(0, 0, 400, 900);
    drawStreet();
    drawObstacles();
    player.update();
    updateScore();
    counter++;
  }

  function updateScore() {
    points = Math.floor(counter / 6);
    ctx.font = "20px bold";
    ctx.fillStyle = "blue";
    ctx.fillText("Score: " + points, 240, 30);
  }

  function drawObstacles() {
    for (var obst of obstacles) {
      obst.move();
      obst.update();
    }
    obstacles = obstacles.splice(obstacles.length - 30, 30);
  }

  function drawStreet() {
    //Street
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 40, 900);
    ctx.fillStyle = "grey";
    ctx.fillRect(40, 0, 10, 900);
    ctx.fillStyle = "white";
    ctx.fillRect(50, 0, 10, 900);
    ctx.fillStyle = "grey";
    ctx.fillRect(60, 0, 280, 900);
    ctx.fillStyle = "white";
    ctx.fillRect(340, 0, 10, 900);
    ctx.fillStyle = "grey";
    ctx.fillRect(350, 0, 10, 900);
    ctx.fillStyle = "green";
    ctx.fillRect(360, 0, 40, 900);
    //dotted line
    ctx.beginPath();
    ctx.setLineDash([20]);
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 900);
    ctx.lineWidth = 7;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
  }
};
