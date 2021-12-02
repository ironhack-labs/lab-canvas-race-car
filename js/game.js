
class Game {

  constructor(ctx) {
    this.ctx = ctx;

    // size of the player
    this.carWidth = 50;
    this.carHeigth = 60;
    // position and size of the player  "constructor(ctx, x, y, w, h)"
    this.player = new Player(ctx, this.ctx.canvas.width/2 - this.carWidth /2, 500,  this.carWidth , this.carHeigth) ;
    
    // background
    this.background = new Background(ctx);   
   
    // obstacle
    this.obstaclesArr = [];
    this.obstacleFramesCount = 0;

    // score
    this.score = 0;


    // set the interval and the frames x sec
    this.intervalId = undefined;
    this.fps = 1000 / 50;
  }
  
  start() { 
    //console.log("interval id",this.intervalId);     // el bts start sigue dando input
    if (!this.intervalId){
      // in 1 second, repeat the functions 60 times 
      this.intervalId = setInterval(() => {

        // add an obstacle every OBSTACLE_FRAMES
        if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
          this.addObstacle();
          this.obstacleFramesCount = 0;
        }
        this.obstacleFramesCount++;


        // clear 
        this.clear();
  
        // move
        this.move();
  
        // draw
        this.draw();

        // check collisions
        this.checkCollissions();
  
      }, this.fps);
    }          
  }


  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // const previousObstaclesLength = this.obstacles.length;

    // this.obstacles = this.obstacles.filter(obstacle => obstacle.y - obstacle.height < 700);

    // if (this.obstacles.length < previousObstaclesLength) {
    //   this.score++;
    // }
  }

  draw() {
    this.background.draw();
    this.player.draw();

    console.log("player x:",this.player.x,"y:",this.player.y);
    this.obstaclesArr.forEach(obstacle => obstacle.draw());
  }

  move() {
    this.background.move();
    this.player.move();
    this.obstaclesArr.forEach(obstacle => obstacle.move());
  }


  addObstacle() {
    const max = this.ctx.canvas.width - 100;
    const randomX = Math.floor(Math.random() * max);

    this.obstaclesArr.push(new Obstacle(this.ctx, randomX, 0));
  }

  setupListeners(event) {
    this.player.setupListeners(event);
  }


  checkCollissions() {
    const condition = this.obstaclesArr.some(obst => this.player.collidesWith(obst));
    if (condition) {
      this.gameOver();
    }
  }


  gameOver() {
    clearInterval(this.intervalId);

    this.ctx.save();
    
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'center';
    this.ctx.font = 'bold 32px sans-serif';
    this.ctx.fillText('Game Over', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);

    this.ctx.restore();
  }

}