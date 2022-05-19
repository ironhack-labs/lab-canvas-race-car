
// CONST
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const roadImage = document.querySelector('#road-img')
const carImage = document.querySelector('#car-img')

// RESET CANVAS
const resetCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

// DRAW ROAD
const drawRoadImage = () => {
  context.drawImage(roadImage, 0, 0, 500, 700)
}

// DRAW CAR
const drawCarImage = (x, y) => {
  context.drawImage(carImage, x, y, carImage.width / 2, carImage.height / 2)
}

// RANDOM X AND WIDTH
function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const randomX = randomIntFromInterval(30, 270)
const randomWidth = randomIntFromInterval(30, 150)


// OBSTACLE
const obstacle = {
  x: randomX,
  y: 0,
  width: randomWidth,
  height: 30,

  drawObstacle() {
    context.fillStyle = "#8C3F02"
    context.fillRect(this.x, this.y, this.width, this.height)
  },

  moveObstacle() {
    if (this.y>710) {
      this.drawObstacle()
      this.y = 0
    }
    this.y +=10
  },
}


// ON LOAD
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
startGame() // comment this line to use Start button
};

// startGame FUNCTION
function startGame() {
  setInterval(() => {
    resetCanvas()
    drawRoadImage()
    obstacle.drawObstacle()
    player.draw()
  }, 10)

  setInterval(() => {
    obstacle.moveObstacle()
  }, 50)
}

// PLAYER (CAR)
const player = {
  x: 212,
  y: 500,
  width: 30,
  height: 60,

  draw() {
    drawCarImage(this.x, this.y)
  },

  moveRight() {
    if (this.x > 340) {
      return
    }
    this.x +=70
  },

  moveLeft() {
    if (this.x < 90) {
      return
    }
    this.x -=70
  },
}




// EVENT LISTENER
document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'ArrowLeft':
      player.moveLeft()
      break
    case 'ArrowRight':
      player.moveRight()
      break
  }
})




// COLLIDE TEST

// function isCollide(a,b){
//   aRect=a.getBoundingClientRect();
//   bRect=b.getBoundingClientRect();
//   return !((aRect.bottom<bRect.top)||(aRect.top>bRect.bottom)||(aRect.right<bRect.left)||(aRect.left>bRect.right))
// }


// if(isCollide(player, obstacle)){
//   console.log("Bang!");
// }


// if(isCollide(player, obstacle)){
//   console.log("Bang!");
// }
