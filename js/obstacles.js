class Obstacles{ 
    
    constructor(ctx) { 
        this.ctx = ctx
        this.width = 0
        this.height = 20
        this.randomWith = 0
        this.randomPosX = 0
        this.randomBoolean = true
        this.posX = 0
        this.posY = 0
        this.init()
        
    }


    init() { 

        this.randomWith = Math.floor(Math.random() * 120 + 50)
        this.randomBoolean = Math.random() > 0.5 ? true : false
        this.randomPosX = Math.floor(Math.random()*(380-60)+60)

        if (this.randomWith > 120 && this.randomBoolean) { this.posX = 60 }
        else if (this.randomWith > 120 && !this.randomBoolean) { this.posX = 380 - this.randomWith }
        else if (this.randomWith < 120) { this.posX = this.randomPosX}
        
            this.width = this.randomWith
        
       
        
    }

    draw() {
       this.move()
      this.ctx.fillRect(this.posX, this.posY, this.width, 20)
        this.ctx.fillStyle = 'black'
    }
    
    move() {

        this.posY += 3
     }


}