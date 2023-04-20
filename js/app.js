const carGame = {
    appName: 'Fast N Furious',
    author: 'Manuel Perez',
    version: '1.0.0',
    license: undefined,
    description: 'juego de carreras to potente',
    ctx: undefined,
    obstacles: [],
    framesIndex: 0,
    imageInstance: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    car: {
        carPosition: {
            x: 215,
            y: 600
        },
        carSize: {
            width: 70,
            heigth: 80
        },
        speed: 10
    },

    init() {
        this.setContext()
        this.createInstance()
        this.createRoad()
        this.setEventListeners()
        this.start()
    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d');

    },

    start() {
        setInterval(() => {

            this.clearAll()
            this.drawAll()
            this.framesIndex++


        }, 50)
    },
    drawAll() {
        this.createRoad()
        this.createCar()
        this.obstacleTimer()


    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    obstacleTimer() {


        let nuevo = new Obstacle(this.ctx, this.canvasSize, 160);
        this.obstacles.push(nuevo)
        this.drawObstacle()




    },
    drawObstacle() {
        this.obstacles.forEach((element) => {
            if (this.framesIndex % 40 === 0) {
                element.obstacleTimer()
            }

            console.log('dibujando');
        });
    }

    // createObstacle() {
    //     let nuevo = new Obstacle(this.ctx, this.canvasSize, 160);
    //     this.obstacles.push(nuevo)


    // },

    , createRoad() {
        this.ctx.fillStyle = '#3b831d'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = '#808080'
        this.ctx.fillRect(25, 0, this.canvasSize.w - 50, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(35, 0, this.canvasSize.w - 70, this.canvasSize.h)
        this.ctx.fillStyle = '#808080'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 20])      // <-- patrón de repetición
        this.ctx.moveTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h - 600)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    createInstance() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car.png'
    },
    createCar() {

        this.ctx.drawImage(
            this.imageInstance,
            this.car.carPosition.x,
            this.car.carPosition.y,
            this.car.carSize.width,
            this.car.carSize.heigth,
        )


    },

    setEventListeners() {
        document.onkeydown = event => {

            const { key } = event

            if (key == 'ArrowLeft') {
                this.car.carPosition.x -= 10
            }

            if (key == 'ArrowRight') {
                this.car.carPosition.x += 10
            }
        }
    },





}