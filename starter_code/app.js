//Because of this var everything gets faster each 10seconds
var accelerator = 0

function DrawApp(){
    this.canvasDom = undefined
    this.ctx = undefined
    this.w = undefined
    this.h = undefined
    this.linepos = 0
    this.carposX = 170
    this.carposY = 600
    this.carwidth = 55
    this.carheight = 100
    this.obstacles = []
    this.bullets = []
    this.time = 0
    this.kills = 0
    this.interval = undefined
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

DrawApp.prototype.animateApp = function(){

    this.interval = setInterval(function(){
        this.ctx.clearRect(0,0,400,800)
        this.drawBackground()
        this.drawLine()
        this.drawCar()
        this.drawObstacles()
        this.drawBullets()
        this.detectColisions()
        this.detectBulletColisions()
        score.innerText = this.time
        this.time++
        //Here the magic happens
        if (this.time%400===0) accelerator++
        //Original value was one obstacle each 2s, now there is some random behaviour added
        if ((this.time%80===0)||(this.time%(Math.floor(Math.random()*120)+40)===0)) this.obstacles.push(new Obstacle())
    }.bind(this),25)
}


DrawApp.prototype.drawLine = function(){
    this.ctx.beginPath()
    this.ctx.setLineDash([100,100])
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.moveTo(195,this.linepos-100)
    this.ctx.lineTo(195,this.linepos+800)
    this.ctx.stroke()
    this.linepos+=2+accelerator
    if (this.linepos>=200) this.linepos=0
}


DrawApp.prototype.drawCar = function(){
    var img = new Image();   
    img.src = "images/car.png"; 
    this.ctx.drawImage(img, this.carposX, this.carposY, this.carwidth, this.carheight) 
}


DrawApp.prototype.moveCarRight = function(){
    if (this.carposX<320)
    this.carposX += 8
}

DrawApp.prototype.moveCarLeft = function(){
    if(this.carposX>20)
    this.carposX -= 8
}


function Obstacle (){
    this.posX = Math.random()*350
    this.posY = -30
    this.width = Math.random()*100 + 50
    this.height = 30
    this.life = 2
}

DrawApp.prototype.drawObstacles = function(){
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
        if ((elm.posY+elm.height>this.carposY)&&(elm.posY<this.carposY+this.carheight)){
            if((elm.posX<this.carposX)&&(elm.posX+elm.width>this.carposX)){
                finishdiv.style.visibility = "visible"
                clearInterval(this.interval)
                this.showFinishScore()
            }
            if((elm.posX<this.carposX+this.carwidth)&&(elm.posX+elm.width>this.carposX+this.carwidth)){
                finishdiv.style.visibility = "visible"
                clearInterval(this.interval)
                this.showFinishScore()
            }
            if((elm.posX>this.carposX)&&(elm.posX+elm.width<this.carposX+this.carwidth)){
                finishdiv.style.visibility = "visible"
                clearInterval(this.interval)
                this.showFinishScore()
            }
        }
    }.bind(this))
}

DrawApp.prototype.detectBulletColisions = function(){
    this.obstacles.forEach(function(obs){
        this.bullets.forEach(function(bul){
            if((bul.posY-bul.height/2<obs.posY+obs.height)&&(bul.posY+bul.height/2>obs.posY+obs.height)){
                if((bul.posX>obs.posX)&&(bul.posX<obs.posX+obs.width)){
                    bul.width = 0
                    obs.life--
                }
            }
        }.bind(this))
        if(obs.life===0) {
            this.kills++
            scorekills.innerText = this.kills
        }
    }.bind(this))
    this.bullets = this.bullets.filter(function(bul){
        return bul.width != 0
    })
    this.obstacles = this.obstacles.filter(function(obs){
        return obs.life > 0
    })
}


DrawApp.prototype.showFinishScore = function(){
    finishscore.innerText += " " + this.time
    finishkills.innerText += " " + this.kills
}


function Bullet(x,y){
    this.posX = x+app.carwidth/2
    this.posY = y
    this.width = 10;
    this.height = 10;
}

DrawApp.prototype.drawBullets = function(){
    this.bullets.forEach(function(elm){
        this.ctx.fillStyle = "yellow"
        this.ctx.beginPath()
        this.ctx.arc(elm.posX, elm.posY, 5, 0, 2 * Math.PI);
        this.ctx.stroke()
        this.ctx.fill()
        elm.posY-=4+accelerator
    }.bind(this))
    this.bullets = this.bullets.filter(function(elm){
        return elm.posY>-10
    })
}
