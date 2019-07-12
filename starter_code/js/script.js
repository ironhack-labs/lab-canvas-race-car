const Game = {
    title: 'Car race',
    author: 'Rebeca',
    version: '1.0',
    canvasObj: undefined,
    ctx: undefined,
    winW: undefined,
    winH: undefined,    
    fps: 60,            
    obstacles: [],      //array de obstaculos
    framesCounter: 0,   //Contador de fps que han transcurido

    //métodos
     init: function(id){
      this.canvasObj = document.getElementById(id)
      this.ctx = this.canvasObj.getContext('2d')
      this.setDimensions()
      this.drawAll()
      this.car = new Car(this.ctx, './images/car.png')
      this.obsta = new Component(10,5,'#9bbef2',200,15)
    //this.movePlayer()
      this.interval()
      this.moveKeys()
      
      
    },

    setDimensions: function(){
        this.winW = 400
        this.winH = 900
         this.canvasObj.setAttribute('width', this.winW)
         this.canvasObj.setAttribute('height', this.winH)
    },

    drawGrass: function(){
      this.ctx.fillStyle = '#c2e368'
      this.ctx.fillRect(0,0, 400, 900)
    },

    drawRoad: function(){
      this.ctx.fillStyle = '#55594b'
      this.ctx.fillRect(10,0, 380, 900)
    },

    drawWhiteLine: function(){
      this.ctx.fillStyle = '#e7ebdd'
      this.ctx.fillRect(20,0, 10, 900)
    },

    drawWhiteLine2: function(){
      this.ctx.fillStyle = '#e7ebdd'
      this.ctx.fillRect(370,0, 10, 900)
    },

    drawCenterLine: function(){
      this.ctx.strokeStyle = '#e7ebdd'
      this.ctx.lineWidth = 7
      this.ctx.setLineDash([30, 60])
      // this.ctx.beginPath()
      this.ctx.moveTo(this.winW / 2, 8)
      this.ctx.lineTo(this.winW / 2, this.winH - 100)
      this.ctx.stroke()
    },

    interval: function () {
      setInterval(() => {
          this.clearScreen()
          this.drawAll()
          this.car.drawCar()//para dibujar el coche
          this.obsta.draw()//para dibujar obstaculo
          this.obsta.moveObstacle()
          
          //this.clear()  
          this.framesCounter ++   //Contamos una vuelta             
          if(this.framesCounter > 1000) {   //Cada 1000 vueltas lo reiniciamos
            this.framesCounter = 0
          }
    
          if(this.framesCounter % 20 == 0) { //Cada 200 vueltas pintamos un objeto
            this.generateObstacles()       
          }
          this.clearObstacles()       //Limpiamos los obstaculos para no crear un array infinito
      }, 1000/this.fps)
    },
  
    clearScreen: function () {
      this.ctx.clearRect(0, 0, this.winW, this.winH)
    },

    drawAll: function(){
      this.drawGrass()
      this.drawRoad()
      this.drawWhiteLine()
      this.drawWhiteLine2()
      this.drawCenterLine() 
      this.obstacles.forEach(obstacle => obstacle.draw())  //PIntamos los obstaculos iterando el array 
      this.obstacles.forEach(obstacle => obstacle.moveObstacle()) //Lo mismo para moverlos
    },

    moveKeys: function(){
      document.onkeydown = e =>{
        e.keyCode === 37 ? this.car.goLeft() : null
        e.keyCode === 30 ? this.car.goRight() : null
      }
    },
    generateObstacles: function() {
      console.log("se genera obstaculo")
      this.obstacles.push(new Component(Math.floor(Math.random() * 10 + 20), 0, "#9bbef2'", 100, 30)) 
        //Generamos obstaculos en el array. El math.Random sirve para que tengan diferentes tamanios.
  
      //Generamos obstaculos en el array. El math.Random sirve para que tengan diferentes tamanios.
      console.log("se genera obstaculoooooooo")
    },
    clearObstacles: function() {
      this.obstacles.forEach((obs, idx) => {
        if(obs.y< 0)  {this.obstacles.splice(idx, 1)}  //Limpiamos los obstaculos iterando sobre ellos.
      })
    },
  }


// };
