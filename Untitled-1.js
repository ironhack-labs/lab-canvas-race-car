window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      const game = new Background(ctx);
      game.start();
    }
  
  }
  
  class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = ctx.canvas.width;
        this.height = ctx.canvas.height;
        this.image = new Image();
        this.x = 0
        this.y = 0
    }
  
    start() {
  
    }
  
    drawRoad() {
      this.image.src = '../images/road.png';
      this.ctx = drawImage(this.image, this.x, this.y, this.width, this.height)
    }
  }