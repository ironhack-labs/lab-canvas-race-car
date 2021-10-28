const roadGame = {
  
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  obstacles: [],
  FPS: 50,
  framesCounter: 0,
 
  startGame() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
    
    this.canvasDOM.setAttribute("width", 500)
    this.canvasDOM.setAttribute("height", 700)

    this.drawFilleRectangle()
    this.drawLinesRoad()
    this.drawLinesDashRoad()
   
 
    this.setListeners()
    this.createCar()
    // this.createObstacles()
    this.start()
  },

  drawFilleRectangle(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 500, 700)

    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(40, 0, 420, 700)
  },

  drawLinesRoad(){

    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.setLineDash([0, 0])

    this.ctx.beginPath()
    this.ctx.moveTo(60, 0)
    this.ctx.lineTo(60,700)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.moveTo(440, 0)
    this.ctx.lineTo(440,700)
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.setLineDash([30, 15])

    this.ctx.beginPath()
    this.ctx.moveTo(250, 0)
    this.ctx.lineTo(250,700)
    this.ctx.stroke()
    this.ctx.closePath()
  },
  drawLinesDashRoad(){

    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.setLineDash([30, 15])

    this.ctx.beginPath()
    this.ctx.moveTo(250, 0)
    this.ctx.lineTo(250,700)
    this.ctx.stroke()
    this.ctx.closePath()
  },

   start() {
    setInterval(() => {
      //  this.framesCounter++
      //  this.framesCounter % 40 === 0 ? console.log("createObstacles") : null
  
       this.clearScreen()
      //  this.obstacles.draw()
       this.car.draw()
      
       
    }, 1000 / this.FPS)
   },

  //  drawAll() {
  //   this.obstacles.forEach(obstacles => obstacles.draw())
  // },

  // moveAll() {
  //   this.obstacles.forEach(obstacles => obstacles.move())
  // },

  // createObstacles(){
  //   this.obstacles.push(new Obstacles(this.ctx, 0, 20, this.canvasSize, 200, 200, 5))
  //   this.obstacles.push(new Obstacles(this.ctx, 0, 200, this.canvasSize, 100, 50, 3))
  //   this.obstacles.push(new Obstacles(this.ctx, 0, 400, this.canvasSize, 200, 100, 7))
  // },
  createCar() {
    this.car = new Car(this.ctx, 70, 600, 50, 70)
  },
  
  setListeners(){
    document.onkeydown = e => {
      console.log("La tecla: ", e.key)
      e.key === 'ArrowLeft' ? this.car.moveLeft() : null
      e.key === 'ArrowRight' ? this.car.moveRight() : null
    }
   },

   clearScreen() {
      this.ctx.clearRect(0, 0, 500, 700)
      this.drawFilleRectangle()
      this.drawLinesRoad()
      this.drawLinesDashRoad()
   
  },

};


class Car {
  constructor(ctx, posX, posY, width, height){
    this.ctx = ctx

    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height

    this.image = undefined

    this.init()
  }
  init() {
    this.image = new Image()
    this.image.src = 'images/car.png'
  }

  draw() {
    
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }
  moveLeft() {

   if(this.posX>=70){
    this.posX -= 10
   }
     
  }

   moveRight() {
    if (this.posX<=380){
      this.posX += 10
   } 
};
}

// class Obstacles {
//   constructor(ctx, posX, posY, canvasSize, width, height, speed) {
//     this.ctx = ctx

//     this.posX = posX
//     this.posY = posY

//     this.canvasSize = canvasSize

//     this.width = width
//     this.height = height

//     this.speed = speed

//     this.image = undefined

//     this.init()
//   }

//   init() {
//     this.ctx.fillStyle = "red";
//     this.ctx.fillRect(0, 0, 20, 300)
//   }

//   draw() {
//     this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
//   }

//   move() {
//     if (this.posX + this.width > this.canvasSize.width || this.posX < 0) {
//       this.turn()
//     }
//     this.posX += this.speed
//   }

//   turn() {
//     this.speed = this.speed * -1
//   }
// }

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
 
    roadGame.startGame();

  };

}

  

