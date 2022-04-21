window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    gameLogic.start();
  };

  document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowLeft":
        position.moveLeft();
        break;
      case "ArrowRight":
        position.moveRight();
        break;
    }
  });

  canvas = document.getElementById("canvas");
  ctx = this.canvas.getContext("2d");
  const obstacles = [];

  function updateObstacles() {
    gameLogic.frames++;

    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].y += 1;
      obstacles[i].updateObs();
    }

    if (gameLogic.frames % 250 === 0) {
      let minX = 20;
      let maxX = 500;

      let x = Math.floor(Math.random() * (maxX - minX) + minX);

      let minBarSize = 100;
      let maxBarSize = 200;

      let barSize = Math.floor(
        Math.random() * (maxBarSize - minBarSize) + minBarSize
      );

      const result = x - barSize < 0 ? x : x - barSize;
      obstacles.push(new Component(barSize, 20, "red", result, 0));
    }
  }

  const position = new Component(0, 0, 0, 223, 0);
  function updateGameArea() {
    position.update();
    updateObstacles();
    gameLogic.score();
    checkGameOver();
  }

  const gameLogic = {
    frames: 0,
    start: function () {
      this.interval = setInterval(updateGameArea, 2);
    },
    clear: function () {
      ctx.clearRect(0, 0, cWidth, cHeight);
    },
    stop: function () {
      clearInterval(this.interval);
    },
    score: function () {
      const points = Math.floor(this.frames / 5);
      ctx.font = "36px serif";
      ctx.fillStyle = "black";
      ctx.fillText(`Score: ${points}`, 100, 50);
    },
    gameOver: function () {
      ctx.clearRect(0, 0, 500, 700);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 500, 700);
      ctx.fillStyle = "red";
      ctx.fillText(`Game Over! `, 160, 300);
      ctx.fillStyle = "white";
      ctx.fillText(`Total Score: ${Math.floor(this.frames / 5)}`, 130, 350);
    },
  };

  function checkGameOver() {
    const crashed = obstacles.some(function (obstacle) {
      return position.crashWith(obstacle);
    });

    if (crashed) {
      gameLogic.stop();
      gameLogic.gameOver();
    }
  }
  const cWidth = position.canvas.width;
};
