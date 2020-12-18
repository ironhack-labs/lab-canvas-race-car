class Car {
  constructor(ctx, x, y) {
    this.ctx = ctx

    this.x = x
    this.minX = 40
    this.maxX = this.ctx.canvas.width - 80
    this.vx = 0

    this.y = y
    this.maxY = y
    this.vy = 0

    this.width = 50
    this.height = 100

    this.img = new Image()
    this.img.src = './images/car.png';
    this.img.isReady = false
    this.img.onload = () => {
      this.img.isReady = true
    }

    this.movements = {
      right: false,
      left: false
    }

    this.score = 0
  }

  isReady() {
    return this.img.isReady
  }

  draw() {
    if (this.isReady()) {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.width,
        this.height
      )
    }
  }

  onKeyEvent(event) {
    const status = event.type === 'keydown'
    switch (event.keyCode) {
      case KEY_RIGHT:
        this.movements.right = status
        break;
      case KEY_LEFT:
        this.movements.left = status
        break;
      default:
        break;
    }
  }

  move() {
    if (this.movements.right) {
      this.vx = SPEED * 2
    } else if (this.movements.left) {
      this.vx = -SPEED * 2
    } else {
      this.vx = 0
    }

    this.x += this.vx

    if (this.x >= this.maxX) {
      this.x = this.maxX
    } else if (this.x <= this.minX) {
      this.x = this.minX
    }
  }

  collidesWith(element) {
    return this.x < element.x + element.width &&
      this.x + this.width > element.x &&
      this.y < element.y + element.height &&
      this.y + this.height > element.y
  }

  updateScore(element) {
    if (element.y + element.height === this.y + this.height) {
      this.score++
      
    }
  }

}