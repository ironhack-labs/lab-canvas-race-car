const boardImage = new Image();
boardImage.src = "../images/road.png";

const carImage = new Image();
carImage.src = "../images/car.png"

const board = {
  canvas: document.querySelector("#canvas"),
  frame: 0,
  image: boardImage,
  width: boardImage.width,
  height: boardImage.height,
  start() {
    this.context = this.canvas.getContext('2d')
    this.canvas.width = this.image.width
    this.canvas.height = this.image.height
    this.interval = setInterval(updateGame, 20)
    this.draw()
  },
  clear() {
    this.context.clearRect(0, 0, this.width, this.height)
  },
  draw() {
    this.context.drawImage(this.image, 0, 0)
  },
}

const car = {
  image: carImage,
  size: 30,
  carScale() {
    this.scale = carImage.height / carImage.width
    this.height = this.scale * this.size
    this.width = this.size
  },
  placeCar() {
    this.ctx = board.context
    this.carScale()
    this.x = (board.width - this.width) / 2
    this.y = board.height - this.height * 1.1
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  },
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  },
  moveRight() {
    this.x += 5
  },
  moveLeft() {
    this.x -= 5
  },
}

const updateGame = () => {
  board.clear()
  board.draw()
  car.draw()
}

const startGame = () => {
  board.start()
  car.placeCar()
};


window.onload = () => {
  document.getElementById("start-button").onclick = () => startGame();
};

document.querySelector('body').addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') car.moveRight()
  if (e.key === 'ArrowLeft') car.moveLeft()
})