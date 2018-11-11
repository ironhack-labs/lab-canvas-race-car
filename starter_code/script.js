var canvas = document.getElementById('c')
var ctx = canvas.getContext('2d')
var frames = 0;
var intervalo;
var road = []
var carrito
var evo = 100
var car= "./images/car.png"
    

function Board(y = -40) {
  this.y = y
  this.draw = function () {
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "gray"
    ctx.fillRect(canvas.width / 12, 0, 10 * (canvas.width / 12), canvas.height);
    ctx.fillStyle = "white"
    ctx.fillRect(canvas.width / 9, 0, 7 * (canvas.width / 9), canvas.height);
    ctx.fillStyle = "gray"
    ctx.fillRect(canvas.width / 8, 0, 6 * (canvas.width / 8), canvas.height);
    
  }
  this.drawLines = function () {
    this.y++
    ctx.fillStyle = 'white'
    ctx.fillRect(canvas.width * 0.499, this.y, canvas.width * 0.01, canvas.height * 0.02)
  }
}

var board = new Board();

function start() {
  evo=100
  carrito = new vehicle()
interval = setInterval(update,evo/60)
if(!interval) interval = setInterval(update,evo/60)
  
}

function update() {
  frames++

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  board.draw();
  drawRoad()
  fuckingJumpMeteoro()
  carrito.draw();
}

function generateRoad() {
  if (frames % 50 === 0) {
    road.push(new Board())
  }
}
function fuckingJumpMeteoro() {
  if (frames % 105 === 0) {
    carrito.width = 158*0.5
    carrito.height = 319*0.5
  }
}

function drawRoad() {
  generateRoad()
  road.forEach(e => {
    e.drawLines()
  })
}
function vehicle (){
  Board.call(this)
  this.x = canvas.width/2
  this.y = 200
  this.width = 158*0.5
  this.height = 319*0.5
  this.imag = new Image()
  this.imag.src=car
  this.draw = function(){
      this.boundaries()
      ctx.drawImage(this.imag,this.x-this.width/2,this.y,this.width,this.height)
  }
  this.boundaries = function(){
    if(this.x<=canvas.width / 7){
      this.x=canvas.width / 7
    }else if(this.x>=12 * (canvas.width / 14) ) {
      this.x = 12 * (canvas.width / 14)
    }
      if(this.y+this.height > canvas.height-50) {
          this.y = canvas.height-200
      }
      else if(this.y < 10 ) {
          this.y = 10
      }
      else this.y+=1.5

  }

}
addEventListener('keydown',function(e){
  switch(e.keyCode){
    case 38:
    carrito.width = 158*0.7
    carrito.height = 319*0.7
    return
      case 37:
          carrito.x -=40
          return
          case 39:
          carrito.x +=40
          return
      default:
          return
  }
} )
start()