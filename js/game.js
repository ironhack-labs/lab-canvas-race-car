/** @type {HTMLCanvasElement} */

class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.car = car;
    this.intervalId = null;
    this.frames = 0;
    this.roadblock = [];
  }

  start() {
    this.intervalId = setInterval(this.update, 1000 / 60);
  }
  //Update needs to be an arrow function because "this" needs to refer to the class and not the update method
  update = () => {
    //Game logic here
    this.frames++;
    this.clear();
    this.car.newPos();
    this.car.draw();
    this.updateRoadBlocks();
    this.checkGameOver();
  };

  stop() {
    clearInterval(this.intervalId);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  updateRoadBlocks() {
    for (let i = 0; i < this.roadblock.length; i++) {
      this.roadblock[i].y += 2;
      this.roadblock[i].draw();
    }
    //the if statement is to create the roadblocks
    //which we only want to do every 120 frames (2 seconds)
    if (this.frames % 60 === 0) {
      let randomSize = Math.floor(Math.random() * 150 - 10) + 10; //roadblock will appear in random sizes
      let randomX =
        Math.floor(Math.random() * this.width - randomSize) + randomSize;
      this.roadblock.push(
        new Enemy(randomX, 0, randomSize, 100, "red", this.ctx)
      );
    }
    //Easy mode, medium mode, hard mode
  }

  score() {}

  checkGameOver() {
    const crashed = this.roadblock.some((enemy) => {
      return this.car.crashWith(enemy);
    });

    if (crashed) {
      this.stop();

      function drawSquare(x, y, w, h, color) {
        //before drawing the square, update the color
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
      }
      drawSquare(0, 0, canvas.width, canvas.height, "black");
      ctx.font = "40px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
      ctx.fillText("Your final Score", canvas.width / 2, 500);
    }
  }
}
