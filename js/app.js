const raceCarApp = {
  name: 'Basic shapes app',
  description: 'Canvas app fro basic shapes drawing',
  version: '1.0.0',
  author: 'Teodoro López',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  car : undefined,

  init() {
    this.setContext()
    this.setDimensions()
       this.setListeners();

//background
    this.drawFilledRectangle();
    this.drawContinueLine()
    this.drawDashedLine();
    
//insert Car
    //this.insertImage();
   
  
    
  },

    setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasDOM.setAttribute("width", 500)
    this.canvasDOM.setAttribute("height", 700)
    this.canvasSize.width = window.innerWidth
     this.canvasSize.height = window.innerHeight
  },



   

  



  drawFilledRectangle() {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, 500, 700)


        this.ctx.fillStyle = "grey";
      this.ctx.fillRect(40, 0, 420, 700)
  },

  drawContinueLine() {
        this.ctx.strokeStyle = 'white'
       this.ctx.beginPath()
        this.ctx.lineWidth = 10
         //linea izda
        this.ctx.moveTo(50,0)
        this.ctx.lineTo(50, 700)
     //linea dcha
        this.ctx.moveTo(450,0)
        this.ctx.lineTo(450, 700)
  
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()
        
  },
  drawDashedLine() {

     //linea central
        this.ctx.strokeStyle = 'white'
       this.ctx.beginPath()


        this.ctx.setLineDash([15,20])
        this.ctx.moveTo(245,10)
        this.ctx.lineTo(245, 700)
        this.ctx.stroke()
        this.ctx.closePath()
  },

    

  setListeners() {
      document.onkeyleft = e => {
          
      console.log("La tecla: ", e.key)
      
      e.key === 'ArrowLeft' ? this.car.moveLeft() : null
      e.key === 'ArrowRight' ? this.car.moveRight() : null
    }
  },

  

   
  
}

const carItem = {
    
  name: 'Basic shapes app',
  description: 'Canvas app fro basic shapes drawing',
  version: '1.0.0',
  author: 'Teodoro López',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },
  car : undefined,
  obstacles:[],
  framesCounter:0,

  init() {
    this.setContext()
    this.setDimensions()
    this.setListeners();
   

    
     
    
     this.createCar();
     this.createObstacle();
     this.start();
    
    
  },

    setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasDOM.setAttribute("width", 500)
    this.canvasDOM.setAttribute("height", 700)
    this.canvasSize.width = window.innerWidth
     this.canvasSize.height = window.innerHeight
  },
  
   start() {
   let intervalId= setInterval(() => {
      this.framesCounter++;
      
      this.clearScreen()
      raceCarApp.drawFilledRectangle();
      raceCarApp.drawContinueLine();
      raceCarApp.drawDashedLine();
      
        this.framesCounter % 40 === 0 ? this.createObstacle() : null
        this.car.draw()
        this.drawAll();
        this.moveAll();

      
    }, 1000 / 50)
  },
  createCar() {
    this.car = new Car(this.ctx, 220, 580, 50, 100);
  },

   

     clearScreen() {
    this.ctx.clearRect(0, 0, 500, 700)
  },

  drawAll() {
        this.obstacles.forEach(obstacle => obstacle.drawObstacle())
    },
    moveAll() {
        this.obstacles.forEach(obstacle => obstacle.move())
    },

  setListeners() {
    document.onkeydown = e => {
      console.log("La tecla: ", e.key)
      
      e.key === 'ArrowLeft' ? this.car.moveLeft() : null
      e.key === 'ArrowRight' ? this.car.moveRight() : null
    }
  },

  createObstacle() {
    let randomWidth = Math.floor(Math.random() * (300 - 100 + 1) + 100)
    let randomX = Math.floor(Math.random() * (450 - 100 + 1) + 100)
    this.obstacles.push(new Obstacle(this.ctx, randomX, 10, randomWidth,50, 5));
  },

  

  











































}



class Car {
  constructor(ctx, posX, posY, width, height) {
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
    this.image.src = '../images/lambo.png'
    
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  moveLeft() {
    console.log("Muevo a la izquierda", this.posX)

    if(this.posX >50){ this.posX -= 20}
    else null;
  }

  moveRight() {
    console.log("Muevo a la derecha", this.posX)
     if(this.posX <405){ this.posX += 20}
    else null;
  }
}


class Obstacle {
  constructor(ctx, posX, posY, width, height, speed) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY


    this.width = width
    this.height = height

    this.speed = speed

    this.image = undefined

 //   this.init()
  }

  

  drawObstacle(){
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(this.posX, this.posY, this.width, this.height)



  }



//   draw() {
//     this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
//   }

  move() {
      
    this.posY += this.speed
  }

 
}