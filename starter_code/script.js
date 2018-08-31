window.onload = function() {
  
  
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var gameOver=true  

document.getElementById("start-button").onclick = function() {
  if(gameOver){  
  dibujar();
    start();
  }
  gameOver=false
  };

    var interval = null
    function dibujar() {
    ctx.beginPath()
    ctx.fillStyle='#40963c'
    ctx.fillRect(0,0,600,800)
    ctx.beginPath()
    ctx.fillStyle='#808080'
    ctx.fillRect(50,0,400,800)
    ctx.beginPath()
    ctx.fillStyle='white'
    ctx.fillRect(70,0,20,800)
    ctx.beginPath()
    ctx.fillStyle='white'
    ctx.fillRect(410,0,20,800)
    var imagen = new Image()
    imagen.src='./images/car.png'
    ctx.drawImage(imagen,carrito.x,580,50,100)
  
};
function start(){
  
  
  class Obstaculo{
    constructor(x,y,w,h,color,inicio){
      this.x=x
      this.y=y
      this.w=w
      this.h=h
      this.color=color
      this.inicio=inicio
    }
  
    draw(){
      ctx.fillStyle=this.color 
      ctx.fillRect(this.x,this.y,this.w,this.h)
    }
  
  }
  
  var todos = []
  for(var i= 0; i<120;i++){
    var azarW = Math.floor((Math.random()*200)+70)
  var azarX = Math.floor((Math.random()*(280-azarW-100))+150)
    todos[i] = new Obstaculo(azarX,(100 -(i*250)),azarW,20,'red',(100 -(i*250)))
    console.log(todos[i])
  }
  console.log(todos)
  moverObs(todos)
}
function moverObs(todos){
  interval = setInterval(function(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  dibujar()
   
  for(i=0;i<120;i++){
    todos[i].y++
    todos[i].draw()
    if (carrito.x < todos[i].x + todos[i].w &&
      carrito.x + 50 > todos[i].x &&
      570 < todos[i].y +10 &&
      50 + 570 > todos[i].y) {
        console.log(carrito)
        console.log(todos[i])
        gameOver=true
      }
  }
  if(gameOver){
    clearInterval(interval)
  }
  },10)
}
class Jugador{
  constructor(posX,posY,width,height){
    this.x=posX
    this.y=posY
    this.width=width
    this.height = height
  }
  moverLeft(){
    if(this.x<0)return
    this.x-=1;
  }
  moverRight(){
    if(this.x>550)return
    this.x+=1;
  }
}
var carrito = new Jugador(225,480,50,100)
window.addEventListener('keydown', function (e) {
  if(!gameOver){
    if(e.keyCode===37){
    if(carrito.x<80)return
    carrito.x-=40;
    } else  if(e.keyCode===39){
    if(carrito.x>380)return
    carrito.x+=40;
      }
    }
})
}