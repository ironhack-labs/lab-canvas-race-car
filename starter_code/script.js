window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    DrawApp.init("mycanvas")
    DrawApp.setDimensions()
    DrawApp.drawFilledSquares()
    DrawApp.car.drawControlledCar() //¡¡Aquí está el problema!!
 
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
              this.setEventListeners()
              this.car = new Car(this.ctx);
              
          },
          setDimensions: function () {
             this.winH = window.innerHeight
             this.winW = window.innerWidth
             this.canvasDom.setAttribute('width', "500px")
             this.canvasDom.setAttribute('height', "700px")
          },
          
          setHandlers: function () {
            window.onresize = () => this.setDimensions()
          },
          drawFilledSquares: function () {
            console.log("yeah")
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

           // dotted line
           this.ctx.strokeStyle = 'white'
           this.ctx.lineWidth = 20
           this.ctx.setLineDash([60, 30])
           this.ctx.beginPath()
           this.ctx.moveTo(230, 20)
           this.ctx.lineTo(230, 700)
           this.ctx.stroke()
       }, 
       setEventListeners: function() { // Y aquí también, supongo...
        document.onkeyup = e => {
          console.log(e)
            if (e.keyCode === 37) this.car.moveLeft()
            if (e.keyCode === 39) this.car.moveRight()
        }
        
    },
    
    drawAll: function () {
      setInterval(() => {
        this.clear()
        this.ball.draw()
      }, 1000)
    },
    clear: function () {
      this.ctx.clearRect(0, 0, this.winW, this.winH)
    },
      }
      class Car {
        constructor(ctx, url, winW) {
            this.ctx = ctx
  
            this.img = new Image()
            this.img.src = "images/car.png"
    
            this.winW = winW
            this.posX = 100
            this.vel = 10
    
            this.carWidth = 10
        
          }
        drawControlledCar () {
          this.img.onload = () => {
            this.ctx.drawImage(this.img, 100,100,60,100)
          }
        }
    
        setControlledCar () { //
            if (this.posX > 0) this.posX -= this.vel
        }
    
        moveRight () {
            if (this.posX < this.winW - this.carWidth) this.posX += this.vel
        }

        moveLeft () {
          if (this.posX > 0) this.posX -= this.vel
      }
        
    
    }