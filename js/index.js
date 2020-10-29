window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawingApp.init('canvas');
    
  }
};

const drawingApp = {
  name: 'Car Race app',
  description: 'Car race',
  version: '1.0.0',
  license: undefined,
  author: 'Teresa Torrente',
  canvasTag: undefined,
  ctx: undefined,
  frames: 0,
  car: undefined,
  keys: {
    left: 37,
    right: 39
  },
  canvasSize: {
    w: undefined,
    h: undefined
  },
  
  
  init(id) {
    this.canvasTag = document.getElementById(id);
    this.ctx = this.canvasTag.getContext('2d');
    this.setDimensions();
    this.createCar();
    this.drawAll();
    this.setEventListeners();
    //this.createObstacle();

  },

  setDimensions() {
    this.canvasSize.w = 500;
    this.canvasSize.h = 700;
    this.canvasTag.setAttribute('width', this.canvasSize.w);
    this.canvasTag.setAttribute('height', this.canvasSize.h);
  },

  drawRectangle() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h);
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(60, 0, 10, this.canvasSize.h);
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(this.canvasSize.w - 70, 0, 10, this.canvasSize.h);
    this.ctx.strokeStyle = 'white'

  },

  drawDashedLines() {
    this.ctx.lineWidth = 8;
    this.ctx.beginPath();
    this.ctx.setLineDash([50, 50]);
    this.ctx.moveTo(this.canvasSize.w / 2, 20);
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h);
    this.ctx.stroke();

  },

  createCar() {

    this.car = new Car (this.ctx, 210, 500, 75, 120, "car.png");
  },

  // createObstacle() {

  //   this.obstacle = new Obstacle (this.ctx, 20, 0, 50, 20, 'red')
  // },

  setEventListeners() { 
    document.onkeydown = e => {
      e.keyCode === this.keys.left ? this.car.move('left') :null
      e.keyCode === this.keys.right ? this.car.move('right'): null
    }

  },

  drawAll() {
    setInterval(() => {
      this.frames++
      //this.frames % 21 === 0 && !this.obstacle ? this.createObstacle() : null
      this.clearScreen()
      this.drawRectangle()
      this.drawDashedLines()
      this.car.draw()
    }, 70)
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  }

}


class Car {
  constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
    this.ctx = ctx
    this.carPos = {
      x: carPosX,
      y: carPosY
    },
    this.carSize = {
      w: carWidth,
      h: carHeight
    },
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
    dir === 'left' ? this.carPos.x -= 20 : null;
    dir === 'right' ? this.carPos.x += 20 : null;
  }
}

// class obstacle {
//   constructor(x, y, width, height, color) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.x = x;
//     this.y = y;
//   }
//   move() {
//     this.obstacle.y += 20;
//   }
// }



