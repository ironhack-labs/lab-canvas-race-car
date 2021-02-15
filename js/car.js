class Car{
  constructor(ctx, x, y){
      this.ctx = ctx
      this.x = x
      this.y = y
      this.width = 80
      this.height = 100

      //MOVE TO OBJECT
      this.speed = 7
      this.vx = 0
      this.movements = {
          left : false,
          right : false
      }

      //INSTANCE OF OBJECT
      this.car = new Image()
      this.car.src = 'images/car.png'
      this.car.startGame = false
      this.car.onload = () =>{
          this.car.startGame = true
      }
  }
  startGame(){
      return this.car.startGame
  }
  draw(){
      if(this.startGame()){
          this.ctx.drawImage(this.car,this.x,this.y,this.width,this.height)
      }
  }
  move(){
      if(this.movements.left){
          this.vx = - this.speed
      }else if(this.movements.right){
          this.vx = this.speed
      }else{
          this.vx = 0
      }

      this.x += this.vx

      if(this.x + 140 >= this.ctx.canvas.width){
          this.x = this.ctx.canvas.width - 140
      }else if(this.x <= 60){
          this.x = 60
      }
  }
  onKeyEvent(event) {
      const status = event.type === 'keydown'

      switch(event.keyCode){
          case KEY_RIGHT:
              this.movements.right = status
          break;
          
          case KEY_LEFT:
              this.movements.left = status
          break;    
      }
  }
  collidesWith(obstacle){
      return this.x <= obstacle.x + obstacle.width &&
      this.x + this.width >= obstacle.x &&
      this.y <= obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
  }   
}