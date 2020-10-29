window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    carApp.init('canvas');
    
  }
};
const carApp = {
  name: 'Car app',
  description: 'Canvas app for basic car game',
  version: '1.0.0',
  license: undefined,
  author: 'Daniel Reina',
  canvasTag: undefined,
  ctx: undefined,
  obstacle: [],
  canvasSize: {
    w: undefined,
    h: undefined
  },
  keys: {
    left: 37,
    right: 39
  },


  init(id) {
    this.canvasTag = document.getElementById(id);
    this.ctx = this.canvasTag.getContext('2d');
    console.log(this.ctx);      // Puedes ver el contexto por consola
    console.log(this.canvasTag);
    this.drawRectangle();
    this.drawDashedLines();
    this.createCar();
    this.drawAll();
    this.setEventListeners();
    this.drawObstacles();
    this.createObstacles()
    this.drawAll()
    this.setEventListeners()
  },


  createCar() {
    this.car = new Car(this.ctx, 200, 600, 50, 100, 'car.png');
  },
    

createObstacles() {
    const Obstacle1 = new Obstacles(this.ctx, 100, 10, 100, 20, 4)
    const Obstacle2 = new Obstacles(this.ctx, 150, 270, 160, 20, 4)
    const Obstacle3 = new Obstacles(this.ctx, 220, 480, 180, 20, 4)

    this.obstacle.push(Obstacle1, Obstacle2, Obstacle3)
  },

  

  drawAll() {
    setInterval(() => {
      this.frames++;
      this.frames % 50 === 0 ? this.generateObstacle() : null
      this.clearScreen();
      this.drawRectangle();
      this.drawDashedLines();
      this.obstacle.forEach(elm => {
        elm.draw();
      })
      this.drawObstacles();
      this.car.draw();
      
    }, 70);
  },

  
  setEventListeners() {
    document.onkeydown = e => {
      if (e.keyCode === this.keys.left) { this.car.move('left'); }
      if (e.keyCode === this.keys.right) { this.car.move('right'); }
    }
  },
  
  
  clearScreen() {
    this.ctx.clearRect(0, 0, 500, 700);
  },


  
   
    

  drawObstacles() {
    this.canvasSize.w = 500;
    this.canvasSize.h = 700;
    this.ctx.fillStyle = 'rgb(138, 38, 20)'
    this.ctx.fillRect(100, 10, 100, 20)
    this.ctx.fillRect(150, 270, 160, 20)
    this.ctx.fillRect(220, 480, 180, 20)
    this.ctx.fillRect(300, 90, 100, 20)
  
  },
 


  drawDashedLines() {
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.setLineDash([40, 40])      // Dash generator
    this.ctx.moveTo(245, 0)
    this.ctx.lineTo(245, 700)
    this.ctx.stroke()
  },

  

  drawRectangle() {
    this.canvasSize.w = 500;
    this.canvasSize.h = 700;
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 500, 700)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, 400, 700)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(70, 0, 360, 700)
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(90, 0, 320, 700)
  }
};


class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
        this.ctx = ctx
        this.carPos = {
            x: carPosX,
            y: carPosY
        }
        this.carSize = {
            w: carWidth,
            h: carHeight
        }
        this.imageName = carImage
        this.carInstance = undefined
        this.init()
    }

    init() {
        this.carInstance = new Image()
        this.carInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

   move(dir) {
        dir === 'left' ? this.carPos.x -= 20 : null
        dir === 'right' ? this.carPos.x += 20 : null
    
    }
}


class Obstacles {
    constructor(ctx, posX, posY, obstaclesWidth, obstaclesHeight, speed) {
        // this.canvasSize = {
        //     w: canvasSize.w,
        //     h: canvasSize.h
        // }
      this.obstaclesPosx = posX;
      this.obstaclesPosy = posY;
      this.obstaclesSizeWidht = obstaclesWidth;
      this.obstaclesSizeHeight = obstaclesHeight;
        this.speed = speed        
        this.ctx = ctx
        

    }


  draw() {
      
    // this.moveObstacles()
    this.ctx.fillRect( this.obstaclesPosx, this.obstaclesPosy, this.obstaclesSizeWidht, this.obstaclesSizeHeight)
       
    }

    // moveObstacles() {
    //     // if (this.obstaclesPos.x >= this.canvasSize.w - this.obstaclesSize.w) {
    //     //     this.speed *= -1
    //     // }

    //     // if (this.obstaclesPos.x < 0) {
    //     //     this.speed *= -1
    //     // }

    //     if (this.obstaclesPos.x >= this.canvasSize.w - this.obstaclesSize.w || this.obstaclesPos.x < 0) {
    //         this.changeDirection()
    //     }

    //     this.obstaclesPos.x += this.speed
    // }

    changeDirection() {
        this.speed *= -1
    }
}
