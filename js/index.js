window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    game.init()
    drawRoad()
    game.start()
  }
};

let width = 500
let heigth = 700
let sizeCart = 40

const game = {

  canvas: document.getElementById("canvas"),

  init: function () {
    this.canvas.width = width
    this.canvas.heigth = heigth
    this.context = this.canvas.getContext("2d")
  },

  start: function () {
    this.interval = setInterval(updateGame, 20)
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

function updateGame() {
  game.clear()
  car.newPos()
  car.update()

}
class Car {
  constructor(width, height, color, x, y) {
    this.width = width
    this.heigth = height
    this.color = color
    this.x = x
    this.y = y
    this.speedX = 0
    this.speedY = 0

  }
  update() {
    let ctx = game.context
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.heigth)
  }
  newPos() {
    this.x += this.speedX
    this.y += this.speedY
  }
  // update() {
  //   let ctx = game.context
  //   this.updatePosition()
  //   ctx.fillStyle = "blue"
  //   ctx.fillRect(this.posX, posY - sizeCart * 2, 40, 40)
  //   this.posX = this.speed
  //   // ctx.drawImage(img, 170, 380)
  // }
  // updatePosition() {
  //   // this.posX = this.speed
  //   this.posX += this.speed

  // }
}

let car = new Car(sizeCart, sizeCart, 'red', width / 2 - sizeCart, heigth - sizeCart)

function drawRoad() {
  let canvas = document.getElementById('canvas')
  let context = this.canvas.getContext('2d')
  game.context.fillStyle = "green"
  game.context.fillRect(0, 0, width, heigth)
  //game.context.fillStyle = "green"

  // draw lines
  game.context.fillStyle = "white"
  game.context.fillRect(40, 0, 30, 700)

  game.context.fillStyle = "white"
  game.context.fillRect(width - 2 * 40, 0, 30, 700)
  // car.update()
  // updateGame()

}




// function updateGame() {
//   game.clear()
//   car.newPos()
//   car.update()
//   car.newPos()
//   car.update()
//   // car.posX += car.speed
//   // console.log("update game")
// }
// // function updateGame() {
// //   game.clear()
// //   car.update()
// // }

// let car = new Car(30, 30, 'green', 0, 110)
// // let car = new Car(0, heigthCanvas,
//   widthCanvas / 2 - sizeCart, heigthCanvas - sizeCart)
// console.log(car.x + 2)

// document.onkeydown = function (e) {
//   switch (e.key) {
//     case 's':
//       console.log(car.posX)
//       car.speed = +30
//       break;
//     case 'w':
//       console.log("derecha")
//       car.speed = -10
//   }
// }


document.onkeydown = function (e) {
  switch (e.key) {
    case 'w': // up arrow
      car.speedY -= 1;
      break;
    case 's': // down arrow
      car.speedY += 1;
      break;
    case 'a': // left arrow
      car.speedX -= 1;
      break;
    case 'd': // right arrow
      car.speedX += 1;
      break;
  }
};

// document.onkeyup = function (e) {
//   car.speedX = 0;
//   car.speedY = 0;
// };



