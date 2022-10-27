class Car {
    constructor(ctx,ctxWhidth,ctxHeight) {
        this.ctx = ctx
        this.ctxWhidth= ctxWhidth
        this.ctxHeight= ctxHeight
        
        this.width= 70
        this.height=100

        this.posX=215
        this.posY= 590

        this.carImg = new Image()
        this.carImg.src= "../images/car.png"
        this.setEventListeners()
    }
    draw(){
       
        this.ctx.drawImage(this.carImg, this.posX, this.posY, this.width, this.height)
    }
    setEventListeners(){
        document.addEventListener("keydown", (e) => {
            if(e.code === "ArrowLeft" ){
                if (this.posX>50){
                    this.posX -= 50
                }
              
            } 
            if(e.code === "ArrowRight" ){
                if (this.posX<this.ctxWhidth-100)
                this.posX += 50 
            }

            if(e.code === "ArrowUp" ){
                if (this.posY>50){

                    this.posY -= 50 } 
                }
            if(e.code === "ArrowDown" ){
                if (this.posY<this.ctxHeight-200){

                    this.posY += 50 } 
                }
            
        })
    }

} 