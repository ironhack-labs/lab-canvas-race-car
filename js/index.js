const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')








const img = new Image()
img.src = "./images/road.png"

const imgCar = new Image()
imgCar.src = "./images/car.png"








window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }

  function startGame() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(imgCar, car.x, car.y, car.width, car.height)
    ctx.fillStyle = 'purple'
    ctx.fillRect(0, 40, 300, 50)
    ctx.fillStyle = 'red'
    ctx.fillRect(230, 340, 300, 50)
    requestAnimationFrame(startGame)
    updateCar()
    checkIfInBounds()
  }
};

class Car {
  constructor() {
    this.x = 225;
    this.y = 550;
    this.speedX = 0;
    this.speedY = 0;
    this.width = 50;
    this.height = 100;
  }
}
const car = new Car;

document.addEventListener('keydown', (event) => {
  if (event.key === "ArrowRight") {

    car.speedX = +3
  } else if (event.key === "ArrowLeft") {
    car.speedX = -3
  } else if (event.key === "ArrowUp") {
    car.speedY = -3
  } else if (event.key === "ArrowDown") {
    car.speedY = +3
  }
})

document.addEventListener('keyup', (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    car.speedX = 0
  }
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    car.speedY = 0
  }
})
const updateCar = () => {
  car.x += car.speedX
  car.y += car.speedY
}
const checkIfInBounds = () => {
  if (car.x > 450) {
    car.x = 450
  }

  if (car.x < 0) {
    car.x = 0
  }

  if (car.y < 0) {
    car.y = 0
  }

  if (car.y > 600) {
    car.y = 600
  }
}