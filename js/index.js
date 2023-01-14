const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Road {
  constructor(x, y) {
    this.x = x
    this.y = y
    
    const img = new Image()
    img.onload = () => {
      this.img = img
      this.draw()
    }
    img.src = 'images/road.png'
  }
  
  draw() {
    ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height)
  }
}

class Car {
  constructor() {
    this.x = 225
    this.y = 557
    this.width = 50
    this.height = 100
    this.speed = 20
    
    const img = new Image ()
    img.onload = () => {
      this.img = img
      this.draw()
    }
    img.src = 'images/car.png'
  }
  
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

  clear() {
    ctx.clearRect(this.x, this.y, this.width, this.height)
  }
  
  moveLeft() {
    this.x -= this.speed
  }
  
  moveRight() {
    this.x += this.speed
  }

  keyControls() {
    window.onkeydown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          this.moveLeft();
          break;
        case 'ArrowRight':
          this.moveRight();
          break;
      }
    };
  }
}


const road = new Road(canvas.width, canvas.height)
const car = new Car()

let interval;

let update = () => {
  car.clear();
  car.draw();
}

function startGame() {
  car.draw();
  car.keyControls();

  interval = setInterval(() => {
    update()
  }, 1000 / 60)
}





window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    console.log('game started')
  };
};