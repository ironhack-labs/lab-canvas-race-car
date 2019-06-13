/** @type HTMLCanvasElement */
 class Game {
   constructor() {
    this.canvasDOMEl = undefined;
    this.ctx = undefined;
    this.w = 600;
    this.h = 600;
    this.car = new Image();
    this.car.src = "images/car.png"
    this.driver = new Image();
    this.driver.src = "images/sitoDriver.png"
    this.background = "green"
    this.dataModel = {
      x: this.w/2 - 35,
      y: this.h - 100
    }
    this.intervalId = undefined;
    this.counter = 0;
    

   }

   init = (id) => {
     
     this.canvasDOMEl = document.getElementById(id)
     this.ctx = this.canvasDOMEl.getContext("2d")
     this.canvasDOMEl.setAttribute("height", this.h);
     this.canvasDOMEl.setAttribute("width", this.w)
     
     this.intervalId = setInterval(() => {
     this.counter++;
     this.clearRoad();
     this.drawAll();
     this.carMovement()


     }, 1000/60)

    
    


   }

   setDimensions = () => {
     //Verde
     this.canvasDOMEl.style.backgroundColor = this.background

     //Grey
     this.ctx.fillStyle = "rgb(128,128,128)"
     this.ctx.fillRect(this.w/8, 0, this.w*3/4, this.h)
     this.ctx.beginPath()

     //White
     this.ctx.fillStyle = "rgb(255,255,255)"
     this.ctx.fillRect(this.w/6.7, 0, this.w*3/4.3, this.h)
     this.ctx.beginPath()

     //Double-grey
     this.ctx.fillStyle = "rgb(128,128,128)"
     this.ctx.fillRect(this.w/5.4, 0, this.w*2.5/4, this.h)
     this.ctx.beginPath()


   }

   offsetLine() {
    this.ctx.beginPath()
    this.ctx.setLineDash([40,30])
    this.ctx.lineDashOffset = -this.counter;
    this.ctx.moveTo(this.w/2-this.w/120, 0)
    this.ctx.lineTo(this.w/2-this.w/120, this.h)
    this.ctx.lineWidth = this.w/60
    this.ctx.strokeStyle = `rgb(255,255,255)`
    this.ctx.stroke()
   }
   
   clearRoad = () => {
    this.ctx.clearRect(0,0, this.w, this.h)
   }

   drawCar = () => {
     this.ctx.drawImage(this.car, this.dataModel.x, this.dataModel.y, this.w/10, this.h/10)
     this.ctx.drawImage(this.driver, this.dataModel.x, this.dataModel.y, this.w/20, this.h/20)
   }

  drawAll = () => {
    this.setDimensions()
    this.offsetLine()
    this.drawCar() 
    //obstaculos
  }

  carMovement = () => {
    const positionInc = 90;
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 39: //goes to the right
          if (this.dataModel.x < 420) {
            this.dataModel.x += positionInc
            break;
          }

        case 37: //goes to the left
        if (this.dataModel.x > 90) {
            this.dataModel.x -= positionInc
            break;
        }
      }
    }
    this.drawAll()
  }

}