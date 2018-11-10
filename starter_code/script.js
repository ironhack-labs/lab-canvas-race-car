//canvas
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
//variables
var interval
var frames = 0
var images = {
}
//clases
function Board(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
    this.image.src = images.bg
    //this.image.onload = ()=>this.draw()
    this.draw = function(){
        this.x--
        if(this.x < -this.width) this.x = 0
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x + this.width,this.y,this.width,this.height)
    }
}

//instances

//main functions
function start(){
    if(!interval) interval = setInterval(update,1000/60)
    
}
function update(){
    frames++
    ctx.clearRect(0,0,canvas.width, canvas.height)
    bg.draw()
}
function gameOver(){
    clearInterval(interval)
    interval = null
}

//aux functions

//listeners
addEventListener('keyup',function(e){
    switch(e.keyCode){
        case 13:{
            start()
        }
        return
        default:
            return
    }
} )

drawCover()