function startGame() {
    gameFrames = 0;
    obstacles = [];
    gameArea = new Background();
    playerCar = new Car();
    isGameOver = false;
    updateCanvas();
  }
  
  function checkCollision(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }
  

function getScore(){
        
}


function gameOver(Score) {
  ctx.fillStyle = "yellow";
  ctx.font = "bold 48px serif";
  ctx.fillText("Game Over", canvas.width / 2-100, canvas.height / 2);
  ctx.fillText(Score, canvas.width / 2 - 98, canvas.height / 4);
}



  function updateCanvas() {
    if (isGameOver) {
      return;
    }
  
    gameFrames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameArea.update();
    gameArea.draw();
    playerCar.draw();
  
    if (gameFrames % obstacleInterval === 0) {
      const width = 200;
      const leftBoundary = 45;
      const rightBoundary = 460;
      const maxObstacleX = rightBoundary - width;
      const x = Math.floor(
        Math.random() * (maxObstacleX - leftBoundary) + leftBoundary
      );
      const obstacle = new Obstacle(x, width);
      obstacles.push(obstacle);
      console.log(obstacles)
    }
  
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].update();
      obstacles[i].draw();
      if (obstacles[i].y > canvas.height) {
        obstacles.splice(i, 1);
        i--;
      }
    }
  
    for (const obstacle of obstacles) {
      if (checkCollision(playerCar, obstacle)) {
        isGameOver = true;
        console.log(obstacles.length)
        let Score = `Score ${obstacles.length  }`
        gameOver(Score);
        break;
      }
    }
    requestAnimationFrame(updateCanvas);
  }
  


  document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowLeft") {
      playerCar.moveLeft();
    }
    if (e.key == "ArrowRight") {
      playerCar.moveRight();
    }
  });