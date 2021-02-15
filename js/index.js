var canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')
window.onload = function(){
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
  let obst = []
  let frames = 0
  let running = false
  let crash = false
  let velocity = 3
  let score = 0
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
  carrito.dibujar()
  frames++
  requestAnimationFrame(updateCanvas)      //RAF - repite la funcion de adentro infinitamente
}
const imgRaw = new Image()
imgRaw.src = "./images/road.png"
const carRaw = new Image()
carRaw.src = "./images/car.png"
// desarrollo de fondo "road" dentro de un objeto 
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
const carrito = {
  img : carRaw,
  x:225,
  y: 600,
  moverIzq: function(){
    this.x -= 25
  },
  moverDer: function(){
    this.x += 25
  },
  dibujar : function(){
    ctx.drawImage(this.img,this.x,this.y,50,90)
  }
}
// class Carro{
//   constructor(){
//     img =  carRaw
//     x= 225
//      y=  600
//   mover=  function(){
//     this.x -= 25
//     this.y += 25
//   }
//   dibujar =  function(){
//     ctx.drawImage(this.img,this.x,this.y,50,90)
//   }
//   }
// }
let xi = 225
function carro(){
  let base_image = new Image()
  base_image.src = "images/car.png"
  base_image.onload = function(){    // las imagenes siempre van con onload
  ctx.drawImage(base_image, xi, 600,50,90);
  }
}
// function road(){
//   let base_image = new Image()
//   base_image.src = "images/road.png"
//   base_image.onload = function(){    // las imagenes siempre van con onload
//     // ctx.drawImage(base_image, 0, 0 ,500,700)
//   }
// }
let largoInicial = 220
function obst(){
  ctx.fillStyle = "yellow"
  ctx.fillRect(largoInicial,0,280,20)
  ctx.closePath();
}
setInterval(()=>{
  largoInicial = Math.floor(Math.random()*300)
  obst()
},500)
document.addEventListener("keydown", (e) => {
  console.log(e)
  switch (e.keyCode){
      case 37:
          carrito.moverIzq()
          break
      case 39:
        carrito.moverDer()
          break
  }
})


