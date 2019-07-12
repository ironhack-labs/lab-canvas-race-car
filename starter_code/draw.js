const Game = {
    canvasDOMobj: undefined,
    ctx: undefined,
    winW: undefined,
    winH: undefined,
    car: undefined,
    fps: 60,            
    obstacles: [],  
    a: undefined,    
    framesCounter: 0,
    init: function(id){
        this.canvasDOMobj = document.getElementById(id)
        this.ctx = this.canvasDOMobj.getContext("2d")
        this.drawRect()
        this.drawLine()
    },
    setDimensions: function() {
        this.winW = window.innerWidth/2
        this.winH = window.innerHeight
        this.canvasDOMobj.width = this.winW
        this.canvasDOMobj.height = this.winH  
    },
    drawCar: function(url){
        this.car = new Car(this.ctx, url)
    },
    drawLine: function() {
        console.log("draw")
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = "white"
        this.ctx.setLineDash([50,30])
        this.ctx.beginPath()
        this.ctx.moveTo(this.winW / 2 - 5, 0)
        this.ctx.lineTo(this.winW / 2 -5 , this.winH*2)
        this.ctx.stroke()
    },
    start: function () {
        console.log("start")
        this.setEventListeners()
        this.restart() 
        this.interval = setInterval(()=>{
            this.clear()
            this.framesCounter++
            if(this.framesCounter > 1000){
                this.framesCounter = 0
            }
            if (this.framesCounter%200 == 0){
                this.generateObstacles()
            }
            this.drawRect()
            this.drawLine()
            this.car.draw()
            this.drawObstacles()
            this.moveObstacles()
            this.clearObstacles()       //Limpiamos los obstaculos para no crear un array infinito
            console.log(this.isCollision())
            if(this.isCollision()) {    //Comprobamos colisiones y gameover
            this.gameOver()}
        },10)

    },
    restart: function() {
        this.obstacles = []
    },
    drawRect: function () {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(0, 0, this.winW, this.winH)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 30, this.winH)
        this.ctx.fillRect(this.winW-30, 0, 30, this.winH)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(40, 0, 10, this.winH)
        this.ctx.fillRect(this.winW - 50, 0, 10, this.winH)
    },
    drawObstacles: function(){
        this.obstacles.forEach(obstacle=>obstacle.draw())
    },
    moveObstacles: function(){
        this.obstacles.forEach(obstacle => obstacle.moveObstacle())
    },
    generateObstacles: function() {
        console.log("se genera obstaculo")
        console.log(this.obstacles)
        this.obstacles.push(new Component(0, 0, "red", 300, 50))  //Generamos obstaculos en el array. El math.Random sirve para que tengan diferentes tamanios.
    },
    clear: function() {
        this.ctx.clearRect(0, 0, this.winW, this.winH);
    },
    setEventListeners: function () {
        // El objeto event está presente en cualquier función invocada fruto de un evento, puedes registrarlo (o no)
        document.onkeydown = e => {
            console.log(e)
            e.keyCode === 37 ? this.car.goLeft() : null
            e.keyCode === 39 ? this.car.goRight() : null
        }
    },
    clearObstacles: function() {
        this.obstacles.forEach((obs, idx) => {
          if(obs.y > 1200)  {this.obstacles.splice(idx, 1)}  //Limpiamos los obstaculos iterando sobre ellos.
        })
    },
    isCollision: function() {
        console.log(this.car._posX)
        console.log(this.car._carWidth)
        return this.obstacles.some(obstacle => {        //Comprobamos si alguno de los obstaculos colisiona.
          return (
            ((this.car._posX + this.car._carWidth) >= obstacle.x &&     //Choque con lado izquierdo del obstaculo
              this.car._posX < (obstacle.x + obstacle.width) &&        //Choque con lado derecho del obstaculo
              this.car._posY < (obstacle.y + obstacle.height)          //Choque con lado de abajo del obstaculo
              )
          )
        })
    },
    gameOver: function () {
        clearInterval(this.interval)
    }
}

/* Creo que no consigo que se pinten los obstaculos,
creo que es porque no me funciona Component.draw() */