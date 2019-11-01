// OBSTACLE CLASS

class Obstacle {
    constructor(game){
      this.game = game;
      this.positionX = 50;
      this.positionY = 0;
      this.size = 200;
    }
  
    drawObstacle(){
      const context = this.game.context;
      context.save();
      context.fillStyle = 'red';
      context.fillRect(this.positionX, this.positionY, this.size ,30);
      context.restore();
    }
  
    randomizeObstacle(){
      const randomNumber = Math.floor(Math.random()*300);
      const maximumSize = 400-randomNumber;
      this.positionX += randomNumber;
      this.size = Math.min(Math.max(Math.floor(Math.random()*maximumSize),100), 200);
    }
  
    updateObstacle(){
        this.positionY += this.game.steps;
    }
  
    createObstacle(){
      this.game.obstacles.push(this);
      //this.drawObstacle();
      //this.randomizeObstacle();
      // this.moveObstacle();
    }
  
  }