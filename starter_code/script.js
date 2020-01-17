const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let interval
let frames=0;
let score=0;
let finish=false


const imgs={
  nave: './images/carro.png'
}
const obstacles = []

class Nave{
  constructor(x,y){
  this.x=x
  this.y=y
  this.width=50
  this.height=80
  this.img=new Image()
  this.img.src='images/car.png'
  //this.img.onload = () => {
  //  this.draw()
 // }
  }
  
  draw(){
    
    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height
    )
  
  }
 moveToLeft(){
   if(this.x<=40)return;
this.x-=5
//drawBoard();
//this.draw()
 }
 moveToRight(){
   if(this.x>=260)return
this.x+=5
//drawBoard();
//this.draw()
 }
 
 isTouch(obstacle){
 return(
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y

 )
 }

  }
  const carro=new Nave(150,410);



 class Obstacles {
   constructor(x,y){
     this.x=x
     this.y=y
     this.width=50
     this.height=10

   }

   draw(){
     this.y+=10
     ctx.fillStyle='red'
      ctx.fillRect(this.x,this.y,this.width,this.height)
 
   }

   isTouch(obstacle){
    return(
         this.y >= canvas.height
   
    )
    }

 }  







  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  

  interval = setInterval(update, 1000 / 60)
  
  }

  document.addEventListener('keydown',({keyCode})=>{
    if(keyCode===37)
    carro.moveToLeft()
    if(keyCode===39)
    carro.moveToRight()
  })

function generateObstacles(){
let rnd;
if(frames%20===0){
  rnd=Math.floor(Math.random() * (canvas.width-80 - 30 + 1)) + 30;
 // rnd=Math.random()*(canvas.width-80)
  obstacles.push (new Obstacles(rnd,-20))
}

}

function drawObstacles(){
  generateObstacles();
  obstacles.forEach(obstacle=>obstacle.draw())
}

function gameOver(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle='black'
 ctx.fillRect(0,0,350,510)
 ctx.fillStyle='red'
 ctx.font='18px Arial '
    ctx.fillText('GAME OVER!',120,250)
    ctx.fillStyle='yellow'
    ctx.font='18px Arial '
    ctx.fillText('YOUR FINAL SCORE:',40,35)
    finish=true;
}

function checkColition(){
obstacles.forEach((obstacle,indx)=>{
  if(carro.isTouch(obstacle)){
    gameOver();

  }
})
}

function checkScore(){
  obstacles.forEach((obstacle,indx)=>{
    if(obstacle.isTouch()){
      score+=10;
      return obstacles.splice(indx, 1)
    }

  })
}

  function update(){
    if(!finish){
    frames++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBoard();
    carro.draw();
    drawObstacles();
    checkColition();
    checkScore();
    
    ctx.fillStyle='yellow'
    ctx.font='36px Arial '
    ctx.fillText(String(score),250,40)
    
  }
  }

function drawBoard(){
ctx.fillStyle='green'
 ctx.fillRect(0,0,350,510)
 
 
 ctx.fillStyle='gray'
 ctx.fillRect(30,0,290,510)
 ctx.fillStyle='white'
 ctx.fillRect(40,0,10,510)
 ctx.fillRect(300,0,10,510)

 ctx.lineWidth=5;
 ctx.strokeStyle='white'

 for(let i=0;i<21;i++){
 ctx.moveTo(175,25*i)
 ctx.lineTo(175,20+(25*i))
 ctx.stroke()
 }


}




