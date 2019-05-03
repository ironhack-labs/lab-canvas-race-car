window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame.init("myCanvas");
  };}

  const startGame = {                                   // INICIO OBJETO STARTGAME
    version: '1.0',
    name: 'Race Car',
    description: 'Ejercicio de coche de carreras',
    author: 'Teo',
    canvasDom: undefined,
    ctx: undefined,
    gameW: undefined,
    gameH: undefined,
    lineDash: 60, 
    lineGap: 30,
    lineVel: 10,
    frames: 0,
    obstaclesArr: [],
    crashed: 0,

    setEventListeners: function () {                      //Event Listeners
        document.onkeyup = e => {
            if (e.keyCode === 37) this.car.moveLeft()
            if (e.keyCode === 39) this.car.moveRight()
        }
    },
    
    init: function (id) {                               // FUNCION INIT 
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.car = new Car(this.ctx, "images/car.png", this.gameW, this.gameH)
        this.setEventListeners()
        this.interval()
        
    },
    

    interval: function() { 
      
      setInterval(() => {
        this.clear()
        if (this.frames%40==0) {this.makeObstacle()}
        //if (this.frames%40==0) {this.obstaclesArr.pop()
        //console.log(this.obstaclesArr)}
        this.drawRoad()
        this.car.draw()
        this.obstaclesArr.forEach( (obstacle) => { obstacle.draw()} ) 
        this.obstaclesArr.forEach( (obstacle) => { obstacle.move()} )
        
        this.frames++
        
        this.endGame()
        }, 50)
      },
    
    setDimensions: function() {                          // FIJAR DIMENSIONES CANVAS
      this.gameH = window.innerHeight,
      this.gameW = window.innerWidth*0.5
      this.canvasDom.setAttribute('height', this.gameH)
      this.canvasDom.setAttribute('width', this.gameW)
    },
    
    drawRoad: function() {                                  // FUNCION PRINCIPAL CARRETERA
      this.drawGrass()
      this.drawGreyRoad()
      this.drawDashedRoad()  
    },
    
    drawGrass: function () {
     this.ctx.fillStyle = "green"                                        //Subfunciones de carretera
     this.ctx.fillRect(0, 0, this.gameW, this.gameH )
    },
    
    drawGreyRoad: function() {
     this.ctx.fillStyle = "grey"
     this.ctx.fillRect( 40, 0, this.gameW-80, this.gameH)
    },

    drawDashedRoad: function() {
      this.ctx.strokeStyle = "white"                          // Right Line
      this.ctx.beginPath()
      this.ctx.moveTo(this.gameW-100, 0);
      this.ctx.lineTo(this.gameW-100, this.gameH);
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
      this.ctx.closePath()


      
      this.ctx.strokeStyle = "white"                        // Left Line
      this.ctx.beginPath()
      this.ctx.moveTo(100, 0);
      this.ctx.lineTo(100, this.gameH);
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
      this.ctx.closePath()

      this.ctx.setLineDash([this.lineDash, this.lineGap])                        // Dashed Line
      this.ctx.strokeStyle = "white"
      this.ctx.beginPath()
      this.ctx.moveTo(this.gameW/2-5, 0);
      this.ctx.lineTo(this.gameW/2-5, this.gameH);
      this.ctx.lineWidth = 10;
      this.ctx.stroke();
      this.ctx.closePath()

      this.ctx.setLineDash([0,0])
    },

    makeObstacle: function() { this.obstaclesArr.push(new Obstacle(this.ctx, this.gameW, this.gameH)) },


   /* moveLines: function() {
      
    },                                                   //Move Lines */

    endGame:function(){
        this.crashed = this.obstaclesArr.some( (obstacle) => {
          return this.car.crashWith(obstacle)
        });
      
        if (this.crashed) {
          this.stopInterval();
        }
      },
    
    stopInterval: function() {
      clearInterval(this.interval)
    },

    clear: function () {                                    // Metodo clear
      this.ctx.clearRect(0, 0, this.winW, this.winH)
    }
    }

  class Car {                                           // CLASE COCHE
    
    constructor(ctx, url, gameW, gameH) {                                         //PROPIEDADES  
      this.ctx = ctx
      this.img = new Image()
      this.img.src = "images/car.png"
      this.gameW = gameW
      this.gameH = gameH
      this.posX = gameW/2-55
      this.vel = 10
      this.carWidth = 100
      this.carHeight = 150
      this.top = this.gameH-200 + this.carWidth
    }

    draw() {                                                                      //METODOS           
      this.ctx.drawImage(this.img, this.posX, this.gameH-200, this.carWidth, this.carHeight)
    }                                              
    
    moveLeft() {                                                                            
       if(this.posX-this.carWidth/2 >0 ) this.posX -= this.vel
    }

    moveRight() {
      if(this.posX+this.carWidth+45 < this.gameW) this.posX += this.vel
    }

    top() {return this.posY}


    crashWith(obstacle) {
      return !(this.top() < obstacle.bottom()
      );
    }


};


class Obstacle {                      //CLASE OBSTACULOS
  constructor(ctx, gameW, gameH) {                               //PROPIEDADES
    this.ctx = ctx
    this.gameW = gameW
    this.gameH = gameH
    this.width = 100
    this.height = 60
    this.posX = Math.random()*this.gameW
    this.posY = 0
    this.bottom = this.posY+this.width
  }
   
  draw() {
    this.ctx.fillStyle = "tomato"
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    
  }
  
  move() {                         //METODOS
      this.posY += 10
    }                        

  bottom() {
      return this.posY + this.height;
  }
}
