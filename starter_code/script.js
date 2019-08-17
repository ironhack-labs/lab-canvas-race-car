const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
//probamos que todo funcione:
//ctx.fillRect(0,0,50,50);

window.onload = function () {
  let frames = 0
  let interval
  const imagenes = {
    img1: './images/car.png',
    img2: './images/fuego.png'
  }

  class Board {
    constructor() {
      this.y = 0
      this.draw()
    }
    draw() { //Camino
      this.y++
      ctx.clearRect(0, 0, 300, 500)
      ctx.fillStyle = "gray";
      ctx.fillRect(20, 0, 260, 500)

      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 20, 500)

      ctx.fillStyle = "green";
      ctx.fillRect(280, 0, 20, 500)

      ctx.fillStyle = "white";
      ctx.fillRect(25, 0, 5, 500)

      ctx.fillStyle = "white";
      ctx.fillRect(270, 0, 5, 500)

      for (let i = 0; i < 17; i++) { // Lineas
        ctx.beginPath()
        ctx.lineWidth = 5
        ctx.strokeStyle = "white";
        ctx.moveTo(150, i * 30 + 21 + this.y)
        ctx.lineTo(150, i * 30 + 40 + this.y)
        ctx.stroke()
        ctx.closePath()
      }

      for (let i = 0; i < 16; i++) {//lineas 2
        ctx.beginPath()
        ctx.lineWidth = 5
        ctx.strokeStyle = "white";
        ctx.moveTo(150, i * 30 + 21 - 500 + this.y)
        ctx.lineTo(150, i * 30 + 40 - 500 + this.y)
        ctx.stroke()
        ctx.closePath()
      }
      if (this.y > 500) this.y = 0
    }
  }



  class Carrito {
    constructor(x, y, img) {
      this.x = x
      this.y = y
      this.img = new Image()
      this.img.src = img
      
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 10, 20)
      //Carrito
    }
    //movimientos
    der() {
      if (this.x > 210) {
        this.x = 210
      }
      this.x += 10

    }
    izq() {
      if (this.x < 40) {
        this.x = 40
      }
      this.x -= 10
    }
    arriba() {
      this.y -= 10
    }
    abajo() {
      this.y += 10
    }
  }

  class Obstaculos {
    constructor(x, y, img) {
      this.x = x
      this.y = y
      this.img = new Image()
      this.img.src = img
      // this.img.onload = () => {
      //   this.draw()
      // }
    }
    draw() {
      if (this.y > canvas.height) {
        this.y = -100
      }
      this.y++
      ctx.drawImage(this.img, this.x, this.y, 100, 50)

    }
  }

  let board = new Board();
  let carrito = new Carrito(180, 100, imagenes.img1);
  let obstaculos = new Obstaculos(50, 0, imagenes.img2);
  let obstaculos2 = new Obstaculos(100, 200, imagenes.img2);

  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    board.draw()
    carrito.draw()
    obstaculos.draw()
    obstaculos2.draw()
    frames++
  }

  function empezar() {
    if (interval) return
    interval = setInterval(update, 500 / 60)
  }

  addEventListener('keydown', function (event) {
    switch (event.keyCode) {
      case 13:
        empezar()
        break
      case 37:
        carrito.izq()
        break
      case 39:
        carrito.der()
        break
      case 38:
        carrito.arriba()
        break
      case 40:
        carrito.abajo()
        break
    }
  })
}