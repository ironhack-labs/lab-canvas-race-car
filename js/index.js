  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };


    function startGame() {
      let score;
      let Paredes = []
      const SelectRoad = document.querySelector("#game-board")
      SelectRoad.classList.add("Road")
      const Canvas = document.querySelector("#canvas")
      let Frames = 0 
      let SetMotor;
      const context = Canvas.getContext("2d")
      const Clear = () => {
        context.clearRect(0,0,500,700 )
      }




  const Pared=()=>{
    Frames+=1
    score = Frames
    if(Frames % 321 === 0){
      let ejeX = 500
      let ejeY = 700
      const Aleatorio = Math.floor(Math.random()*400)
      Paredes.push(new Construccion(Aleatorio,5,0,0))
    }
    if(Frames % 473 === 0){
      let ejeX = 500
      let ejeY = 700
      const Aleatorio = Math.floor(Math.random()*-400)
      Paredes.push(new Construccion(Aleatorio,5,500,0 ))
    }

    Paredes.forEach(obstaculo=>{
      obstaculo.DrawParedes()
      obstaculo.NewPositionParedes()
      if(carrito.collision(obstaculo)){
        GameOver()
      }
    })

  }

    const Carro = ()=>{
    carrito.NewPosition()
    Clear()
    carrito.DrawCarrito()
    Pared()
  }

  SetCarro = setInterval(Carro,20)

  const GameOver=()=>{
    clearInterval(SetCarro)
    carrito.Score()
  }
  class Construccion{
    constructor(width,height,x,y){
      this.width = width
      this.height = height
      this.x = x
      this.y = y
      this.velX = 0
      this.imgen = new Image()
      this.imgen.src = "images/car.png"
    }

    DrawCarrito(){
      const ctx = context
      ctx.drawImage(this.imgen, this.x, this.y, this.width, this.height)
    }
    NewPosition(){
      this.x+= this.velX
    }
    DrawParedes(){
      const ctx = context 
      ctx.fillRect(this.x,this.y,this.width,this.height)
    }
    NewPositionParedes(){
      this.y +=2
    }
    collision(item){

      return (
          this.x < item.x + (item.width) &&
          this.x+ this.width > item.x &&
          this.y < item.y + item.height &&
          this.y + this.height > item.y
      )
  }
    Score(){
      const ctx = context
      const Gameover = "Game Over"
      context.font= "60px serif"
      context.fillStyle = "red" 
      context.fillText(Gameover,100,300)
      const TuScore = `Your final Score : ${score}`
      context.font = '30px serif'
      context.fillStyle = "white" 
      context.fillText(TuScore,120,350)
    }
  }

  const carrito = new Construccion(60,100,225,600)
  carrito.DrawCarrito()

  document.addEventListener("keydown",(evento)=>{
    switch (evento.code) {
      case "ArrowRight" :
        carrito.velX +=1
        break;
        case "ArrowLeft":
          carrito.velX -=1
          break;
      default:
        break;
    }
  })
  document.addEventListener("keyup",(e)=>{
    carrito.velX = 0
  })
    }
  };