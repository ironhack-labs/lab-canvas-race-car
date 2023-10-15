const controlledApp = {
    name: 'Controlled  app',
    description: 'Basic Canvas app for element controlling',
    version: '1.0.0',
    license: undefined,
    author: 'Ana',
    canvasTag: undefined,
    ctx: undefined,
    carInstance: undefined,
    canvasSize: { w: undefined, h: undefined },
    carPosition: { x: undefined, y: undefined },
    carSize :{w: 50, h: 100},
    fluidLeft: false,
    fluidRight: false, 
    obstacles: [],
    frameIndex: 0,
    init() {
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.createCar()
        this.setCarPosition()
        this.createObstacles()
        this.start()
    },
    setContext() {
        this.canvasTag = document.getElementById('canvas');
        this.ctx = this.canvasTag.getContext('2d');
    },
    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700,
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },
    drawRoad() {

        this.ctx.fillStyle = "green";
        this.ctx.fillRect(!this.canvasSize.w, !this.canvasSize.h, this.canvasSize.w, this.canvasSize.h);

        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(!this.canvasSize.w + 75, !this.canvasSize.h, this.canvasSize.w - 150, this.canvasSize.h);

        this.ctx.fillStyle = "white";
        this.ctx.fillRect(!this.canvasSize.w + 100, !this.canvasSize.h, this.canvasSize.w - 480, this.canvasSize.h);

        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.canvasSize.w - 120, !this.canvasSize.h, this.canvasSize.w - 480, this.canvasSize.h);

        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, !this.canvasSize.h)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    setEventListeners() {
        document.onkeydown = ({key}) => {
            if (key === 'ArrowLeft') this.fluidLeft = true
            if (key === 'ArrowRight') this.fluidRight = true
        }
        document.onkeyup = ({key}) => {
            if (key === 'ArrowLeft') this.fluidLeft = false
            if (key === 'ArrowRight') this.fluidRight = false
        }
    },
    start() {
            setInterval(() => {
            this.clearAll()
            this.drawAll()
            if (this.fluidLeft) this.carPosition.x -= 3
            if (this.fluidRight) this.carPosition.x += 3
            this.frameIndex++
            this.obstacles.forEach(elm=>elm.move())
            if (this.frameIndex % 100 === 0) this.createObstacles()
            this.obstacles.forEach(elm => {
                if (this.carPosition.x < elm.obstaclePosition.x + elm.obstacleSize.w &&
                    this.carPosition.y < elm.obstaclePosition.y + elm.obstacleSize.h &&
                    this.carPosition.x + this.carSize.w > elm.obstaclePosition.x &&
                    this.carPosition.y + this.carSize.h > elm.obstaclePosition.y) {
                    clearInterval(5)
                    alert('GAME OVER!')
                    location.reload()
                }
            })
        }, 10)
    },
   
    createCar() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    setCarPosition(){
        this.carPosition.x = this.canvasSize.w/2 - this.carSize.w/2
        this.carPosition.y = this.canvasSize.h - this.carSize.h - 30
    },
    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.generateObstacle()
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawCar() {     
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    },
    createObstacles(){
        this.obstacles.push(new Obstacle(this.ctx, this.canvasSize))
    },
    generateObstacle(){
        this.obstacles.forEach(elm => elm.drawObstacle())
    }
}