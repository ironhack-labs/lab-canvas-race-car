document.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowLeft":
        cCar.moveLeft();
        break;
      case "ArrowRight":
        cCar.moveRight();
        break;
    }
  });

  const obstacles = [];

  function updateObstacles() {
    gameLogic.frames++;
    console.log(gameLogic.frames);
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].y += 1;
      obstacles[i].update();
    }
  
    if (gameLogic.frames % 120 === 0) {
      let x = cWidth;
      let minWidth = cWidth / 10;
      let maxWidth = cWidth / 2;
  
      let width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
  
      obstacles.push(new Obstacle(width, 30, "red", width, 0));
    }
  }
  
  function checkGameOver() {
    const crashed = obstacles.some(function (obstacle) {
      return cCar.crashWith(obstacle);
    });
    if (crashed) {
      gameLogic.stop();
    }
  }