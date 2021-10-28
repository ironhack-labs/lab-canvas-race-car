window.onload = () => {
  
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const RaceCarApp = {
    name: 'Race Car',
    description: 'Race Car Game',
    version: '1.0.0',
    author: 'Andrés Molina',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { width: undefined, height: undefined },
    car: undefined,
    FPS: 60,
    framesCounter: 0,
  
    init() {
      this.setContext()
      this.setDimensions()
      
      this.drawStreet()
      this.drawCar()
      this.drawObstacle()

      this.setListeners()
  
      this.createCar()
      this.start()
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
      setInterval(() => {
        this.clearScreen();
        this.drawStreet();
        this.car.draw();
        this.drawObstacle();
        this.createObstacle();
      }, 1000/60)
    },
  
    drawStreet() {
      this.ctx.fillRect(this.canvasSize.width, this.canvasSize.height, this.canvasSize.width, this,this.canvasSize.height);
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, 500, 700);
      
      this.ctx.fillRect(this.canvasSize.width, this.canvasSize.height, this.canvasSize.width, this,this.canvasSize.height);
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(50, 0, 400, 700);

      this.ctx.fillRect(this.canvasSize.width, this.canvasSize.height, this.canvasSize.width, this,this.canvasSize.height);
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(60, 0, 10, 700);

      this.ctx.fillRect(this.canvasSize.width, this.canvasSize.height, this.canvasSize.width, this,this.canvasSize.height);
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(430, 0, 10, 700);

      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 6;
      this.ctx.beginPath();
      this.ctx.setLineDash([50, 50]);
      this.ctx.moveTo(250, 0);
      this.ctx.lineTo(250, 700);
      this.ctx.stroke(); 
    },

    drawObstacle() {
      this.ctx.fillStyle = "purple";
      this.ctx.fillRect(150, 0, 200, 30);
      this.ctx.fillStyle = "purple";
      this.ctx.fillRect(250, 0, 200, 30);
      this.ctx.fillStyle = "purple";
      this.ctx.fillRect(50, 0, 200, 30);
    },
  
    createCar() {
      this.car = new Car(this.ctx, 250, 600, 50, 80);
    },

    // createObstacle() {
    //   this.obstacle = new Obstacle;
    // },
  
    drawCar() {
    const imageInstance = new Image()
    imageInstance.src = 'images/car.png'
    imageInstance.onload = () => this.ctx.drawImage(imageInstance, 225, 600, 50, 80)

    },

    setListeners() {
      document.onkeydown = e => {
        console.log("La tecla: ", e.key)
         if (e.key === 'ArrowLeft') {
           this.car.moveLeft()
         }
         if (e.key === 'ArrowRight') {
           this.car.moveRight()
         }
        //Versión con operador ternario
        // e.key === 'ArrowLeft' ? this.car.moveLeft() : null
        // e.key === 'ArrowRight' ? this.car.moveRight() : null
      }
    },
  
    clearScreen() {
      this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    }
  
  
  }

  class Car {
    constructor(ctx, posX, posY, width, height) {
      this.ctx = ctx;
  
      this.posX = posX;
      this.posY = posY;
  
      this.width = width;
      this.height = height;
  
      this.image = undefined;
  
      this.init();
    }

      init() {
        this.image = new Image()
        this.image.src = 'images/car.png'
      }
    
      draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
      }
    
      moveLeft() {
        if (this.posX > 50) {
          this.posX -= 10;
        }
      }
    
      moveRight() {
        if (this.posX < 400) {
          this.posX += 10;
        }
      }

    }

  class Obstacle {
    constructor(ctx, posX, posY, canvasSize, width, height, speed) {
      this.ctx = ctx
      this.posX = posX
      this.posY = posY
      
      this.canvasSize = canvasSize
      
      this.width = width
      this.height = height
      
      this.speed = speed
    }
    
      move() {
        if (this.posY < this.canvasSize.width + 20) {
          this.posY += this.speed;
        }
      }
    }
   
  function startGame() {
    console.log("hola");
    
    RaceCarApp.init();
      
  };
}