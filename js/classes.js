
class Car  {
    constructor(gameboard, x, y, width, height) {
      this.ctx = gameboard.ctx;
      this.canvas = gameboard.canvas;
      this.canvasSize = {width: this.canvas.width, height: this.canvas.height};
      this.width = width;
      this.height = height;
      this.position = {x: x, y: y};
      this.velocity = {vX: 0, vY: 0};
      this.car = new Image();
      this.car.src = "./images/car.png";
    }
  
    drawCar() {
      this.ctx.drawImage(this.car, this.position.x, this.position.y, this.width, this.height);
    }
    moveLeft() {
      this.velocity.vX -= 0.7;
    }
  
    moveRight() {
      this.velocity.vX += 0.7; 
    }
  
    top() {
      return this.position.y;
    }
  
    bottom() {
      return this.position.y + this.height;
    }
  
    left() {
      return this.position.x;
    }
  
    right() {
      return this.position.x + this.width;
    }
  
    checkForCollisions(obstacle) {
      return !(this.bottom() < obstacle.top() || 
      this.top() > obstacle.bottom() || 
      this.right() < obstacle.left() || 
      this.left() > obstacle.right());
    }
  }
    
  
  
  class Obstacle {
    constructor(gameboard, width, height, x, y) {
      this.ctx = gameboard.ctx;
      this.canvas = gameboard.canvas;
      this.canvasSize = {width: this.canvas.width, height: this.canvas.height};
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
    }
  
    drawObstacle(){
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    top() {
      return this.y;
    }
  
    bottom() {
      return this.y + this.height;
    }
  
    left() {
      return this.x;
    }
  
    right() {
      return this.x + this.width;
    }
  }
  
  class GameBoard {
    constructor(){
      this.obstacles = [];
      this.canvas = document.getElementById('canvas');
      this.ctx = canvas.getContext ? canvas.getContext('2d') : alert('upgrade now bish.');
      this.width = canvas.width;
      this.height = canvas.height;
      this.rafId = null;
      this.frames = 0;
      this.car = new Car(this, this.width/2 -25, this.height - 200, 50, 100);
      this.backgroundImg = new Image();
      this.backgroundImg.src = './images/explode.png';
      this.offset = 0;
    }
    initGame() {
      requestAnimationFrame(() => this.animate());
    }
    
    drawBackground(){
        this.ctx.setLineDash([]);
        //grey
        this.ctx.fillStyle = '#AFAFAF';
        this.ctx.fillRect(20, 0, this.width, this.height);
        //green
        this.ctx.strokeStyle = 'green';
        this.ctx.lineWidth = 50;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, this.height);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.width, 0);
        this.ctx.lineTo(this.width, this.height);
        this.ctx.stroke();
        //white
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 10;
        this.ctx.moveTo(30, 0);
        this.ctx.lineTo(30, this.height);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(this.width - 30, 0);
        this.ctx.lineTo(this.width - 30, this.height);
        this.ctx.stroke();
        //dashed
    }
  
    drawDashedLine() {
      this.ctx.beginPath();
      this.ctx.lineWidth = 10;
      this.ctx.setLineDash([40, 30]);
      this.ctx.lineDashOffset= this.offset;
      this.ctx.moveTo(this.width/2 - 5, 70);
      this.ctx.lineTo(this.width/2 - 5, this.height);
      this.ctx.stroke();
    }
  
    marchDashedLine() {
      this.offset--;
      if (this.offset > 16) {
        this.offset = 0;
      }
      this.drawDashedLine();
    }
  
    drawGameOver(){
      this.clearGameboard();
      this.ctx.drawImage(this.backgroundImg, 0, 0);
      const points = Math.floor(this.frames / 20);
      this.ctx.fillStyle = 'black';
      this.ctx.font = 'bold 64px monospace';
      this.ctx.fillText(`YOU LOSE!`, 80, 200);
      this.ctx.fillText(`Oof, only:`, 50, 300); 
      this.ctx.fillText(`${points} points`,60 , 400); 
    }
  
    updateObstacles() {
      for (let obstacle of this.obstacles) {
        if (obstacle.y > this.height) {
          this.obstacles.splice(this.obstacles.indexOf(obstacle), 1);
          console.log(this.obstacles.indexOf(obstacle));
        }
      }
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].y += 1;
        this.obstacles[i].drawObstacle();
      }
    
      this.frames += 1;
  
      if (this.frames % 180 === 0) {
        const y = this.height;
        const minWidth = 40;
        const maxWidth = 200;
        const width = Math.floor(
          Math.random() * (maxWidth - minWidth + 1) + minWidth
        );
        let minGap = 75;
        let maxGap = 200;
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        this.obstacles.push(new Obstacle(this, width, 10, 0, 60));
        this.obstacles.push(new Obstacle(this, y - width - gap, 10, width + gap, 60));
      }
    }
  
    animate() {
      this.drawBackground();
      this.drawDashedLine();
      this.marchDashedLine();
      this.scoreGame();
      this.updateObstacles();
      this.car.position.x += this.car.velocity.vX;
      if (this.car.position.x > 440 - 25) {
        this.car.position.x = 440 - 25;
        this.car.velocity.vX = 0;
      }
      if (this.car.position.x < 10 + 25) {
        this.car.position.x = 10 + 25;
        this.car.velocity.vX = 0;
      }
      this.car.drawCar(); 
      this.rafId = requestAnimationFrame(() => this.animate());
      this.checkGameOver();
    }
  
    clearGameboard() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
    
    scoreGame() {
      const points = Math.floor(this.frames / 20);
      this.ctx.fillStyle = 'black';
      this.ctx.font = 'bold 36px monospace';
      this.ctx.fillText(`Your score is ${points}`, 80, 40);
  
    }
    checkGameOver() {
      const collision = this.obstacles.some(obstacle => this.car.checkForCollisions(obstacle));
      if (collision) {this.stopGame();} 
    }
  
    stopGame() {
      cancelAnimationFrame(this.rafId);
      this.drawGameOver();
    }
  }