// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };

let canvas = document.getElementById('racecarCanvas')

console.log(canvas)

const ctx = canvas.getContext("2d")



canvas.height = window.innerHeight
canvas.width = window.innerWidth


let road = new Image()
road.src = '../images/road.png'
road.onload = function(e){
  drawRoad()
}
let roadi = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height
}
function drawRoad() {
  ctx.drawImage(road, 0, 0, roadi.width, roadi.height)
}

let carImage = new Image()
carImage.src = '../images/car.png'
carImage.onload = drawCar;
let car = {
  x: 675 , 
  y: 500,
  w: 100,
  h: 160
}
function drawCar() {
  ctx.drawImage(carImage, car.x, car.y, car.w, car.h)
}

document.body.onkeydown = function(e) {
  if(e.key === 'ArrowUp'){ // up
    car.y -= 50
  }
  if(e.key === 'ArrowDown'){ // down
    car.y += 50
  }
  if (e.key === "ArrowRight"){ // right
    if(car.x < 1200){
    car.x += 50
    }
  }
  if (e.key === 'ArrowLeft'){ // left
    if(car.x > 140){
    car.x -= 50
    }
  }
}

function createObstacles() {

  obstacles.forEach(obstacle =>{
    ctx.fillStyle = obstacle.color
    ctx.fillRect(obstacle.x, obstacle.y+=5, obstacle.w, obstacle.h)
    detectCollision(obstacle)
    })
  }

  let obstacles = []
  setInterval(function(){
    let obstacle =
      {
        x: Math.floor(Math.random() * (1200 - 140) + 140), 
        y: 0, 
        w: Math.floor(Math.random() * (200 - 50) + 50), 
        h: 20,
        color: '#'+ ((1 << 24) * Math.random()|0).toString(16)
      }
      obstacles.push(obstacle)
  }, 500)

let animateId;

function detectCollision(obs){
  if (obs.x < car.x + car.w &&
    obs.x + obs.w > car.x &&
    obs.y < car.y + car.h &&
    obs.y + obs.h > car.y) {
     // collision detected!
    cancelAnimationFrame(animateId)
 }
}

function animate (){
  animateId = window.requestAnimationFrame(animate)

  ctx.clearRect(0,0, canvas.width, canvas.height)

  drawRoad()
  
  drawCar()

 createObstacles()
}

window.requestAnimationFrame(animate)
