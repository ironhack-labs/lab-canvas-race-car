//Canvas 
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

//Variables
var interval
var frames = 0
var images = {
  car: './images/car.png'
}
//Clases 

function Board() {
  this.x = 0
  this.y = 0
  this.yLine = 0
  this.width = canvas.width
  this.height = canvas.height
  this.draw = function () {
    ctx.fillStyle = "gray"
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = "green"
    ctx.fillRect(this.x, this.y, 80, this.height)
    ctx.fillStyle = "green"
    ctx.fillRect(canvas.width - 80, this.y, 80, this.height)
    ctx.fillStyle = "white"
    ctx.fillRect(110, 0, 20, this.height)
    ctx.fillStyle = "white"
    ctx.fillRect(canvas.width - 80 - 45, 0, 20, this.height)
  }

  this.movement = () => {
    this.yLine++
    if (this.yLine > canvas.height) this.yLine = 0
    ctx.beginPath();
    ctx.setLineDash([30, 15]);
    ctx.moveTo(400, this.yLine);
    ctx.lineTo(400, this.yLine + canvas.height);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "white"
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([30, 15]);
    ctx.moveTo(400, this.yLine - canvas.height);
    ctx.lineTo(400, this.yLine);
    ctx.lineWidth = 10;
    ctx.strokeStyle = "white"
    ctx.stroke();
  }
  this.score = () => {
    ctx.font = "bold 24px Avenir"
    ctx.fillStyle = "goldenrod"
    ctx.fillText(Math.floor(frames / 60), 20, 45)
  }
}

function Car() {
  this.x = 365
  this.y = canvas.height - 150
  this.height = 100
  this.width = 70
  this.axisX = 0
  this.img = new Image()
  this.img.src = images.car

  this.draw = () => {

    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  this.move = (direction) => {

    switch (direction) {
      case "left":
        this.x -= 50
        break;
      case "right":
        this.x += 50
        break;
    }
  }

  this.isTouching = (item) => {
    return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y)
  }
}



//Instancias
var board = new Board()
var car = new Car()

//Main functions
start = () => {
  if (!interval) interval = setInterval(update, 1000 / 60)
}

update = () => {
  frames++
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  board.draw()
  board.movement()
  board.score()
  car.move()
  car.draw()
}

gameOver = () => { }
//Aux function

//listeners
addEventListener('keyup', function (e) {
  switch (e.keyCode) {
    case 13:
      return start()

    default:
      return
  }
})

var startButton = document.getElementById("start-button")

startButton.addEventListener('click', function () {
  start()
})


addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      car.move("left")
      break;
    case 39:
      car.move("right")
      break;
  }
})
