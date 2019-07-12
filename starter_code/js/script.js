// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

  let startGame = {
    
      title: 'Island Racer',
      author: 'Ester',
      version: '1.0',
      license: null,
      canvasDOMobj: undefined,
      ctx: undefined,
      winW: undefined,
      winH: undefined,
      obstacles: [],
      fps: 60,
      framesCounter: 0,

      init: function (id) {
          this.canvasDOMobj = document.getElementById(id)
          this.ctx = this.canvasDOMobj.getContext('2d')
          this.start()
      },

      setDimensions: function () {
        this.winW = 450
        this.winH = window.innerHeight
        this.canvasDOMobj.setAttribute('width', this.winW)
        this.canvasDOMobj.setAttribute('height', this.winH)
      },

      start : function () {
        this.setDimensions()
        myCar.initCar()
        
      
        let myInterval = setInterval(() => {                         
            this.clearScreen()

            this.framesCounter ++
            if(this.framesCounter > 5000) {   
              this.framesCounter = 0
            }
      
            if(this.framesCounter % 150 == 0) { 
              this.generateObstacles()       
            }

            
            this.drawAll()
            this.moveMyCar() 
            this.moveObstacle()   
            this.clearObstacles()
            if (this.isCollision()) return this.gameOver()
            
            // this.clearObstacles()
        }, 2000/this.fps)
      },

      drawAll : function() {
        this.drawFilledSquares()
        this.drawSideLines()
        this.drawMiddleLine()
        this.drawCar()
        this.drawObstacle()
      } ,

      drawFilledSquares: function () {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.winW,this.winH)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, 390, this.winH)
      },

      drawSideLines: function () {
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 10 
        this.ctx.beginPath()       
        this.ctx.moveTo(45, 0)
        this.ctx.lineTo(45, this.winH)
        this.ctx.stroke()

        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 10 
        this.ctx.beginPath()       
        this.ctx.moveTo(405, 0)
        this.ctx.lineTo(405, this.winH)
        this.ctx.stroke()
      },
      
      drawMiddleLine: function () {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.setLineDash([40, 50])
        this.ctx.beginPath()
        this.ctx.moveTo(this.winW / 2, 0)
        this.ctx.lineTo(this.winW / 2, this.winH)
        this.ctx.stroke()
      },

      drawCar: function () {
        
        myCar.showCar()                                               
      },

      moveMyCar: function () {
        myCar.moveCar()
      },

    clearScreen: function () {
        this.ctx.clearRect(0, 0, this.winW, this.winH)
    },

    restart: function() {
      
      this.obstacles = []
    },

    drawObstacle: function() {
      this.obstacles.forEach(obstacle => obstacle.draw())  
      
    },

    moveObstacle: function() {
      this.obstacles.forEach(obstacle => obstacle.moveObstacle()) 
    
    },

    generateObstacles: function() {
      
      this.obstacles.push(new Component(Math.floor(Math.random() * 100 + 50), 0, "brown", 200, 40))  
      
    },

    // generateRigthObstacles: function(){  
    //   this.obstacles.push(new Component(this.winW - Math.floor(Math.random() * 50 + 200), 0, "brown", this.winW, 40))  //Generamos obstaculos en el array. El math.Random sirve para que tengan diferentes tamanios.

      
        
      
    // },

    clearObstacles: function() {
      
      this.obstacles.forEach((obs, idx) => {
        if(obs.x < 0)  {this.obstacles.splice(idx, 1)}  
      })
    },

    isCollision: function() {
      
      return this.obstacles.some(obstacle => {        
        
        return (
          (myCar.width + 50) >= obstacle.x &&     //Choque con lado izquierdo del obstaculo
            myCar.width < (obstacle.x + obstacle.width) &&        //Choque con lado derecho del obstaculo
            myCar.height < (obstacle.y + obstacle.height)          //Choque con lado de abajo del obstaculo
            
        )
      })
    },

    gameOver: function() {        
      clearInterval(this.interval)
    }

}
  
// };