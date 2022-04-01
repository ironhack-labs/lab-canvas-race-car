window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };
  
}

  function startGame() {
    carGame.init('canvas')
    
    
}  

const carGame = {
  name: 'Car Game',
  description: 'First game car',
  version: '1.0.0',
  author: 'fer',
  license: undefined,
  canvasNode: undefined,
  ctx: undefined,
  gameSize: { w: undefined, h: undefined },
  car: undefined,
  obstacles: [],

  framesIndex: 0,
  indexObstacles :0,

  init(canvasID) {
    
    this.canvasNode = document.querySelector(`#${canvasID}`)
    this.ctx = this.canvasNode.getContext('2d')
    this.setDimensions()
    this.setEventListeners()
    this.createCar()
    this.start()
    //this.createObstacles()
  },

   setDimensions() {
        this.gameSize = {
            w: 500,
            h: 700
        }
      this.canvasNode.setAttribute('width', this.gameSize.w)
      this.canvasNode.setAttribute('height', this.gameSize.h)  
  },
   
  drawRoad() { 

    this.canvasNode.style.backgroundColor = 'grey'
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, 40, 700)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(50, 0, 10, this.gameSize.h)

    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(440, 0, 10, this.gameSize.h)

    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(460, 0, 40, this.gameSize.h)

    this.ctx.lineWidth = 5
    this.ctx.strokeStyle = 'white'

    this.ctx.beginPath()
        this.ctx.moveTo(250, 0)
        this.ctx.setLineDash([20, 20])     
        this.ctx.lineTo(250, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

  },

   createCar() {
     this.car = new Car(this.ctx, 250, 100, 150)
  
  },
   
   createObstacles() {
      this.obstacles.push(new Obstacles(this.ctx))
     
    },
   
   start() {
        setInterval(() => {
          this.clearAll()
          this.drawAll()
          this.colisiones()
          //this.deleteObstacles()
          this.framesIndex++  
          
          
           


        }, 30)
    },
   
   drawAll() {
     
     this.drawRoad()
     this.car.draw()
    if (this.framesIndex % 160 === 0) this.createObstacles()
     this.obstacles.forEach(eachObst => eachObst.draw())
     

  },
   
   
   
   clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },
      setEventListeners() {
        document.onkeyup = event => {
            const { key } = event
            if (key === 'ArrowLeft') {
                this.car.moveLeft()
            }
            if (key === 'ArrowRight') {
                this.car.moveRight()
            }
        }
  },
      
  colisiones() { 


    
    this.obstacles.forEach(eachObst => {


      console.log(this.car.carPosX, this.car.carPosY)

      if (this.car.carPosX < eachObst.posX + eachObst.width &&
          this.car.carPosX + this.car.carSize.w > eachObst.posX &&
        this.car.carPosY < eachObst.posY + eachObst.height &&
        this.car.carSize.w + eachObst.posY > eachObst.posY

      ) { this.gameOver() 
      
        console.log('Game over ')
      }

      // let distance = (this.car.width/2 + eachObst.width/2) -Math.abs(this.car.posX + this.car.width/2 - eachObst.posX - eachObst.width/2)
    
      // if (eachObst.posY >= 550 ) {

      //     console.log('COLISIONES', eachObst.posX, eachObst.posY )

      //  }
      

    })
    
  


  }, 

  deleteObstacles() { 

    console.log('largo', this.obstacles.length)

    this.obstacles.forEach(function(eachObst, index){ 


      if (eachObst.posY > 690  ) {

        //console.log('delete', index)

        //this.obstacles.shift()
       }

    })


  }, 

  gameOver() {

    this.canvasNode.style.backgroundColor = 'grey'
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(0, 0, 40, 700)
     this.ctx.font = '50px arial'
        this.ctx.fillText('GAME OVER', 100, 100)
   },



}
   
  





   
   
  







  
 


  








