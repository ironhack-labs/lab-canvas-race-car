const canvas=document.querySelector('canvas')
const ctx=canvas.getContext('2d')
let frames=0
// let interval
const myObstacles=[]

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }
};

class Carrito{
  constructor(){
    this.x=(canvas.width/2)-30
    this.y=canvas.height-150
    this.width=60
    this.height=100
    this.img=new Image()
    this.img.src="./images/car.png"
    this.img.onload=()=>{
      ctx.drawImage(this.img, this.x,this.y, this.width, this.height)
    }
  }
  draw(){
    ctx.drawImage(this.img, this.x,this.y, this.width, this.height)
  }
  moveleft(){
    this.x-=2
  }

  moveright(){
   this.x+=2
  }

}

class Obstacle{
    constructor(width, height, x, y){
      this.width = width
      this.height = height
      this.x = x
      this.y = y
      this.speedX
    }
    draw(){
      ctx.fillStyle="red"
      ctx.fillRect(canvas.width/2,0,50,10)
      ctx.stroke()
    }
    // crasWith(obstacle){
    //   return !(
    //       this.bottom()<obstacle.top()||
    //       this.top()>obstacle.bottom()||
    //       this.right()<obstacle.left()||
    //       this.left()>obstacle.right()
    //   )
    // }
}


const carrito=  new Carrito()

document.onkeydown=event=>{
  event.preventDefault()
  switch (event.keyCode) {
    case 37:
      carrito.moveleft()
    break;
    case 39:
      carrito.moveright()
    break;
    default:
      break;
  }
  updateCanvas()
}

function updateCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  pintaEscenario()
  carrito.draw()
  drawObstacles()
  updateObstacles()
}


updateCanvas()

function drawObstacles(){
  myObstacles.forEach(obstacles=>{
      obstacles.y-=1
      obstacles.draw()
  })
}

function updateObstacles(){
  if(frames%120===0)//cada 120 
  {
      //let x= canvas.width;
      let x= canvas.width;
      let minWidth=canvas.width*0.075
      let maxWidth=canvas.width*0.75
      let width=Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth)
      obstacles.draw()

      myObstacles.push(new Obstacle(10,width,'red',x,0))
      
  }
}



function pintaEscenario(){
ctx.beginPath();
//da el color al làpiz
ctx.fillStyle='gray'
//dibujas un relleno
ctx.fillRect(0,0,canvas.width,canvas.height)
ctx.stroke()
ctx.closePath()


//empezar el camino
ctx.beginPath();
//da el color al làpiz
ctx.fillStyle='green'
//dibujas un relleno
ctx.fillRect(0,0,40,canvas.height)

ctx.stroke()
ctx.closePath()


ctx.beginPath();
//da el color al làpiz
ctx.fillStyle='green'
//dibujas un relleno
ctx.fillRect(canvas.width-40,0,40,canvas.height)

ctx.stroke()
ctx.closePath()


ctx.beginPath();
//da el color al làpiz
ctx.fillStyle='white'
//dibujas un relleno
ctx.fillRect(60,0,20,canvas.height)
ctx.stroke()
ctx.closePath()


ctx.beginPath();
//da el color al làpiz
ctx.fillStyle='white'
//dibujas un relleno
ctx.fillRect(canvas.width-80,0,20,canvas.height)
ctx.stroke()
ctx.closePath()

ctx.beginPath();
//da el color al làpiz
ctx.strokeStyle='white'
ctx.lineWidth=10
ctx.setLineDash([20])
ctx.rect(canvas.width/2,-10,1000,canvas.height*2)
ctx.stroke()
ctx.closePath()

}


