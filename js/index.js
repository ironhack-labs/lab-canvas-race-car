window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  }
}

//______________CANVAS_____________
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")


//______________IMAGE______________
const carImg = new Image()
carImg.src = "../images/car.png"


//______________ITEMS______________
let obstacles = []


//______________CLASS______________
class Car{
  constructor(x, y, w, h, image){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.image = image
  }
  rightKey(){
    if(this.x + this.w < 470){
      this.x += 50
    }
  }
  leftKey(){
    if(this.x > 30){
      this.x -= 50
    }
  }
  toShow(){
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
  }
}

class Obstacles{
  constructor(x, y, w, h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
   }
  toShow(){
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.w, this.h);
    this.y += 10
  }
}


//______________PRESS KEYS______________
function controls(car){

  document.addEventListener("keyup",(event) => {
    switch(event.code){
        case "ArrowRight":
            car.rightKey()
            break
        case "ArrowLeft":
            car.leftKey()
            break
      }
  })
}

//______________CREATE OBSTACLES______________
function createObstacles(){
  const randomObstacles = Math.floor(Math.random() * 200)
  
  if (randomObstacles === 3){
    const firstObstacle = new Obstacles(Math.floor(Math.random() * 250),0, 168, 25)
      obstacles.push(firstObstacle)
      firstObstacle.toShow()
      
  }

  if (randomObstacles === 2){
    const secondObstacle = new Obstacles(Math.floor(Math.random() * 150),0, 168, 25)
      obstacles.push(secondObstacle)
      secondObstacle.toShow()
      
  }
}

//______________SCORE______________
let score = 0

function getPoints(score){
  ctx.fillStyle = "black"
  ctx.font = "35px impact"
  ctx.fillText(`Score: ${score}m`, 50, 35)}


//______________STAR GAME______________
function startGame() {
  let car = new Car(210, 600, 80, 100, carImg)
  controls(car)
  car.toShow()
  let intervalo = setInterval(()=>{
    ctx.clearRect(0,0,700,700)
    car.toShow()
    score+=1
    
    obstacles.forEach((firstObstacle) =>{
      firstObstacle.toShow()
      if(firstObstacle.x < car.x + car.w && 
        firstObstacle.x + firstObstacle.w > car.x && 
        firstObstacle.y < car.y + car.h && 
        firstObstacle.y + firstObstacle.h > car.y){
          
          alert(`'Game Over' - Maximum distance: ${score}m`)
          clearInterval(intervalo)
           }
       
    })
  
    getPoints(score)
    createObstacles()
  }, 100)

  }

