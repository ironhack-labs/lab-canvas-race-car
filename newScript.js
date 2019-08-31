window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    document.getElementById("start-button").disabled = true;
  };

  function startGame() {
    var myObstacles = [];

    var myGameArea = {
      canvas: document.createElement("canvas"),
      frames: 0,
      start() {
        this.canvas.width = 350;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[4]);
        this.interval = setInterval(updateGameArea, 20);
      },
      clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
      stop() {
        clearInterval(this.interval);
      },
      drawRoad() {
        this.context.fillStyle = "green";
        this.context.fillRect(0, 0, 30, this.canvas.height);
        this.context.fillRect(
          this.canvas.width - 30,
          0,
          30,
          this.canvas.height
        );

        this.context.fillStyle = "grey";
        this.context.fillRect(
          30,
          0,
          this.canvas.width - 60,
          this.canvas.height
        );

        this.context.fillStyle = "white";
        this.context.fillRect(40, 0, 10, this.canvas.height);
        this.context.fillRect(
          this.canvas.width - 50,
          0,
          10,
          this.canvas.height
        );

        this.context.strokeStyle = "white";
        this.context.lineWidth = 5;
        this.context.setLineDash([20, 20]);

        this.context.beginPath();
        this.context.moveTo(this.canvas.width / 2, 0);
        this.context.lineTo(this.canvas.width / 2, this.canvas.height);
        this.context.stroke();
      },
      score() {
        var points = Math.floor(this.frames / 5);
        this.context.font = "18px sans-serif";
        this.context.fillStyle = "white";
        this.context.fillText("Score: " + points, 200, 50);
      }
    };

    const carImage =
      "../../../../code-projects/labs/week 2/lab-canvas-race-car/images/car-copy.png";

    class Component {
      constructor(width, height, color, x, y, img) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.img = img;
      }
      update() {
        var ctx = myGameArea.context;
        if (!this.img) {
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
        } else {
          let img = new Image();
          img.src = this.img;
          img.onload = () => {
            ctx.drawImage(img, this.x, this.y, 75, 125);
          };
        }
      }

      moveLeft() {
        this.x === 0 ? (this.x = 0) : (this.x -= 25);
      }
      moveRight() {
        this.x === myGameArea.canvas.width - this.width
          ? (this.x = myGameArea.canvas.width - this.width)
          : (this.x += 25);
      }
      left() {
        return this.x;
      }
      right() {
        return this.x + this.width;
      }
      top() {
        return this.y;
      }
      bot() {
        return this.y + this.height;
      }
      crashWith(obstcl) {
        return !(
          this.bot() < obstcl.top() ||
          this.top() > obstcl.bot() ||
          this.right() < obstcl.left() ||
          this.left() > obstcl.right()
        );
      }
    }

    let player = new Component(70, 120, "red", 175, 300, carImage);

    let updateGameArea = () => {
      myGameArea.clear();
      myGameArea.drawRoad();
      //   player.newPos();
      player.update();
      updateObstacles();
      checkGameOver();
      myGameArea.score();
    };

    myGameArea.start();

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          player.moveLeft();
          console.log("left", player);
          break;
        case 39:
          player.moveRight();
          console.log("right", player);
          break;
      }
    };

    let updateObstacles = () => {
      for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].y += 2;
        myObstacles[i].update();
      }
      myGameArea.frames += 1;
      if (myGameArea.frames % 150 === 0) {
        let y = myGameArea.canvas.height;
        let minWidth = 80;
        let maxWidth = 400;
        let width = Math.floor(
          Math.random() * (maxWidth - minWidth + 1) + minWidth
        );
        let minGap = 50;
        let maxGap = 300;
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new Component(100, width, "black", 0, y));
        myObstacles.push(
          new Component(
            200,
            50,
            "black",
            Math.random() * 350,
            Math.random() * -100
          )
        );
      }
    };

    let checkGameOver = () => {
      let crashed = myObstacles.some(function(obstacle) {
        return player.crashWith(obstacle);
      });
      if (crashed) {
        myGameArea.stop();
      }
    };
  }
};
