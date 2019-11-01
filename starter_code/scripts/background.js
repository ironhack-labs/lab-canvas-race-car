class Background {
    constructor(game) {
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.y = 0;
        this.velocityY = -4; 
  }
    paintRoad() {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, 20, 600);
        this.context.fillRect(380, 0, 20, 600);
        this.context.fillStyle = 'grey';
        this.context.fillRect(20, 0, 10, 600);
        this.context.fillRect(370, 0, 10, 600);
        this.context.fillStyle = 'white';
        this.context.fillRect(30, 0, 10, 600);
        this.context.fillRect(360, 0, 10, 600);
        this.context.fillStyle = 'grey';
        this.context.fillRect(40, 0, 320, 600);
      // 150-170
      for (let i = -620; i < HEIGHT; i += 50) {
        this.context.strokeStyle = 'white';
        this.context.lineWidth = 5;
        this.context.beginPath();
        this.context.moveTo(197, i-this.y);
        this.context.lineTo(197, i+30-this.y);
        this.context.stroke();
        this.context.closePath();
      }
    }
    update() {
    this.y += this.velocityY;
    if (this.y < -this.height) this.y = 0;
  } 
}