function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 400;
    this.canvas.height = 600;

    this.road = new Road();

    
  }
  
 
  Game.prototype.setGame = function() {
    this.clear();
    if (this.isReady()) {
      this.road.drawRoad();
      this.road.drawLines();
      
    }
    window.requestAnimationFrame(this.draw.bind(this));
  }