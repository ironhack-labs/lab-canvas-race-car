window.onload = function () {
  let canvas = document.querySelector('canvas')
  let context = canvas.getContext('2d')

  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  // Images
  let img = {
    imgCar: './images/car.png'
  }

  class Car {
    constructor(x, y, img) {
      this.x = x
      this.y = y
      this.width = 25
      this.height = 35
      this.img = new Image()
      this.img.src = img
    } 
    draw() {
      context.drawImage(this.img, this.x, this.y, this.width, this.height)
    } 
    
    moveRight() {
      // if(this.x > canvas.width - this.width - 10) return
      this.x += 10
    }
    
    moveLeft() {
      if(this.x < 0) return
      this.x -= 10
    }
    
    moveUp() {
      if(this.y < 0 + this.height - 40) return
      this.y -= 100 
    }
    
    moveDown() {
      if (this.y > canvas.height - (this.height + this.height / 2)) return
      this.y += 50
    }
    isTouching(blocks) {
      return (
        this.x < blocks.x + blocks.width &&
        this.x + this.width > blocks.x &&
        this.y < blocks.y + blocks.height &&
        this.y + this.height > blocks.y
      )
    }
  }

  const car = new Car(100, 100, img.imgCar)

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
        drawLine(canvas.width / 2, 20+sum, canvas.width / 2, 50+sum, 5, 'white')
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

    // Car
    car.draw()
  }
  
  // Update function. 
  function update() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawRoad()
    car.draw()
  }

  function startGame() {
    setInterval(update, 1000/120)
  }


addEventListener("keydown", (e) => {
  if (e.keyCode === 39) {
    car.moveRight()       
  } else if(e.keyCode === 38) {
    car.moveUp()
  } else if(e.keyCode === 40) {
    car.moveDown()
  } else if(e.keyCode === 37) {
    car.moveLeft()
    }
  })

};
