let btnStart = document.getElementById("start-button")
btnStart.addEventListener("click",() =>{
   startGame()
})

  const cars = new Image()
  cars.src = "images/car.png"

  const obstaculos=[]

  let lienzo = document.getElementById("canvas")
  let ctx = lienzo.getContext("2d")

  class car{
    constructor(x,y,w,h,color,imagen){
      this.x=x
      this.y=y
      this.w=w
      this.h=h
      this.color=color
      this.imagen=imagen
    }
    derecha(){
      if(this.x + this.w <426){
        this.x += 50
    }
    }
    izquierda(){
     
      if(this.x + this.w >100){
        this.x -= 50
    }
    
  }
    dibujarse(){
      ctx.fillStyle=this.color
      ctx.fillRect(this.x,this.y,this.w,this.h)
      ctx.drawImage(this.imagen,this.x-50,this.y-12)
    }
  }

  class obstaculo{
    constructor(x,y,w,h){
      this.x=x
      this.y=y
      this.w=w
      this.h=h
    
      }
      dibujarse(){
        ctx.fillStyle="#890000"
        ctx.fillRect(this.x,this.y,this.w,this.h)
        this.y+=5
        }
  }

  function crearObstaculo(){
    const num = Math.floor(Math.random()*120)
    if(num===3){
      const obs = new obstaculo(Math.floor(Math.random()*420),0,Math.floor(Math.random()*230),40)
      obstaculos.push(obs)
      
    }
  }
  
  function teclas(carro){
    document.addEventListener("keyup",(evento) =>{
      console.log("Tecla tocada", evento.code);
      switch(evento.code){
        case "ArrowLeft":
          carro.izquierda()
          break;
        case "ArrowRight" :
          carro.derecha()
          break;
      }
    })
  }

  function mostrarDatos(distancia){
    ctx.fillStyle = "white"
    ctx.font="24px Arial"
    ctx.fillText(`Score ${distancia}`,70,25)
  }

  function startGame(){
    let distancia=0;
    const carro = new car(225,650,50,50,"green",cars)
    teclas(carro)
    mostrarDatos()
    
    

    setInterval(() =>{
      ctx.clearRect(0,0,500,700)
      carro.dibujarse()

      obstaculos.forEach((objetos) =>{
        objetos.dibujarse()
        if(
          carro.x + carro.w >= objetos.x &&
          carro.y <= objetos.y + objetos.h &&
          carro.y + carro.h >= objetos.y &&
          carro.x <= objetos.x + objetos.w
        ){
          alert("Choco")
        }
        
    })
      
      mostrarDatos(distancia)
      distancia +=1
      
      crearObstaculo()
    },1000/60)
  }
  startGame()