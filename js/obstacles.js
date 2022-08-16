function randomColor() {
  const r = Math.floor(random(255));
  const g = Math.floor(random(255));
  const b = Math.floor(random(255));
  return `rgb(${r},${g},${b})`;
}

function obstacleSpawn() {
  if (gameStarted && frameCount % round(250 / gameSpeed) === 0) {
    obstacles.push(new Obstacle());
  }

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].draw();
    obstacles[i].move();
    obstacles[i].collide();
  }
}

class Obstacle {
  constructor() {
    this.obstacleW = round(random(60, 150));
    this.obstacleH = round(random(20, 80));
    this.obstacleX = round(random(38, 462 - this.obstacleW));
    this.obstacleY = -50;
    this.color = randomColor();
    this.passedBy = false;
  }

  draw() {
    noStroke();
    fill(this.color);
    rect(this.obstacleX, this.obstacleY, this.obstacleW, this.obstacleH, 10);
  }

  move() {
    this.obstacleY += gameSpeed;
    if (!this.passedBy && this.obstacleY > 555) {
      this.passedBy = true;
      if (passedByCount > 0 && passedByCount % 10 === 0) alternativeScore += 10;
      alternativeScore++;
      passedByCount++;
    }
  }

  collide() {
    if (
      carX < this.obstacleX + this.obstacleW - 5 &&
      carX + carW > this.obstacleX &&
      carY < this.obstacleY + this.obstacleH &&
      carH + carY > this.obstacleY
    ) {
      gameover = true;
    }
  }
}
