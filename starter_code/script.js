window.onload = function () {

  // Get elements from html
  let canvas = document.querySelector('canvas')
  let context = canvas.getContext('2d')


  // Variables aux
  let obstacles = []
  let frames = 0
  let interval
  
  // Start game button
  let button = document.getElementById("start-button")
  button.onclick = function (e) {
    button.disabled = true;
    startGame();
  }

  // Images
  let img = {
    imgCar: './images/car.png'
  }

  // Class
  class Obstacles {
    constructor(x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }

    draw() {
      context.beginPath()
      context.fillStyle = "brown"
      context.fillRect(this.x, this.y, this.width, this.height);
      context.stroke()
      this.y++
    }
  }

  class Car {
    constructor(x, y, img) {
      this.x = x
      this.y = y
      this.width = 30
      this.height = 45
      this.img = new Image()
      this.img.src = img
    }
    draw() {
      context.drawImage(this.img, this.x, this.y, this.width, this.height)
    }


    moveRight() {
      if (this.x > ((canvas.width / 4) - this.width / 3) * 3) return
      this.x += 10
    }

    moveLeft() {
      if (this.x < canvas.width / 4) return
      this.x -= 10
    }

    moveUp() {
      if (this.y < 0 + this.height) return
      this.y -= 10
    }

    moveDown() {
      if (this.y > canvas.height - (this.height + this.height / 2)) return
      this.y += 10
    }
    isTouching(obstacle) {
      return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
      )
    }
  }


  

  // Instance
  const car = new Car((canvas.width / 2) - 12, canvas.height - 70, img.imgCar)

  // Functions
  function drawObstacles() {
    if (frames % 250 === 0) {
      generateObstacles()
    }
    obstacles.forEach(obst => {
      obst.draw()
    })
  }

  // Check collitions.
  function checkCollition() {
    obstacles.map(obstacle => {
      if (car.isTouching(obstacle)) {
        console.log('Is touching')
        gameOver()
      } 
    })
  }

  function checkScore() {
    obstacles.map(obstacle => {
      car.getPoint(obstacle)
    })
  }

  function gameOver() {
    clearInterval(interval)
    interval = false
  }

  function generateObstacles() {
    let rndX = Math.floor((Math.random() * 50) + 61);
    let rndXa = Math.floor((Math.random() * 80) + 110);

    let random = Math.random() * canvas.width / 2 + 10
    obstacles.push(new Obstacles(rndXa, 0, rndX, 20))
  }

  // Draw Line function
  const drawLine = (xMove, yMove, xLine, yLine, strokeWidth, color) => {
    context.beginPath()
    context.lineWidth = strokeWidth
    context.moveTo(xMove, yMove)
    context.strokeStyle = color
    context.lineTo(xLine, yLine)
    context.stroke()
  }


  const middleLines = (num) => {
    let sum = 0
    for (let i = 0; i < num; i++) {
      drawLine(canvas.width / 2, 20 + sum, canvas.width / 2, 50 + sum, 5, 'white')
      sum += 50
    }
  }

  // Init
  const drawRoad = () => {
    // Background
    context.beginPath()
    context.fillStyle = 'gray'
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.stroke()

    // Green Lines
    drawLine(0, 0, 0, canvas.height, 100, 'green')
    drawLine(canvas.width, 0, canvas.width, canvas.height, 100, 'green')

    drawLine(80, 0, 80, canvas.height, 20, 'white')
    drawLine(320, 0, 320, canvas.height, 20, 'white')

    // Middle lines
    middleLines(12)
  }


  // Update function. 
  function update() {
    frames++
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawRoad()
    car.draw()
    drawObstacles()
    checkCollition()
  }

  function startGame() {
    if(interval) return 
    interval = setInterval(update, 1000 / 120)
  }


  // Listener
  addEventListener("keydown", (e) => {
    if (e.keyCode === 39) {
      car.moveRight()
    } else if (e.keyCode === 38) {
      car.moveUp()
    } else if (e.keyCode === 40) {
      car.moveDown()
    } else if (e.keyCode === 37) {
      car.moveLeft()
    }
  })

};
