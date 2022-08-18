const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const myRoad = new Image()
myRoad.src = 'images/road.png'
let intervalId = undefined
/* const myCar = new Image()
myCar.src = 'images/car.png' */

/* class carMove {
  constructor() {
    this.x = 0;
    this.y = 0;

  }

  const car = new carMove()
 */

onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    intervalId = setInterval(() => {
      removed()
      ctx.drawImage(myRoad, 0, 0, 482, 640)
      car.drawCar()

      car.moveRight()
      car.moveLeft()
      car.moveDown()
      car.moveUp()

      //ctx.drawImage(myCar, 216, 541, 50, 100)

      //console.log('---->')


    }, 60);
  };

  function startGame() {
    ctx.drawImage(myRoad, 0, 0, 482, 640)
    car.drawCar()
  }
};



function removed() {
  ctx.clearRect(0, 0, 482, 640)
}


class carMove {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  drawCar() {
    const myCar = new Image()
    myCar.src = 'images/car.png'
    ctx.drawImage(myCar, this.x, this.y, 50, 100)
  }

  moveRight() {
    if (this.x < 442) {
      this.x += 10;
    }
  }

  moveLeft() {
    if (this.x > 0)
      this.x -= 10;
  }

  moveUp() {
    if (this.y > 0)
      this.y -= 10;
  }

  moveDown() {
    if (this.y < 550) {
      this.y += 10;
    } if (this.y === 540) {
      this.y += 0;
    }
  }


}

const car = new carMove(216, 541)

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      car.moveLeft();
      break;
    case 'ArrowRight':
      car.moveRight();
      break;
    case 'ArrowUp':
      car.moveUp();
      break;
    case 'ArrowDown':
      car.moveDown();
      break;
  }
})



