window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    DrawApp.init("mycanvas")
    DrawApp.setDimensions()
    DrawApp.drawFilledSquares()
    DrawApp.drawControlledCar("images/car.png")
    DrawApp.setEventListeners() 
    DrawApp.drawObstacles() 
  }
};
    const DrawApp = {
          version: 1.0,
          name: 'Drawing app',
          description: 'App para realizar formas diversas en HTML  canvas',
          canvasDom: undefined,
          ctx: undefined,
          winW: undefined,
          winH: undefined,
          init: function (id) {
              this.canvasDom = document.getElementById(id)
              this.ctx = this.canvasDom.getContext('2d')
              this.setDimensions()
              this.setHandlers()
          },
          setDimensions: function () {
             //this.winH = window.innerHeight
             //this.winW = window.innerWidth
            this.canvasDom.setAttribute('width', "500px")
            this.canvasDom.setAttribute('height', "700px")
          },
          setHandlers: function () {
            window.onresize = () => this.setDimensions()
          },

        // ==== STREET ======
          drawFilledSquares: function () {
            // road and green
            this.ctx.fillStyle = 'green'                                             // cambia los colores de relleno
            this.ctx.fillRect(1, 20, 30, 700)
      
            this.ctx.fillStyle = 'grey'
            this.ctx.fillRect(30, 20, 10, 700)
            
            this.ctx.fillStyle = 'grey'
            this.ctx.fillRect(60, 20, 350, 700)

            this.ctx.fillStyle = 'grey'
            this.ctx.fillRect(440, 20, 10, 700)

            this.ctx.fillStyle = 'green'                                             // cambia los colores de relleno
            this.ctx.fillRect(450, 20, 30, 700)
            

        },
          drawDashedLines: function(){
             // dotted line
             console.log("pepe")
             this.ctx.strokeStyle = 'white'
             this.ctx.lineWidth = 20
             this.ctx.setLineDash([60, 30])
             this.ctx.beginPath()
             this.ctx.moveTo(230, 20)
             this.ctx.lineTo(230, 700)
             this.ctx.stroke()
             this.ctx.closePath()
          },
          // ==== CAR ======
          drawControlledCar: function (url) {
            this.car = new Car(this.ctx, url)
          
            setInterval(() => {
                this.clear()
                this.drawFilledSquares()
                this.drawDashedLines()
                this.car.draw()
            }, 5)
          },
          clear: function () {
            this.ctx.clearRect(this.posX, 500, this.carWidth, 100)
          },

          // === EVENT LISTENERS =====
        setEventListeners: function () {
          console.log("eventListener funcionan")
          document.onkeyup = e => {
              if (e.keyCode === 37) this.car.moveLeft()
              if (e.keyCode === 39) this.car.moveRight()
          }
        },
        // ==== OBSTACLE ======
        drawObstacles: function(){
          this.obstacles = new Obstacles(this.ctx)
          setInterval(() => {
            this.clear()
            this.obstacles.draw()
            
            }, 5)
          },

        }


// === CAR CONSTRUCTOR ====
class Car {
    constructor(ctx, url) {
      this.ctx = ctx
      this.img = new Image()
      this.img.src = url
      this.posX = 100
      this.vel = 10
      this.carWidth = 50
    }
    draw() {
      this.ctx.drawImage(this.img, this.posX, 500, this.carWidth, 100)
    }

    moveLeft() {
      console.log("left")
      this.posX -= this.vel

    }
    moveRight() {
      console.log("right")
      this.posX += this.vel
    }

}
class Obstacles {
  constructor(ctx){
    this.ctx = ctx
    this.posX = 100
    this.posY = 100
    this.vel = 10
    this.carWidth = 50
  }
  draw() {

    this.ctx.fillStyle = 'green'                                             // cambia los colores de relleno
    //this.ctx.fillRect(30, 100, 150, 30)
    this.ctx.fillRect(300, 300, 150, 30)
  }
}