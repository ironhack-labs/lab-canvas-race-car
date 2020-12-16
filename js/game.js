class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.width= this.ctx.canvas.width;
        this.height = this.ctx.canvas.height; 
        this.car = new Car(this.ctx,this.width /2 ,this.height/2);
        this.board= new Board(this.ctx);
        this.drawInterval = undefined
        this.fps = 1000 / 120 
        this.acceleration = 2
        this.obstacles = []
        this.obstDrawCount = 0
        this.sitCarWithobs = {
          crossing: false,
          crossed: false
          
        }
        this.score = 0
    }
    startGame() {
     
       
        if (!this.drawInterval) {
            this.drawInterval = setInterval(() => {
               // control de pulsaciones del teclado
              this.setListeners()
              // limpio canvas
              this.clear()
              //muevo objetos
              this.move()
              // check collitions betwwen car and obstacles
              
              // dibujo objetos
              this.draw()
              this.obstDrawCount++
              // add obstacles  
              if (this.obstDrawCount % OBSTACLES_FRAMES === 0) {
                this.addObstacle()
      
                this.obstDrawCount = 0
              }
              //check collitions
              this.checkCollisions();
            }, this.fps)
          }
        
 
       
         }
         draw () {
            this.board.draw();
            this.obstacles.forEach(obstacle => obstacle.draw())
            this.car.draw();
            this.ctx.save();
            this.ctx.font='36px Arial';
            this.ctx.fillStyle ='white'
            this.ctx.fillText(`Score: ${this.score}`, 75, 50);
            this.ctx.restore();

         }
         clear() {
            this.ctx.clearRect(0, 0, this.width, this.height)
            this.obstacles = this.obstacles.filter(obstacle => obstacle.y + obstacle.height <= this.height)
         }
 

move(){
  
   this.board.move();
   this.obstacles.forEach(obstacle => obstacle.move())
   this.car.move();
}


setListeners() {
  document.onkeydown = event => {
    switch (event.keyCode) {
   
      case KEY_RIGHT:
        this.car.vx = this.car.speed;
        break;
      case KEY_LEFT:
        this.car.vx = -this.car.speed;
        break;
  
    }
  }

  document.onkeyup = event => {
    switch (event.keyCode) {
      case KEY_RIGHT:
      case KEY_LEFT:
        this.car.vx = 0
        break;
  
    }
  }
}

onKeyEvent(event) {
  this.car.onKeyEvent(event)
 
  
}   

addObstacle (){
  const maxWidth= 300;
  const minWidth = 200;
  const leftLimRoad =65
  //const rightLimRoad = 435
  const widthRoad = 370
  
  //const minSpace = this.width - this.car.width * 2
 // const topWidth = Math.floor(Math.random() * minSpace)
  const obsWidth = Math.floor(Math.random() * (maxWidth - minWidth)+ minWidth)
   
  let obsX = Math.floor(Math.random()*(widthRoad - obsWidth))
 
  obsX+=leftLimRoad;
  //const bottomWidth = Math.floor(Math.random() * (minSpace - topWidth))
  this.obstacles.push(

    //obtacle 
    new Obstacle(this.ctx, obsX, 0, obsWidth)

  )
}

checkCollisions() {
  // si obstaculo superado  suma 1
  // if there is collition pause the game
  if(this.obstacles.some(obstacle => this.car.collidesWith(obstacle))) {
    this.pause()
  }
  else {
  if(this.obstacles.some(obstacle => this.car.crossingObs(obstacle))){
  //  console.log(`cruzando obstaculo`)
    this.sitCarWithobs.crossing =true;

  this.sitCarWithobs.crossed = false;

  }   else { 
    if (this.sitCarWithobs.crossing && !this.sitCarWithobs.crossed){
      this.sitCarWithobs.crossed =true;
    //  console.log(`cruzo obstaculo`)
      this.score++
      
      if (this.score % 5 === 0){
        this.fps*=this.acceleration;
      }
    //  console.log(this.score)
    } else {
      this.sitCarWithobs.crossed =false;
     // console.log(`no cruzo obstaculo`)
    }
    
    this.sitCarWithobs.crossing =false;

  }
}
 
  
   
}


pause() {

  this.paintScore();
  clearInterval(this.drawInterval)

  
  
}

paintScore(){
  this.ctx.save()
  this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
  this.ctx.fillRect(0, 0, this.width, this.height)

  this.ctx.font = '48px Arial'
  this.ctx.fillStyle = 'red'
  this.ctx.textAlign = 'center'
  this.ctx.fillText(
    'Game over!',
    (this.width / 2),
    (this.height / 2) - 80,
  )
  this.ctx.fillStyle = 'white'
  this.ctx.fillText(
    'Your final score',
    this.width / 2,
    this.height / 2,
  )
  this.ctx.fillText(
    this.score,
    this.width / 2,
    (this.height / 2) + 80,
  )

  this.ctx.restore()

}
// fin clase
}
