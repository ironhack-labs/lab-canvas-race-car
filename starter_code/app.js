function DrawApp(){
    this.canvasDom = undefined
    this.ctx = undefined
    this.w = undefined
    this.h = undefined
    this.linepos = 0
    this.carpos = 170
    this.carwidth = 55
    this.carheight = 100
    this.obstacles = []
    this.time = 0
}

DrawApp.prototype.init = function(id){
    this.canvasDom = document.getElementById(id)
    this.ctx = this.canvasDom.getContext("2d")
    this.w = 400
    this.h = 800
    this.canvasDom.width = this.w
    this.canvasDom.height = this.h
}


DrawApp.prototype.drawBackground = function(){
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0,0,400,800)

    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(20,0,360,800)

    this.ctx.fillStyle = "white"
    this.ctx.fillRect(25,0,5,800)
    this.ctx.fillRect(370,0,5,800)

    

}
var accelerator = 0

DrawApp.prototype.animateApp = function(){

    setInterval(function(){
        this.ctx.clearRect(0,0,400,800)
        this.drawBackground()
        this.ctx.beginPath()
        this.ctx.setLineDash([100,100])
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.moveTo(195,this.linepos-100)
        this.ctx.lineTo(195,this.linepos+800)
        this.ctx.stroke()
        this.linepos+=2+accelerator
        this.drawCar()
        this.drawObstacles()
        this.detectColisions()
        this.time++
        if (this.linepos>=200) this.linepos=0
        if (this.time%400===0) accelerator++
    }.bind(this),25)
    setInterval(function(){
        this.obstacles.push(new Obstacle())
    }.bind(this),2000)

}


DrawApp.prototype.drawCar = function(){
    var img = new Image();   
    img.src = "images/car.png"; 
    this.ctx.drawImage(img, this.carpos, 600, this.carwidth, this.carheight) 
}


DrawApp.prototype.moveCarRight = function(){
    if (this.carpos<320)
    this.carpos += 6
}

DrawApp.prototype.moveCarLeft = function(){
    if(this.carpos>20)
    this.carpos -= 6
}


function Obstacle (){
    this.posX = Math.random()*350
    this.posY = -50
    this.width = Math.random()*150
    this.height = 50
}

DrawApp.prototype.drawObstacles = function(){
    var indexes = []
    this.obstacles.forEach(function(elm){
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(elm.posX, elm.posY,elm.width,elm.height)
        elm.posY+=2+accelerator
    }.bind(this))
    this.obstacles = this.obstacles.filter(function(elm){
        return elm.posY<800
    })
}


DrawApp.prototype.detectColisions = function(){
    this.obstacles.forEach(function(elm){
        if ((elm.posY+elm.height>600)&&(elm.posY<600+this.carheight)){
            if((elm.posX<this.carpos)&&(elm.posX+elm.width>this.carpos)){
                alert("You crashed")
            }
            if((elm.posX<this.carpos+this.carwidth)&&(elm.posX+elm.width>this.carpos+this.carwidth)){
                alert("You crashed")
            }
            if((elm.posX>this.carpos)&&(elm.posX+elm.width<this.carpos+this.carwidth)){
                alert("You crashed")
            }
        }
    }.bind(this))
}

