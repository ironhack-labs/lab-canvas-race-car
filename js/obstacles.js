class Obstacles {
    constructor(game) {
      this.game = game;
      this.context = game.context;
      this.y = -20;
      this.x = Math.floor(Math.random() * this.game.width);
      if (this.x < 20) this.x += 20;
      if (this.x > this.game.width - 20) this.x -= 30;
      this.width = Math.floor(Math.random() * 200) + 70;
      this.height = 20;
      this.speed = 3;
    }
  
    draw() {
      this.context.fillStyle = "black";
      this.context.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
      this.y += this.speed;
    }
  }