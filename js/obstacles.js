class Obstacle {
	constructor(game) {
		this.context = game.context;
		this.width = 20;
		this.height = 50;
		this.x = Math.floor(Math.random() * game.width);
		this.y = game.height + this.height;
		this.speed = 1;
	}
	draw () {
		console.log(obstacle)
		this.context.save();
		this.context.fillStyle = "red";
		this.context.fillRect(this.x, this.y, this.width, this.height);
		this.context.restore();
	}
	update() {
		this.y += this.speed;
	}
	left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}