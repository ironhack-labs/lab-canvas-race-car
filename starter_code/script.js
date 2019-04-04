// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {

//   }
// };

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const imagenes = {
  img1: "./images/car.png"
}

class Car {
  constructor(x, y, img) {
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = img
    this.img.onload = () => {
      this.draw()
    }
  }
  draw() {
    console.log('que pedo')
    ctx.drawImage(this.img, this.x, this.y, 30, 30)
  }
  moveRight() {
    if(this.x < canvas.width - 50) this.x += 20
  }
  moveLeft() {
    if(this.x > 0 + 20) this.x -= 20
  }
}

const newCar = new Car(135, 115, imagenes.img1)
let frames = 0
let interval

// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//      startGame();
//    };
// }

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  newCar.draw()
  frames++
  console.log(frames)
}

function startGame() {
  if(interval) return
  interval = setInterval(update, 1000/60)
  console.log('funcionaaaaaaaaaa')
}

document.addEventListener('keydown', e => {
  e.preventDefault()
  switch (e.keyCode) {
    case 32:
      return startGame()
    case 39:
      return newCar.moveRight()
    case 37:
      return newCar.moveLeft()
  }
})

