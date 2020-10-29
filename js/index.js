const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
class Road {
  constructor() {
    this.x = 500;
    this.y = 700;
    const img = new Image()
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    });
    img.src = './images/road.png'
  }
  draw() {
    ctx.drawImage(this.img, 0, 0, 500, 700)
  }
}
class Car {
  constructor() {
    this.x = 230;
    this.y = 600;
    const img = new Image()
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    });
    img.src = './images/car.png'
  }
  moveRight() {
    this.x+= 9
    if(this.x > 450){
      this.x = 450
    }
  }
  moveLeft() {
    this.x-= 9
    if(this.x < 10){
      this.x = 10
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 40, 80)
  }
}
function startGame() {
  const road = new Road()
  const car = new Car()
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        car.moveLeft();
        console.log('left', car);
        break;
      case 'ArrowRight':
        car.moveRight();
        console.log('right', car);
    }
    updateCanvas();
  });
  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 700);
    road.draw();
    car.draw();
  }
}
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}
