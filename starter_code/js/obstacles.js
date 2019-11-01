class Obstacles {
  constructor(game) {
    this.game = game;
    this.obstaclesArray = [];
  }

  generateObstacle () {
    // generateRandomWidth with min width 2 & max width of 5
    // i.e., Number between 0 & 3, + 2
    let widthSqs = Math.floor(Math.random() * 4) + 2;
    let obstacleX = Math.floor(Math.random() * (this.game.COLS - widthSqs));
    
    if (this.obstaclesArray.length === 0) {
      this.obstaclesArray.push(JSON.parse(`{"xSqs" : ${obstacleX}, "ySqs" : -2, "widthSqs": ${widthSqs}}`));
    } else if (this.obstaclesArray.length < 4) {
      let obstacleY = this.obstaclesArray[this.obstaclesArray.length-1].ySqs - 6;
      this.obstaclesArray.push(JSON.parse(`{"xSqs" : ${obstacleX}, "ySqs" : ${obstacleY}, "widthSqs": ${widthSqs}}`));
    }
  }
  
  paintObstacles () {
    let ctx = this.game.ctx;

    for (let curObstacle of this.obstaclesArray) {
      let x = this.game.GRID_X + this.game.GRID_SQUARE * curObstacle.xSqs;
      let y = curObstacle.ySqs * this.game.GRID_SQUARE;
      let obstaclePxX = curObstacle.widthSqs * this.game.GRID_SQUARE;
      let obstaclePxY = this.game.GRID_SQUARE;
      
      ctx.fillStyle = '#870007';
      ctx.fillRect(x, y, obstaclePxX, obstaclePxY);
    }
  }

  moveObstacle() {
    for (let obstacle of this.obstaclesArray) {
      if (obstacle.ySqs < 20) {
        obstacle.ySqs += 1;
      } else {
        this.obstaclesArray.shift();
        this.game.previousScore = this.game.score;
        this.game.score += 1;
      }
    }
  }

}