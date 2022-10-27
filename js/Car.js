class Car {
    constructor(ctx,ctxWhidth,ctxHeight) {
        this.ctx = ctx
        this.ctxWhidth= ctxWhidth
        this.ctxHeight= ctxHeight
        
        this.width= 100
        this.height=120

        this.posX=120
        this.posY= ctx.height- 50 -this.ctxHeight // revisar esto

        this.carImg = new Image()
        this.carImg.src= "../images/car.png"
    }
    draw(){
        this.ctx.darwImage(this.carImg, this.posX,this.posY,this.width.this.height)
    }
    setEventListeners(){
        document.addEventListener("keydown", (e) => {
            if(e.code === "Arrowleft" ){this.posX -= 15 } 
            if(e.code === "ArrowRigth" ){this.posX += 15 } 
            if(e.code === "ArrowUp" ){this.posY -= 15 } 
            if(e.code === "ArrowDown" ){this.posY += 15 } 
            
        })
    }

} 