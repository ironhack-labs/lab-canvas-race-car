const canvas = document.getElementById("carRoad")
const ctx = canvas.getContext('2d')
let xMovement = 10


let car = new Image()
car.src = "./images/car.png"


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


class Thing {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  draw() {
    ctx.fillStyle = "darkorange"
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }
  move() {
    this.y += 5
  }
}

let myCar = new Car(180, 600, 50, 80)


let obstacles = []
function obstacleGenerator() {
  for (let i = 0; i <= 3; i++) {
    let objx = Math.floor(Math.random() * 400)
    let objy = 0
    let objH = 5
    let obJW = 5
    obstacles.push(new Thing(objx, objy, objH, obJW))
  }

}






function drawLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  myCar.draw()
  obstacleGenerator()

  obstacles.forEach(obst => {
    obst.draw()
    obst.move()
  })


  requestAnimationFrame(() => drawLoop())
}



document.onkeydown = e => {
  console.log(e.keyCode)

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

