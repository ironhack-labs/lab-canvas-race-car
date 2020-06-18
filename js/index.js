let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext('2d')

let boardImg = new Image()
boardImg.src = 'images/road.png'

let carImg = new Image()
carImg.src = 'images/car.png'

function startGame() {
  ctx.drawImage(boardImg, 0,0,500,700)
  ctx.drawImage(carImg,225,575,50,100)
}

document.getElementById('start-button').onclick = () => {
  startGame();
  movement()
  obstacles()
};

let id = null
let o = new Obstacle
o.setRandomValues()
ctx.fillStyle = "#A04A3B"

let obs = []
obs.push(o)
setInterval(() => {
  let o = new Obstacle
  o.setRandomValues()
  obs.push(o)
},2000)

let car = {
  x: 225,
  y: 575,
  width: 50,
  height: 100
}

function obstacles() {
  id = window.requestAnimationFrame(obstacles)
  ctx.clearRect(0,0,500,700)
  for (elem of obs) {
  
    elem.count++
    ctx.drawImage(boardImg, 0,0,500,700)
    ctx.drawImage(carImg,car.x,car.y,car.width,car.height)
    ctx.fillRect(elem.x,elem.y + elem.count,elem.width,elem.height)
  }
}

function movement() {
  document.onkeydown = (e) => {
    console.log(e)
    if (e.key === "ArrowLeft") {
      ctx.clearRect(0,0,500,700)
      car.x-=10
      if (car.x < 0) {
        car.x += 10
        ctx.drawImage(boardImg, 0,0,500,700)
        ctx.drawImage(carImg,car.x,car.y,car.width,car.height)
      }
      else {
        ctx.drawImage(boardImg, 0,0,500,700)
        ctx.drawImage(carImg,car.x,car.y,car.width,car.height)
      }
    }

    if (e.key === "ArrowRight") {
      ctx.clearRect(0,0,500,700)
      car.x+=10
      if (car.x > 450) {
        car.x-=10
        ctx.drawImage(boardImg, 0,0,500,700)
        ctx.drawImage(carImg,car.x,car.y,car.width,car.height)
      }
      else {
        ctx.drawImage(boardImg, 0,0,500,700)
        ctx.drawImage(carImg,car.x,car.y,car.width,car.height)
      }
    }
  }
}
