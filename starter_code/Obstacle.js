class Obstacle {
    constructor (positionY) {
      this.positionX = 0;
      this.positionY = positionY;
      this.height = 30;
      this.width = 0;
            
      this.setRandomPosition();
    }
  
    setRandomPosition () {
      this.positionX = Math.floor(Math.random() * 400);
      this.width = 100 + Math.floor(Math.random() * 100);
    }
  
    runLogic () {
      this.positionY += 1.5;
    }
  
    paint () {
      canvasContext.fillStyle = 'black';
      canvasContext.fillRect(this.positionX, this.positionY, this.width, this.height);
    }
  }