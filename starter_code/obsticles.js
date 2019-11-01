class Obstacle {
    constructor(obsX, obsY) {
      this.width = 200; 
      this.height = 20;
      this.color = "red"; 
      this.obsX = obsX; 
      this.obsY = obsY;
      this.vy = 3;
    }

setRandomPosition(){ 
        this.obsX = Math.floor(Math.random()*300)
        this.obsY = Math.floor(Math.random()*200)
    }

drawObstacle () { 
    
        context.fillStyle = "red";
        context.fillRect(this.obsX, this.obsY, this.width, this.height);
      
  }

  updateObstacle () {
        this.obsY += this.vy;

      }
}