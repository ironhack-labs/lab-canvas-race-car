
function startGame() { }


const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

class GameProyect {
  constructor(x, y, width, height, img) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.img = img
    this.speedX = 0
    this.speedY = 0
  }

  position() {
    this.x += this.speedX

    if (this.x <= this.width - 10) {
      this.x = this.width - 10
    }
    if (this.x >= canvas.width - (this.width + 30)) {
      this.x = canvas.width - (this.width + 30)
    }
    this.y += this.speedY
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

  left() {
    return this.x
  }
  right() {
    return this.x + this.width
  }
  up() {
    return this.y
  }
  down() {
    return this.y + this.height
  }

  crasWith(obstacle) {
    return (
      this.down() < obstacle.up() ||
      this.up() > obstacle.down() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    )
  }
}

class BackgroundImage extends GameProyect {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img)
    this.speedY = 5
  }
  refreshPosition() {
    this.x += this.speedY
    this.y %= canvas.height
  }

  draw() {
    ctx.drawImage(this.img, 0, this.y, this.width, this.height)
    ctx.drawImage(this.img, 0, this.y - canvas.height, this.width, this.height)
  }
}

class obstacle extends GameProyect {
  constructor(x, y, width, height) {
    super(x, y, width, height)
    this.speedX = 5
  }

  draw() {
    ctx.fillStyle = "red"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

class Game {
  constructor(background, player) {
    this.background = background
    this.player = player
    this.obstacles = []
    this.frames = 0
    this.points = 0
    this.animationId
  }

  start = () => { this.refreshGame() }

  refreshGame = () => {
    this.clear()

    this.clear()

    this.background.refreshPosition()
    this.background.draw()

    this.player.refreshPosition()
    this.player.draw()

    this.obstacle()
    this.refreshScore()

    this.animationId = requestAnimationFrame(this.refreshGame)

    this.checkGameOver()
  }


  refreshObstacle = () => {
    this.frames++

    for (let i = 0; i < this.obstacle.length; i++) {
      this.obstacle[i].refreshPosition()
      this.obstacle[i].draw()
    }

    if (this.frames % 120 === 0) {
      const originY = 0

      const minX = 50
      const maxX = 100
      const ramdomX = Math.floor(Match.ramdom() * (maxX - minX + 1)) + minX

      const minWidth = 50
      const maxWidth = 250
      const ramdomWidth = Math.floor(Match.ramdom() * (maxWidth - minWidth + 1)) + minWidth

      const obstacle = new Obstacle(ramdomX, originY, ramdomWidth, 20)

      this.obstacle.push(obstacle)

      this.points++
    }
  }

  checkGameOver = () => {
    const crashed = this.obstacle.some((obstacle) => {
      return this.player.crasWith(obstacle)
    })

    if (crashed) {
      cancelAnimationFrame(this.animationId)

      this.gameOver()
    }
  }

  refreshScore() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

  }
}

function startGame() {
  const bcgImg = new Image()
  bcgImg.src = "./images/road.png"

  const carImg = new Image()
  carImg.src = "./images/car.png"

  const BackgroundImage = new BackgroundImage(
    0,
    0,
    canvas.width,
    canvas.height,
    bcgImg
  )
  const player = new GameProject(250 - 25, canvas.heiht - 120, 50, 100, carImg)

  const game = new Game(BackgroundImage, player)

  game.start()
}

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    game.player.speedX = -3
  } else if (event.code === "ArrowRight") {
    game.player.speedX = 3
  }
})

document.addEventListener(("keyup"), () => {
  game.player.speedX = 0
})

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  }
}