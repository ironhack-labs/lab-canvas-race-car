class Background {
    constructor(game) {
      this.game = game;
      this.context = game.context;
    }
  
    draw() {
      this.context.save();
      this.context.fillStyle = "green";
      this.context.fillRect(0, 0, this.game.width, this.game.height);
      this.context.restore();
      this.context.save();
      this.context.fillStyle = "gray";
      this.context.fillRect(60, 0, this.game.width - 120, this.game.height);
      this.context.restore();
      this.context.save();
      this.context.fillStyle = "white";
      this.context.fillRect(80, 0, 20, this.game.height);
      this.context.fillRect(this.game.width - 100, 0, 20, this.game.height);
      this.context.restore();
      this.context.save();
      this.context.fillStyle = "white";
      for (let i = 15; i < this.game.height; i += 60)
        this.context.fillRect(this.game.width / 2, i, 15, 40);
      this.context.restore();
    }
  }