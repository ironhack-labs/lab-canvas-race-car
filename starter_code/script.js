window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    var game=new StartGame()
    game.init("carCanvas")
  };

  function StartGame() {
    this.canvasDom = undefined
    this.ctx = undefined
    this.width = undefined
    this.height = undefined
    this.positionX = 160
    this.postitionY = 510
    this.carWidth = 30
    this.carHeight = 70
  }

  StartGame.prototype.init= function(id){
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext("2d")
    this.setDimensions()
    this.drawRoad()
    this.drawCar()
    this.carControlListeners()
    this.obstacleBuilder()
    this.frameControl()
  }

  StartGame.prototype.setDimensions = function(){
    this.width = 300
    this.height = 500
    this.canvasDom.setAttribute("width", 350)   
    this.canvasDom.setAttribute("height", 600) 
  }

  StartGame.prototype.drawRoad = function(){
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0, 0, 600, 600)
    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(20,0,310,600)
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(30,0,10,600)
    this.ctx.fillRect(310,0,10,600)

    this.ctx.beginPath()
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 7
    this.ctx.setLineDash([30, 15])
    this.ctx.moveTo(175, 0)
    this.ctx.lineTo(175,600)
    this.ctx.stroke()
  }

  StartGame.prototype.drawCar = function(){
    this.img = new Image();   
    this.img.src = "images/car.png"
    this.img.onload = function(){
      this.ctx.drawImage(this.img, this.positionX, this.postitionY, this.carWidth, this.carHeight)
    }.bind(this)
  }

  StartGame.prototype.frameControl = function(){
    setInterval(function(){
      console.log("entre")
      this.drawRoad()
      this.drawCar()
      this.obstacleBuilder()
    }.bind(this), 60)
  }

  StartGame.prototype.obstacleBuilder = function(){
    setInterval(function(){
      this.ctx.fillStyle = "red"
      this.ctx.fillRect(Math.floor(Math.random() * (300-10) + 10), 0, 50, 15)
    }.bind(this), 3000)
  }

  StartGame.prototype.carControlListeners = function(){
    document.onkeyup = function(e){
        switch(e.keyCode) {
            case 39:
                this.steerRight()
                break;
            case 37:
                this.steerLeft()
                break;
        }
    }.bind(this)
}

  StartGame.prototype.steerRight = function(){
    if(this.positionX + this.carWidth <= 320){
      console.log(this.positionX)
      console.log(this.carWidth)
      this.positionX += 10
    }
}

  StartGame.prototype.steerLeft = function(){
    if(this.positionX >= 30){
      this.positionX -= 10
    }
}


};
