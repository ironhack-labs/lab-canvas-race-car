window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    const SelectRoad = document.querySelector("#game-board")
    SelectRoad.classList.add("Road")
    const Canvas = document.querySelector("#canvas")
    const context = Canvas.getContext("2d")
    const Clear = ()=>{
      context.clearRect(0,0,500,700 )
    }
  const Motor = ()=>{
  console.log("hola")
  carrito.NewPosition()
  Clear()
  carrito.DrawCarrito()
}
  setInterval(Motor,20)
class Construccion{
  constructor(width,height,x,y){
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.velocidadX = 0
    this.imgen = new Image()
    this.imgen.src = "https://i.ibb.co/W6QKZQF/car.png"
  }
  DrawCarrito(){
    const ctx = context
    ctx.drawImage(this.imgen, this.x, this.y, this.width, this.height)
  }
  NewPosition(){
    this.x+= this.velocidadX
  }
}
const carrito = new Construccion(50,100,225,600)
carrito.DrawCarrito()
document.addEventListener("keydown",(evento)=>{
  console.log(evento.code)
  switch (evento.code) {
    case "ArrowRight" :
      carrito.velocidadX +=1
      break;
      case "ArrowLeft":
        carrito.velocidadX -=1
        break;
    default:
      break;
  }
})
document.addEventListener("keyup",(e)=>{
  carrito.velocidadX = 0
})
  }
};
