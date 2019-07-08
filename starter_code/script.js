const canvas = document.getElementById("carRoad")
const ctx = canvas.getContext('2d')
let xMovement = 10
let points = 0

document.getElementById('start-button').addEventListener('click', () => {
  window.location.reload()
})



// VELOCITY OF THE OBSTACLES
let obstDy = 2
let car = new Image()
car.src = "./images/car.png"

// CAR CLASS

class Car {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.draw = function () {
      ctx.drawImage(car, this.x, this.y, this.w, this.h)
    }
  }
}

let myCar = new Car(180, 600, 50, 80)
// 
// class Thing {
//   constructor(x, y, w, h) {
//     this.x = x
//     this.y = y
//     this.w = w
//     this.h = h
//   }
//   draw() {
//     ctx.fillStyle = "darkorange"
//     ctx.fillRect(this.x, this.y, this.w, this.h)
//   }
//   move() {
//     this.y += 5
//   }
// }




// let obstacles = []
// function obstacleGenerator() {
//   for (let i = 0; i <= 3; i++) {
//     let objx = Math.floor(Math.random() * 400)
//     let objy = 0
//     let objH = 5
//     let obJW = 5
//     obstacles.push(new Thing(objx, objy, objH, obJW))
//   }

// }

// CREATING THE OBSTACLES 

class Rectangle {
  constructor(x, y, w, h, color) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
  }
  fill() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }
}



let rect1 = new Rectangle(200, 0, 100, 20, "blue")
let rect2 = new Rectangle(100, -100, 100, 20, "red")
let rect3 = new Rectangle(300, -200, 100, 20, 'purple')

function createObst() {
  rect1.fill()
  rect2.fill()
  rect3.fill()


  if (rect1.h + rect1.y < canvas.height || rect2.h + rect2.y < canvas.height || rect3.h + rect3.y < canvas.height) {
    rect1.y += obstDy;
    rect2.y += obstDy;
    rect3.y += obstDy
  }
  else {
    points += 1
    rect1.y = 0
    rect2.y = -100
    rect3.y = -200
    rect1.x = Math.floor(Math.random() * 300)
    rect2.x = Math.floor(Math.random() * 300)
    rect3.x = Math.floor(Math.random() * 300)
  }
}





function renderScore() {
  ctx.font = "16px Arial"
  ctx.fillText(points, 10, 20);
}




function drawLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  myCar.draw()
  createObst()
  collisionDetection()
  renderScore()
  requestAnimationFrame(() => drawLoop())
}



function collisionDetection() {

  if (rect1.x < myCar.x + myCar.w &&
    rect1.x + rect1.w > myCar.x &&
    rect1.y < myCar.y + myCar.h &&
    rect1.y + rect1.h > myCar.y
  ) {
    gameOver()


  } else if (rect2.x < myCar.x + myCar.w &&
    rect2.x + rect2.w > myCar.x &&
    rect2.y < myCar.y + myCar.h &&
    rect2.y + rect2.h > myCar.y
  ) {
    gameOver()


  } else if (rect3.x < myCar.x + myCar.w &&
    rect3.x + rect3.w > myCar.x &&
    rect3.y < myCar.y + myCar.h &&
    rect3.y + rect3.h > myCar.y
  ) {
    gameOver()

  }
}

function gameOver() {
  let msg = `your license got revoked, you have ${points} points`
  ctx.font = "20px Arial"
  ctx.fillText(msg, 10, 100)
  renderScore()
  cancelAnimationFrame()

}



document.onkeydown = e => {
  switch (e.keyCode) {
    case 39:
      if (myCar.x < canvas.width - myCar.w) {
        myCar.x += xMovement
        break;
      }
    case 37:
      if (myCar.x > 0) {
        myCar.x -= xMovement
        break;
      }

  }

}





drawLoop()

