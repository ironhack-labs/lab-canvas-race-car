window.onload = () => {
  
  raceApp.drawMap()

  document.getElementById('start-button').onclick = () => {
    
    raceApp.init()
  };

}

const raceApp = {

  ctx:undefined,
  canvasId: undefined,
  canvasSize:{
    w: 500,
    h: 750
  },
  car: undefined,
  walls: undefined,
  init(){
    
   
    this.drawMap()
    this.setKeys()
    this.drawWalls()
    this.drawAll('../images/car.png')
    this.colission()
    
    
  },
  

  drawMap() {
    this.canvasId = document.getElementById("canvas")
    this.ctx = this.canvasId.getContext('2d')
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 42, this.canvasSize.h)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(41, 0, 15, this.canvasSize.h)

    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(60, 0, 350, this.canvasSize.h)
    // Lineas del centro
    this.ctx.lineWidth = 10
        //let x = x + 1
        this.ctx.beginPath()    
        this.ctx.setLineDash([40, 60])
        this.ctx.set
        this.ctx.moveTo(240, 20)
        this.ctx.lineTo(240, this.canvasSize.h )
        
        this.ctx.closePath()
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(414, 0, 15, this.canvasSize.h)
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(429, 0, 42, this.canvasSize.h)
  },
  drawAll(imageName){

    this.car = new Car(this.ctx,215,580,50,80,
      this.canvasSize,imageName)
      let stap = setInterval(() => {
        this.frames++
        if(this.colission())
       { 
         let i = 0;
          this.clearScreen()
          this.drawMap()
          this.car.draw()
          this.walls.init()
          if (this.walls.wallPos.y == 750)
            this.walls.wallPos.y = 20
       }else
       {
         this.endGame()
         clearInterval(stap);
       }
        
      },50)
  },
  drawWalls(){
    this.walls = new Walls(this.ctx,215,0,50,80,
      this.canvasSize)
  },
  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
},
  setKeys(){
    document.onkeydown = e =>{

      e.keyCode == 37 ? this.car.moveCar('left'):null
      e.keyCode == 39 ? this.car.moveCar('right'):null
    }
  },
  colission(){
  
    if (this.car.carPos.x < this.walls.wallPos.x + this.walls.wallPos.x + this.walls.wallSize.w && this.car.carPos.x + this.car.carSize.w > this.walls.wallPos.x && this.car.carPos.y  < this.walls.wallPos.y - 30 + this.walls.wallSize.h && this.car.carPos.y + this.car.carSize.h  > this.walls.wallPos.y - 30)
        return false
    return true

  },
  endGame(){
    
    this.canvasId = document.getElementById("canvas")
    this.ctx = this.canvasId.getContext('2d')
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, 500, this.canvasSize.h)
    
  



this.ctx.font = "50px Verdana";
var gradient = this.ctx.createLinearGradient(0, 0, this.canvasSize.w, 0);

gradient.addColorStop("1.0", "red");
// Fill with gradient
this.ctx.fillStyle = gradient;
this.ctx.fillText("HAS PERDIDO!!!!!", 10, 350);
    
  }
} 

class Car{

  constructor(ctx,posX,posY,carW,carH,canvasSIze,imageName){
    this.ctx = ctx
    this.carPos = {
      x: posX,
      y: posY
    }
    this.carSize = {
      w: carW,
      h: carH
    }
    this.canvasSIze = canvasSIze
    this.imageName = imageName
    this.imageInstance = undefined
    this.init()
    this.moveCar()
    
    this.draw()
  }


  init(){
    this.imageInstance = new Image()
    this.imageInstance.src = `img/${this.imageName}`
  }
  draw(){
    
    this.ctx.drawImage(this.imageInstance,this.carPos.x,
      this.carPos.y,this.carSize.w,this.carSize.h)
      
  }
  moveCar(dir){
    
    dir === 'left' ? this.carPos.x -= 5: null
    dir === 'right' ? this.carPos.x += 5 : null

  }

}

class Walls{
  constructor(ctx, posX, posY, wallW, wallH, wallsNumber, imageName) {
    this.ctx = ctx
    this.wallPos = {
        x: posX,
        y: posY
    }
    this.wallSize = {
        w: wallW,
        h: wallH
    }
    this.wallsNumber = wallsNumber
   this.init()
   this.draw
   this.moveWalls()
  }
  init(){
      

      this.draw()
      this.moveWalls()

      
    
    }
    draw(){
      
      let i = 0
      this.ctx.beginPath()
      this.ctx.fillStyle = 'red'
      this.ctx.fillRect(180, this.wallPos.y, 300, 50)
      console.log(this.wallPos.y)
      if(this.wallPos.y == 300)
       this.ctx.fillRect(80, i = 0, 300, 50)
        this.ctx.closePath();
        i++;

    }
    moveWalls(){
      
      this.wallPos.y += 10
    }


}







