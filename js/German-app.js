const drawingApp = {
    name: 'HTML5 Canvas application',
    description: 'App for Canvas basic forms',
    author: 'Germán Álvarez',
    license: undefined,
    version: '1.0.0',
    canvasDOM: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    init() {
        this.canvasDOM = document.querySelector('#myCanvas')
        this.ctx = this.canvasDOM.getContext('2d')
        this.setCanvasSize()
        console.log(this.ctx)
    },
    setCanvasSize() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    drawFilledSquare() {
        this.ctx.fillRect(this.canvasSize.w / 2 - 150, this.canvasSize.h / 2 - 150, 300, 300)
        this.ctx.fillStyle = 'red'      // color de relleno 
        this.ctx.fillRect(this.canvasSize.w / 2 - 300, this.canvasSize.h / 2 - 100, 600, 200)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w / 2 - 50, this.canvasSize.h / 2 - 50, 100, 100)
    },
    drawLinearSquare() {
        this.ctx.strokeStyle = 'red'      // color de borde
        this.ctx.lineWidth = 30           // ancho de borde
        this.ctx.strokeRect(this.canvasSize.w / 2 - 200, this.canvasSize.h / 2 - 100, 400, 200)
        this.ctx.strokeStyle = 'blue'
        this.ctx.lineWidth = 10
        this.ctx.strokeRect(this.canvasSize.w / 2 - 250, this.canvasSize.h / 2 - 250, 200, 500)
    },
    drawRegularLines() {
        this.ctx.beginPath()
        this.ctx.moveTo(100, 100)
        this.ctx.lineTo(800, 100)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'red'
        this.ctx.lineWidth = 20

        this.ctx.beginPath()
        this.ctx.moveTo(200, 200)
        this.ctx.lineTo(300, 200)
        this.ctx.lineTo(800, 500)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawDashedLine() {
        this.ctx.strokeStyle = 'blue'
        this.ctx.lineWidth = 20

        this.ctx.beginPath()
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2 - 10, 100)
        this.ctx.lineTo(this.canvasSize.w / 2 - 10, 500)
        this.ctx.stroke()
        this.ctx.closePath()            // Finalizar un trazado
    },
    drawArc() {
        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = 10
        this.ctx.fillStyle = 'red'

        this.ctx.beginPath()
        this.ctx.arc(100, 100, 50, 0, Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.fillStyle = 'black'

        this.ctx.beginPath()
        this.ctx.arc(400, 400, 100, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.closePath()

    },
    insertImage() {
        const imageInstance = new Image()
        imageInstance.src = 'img/ball.png'
        imageInstance.onload = () => this.ctx.drawImage(imageInstance, 100, 100, 200, 200)
    }
}


const interactionApp = {
    name: 'HTML5 Canvas application',
    description: 'App for Canvas interactioon',
    author: 'Germán Álvarez',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    ball: undefined,
    init() {
        this.canvasDOM = document.querySelector('#myCanvas')
        this.ctx = this.canvasDOM.getContext('2d')
        this.setCanvasSize()
        this.createBall()
        this.setListeners()
        this.drawAll()
    },
    setCanvasSize() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    createBall() {
        this.ball = new Ball(this.ctx)
    },
    drawAll() {
        setInterval(() => {
            this.clearScreen()
            this.ball.draw()
        }, 50)
    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.ball.moveLeft() : null
            e.key === 'ArrowRight' ? this.ball.moveRight() : null
        }
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}


class Ball {

    constructor(ctx) {
        this.ctx = ctx
        this.init()

        this.ballPos = { x: 100, y: 100 }
        this.ballSize = { w: 100, h: 100 }
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/ball.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    moveLeft() {
        this.ballPos.x -= 10
    }

    moveRight() {
        this.ballPos.x += 10
    }
}










const animationApp = {
    name: 'HTML5 Canvas application',
    description: 'App for Canvas animation',
    author: 'Germán Álvarez',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    camels: [],
    init() {
        this.canvasDOM = document.querySelector('#myCanvas')
        this.ctx = this.canvasDOM.getContext('2d')
        this.setCanvasSize()
        this.createCamels()
        this.createLines()
        this.drawAll()
    },
    setCanvasSize() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    createLines() {
        this.ctx.beginPath()
        this.ctx.moveTo(100, 250)
        this.ctx.lineTo(1200, 250)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(100, 450)
        this.ctx.lineTo(1200, 450)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    createCamels() {
        const camel1 = new Camel(this.ctx, 100, 100, 150, 110, this.canvasSize.w, this.canvasSize.h, 10)
        const camel2 = new Camel(this.ctx, 100, 300, 100, 80, this.canvasSize.w, this.canvasSize.h, 30)
        const camel3 = new Camel(this.ctx, 100, 500, 120, 100, this.canvasSize.w, this.canvasSize.h, 20)
        this.camels.push(camel1, camel2, camel3)
    },
    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.createLines()
            this.camels.forEach(elm => elm.draw())
        }, 50)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}


class Camel {

    constructor(ctx, posX, posY, camelWidth, camelHeight, canvasWidth, canvasHeight, velX) {
        this.ctx = ctx
        this.camelPos = { x: posX, y: posY }
        this.camelSize = { w: camelWidth, h: camelHeight }
        this.canvasSize = { w: canvasWidth, h: canvasHeight }
        this.camelSpeed = velX

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/camel.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
    }

    move() {

        if (this.camelPos.x >= this.canvasSize.w - this.camelSize.w || this.camelPos.x <= 0) {
            this.turn()
        }

        this.camelPos.x += this.camelSpeed
    }

    turn() {
        this.camelSpeed *= -1
    }
}