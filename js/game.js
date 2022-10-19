
class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.intervalId = null;
    this.obstacles = [];
    this.frames = 0;
  }

  start() {
    this.intervalId = setInterval(this.update, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  score() {
    const points = Math.floor(this.frames / 5);
    this.ctx.font = '22px monospace';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${points}`, 1000, 50);
  }

  update = () => {
    this.score();
    this.frames++;
    this.clear();
    this.player.newPos();
    this.player.draw();
    this.updateObstacles();
    this.checkGameOver();
  };

  stop() {
    clearInterval(this.intervalId);
  }

  checkGameOver() {
    const crashed = this.obstacles.some((obstacle) => {
      return this.player.crashWith(obstacle);
    });

    if (crashed) {
      this.stop();
    }
  }

  updateObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].x -= 1;
      this.obstacles[i].draw();
    }

    if (this.frames % 180 === 0) {
      let x = 1200;

      //calculate the height of the columns/obstacles
      let minHeight = 20;
      let maxHeight = 400;

      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

      //these variables control the size of the gap between obstacles
      let minGap = 75;
      let maxGap = 200;

      //this creates the gap
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

      //add the obstacles to the array
      //top obstacle
      this.obstacles.push(new Component(x, 0, 50, height, 'green', this.ctx));

      //bottom obstacle
      this.obstacles.push(new Component(x, height + gap, 50, x - height - gap, 'blue', this.ctx));
    }
  }
}class Component {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x % 1200, this.y % 800, this.w, this.h);
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
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