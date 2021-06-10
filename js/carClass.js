// Iteration 2: Defining the car and the car movements
class Car{
    constructor(ctx, carPosX, carPosY,carWidth, carHeight, carImg){
      this.ctx = ctx,
      this.carPos = { x: carPosX, y: carPosY},
      this.carSize = { w: carWidth, h: carHeight},
      this.carImage = carImg,
      this.imageInstance = undefined
  
      this.init()   
  
    }
  
    init(){
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.carImage}` 
        

    }
  
    draw(){
      this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
  
    moveLeft() {
        this.carPos.x -= 25
    }

    moveRight() {
        this.carPos.x += 25
    }
  
  
  
  
  }