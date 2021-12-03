
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
    this.obstacles = [];
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

    // to count the score : check the difference between the length of the obstacles array, before and after the filter
    const previousObstaclesLength = this.obstacles.length;

    // delete from the array all the obstacles after they get out of the canvas 
    this.obstacles = this.obstacles.filter(obstacle => obstacle.y  < this.ctx.canvas.height);
    
    // add score : 
    if (this.obstacles.length < previousObstaclesLength) {
       this.score++;
    }
  }

  draw() {
    this.background.draw();
    this.player.draw();

    //console.log("player x:",this.player.x,"y:",this.player.y);
    this.obstacles.forEach(obstacle => obstacle.draw());

    this.drawScore();
  }

  move() {
    this.background.move();
    this.player.move();
    this.obstacles.forEach(obstacle => obstacle.move());
  }


  addObstacle() {
    const max = this.ctx.canvas.width - 100;
    const randomX = Math.floor(Math.random() * max);
    
    this.obstacles.push(new Obstacle(this.ctx, randomX, 0));
    this.obstacles.forEach(obstacle => console.log("obs y:",obstacle.y, "arr:", this.obstacles));
  }

  setupListeners(event) {
    this.player.setupListeners(event);
  }


  checkCollissions() {
    const condition = this.obstacles.some(obst => this.player.collidesWith(obst));
    if (condition) {
      this.gameOver();
    }
  }

  drawScore() {
    this.ctx.save();

    this.ctx.fillStyle = 'black';
    this.ctx.font = ' bold 24px sans-serif';

    this.ctx.fillText(`Score: ${this.score} ptos`, 20, 40);

    this.ctx.restore();
  }



  gameOver() {
    

    this.ctx.save();
    // draw a black rectangle with opacity
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    // draw a text 
    this.ctx.fillStyle = 'red';
    this.ctx.textAlign = 'center';
    this.ctx.font = 'bold 32px sans-serif';
    this.ctx.fillText('Game Over', this.ctx.canvas.width / 2, (this.ctx.canvas.height / 2) - 30);
    this.ctx.restore();

    this.ctx.save();
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'center';
    this.ctx.font = 'bold 32px sans-serif';
    this.ctx.fillText("Your final score", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    this.ctx.restore();

    this.ctx.save();
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'center';
    this.ctx.font = 'bold 32px sans-serif';
    this.ctx.fillText(`${this.score}`, this.ctx.canvas.width / 2, (this.ctx.canvas.height / 2) + 30);
    this.ctx.restore();


    clearInterval(this.intervalId);
  }

}