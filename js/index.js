window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')

  class Car {
    constructor(img, x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.img = img
      }

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}

class Obstacle {
  constructor(x, y, w, h, color) {
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.color = color
  }
  draw = () => {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.w, this.h)
  }
  move = () => {
      this.y += 1
      this.draw()
  }
  outofscreen = () => {
    if (this.y > canvas.height) {
      score++
      return true
    } else {
      return false
    }
  }

}

const obstacles = []
let obsCreator = setInterval(function () {
  let color = 'red'
  let obs = new Obstacle(Math.random() * canvas.width, 0, 200, 30, color)

  
  obstacles.push(obs)
}, 3000)

function detectCollision(rect1, rect2) {
  if (rect1.x < rect2.x + rect2.w &&
      rect1.x + rect1.w > rect2.x &&
      rect1.y < rect2.y + rect2.h &&
      rect1.y + rect1.h > rect2.y) {
      console.log("collision")
      cancelAnimationFrame(animatedId)
      clearInterval(obsCreator)
  }
}

let score = 0 

function drawScore() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Score: "+score, 100, 100);
}

let car = new Image()
car.src = './images/car.png'
var player = new Car(car, 225, 550, car.width/3, car.height/3)
window.onkeydown = function (e) {
  if (e.key === 'ArrowLeft') {
      player.x -= 10
  }
  if (e.key === 'ArrowRight') {
      player.x += 10
  }
}
let animatedId = null;
  function startGame() {
    animatedId = requestAnimationFrame(startGame)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let road = new Image()
    road.src = './images/road.png'
    ctx.drawImage(road,0,0,canvas.width,canvas.height);  
    player.draw()
    for (let obs in obstacles) {
      obstacles[obs].move()
      detectCollision(obstacles[obs], player)
      if (obstacles[obs].outofscreen()){
        obstacles.splice(obs,1)
      }
    }
    drawScore()
  }
};




