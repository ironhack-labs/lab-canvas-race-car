function StartGame(){
    this.version = '1.0'
    this.name = 'Drawing App'
    this.canvasDom = undefined
    this.ctx = undefined
    this.w = undefined
    this.h = undefined
}

StartGame.prototype.init = function(id){

    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext('2d')
    this.car = new Car(this)
    this._setDimensions()
    
    
}

StartGame.prototype._setDimensions = function(){
    var windowWidth = window.innerWidth / 2 -100
    var windowHeigth = window.innerHeight - 50

    this.canvasDom.setAttribute('width',windowWidth)
    this.canvasDom.setAttribute('height', windowHeigth)

    this.w = windowWidth
    this.h = windowHeigth
}

StartGame.prototype.drawRoad = function(){
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0, 0, 500, this.h)

    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(30, 0, 440, this.h)

    this.ctx.fillStyle = "white"
    this.ctx.fillRect(40, 0, 10, this.h)

    this.ctx.fillStyle = "white"
    this.ctx.fillRect(450, 0, 10, this.h)

    this.ctx.beginPath();
    this.ctx.strokeStyle = "white"
    this.ctx.setLineDash([30,30])
    this.ctx.lineWidth= 5
    this.ctx.moveTo(this.w/2.5, 0);
    this.ctx.lineTo(this.w/2.5, this.h);
    // this.ctx.setLineDash()
    this.ctx.stroke()
    
}

StartGame.prototype.drawAll = function (){
    this.drawRoad()
    this.car.draw()
}

function Car(game){
    this.game = game
    this.x = 210
    this.y = 450
    this.w = 70
    this.h = 100
    this.img = new Image()
    this.img.src = 'images/car.png'
    this._move()
}

Car.prototype.draw = function (){
    
    // this.img.onload = function (){
        this.game.ctx.drawImage(this.img,this.x,450,70,100)
    // }.bind(this)
    
}

Car.prototype._move = function(){
    document.onkeydown = function(e){
        switch(e.keyCode) {
            case 39:
                if(this.x + this.w + 10 <= 450)
                {this.x +=10
                console.log(this.x)}
                break;
            case 37:
                if(this.x - this.w -10 >= -10)
                {this.x -=10}
                break;
        }
        this.game.drawAll()
    }.bind(this)
    // this.game.drawAll()
}