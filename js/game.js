class Game{
    constructor(canvasId){
        this.canvas = document.getElementById(canvasId)
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 500
        this.canvas.height = 700

        this.background = new Background(this.ctx)
        this.car = new Car(this.ctx, (this.canvas.width / 2) - 37, this.canvas.height - 130)
        
        this.obstacles = []
        this.drawCount = 0
        
        this.drawInterval = undefined
        this.fps = 1000 / 60
        this.scoreTotal = 0
        
    }
    
    start(){
        if (!this.drawInterval){
            this.drawInterval = setInterval(()=>{
                this.clear()
                this.move()
                this.draw()
                this.checkCollitions()
                this.drawCount++

                if (this.drawCount % OBS_FRAMES === 0){
                    this.addObstacles()
                    this.drawCount = 0
                }

            },this.fps)
        }
    }
    
    clear(){
        this.ctx.clearRect(0, 0,this.ctx.canvas.width, this.ctx.canvas.height)
        this.obstacles = this.obstacles.filter(obs => obs.y <= this.ctx.canvas.height)
    }

    stop(){
        clearInterval(this.drawInterval)
        this.ctx.save()
        this.ctx.fillStyle = 'rgba(0,0,0,0.5)'
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height)

        this.ctx.textAlign = 'center'
        this.ctx.font = '40px Arial'
        this.ctx.fillStyle = 'red'
        this.ctx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2)

        this.ctx.textAlign = 'center'
        this.ctx.font = '40px Arial'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(`Your final score: ${this.scoreTotal}`,250, 400 )
        this.ctx.restore()
    }
    
    score(){
        this.ctx.fillStyle = 'black'
        this.ctx.font = '24px sans-serif'
        this.ctx.textAlign = 'left'
        this.ctx.fillText(`Score:${this.scoreTotal}`,  70, 40)
    }
    draw(){
        this.background.draw()
        this.score()
        this.car.draw()
        this.obstacles.forEach(obs => obs.draw())
    }
    
    
    move(){
        this.background.move()
        this.car.move()
        this.obstacles.forEach(obs => obs.move())
    }
    
    onKeyEvent(event){
        this.car.onKeyEvent(event)
    }
    
    addObstacles(){
        const maxWidth = this.canvas.width - this.car.width * 3
        const minWidth = 200
        const randomWidth = minWidth + Math.floor(Math.random() * (maxWidth - minWidth))
        const posRandom = Math.floor(Math.random() * 400)
        this.obstacles.push(new Obstacles(this.ctx, posRandom, 0, randomWidth))
        this.scoreTotal ++
    }

    checkCollitions(){
        if (this.obstacles.some((obstacle => this.car.collidesWith(obstacle)))){
           this.stop()
        }
    }
}