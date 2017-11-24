function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 1000;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext('2d');
    
    this.elements = [];
    this.elements.push(new Gap(canvas, 1120, 220, 2, 17, 17));
    
    this.mario = new MarioBros(this.canvas, "https://s3-eu-west-1.amazonaws.com/cpm-assets/mario-sprite.png");
    
    this.bg = new Image();
    this.bg.src = "https://s3-eu-west-1.amazonaws.com/cpm-assets/mario-level-1.png";
    this.bg.xPos = 0;
    this.bg.xLand = 0;
    this.bg.speed = 10;
    this.bg.onload = (function() {
      this.bg.isReady = true;
      this.canvas.height = this.bg.height;
      this.bg.xLand = this.bg.height - 80;
      
      this.mario.x = 50;
      this.mario.y = this.bg.xLand;
    }).bind(this);
    
    document.onkeydown = this.onKeyDown.bind(this);
    document.onkeyup = this.onKeyUp.bind(this);
  }
  
  Game.prototype.isReady = function() {
    return this.bg.isReady && this.mario.isReady();
  }
  
  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  Game.prototype.onKeyDown = function(event) {
    if (!this.mario.collide(this.elements)) {
      if (event.keyCode == RIGHT_KEY && this.mario.x >= this.canvas.width / 2) {
        this.moveBgRight();
      }
      this.mario.onKeyDown(event);
    }
  }
  
  Game.prototype.onKeyUp = function(event) {
    this.mario.onKeyUp(event);
  }
  
  Game.prototype.moveBgRight = function() {
    this.bg.xPos -= this.bg.speed;
  }
  
  Game.prototype.drawBg = function() {
    if (this.bg.isReady) {
      this.ctx.save();
      this.ctx.drawImage(
        this.bg,
        this.bg.xPos,
        0
        );
      this.ctx.restore();
    }
  }
  
  Game.prototype.draw = function() {
    if (this.isReady()) {
      this.clear();
      this.drawBg();
      this.mario.draw();
    }
    window.requestAnimationFrame(this.draw.bind(this));
  }