const canvas = document.querySelector('#background')
const ctx = canvas.getContext('2d')
let interval = 0
//let bars = []
//let frames

class Car {

  constructor () {
    this.width = 25
    this.height = 35
    this.x = 250
    this.y = 950
    this.image = new Image()
    this.image.src = './images/car.png'

  }
  draw() {

    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}
 
const car = new Car()

function background (){
  ctx.fillStyle = 'green'
  ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)
  ctx.fillStyle = 'gray'
  ctx.fillRect(50,0,400,ctx.canvas.height)
}
/*
class Bars {
  constructor (x, width){
    this.x = x
    this.y = 0
    this.width = width
    this.height = 5
  }

} */


    
function generateBars() {
  let rndX = Math.random() * canvas.width
  let rndHeight = Math.random() * canvas.height 
  ctx.fillStyle = 'red'
  ctx.fillRect(rndX,rndHeight,rndX,10)

}
  /*
  bars.push(fillRect())
  bars.forEach(bars => {
   bars.draw()
    
  })
  
 }


function drawBars() {
  if (frames % 250 === 0) {
    generateBars()    
  }

}
*/
  


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
      
   
    startGame();
  };

  function startGame() {
    
    if (interval) return
    interval = setInterval(update, 1000/2)
   

  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  background()
  car.draw()
  generateBars()
 
     }


addEventListener('keydown', (e) => {
  if (e.keyCode === 39 ) {
     car.x += 20
  }  
 
  else if(e.keyCode === 37) {
   car.x-=20
   } 
})
