const carGame = {
    appName: 'Fast N Furious',
    author: 'Manuel Perez',
    version: '1.0.0',
    license: undefined,
    description: 'juego de carreras to potente',
    ctx: undefined,
    isGameOver: false,
    obstacles: [],
    framesIndex: 0,
    imageInstance: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    car: undefined,


    init() {
        this.setContext()
        this.createRoad()
        this.car = new Car(this.ctx, this.canvasSize, { x: 215, y: 500 }, { width: 80, heigth: 80 }, 10)
        this.start()
    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d');

    },

    start() {
        const loop = () => {
            this.framesIndex++
            if (this.framesIndex % 100 === 0) {
                this.createObstacle();
            }
            this.update()
            this.clearAll()
            this.draw()
            if (!this.isGameOver) {
                requestAnimationFrame(loop);
            } else {
                this.onGameOver();
            }
        }
        loop();




    },

    createObstacle() {
        this.obstacles.push(new Obstacle(this.ctx, this.canvasSize))
    },
    onGameOver() {
        this.isGameOver = true
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    update() {
        this.obstacles.forEach((element) => {
            element.move();
        })
    },
    draw() {
        this.createRoad()
        this.car.draw();
        this.obstacles.forEach((element) => {
            element.draw()

        });

    },

    createRoad() {
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








}