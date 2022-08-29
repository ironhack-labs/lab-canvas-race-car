window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };

};

  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')

  const imgCar = new Image()
  imgCar.src = "../images/car.png"


  let obst = []

  class Car{
    constructor(x,y,w,h,foto){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.foto  = foto
  }
    rigth(){
      if (this.x < 380){
        this.x += 30
        }
      
    }
    left(){
      if (this.x > 50){
      this.x -= 30
      }
    }
    imagen(){
      ctx.drawImage(this.foto, this.x, this.y, this.w, this.h)
    }
  }


  class Obstaculo {
    constructor(x,y,w,h){
      this.x = x
      this.y = y
      this.w = w
      this.h = h
    }

    imagen(){
      ctx.fillStyle = 'red'
      ctx.fillRect(this.x, this.y, this.w, this.h)
      this.y++
      
    }
  }


  
function control(carro){
  document.addEventListener("keyup", (evento) =>{
      
      switch(evento.code){
          case "ArrowRight":
              carro.rigth()
              break
          case "ArrowLeft":
              carro.left()
              break
      }
  })
}

function crearObst(){
  const obstAleatorio = Math.floor(Math.random() * 450)
  if (obstAleatorio === 3){
    const obst1 = new Obstaculo(Math.floor(Math.random() * 250),0,160,30)
      obst.push(obst1)
      obst1.imagen()
      
  }

  if (obstAleatorio === 2){
    const obst2 = new Obstaculo(Math.floor(Math.random() * 80),0,160,30)
      obst.push(obst2)
      obst2.imagen()
      
  }

  if (obstAleatorio === 1){
    const obst3 = new Obstaculo(Math.floor(Math.random() * 400),0,160,30)
      obst.push(obst3)
      obst3.imagen()
      
  }

  
}

let score = 0

function obtenerPuntos(score){
  ctx.fillStyle = "#000"
  ctx.font = "30px Verdana"
  ctx.fillText(`Score: ${score}`, 50, 35)
}


  function startGame() {
    const carro = new Car(210, 530, 80, 100, imgCar)
    control(carro)
    carro.imagen()
    
    
    
  let intervalo = setInterval(()=>{
    ctx.clearRect(0,0,700,700)
    carro.imagen()
    score+=1
    obst.forEach((obstaculo, index) =>{
      obstaculo.imagen()
       if(obstaculo.x < carro.x+carro.w && 
        obstaculo.x + obstaculo.w > carro.x && 
        obstaculo.y < carro.y + carro.h && 
        obstaculo.y + obstaculo.h > carro.y){
       alert(`Game Over su score fue de: ${score}`)
       clearInterval(intervalo)
           }
    })

    obtenerPuntos(score)

  crearObst()
  }, 1000/30)
    
     
  }


