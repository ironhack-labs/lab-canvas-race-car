var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};


function startGame() {
  var y = canvas.height + 600;
  var x = canvas.width + 200;
  var board = new Carretera()
  var carrito = new Carro()
  setInterval(function() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    board.drawRoad()
    board.drawLines(y)
    // board.drawObs(y)
    carrito.drawCar()
    y+= 2;
  }, 1000/60)

  addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 39:
        if (carrito.x > canvas.width -80) return
        carrito.goRight()
        break;
      case 37:
        if (carrito.x < 50) return
        carrito.goLeft()
        break;
    }

    //obstaculos

    //fin


  })  

}


class Carretera {

  drawRoad(){
    ctx.beginPath()
    ctx.fillStyle="limegreen"
    ctx.fillRect(10,20,400,600)
    ctx.fillStyle="grey"
    ctx.fillRect(40,20,330,600)
    ctx.fillStyle="white"
    ctx.fillRect(45,20,15,600)
    ctx.fillRect(350,20,15,600)
  }

  // drawObs(y){
  //   ctx.beginPath()
  //   ctx.fillStyle="red"
  //   ctx.moveTo(200, y - canvas.height)
  //   ctx.lineTo(200, - canvas.height)
  //   ctx.fillRect()
  //   ctx.closePath()
  // }

  drawLines(y){
    ctx.beginPath()
    ctx.lineWidth=4
    ctx.strokeStyle="white"
    ctx.setLineDash([20, 10])
    ctx.moveTo(200, y - canvas.height)
    ctx.lineTo(200, - canvas.height)
    ctx.stroke()
  }


}

class Carro {
  constructor(){
    this.x = 180
    this.image = new Image()
    this.image.src = './images/car.png'
    this.image.onload = () => {
    this.drawCar()
    }
  }

  drawCar(){
    ctx.drawImage(this.image, this.x, 510, 40, 80)
  }

  goRight(){
    this.x += 20
  }

  goLeft(){
    this.x -= 20
  }

  

}




