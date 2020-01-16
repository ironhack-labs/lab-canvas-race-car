const canvas = document.querySelector('canvas')
const canvasCtx = canvas.getContext('2d')
let frames = 0
let interval
let canvasClass
let carClass
let obsArr = []


class Canvas{
  constructor(){
    this.x = 500,
    this.y = 0
  }

  drawRoad(){
      const canvas = document.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      ctx.fillStyle="gray";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle="green";
      ctx.fillRect(0,0,50,canvas.height);
      ctx.fillRect(350,0,50,canvas.height);
      ctx.fillStyle="white";
      ctx.fillRect(60,0,10,canvas.height);
      ctx.fillRect(330,0,10,canvas.height);
      for(let i=10;i<600;){
        ctx.fillRect(197,i,6,20);
        i+=60;
      }
  }
}

class Car{
  constructor(){
    this.x = 200,
    this.y = 450,
    this.car = new Image(),
    this.car.src = "images/car.png"
  }

  drawCar(){
    canvasCtx.drawImage(this.car, this.x, this.y, 40, 100)
  }

  goRight(){
    if(this.x > canvas.width) return
    this.x += 15
  }
  
  goLeft(){
    if(this.x <= 0) return
    this.x -= 15
  }
}

class Obstaculos{
    constructor(){
      this.x = Math.floor(Math.random()*260)+70,
      this.y = 20,
      this.width = Math.floor(Math.random()*200),
      this.height = 10
    }

    draw(){
       this.y += 3
       if(this.x + this.width < 330){
        canvasCtx.fillStyle = "orange"
        canvasCtx.fillRect(this.x, this.y, this.width, this.height)
       }
    }

    // createObs(){
    //   console.log('createObs')
    //   let x = Math.floor(Math.random() * 50)
    //   let y = Math.floor(Math.random() * 100)
    //   canvasCtx.fillStyle = "orange"
    //   canvasCtx.fillRect(x, y,  this.width, this.height)
    //   console.log(x, y)
}


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    canvasClass = new Canvas()
    carClass = new Car()
    canvasClass.drawRoad()
    startGame();
  };
};

function crearObst(){
  if(frames % 50 === 0){
      console.log('crearObst')
      obsArr.push(new Obstaculos())
  }
}

function drawObs(){
  crearObst()
  obsArr.forEach(obs => {
    obs.draw()
  })
}

function startGame() {
  if (interval) return
  interval = setInterval(update, 1000 / 24)
}


function update(){
  frames++
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height)
  canvasClass.drawRoad()
  carClass.drawCar()
  drawObs()
}


document.addEventListener('keydown', ({ keyCode }) => {
  switch (keyCode) {
    case 39:
      return carClass.goRight()
    case 37:
      return carClass.goLeft()
  }
})