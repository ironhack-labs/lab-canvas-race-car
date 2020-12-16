class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.background = new Background(ctx)

    this.img = new Image()
    this.img.src = './images/car.png'

    this.car = new Car(this.ctx, 210, 500, 80, 160, this.img)

    /* this.obstacles = new Obstacles(this.ctx, 100, 0, 100, 30) */

    this.obstaclesList = [new Obstacles(this.ctx, this.randomX(), 0, this.randomW(), 30),new Obstacles(this.ctx, this.randomX(), 300, this.randomW(), 30)]

    this.interval = null

    this.isReady = false

    this.points = 0;



  }
  collisionPoint (obstacles, x, y) {
    if(x >= obstacles.x && (x <= obstacles.x + obstacles.w) && (y >= obstacles.y) && (y <= obstacles.y + obstacles.h)) {
      return true;

    }
    return false;

  }

  collisionObstacle (obstacles, car) {
    if ( this.collisionPoint(obstacles, car.x, car.y ) || this.collisionPoint(obstacles, car.x + car.w, car.y)){
     
      return true;


    }
    
    return false;
  }


  

  start() {
    this.setListeners()
    if(!this.isReady){  

      this.inverval = setInterval(() => {
        this.clear()

        this.draw()


        
        this.move()

        for (let i=0 ; i < this.obstaclesList.length; i++) {
          if(this.collisionObstacle(this.obstaclesList[i], this.car)){
         
          window.alert('Game Over!')
          this.obstaclesList = [new Obstacles(this.ctx, this.randomX(), 0, this.randomW(), 30),new Obstacles(this.ctx, this.randomX(), 300, this.randomW(), 30)]
          
      
          }
          if(this.obstaclesList[i].y === this.car.y) {
            this.points += 10
            console.log(this.points)
          }
        }
       
/*       if(this.collisionObstacle(this.obstaclesList[0], this.car)){
          window.alert('Game Over!')
          console.log("pam")
          }
        
          if(this.collisionObstacle(this.obstaclesList[1], this.car)){
            window.alert('Game Over!')
            } */
        

      }, 1000 / 60)

    this.isReady = true
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  draw() {
    this.background.draw()
    this.car.draw()
    for (let i=0 ; i < this.obstaclesList.length; i++) {
      this.obstaclesList[i].draw()
    }
    this.ctx.save()
    this.ctx.font = '18px Arial'
    this.ctx.fillText(`Score: ${this.points}`, 30, 30)
    this.ctx.restore()
    
  }

  move() {
    this.background.move()
    this.car.move()
   /*  this.obstacles.move() */
    
    for (let i=0 ; i < this.obstaclesList.length; i++) {
      this.obstaclesList[i].move()
    }
   
    }
  

  setListeners()  {
    document.onkeydown = (event) => {
      switch(event.keyCode) {
        case RIGTH:
          if(this.car.x <= 370)
          this.car.vx += 10;
          console.log(this.car.vx)
          break;
        case LEFT:
          if(this.car.x >= 50)
          this.car.vx += -10;
          console.log(this.car.vx)
          break;
      }
    }
    document.onkeyup = () => {
      switch(event.keyCode) {
        case RIGTH:
        case LEFT:
          this.car.vx = 0;
          break;
      }
    } 
  }
  randomX() {
    return Math.random()*400

  }
  randomW() {
      return Math.random()*200

}
} 


const RIGTH = 39
const LEFT = 37
