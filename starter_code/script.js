window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')


function Board(){
  this.drawRoad = function(){
    ctx.fillStyle = 'gray'
    ctx.fillRect(0,0,canvas.width,canvas.height)

    ctx.fillStyle = 'green'
    ctx.fillRect(0,0,30,canvas.height)
    ctx.fillRect(canvas.width - 30,0,30,canvas.height)

    ctx.fillStyle = 'white'
    ctx.fillRect(40,0,10,canvas.height)
    ctx.fillRect(canvas.width - 50,0,10,canvas.height)

  this.drawLines = function (y){
    ctx.beginPath()
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 7
    ctx.setLineDash([30,30])
    ctx.moveTo((canvas.width/2) - 7, y - canvas.height)
    ctx.lineTo((canvas.width/2) - 7, canvas.height)
    ctx.stroke()
    ctx.closePath()
  }

}
}


function Car(){
  this.x = (canvas.width/2) - 32
  this.y =  canvas.height - 200
  this.carImg = new Image()
  this.carImg.src = 'images/car.png'
  this.drawCar = function(){
    ctx.drawImage(this.carImg, this.x, this.y, 50, 100)
  }
  this.moveRight = function(){
    if(this.x < 300) this.x += 10;
  }
  this.moveLeft = function(){
    if(this.x > 50) this.x -= 10;
  }
  this.moveUp = function(){
    this.y += 10;
  }
  this.moveDown = function(){
    this.y -= 10;
  }
}

var carro = new Car()
var calle = new Board()
var y = 0


  function startGame() {
    calle.drawRoad()
    calle.drawLines(y)
    carro.drawCar()
    setInterval(function(){
      if(y === 60) y = 0
      ctx.clearRect(0,0,canvas.width,canvas.height)
      calle.drawRoad()
      calle.drawLines(y)
      carro.drawCar()
      y += 15
    },1000/60)
    document.addEventListener('keydown',function(e){
      if(e.keyCode === 37){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        calle.drawRoad()
        calle.drawLines(y)
        carro.moveLeft()
        carro.drawCar()
      }
      if(e.keyCode === 39){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        calle.drawRoad()
        calle.drawLines(y)
        carro.moveRight()
        carro.drawCar()
      }
      if(e.keyCode === 40){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        calle.drawRoad()
        calle.drawLines(y)
        carro.moveUp()
        carro.drawCar()
      }
      if(e.keyCode === 38){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        calle.drawRoad()
        calle.drawLines(y)
        carro.moveDown()
        carro.drawCar()
      }
    })
    
  }
};
