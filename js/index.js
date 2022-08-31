window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};
  let canvas = document.getElementById("canvas")
  let ctx = canvas.getContext('2d')
  


  let carro = new Image()
  carro.src = "./images/car.png"

 let obstaculos1 = []
  
  class Carro {
    constructor(x,y,w,h,imagen){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.imagen = imagen
    }
    
    moveRight(){
      
      if(this.x< 380){
        this.x += 30
      }

    }
    moveLeft(){
      
      if(this.x > 50){
        this.x -= 30
      }
    }

    draw(){
      ctx.drawImage(this.imagen,this.x,this.y,this.w,this.h)
    }

  }

  class Obstaculos{
    constructor(x,y,w,h){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
    }

    draw(){
      ctx.fillStyle = "blue"
      ctx.fillRect(this.x,this.y,this.w,this.h)
      this.y++
    }

  }

function controles(carro){
  document.addEventListener("keyup",(evento) => {
    switch (evento.code){
      case "ArrowLeft":
        console.log("moviendo")
      carro.moveLeft()
      break;
      case "ArrowRight":
      carro.moveRight()
      break;

    }
  })
}

function createObstaculos(){
  const obstAleatorio = Math.floor(Math.random() * 450)
  if (obstAleatorio === 3){
    const obst1 = new Obstaculos(Math.floor(Math.random() * 250),0,160,30)
      obstaculos1.push(obst1)
      console.log(obstaculos1)
      obst1.draw()
      
  }

  if (obstAleatorio === 2){
    const obst2 = new Obstaculos(Math.floor(Math.random() * 150),0,160,30)
      obstaculos1.push(obst1)
      console.log(obstaculos1)
      obst2.draw()
      
  }
  
}
let score = 0

function getPoints(score){
  ctx.fillStyle = "#000"
  ctx.font = "30px Arial"
  ctx.fillText(`Score: ${score}`, 50, 35)}

  function startGame() {
    let auto = new Carro(210,530,80,100,carro)
    
    controles(auto)
    auto.draw()

    let intervalo = setInterval(()=>{
      ctx.clearRect(0,0,700,700)
      auto.draw()
      score+=1
      obstaculos1.forEach((obst1) =>{
        obst1.draw()
        if(obst1.x < auto.x + auto.w && 
          obst1.x + obst1.w > auto.x && 
          obst1.y < auto.y + auto.h && 
          obst1.y + obst1.h > auto.y){
         alert(`Game Over su score fue de: ${score}`)
         clearInterval(intervalo)
             }
         
      })
  
      getPoints(score)
  
      createObstaculos()
    }, 1000/30)
  }
