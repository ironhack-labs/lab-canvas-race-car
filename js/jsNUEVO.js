const roadGame = {
    nctx: undefined,
    canvasDOM: undefined,
    canvasSize: { width: undefined, height: undefined },
    image: undefined,

    init() {
        this.setContext()
        this.drawFilledRectangle()
        this.setListeners()
        this.createCar()
        this.car.init()
        this.car.draw()
        this.start
        this.moveLeft()
        this.moveRight()
    },

    setContext() {
        this.canvasDOM = document.querySelector("#canvas")
        this.ctx = this.canvasDOM.getContext("2d")
    },

    createCar() {
        this.car = new Car(this.ctx, 225, 600, 50, 100)
    },

    start() {
        setInterval(() => {
            this.clearScreen()
            this.car.draw()
        }, 1000 / 50)
    },


    setListeners() {
        document.onkeydown = e => {
            console.log("La tecla: ", e.key)
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

    drawFilledRectangle() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(50, 0, canvas.width - 100, canvas.height);

        this.ctx.fillStyle = "yellow"
        this.ctx.lineWidth = 2
        this.ctx.fillRect(70, 0, 15, canvas.height);

        this.ctx.fillStyle = "yellow"
        this.ctx.lineWidth = 2
        this.ctx.fillRect(415, 0, 15, canvas.height);

        this.ctx.strokeStyle = "yellow"
        this.ctx.beginPath();
        this.ctx.setLineDash([15, 15]);
        this.ctx.moveTo(245, 0);
        this.ctx.lineTo(245, canvas.height);
        this.ctx.stroke();

    },



    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    }
}

class Car {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx

        this.posX = posX
        this.posY = posY

        this.width = width
        this.height = height

        this.image = undefined

        this.init()
    }

    init() {
        this.image = new Image()
        this.image.src = '../images/blue.png'
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    moveLeft() {
        console.log("Muevo a la izquierda", this.posX)
        this.posX -= 20
    }

    moveRight() {
        console.log("Muevo a la derecha", this.posX)
        this.posX += 20
    }
}


window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };








    function startGame() {//todo lo que sea del juego va dentro de esta funcion

        roadGame.init()

    }

};