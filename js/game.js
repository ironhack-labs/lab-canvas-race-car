class Game{
    constructor(ctx){
        this.ctx = ctx
        this.road = new Road(ctx)
        this.car = new Car(ctx)

        this.interval = undefined

        this.isStart = false

        this.obstacles = []

        this.count = 0

        this.score = 0
           
        
        
    }

    start(){

        this.setListeners()

        if(!this.isstart){
        
            this.interval = setInterval(() =>{
            
            this.clear();

            this.drawBackground()

            this.move()

            this.drawCar()

            this.drawOstacles()

            this.drawScore()

            this.checkCollitions()


            

         

            this.count++

            if(this.count % 200 === 0){
                this.addObstacle()
                this.count = 0
            }
        },1000/60)
        
        this.isStart = true
    }
}

    clear(){
        this.ctx.clearRect(0,0, this.ctx.canvas.width,this.ctx.canvas.height)

        // Filtramos y nos quedamos con los obstaculos que esten el interior del heigth

        this.obstacles = this.obstacles.filter(obstacle => obstacle.y <  this.ctx.canvas.height )
    }

    drawBackground(){
        this.road.draw()
        this.car.draw()
    }
    
    drawOstacles(){
        //Recorremos la array y pintamos los que tenga
        this.obstacles.forEach(obstacle =>{
             obstacle.draw()
    });    
}

    addObstacle(){
    let maxWidth = this.ctx.canvas.width - 160
    
    let minWidth = 280
    
    let obsWidth = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth)
    
    let maxX = this.ctx.canvas.width - minWidth
    
    let minX = -minWidth
    
    let obsPosition = Math.floor(Math.random() * (maxX - minX) + minX)

    this.obstacles.push(new Obstacles(
        this.ctx, 
        obsPosition, 
        0, 
        obsWidth
        )     
    )
    //Sumamos puntos por cada obstáculo
    this.score++
    
    }

    drawCar(){

    }
    move(){

        this.road.move()
        this.car.move()
        this.obstacles.forEach(obstacle => {
            obstacle.move()
        })
    }

    stop() {
        clearInterval(this.interval)
        this.isStart = false

        this.ctx.save()
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        this.ctx.font = '35px Arial'
        this.ctx.fillStyle = 'red'
        this.ctx.textAlign = 'center'
        this.ctx.fillText('Game Over!',
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2 - 50)
        this.ctx.font = '24px Arial'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(`Your final score: ${this.score*10} points`,
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2 + 50)

        this.ctx.restore()
    }

    checkCollitions() {
        if (this.obstacles.some(obstacle => this.car.colision(obstacle))) {
            this.stop()
        }
    }

    drawScore() {
        this.ctx.save()
        this.ctx.font = '30px Arial'
        this.ctx.fillStyle = 'blue'
        this.ctx.textAlign = 'center'
        this.ctx.fillText(`Score: ${this.score*10}`,
            this.ctx.canvas.width - 125,
            this.ctx.canvas.height - 50)

        this.ctx.restore()
    }



    
     
    
    setListeners() {
      
    document.onkeydown = (event) => {
       
      switch(event.keyCode) {
        case RIGHT:
          this.car.vx = -10
         
          break;
        case LEFT:
          this.car.vx = 10
          break;
      }
    }

        document.onkeyup = event => {
      
        if (event.keyCode) {
            this.car.vx = 0
        }
    }
    }

   
}