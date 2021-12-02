
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
    this.obstacleArr = [];
    this.obstacleFramesCount = 0;

    // score
    //this.score = 0;


    // set the interval and the frames x sec
    this.intervalId = undefined;
    this.fps = 1000 / 5;
  }
  
  start() { 
    //console.log("interval id",this.intervalId);     // el bts start sigue dando input
    if (!this.intervalId){
      // in 1 second, repeat the functions 60 times 
      this.intervalId = setInterval(() => {
       // console.log("interval id",this.intervalId); 


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
  }

  draw() {
    this.background.draw();
    this.player.draw();

    console.log("player x:",this.player.x,"y:",this.player.y)
    this.obstacleArr.forEach(obstacle => obstacle.draw());
  }

  move() {
    this.background.move();
    this.player.move();
    this.obstacleArr.forEach(obstacle => obstacle.move());
  }

  

  setupListeners(event) {
    this.player.setupListeners(event);
  }

  addObstacle() {
    const max = this.ctx.canvas.width - 100;

    const randomX = Math.floor(Math.random() * max);

    this.obstacleArr.push(
      new Obstacle(this.ctx, randomX, 0)
    );
    //console.log(this.obstacleArr)
  }



  checkCollissions() {
    const condition = this.obstacleArr.some(obst => {
      this.player.collidesWith(obst);
      //console.log("obs x :",obst.x, "obs y:" ,obst.y);
    });
    console.log(condition);

    if (condition) {
    console.log(condition);
      this.gameOver();
    }
  }


  gameOver() {
    clearInterval(this.intervalId);

    // this.ctx.save()
    
    // this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    // this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

    // this.ctx.fillStyle = 'white'
    // this.ctx.textAlign = 'center'
    // this.ctx.font = 'bold 32px sans-serif'
    // this.ctx.fillText('Game Over', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)

    // this.ctx.restore()
  }

}