class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.roadWidth = this.width * 0.8;
    this.roadStripe = 0;
    this.height = this.canvas.height;
    this.context = this.canvas.getContext('2d');
    this.context.resetTransform();
    this.context.translate(this.width/2, 0); // Set the center of the road to 0 x position, for simplicity
    this.score = 0;
    this.callbacks = {
      left: () => this.car.turn('left'),
      right: () => this.car.turn('right')
    };
    this.controls = new Controls(this.callbacks);
    this.controls.setKeyBindings();
    this.obstacles = [];
    this.startTime = new Date();
    this.frameTimer = 0;
    this.reset();
  }


  start() {
    this.loop(0);
  }

  reset() {
    // reset score, reset timer, reset drawing
    this.car = new Car(this);
    //this.obstacles.push(new Obstacle(this, 100));
  }

  loop(timestamp) {
    let elapsed = (timestamp - this.frameTimer) / 1000; // Get time since last frame (in seconds)
    this.update(elapsed);
    this.frameTimer = timestamp;
    window.requestAnimationFrame(time => this.loop(time));
  }

  update(dt) {
    // Compute how far the car travelled left/right since last frame
    let dx = this.car.xVelocity * dt;
    let dy = this.car.yVelocity * dt;
    this.car.xPosition += dx;
    this.roadStripe += dy;
    this.draw(this.roadStripe);

    // Update position of obstacles
    for (let obstacle of this.obstacles) {
      obstacle.yPos += dy;
    }

    // Should any obstacles be cleared b/c they're off the screen?
    this.obstacles = this.obstacles.filter(obstacle => obstacle.yPos < (this.height+obstacle.height));

    // Compute if a new obstacle should be created
    let currTime = new Date()
    let totalTime = currTime - this.startTime; // This is in milliseconds;
    if (Math.floor((totalTime/1000) % 5) && this.obstacles.length === 0) {
      let obstWidth = Math.random()*this.width/2;
      let obstX = Math.random()*this.width - this.width/2;
      this.obstacles.push(new Obstacle(this, obstWidth, obstX));
    }
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  draw(dy) {
    this.drawRoad(dy);
    this.car.draw();
    for (let obstacle of this.obstacles) {
      obstacle.draw();
    }
  }

  drawRoad(y) {
    this.context.save();
    this.context.fillStyle = "green";
    this.context.fillRect(-this.width/2, 0, this.width, this.height);
    this.context.fillStyle = "gray";
    this.context.fillRect(-this.roadWidth/2, 0, this.roadWidth, this.height);
    this.context.strokeStyle = "white";
    this.context.lineWidth = 5;
    this.context.beginPath();
    this.context.moveTo(-this.roadWidth/2 * 0.9, 0);
    this.context.lineTo(-this.roadWidth/2 * 0.9, this.height);
    this.context.moveTo(this.roadWidth/2 * 0.9, 0);
    this.context.lineTo(this.roadWidth/2 * 0.9, this.height);
    this.context.stroke();
    this.context.setLineDash([20, 20]);
    this.context.moveTo(0, y%40 - 40); // Moving the dashed line to suggest speed
    this.context.lineTo(0,this.height);
    this.context.stroke();
    this.context.closePath();
    this.context.restore();
  }

  collision (car, obstacle) {
    // Get car bounding box
    // Get obstacle bounding box
  }
}