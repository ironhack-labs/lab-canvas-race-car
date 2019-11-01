class Game { 
    constructor ($canvas) { 
      this.canvas = $canvas; 
      this.context = $canvas.getContext('2d');
      this.player = new Player (170, 300)
      this.grid = new Grid ();
      this.newObstacle = [];
      this.speed = 1000;
      this.obstacleTimer = 0;
      this.obstacle = new Obstacle;  
     
} 

drawEverything (timestamp) { 
  this.context.clearRect(0, 0, 330, 550)
  this.grid.drawGrid();
  this.player.drawPlayer();
  for(let i = 0; i < this.newObstacle.length; i++){
    this.newObstacle[i].drawObstacle();
  }
  this.update(timestamp);
  window.requestAnimationFrame(timestamp => this.drawEverything(timestamp)); 
}

update(timestamp) { 
  if(this.obstacleTimer < timestamp - this.speed) { 
    this.newObstacle.push(new Obstacle(20, 50));
    this.obstacleTimer = timestamp;
    } for(let i = 0; i < this.newObstacle.length; i++){ 
      this.newObstacle[i].updateObstacle(); 
    }
  }


stopGame() { 
    if (this.player.col < this.obstacle.obsX + this.obstacle.width  && this.player.col + this.player.width  > this.obstacle.obsX &&
		this.player.row < this.obstacle.obsY + this.obstacle.height && this.player.row + this.player.height > this.obstacle.obsY) {
      clearInterval(this.timestamp);
}}

  
startGame() {
      this.player.carControls(); 
      this.drawEverything();
      this.stopGame();
      
    }
  } 