
var canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')
let obst = []
let frames = 0
let running = false
let crash = false
let velocity = 3
let score = 0
window.onload = function(){
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
  function startGame() {
    backgroundImg.dibujar()
    backgroundImg.speed = velocity 
    updateCanvas()
  }  
}
function updateCanvas(){
  console.log(frames)
  backgroundImg.mover()
  ctx.clearRect(0, 0, 500, 700)
  backgroundImg.dibujar()
  frames++
  masseratti.draw()
  updateObstacles()
  requestAnimationFrame(updateCanvas)      //RAF - repite la funcion de adentro infinitamente
}
const imgRaw = new Image()
imgRaw.src = "./images/road.png"
// 1)  desarrollo de fondo "road" OBJETO 
const backgroundImg = {
  img: imgRaw ,
  x:0,
  y:0,
  speed:0,
  mover: function(){
    this.y += this.speed
    this.y %= canvas.height
  },
  dibujar : function(){
    ctx.drawImage(this.img,this.x,this.y, canvas.width, canvas.height)
    ctx.drawImage(this.img,this.x,this.y-canvas.height, canvas.width, canvas.height)
  }
}
//2) Creacón de clases 
class Component{
  constructor(width,height,x,y){
    this.width = width
    this.height = height
    this.x = x
    this.y = y
  }
  izquierda(){
    return this.x
  }
  derecha(){
    return this.x + this.width
  }
  arriba(){
    return this.y
  }
  abajo(){
    return this.y + this.height
  }
  crash(obstacle){
    console.log(obstacle)
    return !(
      this.abajo() < obstacle.arriba() ||
      this.arriba() > obstacle.abajo()||
      this.derecha() < obstacle.izquierda()||
      this.izquierda() > obstacle.derecha()
    )
  }
}
class Carro extends Component{
  constructor(width,height,x,y){
    super(width,height,x,y)
    this.speedx =0
    const carRaw = new Image()
    carRaw.src = "./images/car.png"
    window.addEventListener("load",()=>{
      this.carimg = carRaw
      this.draw()
    })
  }
  draw(){
    ctx.drawImage(this.carimg, this.x, this.y,this.width,this.height)
  }
  moveLeft(){
    this.x-=25
  }
  moveRight(){
    this.x+=25
  }
}
class Obstacles extends Component{
  constructor(width,height,x,y){
    super(width,height,x,y)
    this.color = "red"
    this.speedY = 0
  }
  draw(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x,this.y,this.width,this.height)
  }
  newPos(){
    this.y += this.speedY
  }
}
//3 funciones de actualización 
function updateObstacles(){
  for(let i=0;i<obst.length;i++){
    obst[i].y += velocity
    obst[i].draw()
    console.log(obst)
  }
  if(frames%80 === 0){
    let minWidth = 40
    let maxWidth = 280
    let width = Math.floor(Math.random()*(maxWidth-minWidth)) + minWidth
    console.log(width)
    let position = Math.floor(Math.random()*canvas.width-width)
    obst.push(new Obstacles(width,12,position,0))
  }
}
let masseratti = new Carro(50,90,225,600)
let xi = 225
function carro(){
  let base_image = new Image()
  base_image.src = "images/car.png"
  base_image.onload = function(){    // las imagenes siempre van con onload
  ctx.drawImage(base_image, xi, 600,50,90);
  }
}
document.addEventListener("keydown", (e) => {
  console.log(e)
  switch (e.keyCode){
      case 37:
          masseratti.moveLeft()
          break
      case 39:
        masseratti.moveRight()
          break
  }
})
