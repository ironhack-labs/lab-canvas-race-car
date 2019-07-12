window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    console.log("startGame fue llamado")
  }}

  function startGame() {
    console.log("desde startGame")
   
    let Game = {
      canvas: undefined,    
      ctx: undefined,
      fps: 60,            
      obstacles: [],      //array de obstaculos
      framesCounter: 0,   //Contador de fps que han transcurido
      car: undefined,
      //Creamos una funcion init que se lanzara solo una vez al abrirse la pagina. La llamaremos en index.js
       init: function(id) {  
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext("2d")
        this.canvas.width = window.innerWidth * .50
        this.canvas.height = window.innerHeight * .50
        this.start()  //Llamamos a start en init para que comience automaticamente.
        this.car = new Car(this.ctx, './images/car.png')

         
      },
    
      //Comenzamos el juego con start() aqui ira el intervalo
      start: function() {
        // this.restart()  //Restart resetea todo al estado inicial
    
        this.interval = setInterval(() => {   //Corazon de la aplicacion <3
        this.drawGreenLinesLeft()
        this.drawWhiteLinesLeft()
        this.drawFilledSquares()
        this.drawDottedLine()
        this.drawWhiteLinesRight()
        this.drawGreenLinesRight()
        this.car.draw()
        this.car.moveCar()
        
          // this.clear()  
        this.framesCounter ++   //Contamos una vuelta             
        if(this.framesCounter > 1000) {   //Cada 1000 vueltas lo reiniciamos
             this.framesCounter = 0
           }
    
        if(this.framesCounter % 200 == 0) { //Cada 200 vueltas pintamos un objeto
             this.generateObstacles()       
           }
    
    
          this.drawAll()              //Drawall y moveAll gestionan todo el dibujo y movimiento de la aplicacion
          this.moveAll()          
          // this.clearObstacles()       //Limpiamos los obstaculos para no crear un array infinito
          // if(this.isCollision()) {    //Comprobamos colisiones y gameover
          //   this.gameOver()
          // }
    
        }, 1000/this.fps)

        

      },

     
    drawGreenLinesLeft: function(){
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, 30, this.canvas.height)
    },

    drawWhiteLinesLeft: function(){
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(30, 0, 10, this.canvas.height)
    },

    drawFilledSquares: function () {
      this.ctx.fillStyle = 'gray'
      this.ctx.fillRect(40, 0, 415, this.canvas.height)
    },

    drawDottedLine: function (){
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 15
      this.ctx.setLineDash([80, 20])
      this.ctx.beginPath()
      this.ctx.moveTo(240, 0)
      this.ctx.lineTo(240, this.canvas.height)
      this.ctx.stroke()
    },

    drawWhiteLinesRight: function(){
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(460, 0, 10, this.canvas.height)
    },

    drawGreenLinesRight: function(){
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(470, 0, 30, this.canvas.height)
    },

    clearScreen: function () {
      this.ctx.clearRect(0, 0, this.winW, this.winH)
    },

    setEventListeners: function () {
      // El objeto event está presente en cualquier función invocada fruto de un evento, puedes registrarlo (o no)
      document.onkeydown = e => {
        alert('key was pressed')
          e.keyCode === 37 ? this.car.moveCar() : null
          e.keyCode === 39 ? this.car.moveCar() : null
    }

  }, 
      // restart: function() {
      //   this.player = new Component(0, (this.canvas.height / 2) - 30, "red", 60, 60 )
      //   this.obstacles = []
      // },
    
       drawAll: function() {
         this.car.draw()
         this.obstacles.forEach(obstacle => obstacle.draw())  //PIntamos los obstaculos iterando el array
       },
      moveAll: function() {
         this.car.moveCar()
         this.obstacles.forEach(obstacle => obstacle.moveObstacle()) //Lo mismo para moverlos
       },
       clear: function() {
         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       },
    generateObstacles: function() {
         console.log("se genera obstaculo")
        this.obstacles.push(this.obstacle = new Obstacle(Math.floor((Math.random() * 80) + 200, 0, "brown", 30, Math.floor(Math.random() * 100 + 200))))  //Generamos obstaculos en el array. El math.Random sirve para que tengan diferentes tamanios.
       }
      // clearObstacles: function() {
      //   this.obstacles.forEach((obs, idx) => {
      //     if(obs.x < 0)  {this.obstacles.splice(idx, 1)}  //Limpiamos los obstaculos iterando sobre ellos.
      //   })
      // },
    
      // isCollision: function() {
      //   return this.obstacles.some(obstacle => {        //Comprobamos si alguno de los obstaculos colisiona.
      //     return (
      //       ((this.player.x + this.player.width) >= obstacle.x &&     //Choque con lado izquierdo del obstaculo
      //         this.player.x < (obstacle.x + obstacle.width) &&        //Choque con lado derecho del obstaculo
      //         this.player.y < (obstacle.y + obstacle.height)          //Choque con lado de abajo del obstaculo
      //         )
      //     )
      //   })
      // },
    
      // gameOver: function() {        //Detenemos el intervalo, gameOver.
      //   clearInterval(this.interval)
      // }
    
    
    
    
    
    
    }
    Game.init("mycanvas")
  }

