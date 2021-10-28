

const shapeRoad = {
  name: 'Shape road',
  description: 'Canvas basic shapes road',
  version: '1.0.0',
  author: 'Bárbara Monzú',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  frameCounter: undefined,
  imageinstance : undefined,
  obstacules: [],

  init() {
    console.log('object');
    this.setContext()
    this.drawRoad()  
    this.setListeners()
    this.start()
  },

  setContext(){
    this.canvasDOM = document.querySelector('#canvas')
    this.ctx = this.canvasDOM.getContext('2d') 
  },


  drawRoad() {
    console.log('hola')
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 500, 700);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(40, 0, 420, 700);
    this.drawLine()
    this.drawLineDash()
    this.obstacle()
    
  },

  drawLine() {
       this.ctx.strokeStyle = 'white';
       this.ctx.lineWidth = 8
       this.ctx.beginPath();
       this.ctx.moveTo(50, 0)
       this.ctx.lineTo(50, 700);
       this.ctx.setLineDash([]);
       this.ctx.stroke();
       this.ctx.closePath();

       this.ctx.beginPath();
       this.ctx.moveTo(450, 0)
       this.ctx.lineTo(450, 700);
       this.ctx.setLineDash([]);
       this.ctx.stroke();
       this.ctx.closePath()
       
  },

  drawLineDash() {
    this.ctx.beginPath();
    this.ctx.setLineDash([25, 35]);
    this.ctx.moveTo(245, 0);
    this.ctx.lineTo(245, 700);
    this.ctx.stroke();
    this.ctx.closePath();
  },

  obstacle() {

    this.ctx.strokeStyle = 'red';
    this.ctx.lineWidth = 50
    this.ctx.beginPath();
    this.ctx.moveTo(20, 0)
    this.ctx.lineTo(170, 0);
    this.ctx.setLineDash([]);
    this.ctx.stroke();
    this.ctx.closePath();

  },

  setListeners() {
    document.onkeyup = e => {
      e.key === "ArrowLeft" ? this.car.moveLeft() : null
      e.key === "ArrowRight" ? this.car.moveRight() : null   

  }
},

  start() {
    this.createCar()
    setInterval(() => {
        this.clearScreen()
        this.drawAll()
        this.frameCounter++
        this.frameCounter % 1500 === 0 ? this.obstacules.push(this.createObstacule()) : null

    }, 70)

  },

  clearScreen() {
    this.ctx.clearRect(0, 0, 500, 700)
  },

  drawAll() {
    this.drawRoad()
    this.car.draw()
  },

  createCar() {
    this.car = new Car(this.ctx, 250 - (100/2), 550, 100, 150)
  },

  createObstacule() {
    this.eachObstacule = new Obstacle(this.ctx)
  }
    
}



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log('object');
    startGame();
  };

  function startGame() {
    shapeRoad.init()
    interactionapp.init()
  }
}


class Car {
  
  constructor(ctx, carPosX, carPosY, carWidth, carHeight) {
    this.ctx = ctx
    this.carPos = { x: carPosX, y: carPosY, }
    this.carSize = { w: carWidth, h: carHeight}
    this.imageInstance = undefined
    this.init()
  }

  init() {
    this.imageInstance = new Image()
    this.imageInstance.src = 'images/car.png'
    
  }

  draw() {
    this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
  }

  moveLeft() {
    this.carPos.x -= 10
  }

  moveRight() {
    this.carPos.x += 10
  } 

}


// class Obstacle {
//   constructor(ctx) {
//     this.ctx = ctx
//     drawObstacle()
//     moveDown()
//   }
//     drawObstacle() {
    // let randomNumber = Math.floor(Math.random()*500);
    // randomNumber();
    // this.ctx.strokeStyle = 'red';
    // this.ctx.lineWidth = 50
    // this.ctx.beginPath();
    // this.ctx.moveTo(randomNumber, 0) tanto a esta como
    // this.ctx.lineTo(radomNumber, 0); sumale a la y 60 todo el rato por ejemplo
    // this.ctx.setLineDash([]);
    // this.ctx.stroke();
    // this.ctx.closePath();
// }
  //     moveDown() {
  //        this.obstacPos.y -= 10
  //    }
  
  // }


// EJEMPLO DE CÓMO AVANZARÍA
    // obstacle2() {

    //   this.ctx.strokeStyle = 'red';
    //   this.ctx.lineWidth = 50
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(20, 50)
    //   this.ctx.lineTo(170, 50);
    //   this.ctx.setLineDash([]);
    //   this.ctx.stroke();
    //   this.ctx.closePath();
  
    // },
  
    // obstacle3() {
  
    //   this.ctx.strokeStyle = 'red';
    //   this.ctx.lineWidth = 50
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(20, 90)
    //   this.ctx.lineTo(170, 90);
    //   this.ctx.setLineDash([]);
    //   this.ctx.stroke();
    //   this.ctx.closePath();
  
    // },



// class Obstacle {
//   constructor(ctx, obstacPosX, obstacPosY, obstacWidth, obstacHeight, canvasSize) {
//     this.ctx = ctx
//     this.obstacPos = { x: obstacPosX, y: obstacPosY, }
//     this.obstacSize = { w: obstacWidth, h: obstacHeight}
//     this.canvasSize = canvasSize
//     imageInstance = undefined
//     this.init()

//   },


// Crear un array de objetos nuevos