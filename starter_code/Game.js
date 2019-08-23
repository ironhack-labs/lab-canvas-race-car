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
    this.obstacles = [];
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

    // Update position of obstacles, check for collisions
    for (let obstacle of this.obstacles) {
      obstacle.yPos += dy;
      if (this.collision(this.car, obstacle)) {
        this.reset();
      }
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
    let carX1 = car.xPosition - car.image.width*car.scale/2;
    let carX2 = car.xPosition + car.image.width*car.scale/2;
    let carY1 = car.yPosition;
    let carY2 = car.yPosition + car.image.height*car.scale;
    let carVertices = [[carX1, carY1], [carX1, carY2], [carX2, carY1], [carX2, carY2]];
    // Get obstacle bounding box
    let obstX1 = obstacle.xPos - obstacle.width/2;
    let obstX2 = obstacle.xPos + obstacle.width/2;
    let obstY1 = obstacle.yPos - obstacle.height/2;
    let obstY2 = obstacle.yPos + obstacle.height/2;
    let obstVertices = [[obstX1, obstY1], [obstX1, obstY2], [obstX2, obstY1], [obstX2, obstY2]];

    // If any corners of car are inside obstacle, return true
    for (let vertex of carVertices) {
      if ((obstX1 < vertex[0] && vertex[0] < obstX2) && (obstY1 < vertex[1] && vertex[1] < obstY2)) {
        return true;
      }
    }
    // if any corners of obstacle are inside car, return true
    for (let vertex of obstVertices) {
      if ((carX1 < vertex[0] && vertex[0] < carX2) && (carY1 < vertex[1] && vertex[1] < carY2)) {
        return true;
      }
    }
    // Return false
    return false;
  }
}