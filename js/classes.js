// @ts-nocheck
class Road {
  constructor() {
    this.x = 0
    this.y = 0
    this.speed = speed
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = "images/road.png"
    this.img.onload = () => {
      this.draw()
    }
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    this.y += this.speed
    ctx.drawImage(this.img, this.x, this.y - this.height, this.width, this.height)
    this.y >= canvas.height ? this.y = 0 : void(0)
  }
}

class RaceCar {
  constructor() {
    this.width = 60
    this.height = 100
    this.x = canvas.width / 2 - this.width / 2
    this.y = canvas.height - this.height - 25
    this.img = new Image()
    this.img.src = "images/car.png"
    this.img.onload = () => {
      this.draw()
    }
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveLeft() {
    this.x <= 0 ? this.x = 0 : this.x -= 20
  }
  moveRight() {
    this.x + this.width >= canvas.width ? this.x = canvas.width - this.width : this.x += 20
  }

  hasCrashed(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y  - 20
    )
  }
}

class Obstacle {
  constructor() { 
    this.width = 90
    this.height = 60
    this.speed = speed
    this.x = 40
    this.y = 0
    this.img = new Image()
    this.img.src = "images/obstacle.png"
    this.img.onload = () => {
      this.draw()
    }
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y - this.height, this.width, this.height)
    this.y += this.speed
  }
}
