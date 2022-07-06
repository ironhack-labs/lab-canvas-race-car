window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
  function startGame() {}
  function startGame() {
    let score;
    let Obstaculos = []
    const CarRoad = document.querySelector("#game-board")
    CarRoad.classList.add("Road")
    const Canvas = document.querySelector("#canvas")
    let Frames = 0
    let SetnewCarrito;
    const context = Canvas.getContext("2d")
    const Clear = ()=>{
      context.clearRect(0,0,500,700 )
    }
  
  
  
  
 const roadBlocker=()=>{
  Frames+=1
  score = Frames
  if(Frames % 321 === 0){
    let xMax = 500
    let yMax = 700
    const Aleatorio = Math.floor(Math.random()*400)
    Obstaculos.push(new constructorCar(Aleatorio,5,0,0))
  }
  if(Frames % 473 === 0){
    let xMax = 500
    let yMax = 700
    const Aleatorio = Math.floor(Math.random()*-400)
    Obstaculos.push(new constructorCar(Aleatorio,5,500,0 ))
  }
  
  Obstaculos.forEach(obstaculo=>{
    obstaculo.DrawObstaculos()
    obstaculo.NewPositionObstaculos()
    if(carrito.collision(obstaculo)){
      GameOver()
    }
  })
  
 }
  
  const newCarrito = ()=>{
  carrito.NewPosition()
  Clear()
  carrito.DrawCarrito()
  roadBlocker()
 }
  
 SetnewCarrito = setInterval(newCarrito,20)
  
 const GameOver=()=>{
  clearInterval(SetnewCarrito)
  carrito.Score()
 }
 class constructorCar{
  constructor(width,height,x,y){
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.velocidadX = 0
    this.imgen = new Image()
    this.imgen.src = "images/car.png"
  }
  
  DrawCarrito(){
    const ctx = context
    ctx.drawImage(this.imgen, this.x, this.y, this.width, this.height)
  }
  NewPosition(){
    this.x+= this.velocidadX
  }
  DrawObstaculos(){
    const ctx = context
    ctx.fillRect(this.x,this.y,this.width,this.height)
  }
  NewPositionObstaculos(){
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
    context.fillText(Gameover,150,300)
    const TuScore = `Your final Score : ${score}`
    context.font = '30px serif'
    context.fillStyle = "white"
    context.fillText(TuScore,120,350)
  }
 }
  
 const carrito = new constructorCar(70,100,225,600)
 carrito.DrawCarrito()
  
 document.addEventListener("keydown",(evento)=>{
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
 