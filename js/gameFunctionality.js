function createScore() {
  if (gameStarted) {
    score = alternativeScore + level * 10;
    scoreText = `Score: ${score}`;
    startButton.innerHTML = `${scoreText}`;
    textSize(20);
    fill(255);
    text(`${scoreText}`, 80, height - 15);
    text(`Level ${level}`, width * 0.7, height - 15);
  }
}

function levelUp(x) {
  gameSpeed += x;
  movement += x;
  level += x;
}

function levelCheck() {
  if (gameStarted && frameCount % 750 === 0) {
    levelUp(1);
  }
}

function gameOverCheck() {
  if (gameover) {
    noLoop();
    textSize(75);
    fill(255, 225);
    textAlign(CENTER, CENTER);
    rect(5, 150, width - 10, height / 2, 20);

    fill(0);
    text("GAME OVER", 250, 300);
    text(`${scoreText}`, 250, 400);
    startButton.innerText = `Try Again?`;
  }
}
