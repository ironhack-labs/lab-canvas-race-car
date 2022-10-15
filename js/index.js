const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
const img2 = new Image();
img2.src = "./images/car.png"
img.src = "./images/road.png"
let obstaclesContainer = []
let counter = 0
let score = 0
let gamePlay = true
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
} 
class Car {
  constructor() {
    this.x = canvas.width / 2 - 45,
    this.y = canvas.height / 2 + 200,
    this.w = 80,
    this.h = 150,
    this.speed = 40   // speed of ?
  }   
      draw() {
      ctx.drawImage(img2, this.x, this.y, this.w, this.h)
      }
        moveLeft() {
          if (this.x < 50) {     //limits the area to the left by pixels
            return
          }
            this.x -= this.speed
        }
            moveRight() {
              if (this.x > canvas.width - (this.w + 50)) {
                return
              }
                this.x += this.speed
            }
              contains(b) {
                return (this.x < b.x + b.w) &&
                (this.x + this.w > b.x) &&
                (this.y < b.y + b.h) &&
                (this.y + this.h > b.y)
              } 
}                
const car1 = new Car();

class Obstacles  {
  constructor() {
    this.w = (Math.random() * 150) + 50, //Math.random() * (max - min) + min;
    this.x = (Math.random() * (canvas.width - 200)) +25, //Math.random() *
    this.y = 0,
    this.h = 50,
    this.color = "red",
    this.speedY = 1
  }
    draw() {
      if(this.y > canvas.height){    // if(this.y > canvas.height / 2) controls the length it will go
        return
      }
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        this.handleMove()
    }  
    
        handleMove() {
          this.y += this.speedY
        } 
}


document.addEventListener("keydown",(e) => {  
  if (e.keyCode === 39){
    car1.moveRight()
  } else if (e.keyCode === 37){ 
      car1.moveLeft()
    }  
})
const update = () => {
  if (gamePlay){
    ctx.drawImage(img, 0, 0, 500, 700);
    car1.draw();
    drawScore()
    requestAnimationFrame(update)
    for (let i =  0; i < obstaclesContainer.length; i++) {
      obstaclesContainer[i].draw();
    }


      obstaclesContainer.forEach((ele) => {
          if(car1.contains(ele)){
            gamePlay = false
          }
      })
              console.log(gamePlay)
  } 
            else {
              blackScreen()
              youLost()
              endscore()
              
            }
}
const blackScreen = () => {
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
const endscore = () => {
  ctx.fillStyle = "white"
  ctx.font = "50px arial"
  ctx.fillText(`your score is: ${score}`, 80, 450)   

}
const youLost = () => {
  ctx.fillStyle = "red";
  ctx.font = "70px arial"; 
  ctx.fillText("Game Over!", 60, 350)

}

const drawScore = () => {
  ctx.fillStyle = "black"
  ctx.font = "30px Arial"
  ctx.fillText(`Score:${score}`, 100,100)
}

function startGame() {
  setInterval(() => {
      const obstacle1 =  new Obstacles
      obstacle1.speedY += counter
      counter = counter + 0.1
      score++
      obstaclesContainer.push(obstacle1)
  }, 2300) 
      update(); 
}

