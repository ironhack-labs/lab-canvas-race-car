window.onload = function () {

    const carApp = {

        title: 'carrera de coches',
        author: 'Borja y Javier',
        license: undefined,
        version: '1.0',
        canvasDom: undefined,
        ctx: undefined,
        wWidth: undefined,
        wHeight: undefined,
        car: undefined,

        init(id) {
            this.canvasDom = document.getElementById(id)
            this.ctx = this.canvasDom.getContext('2d')
            this.setDimensions()

        },
        setDimensions() {

            this.gameWidth = 700
            document.getElementsByTagName('body')[0].style.margin = 0
            this.canvasDom.setAttribute('height', window.innerHeight)
            this.canvasDom.setAttribute('width', this.gameWidth)
            this.wWidth = window.innerWidth
            this.wHeight = window.innerHeight


            this.drawBackground()
            this.drawCar()
            this.drawControlledCar()

        },
        drawBackground() {
            this.ctx.fillStyle = "green"
            this.ctx.fillRect(0, 0, 700, this.wHeight)

            this.ctx.fillStyle = "grey"
            this.ctx.fillRect(50, 0, 600, this.wHeight)

            this.ctx.fillStyle = "white"
            this.ctx.fillRect(60, 0, 580, this.wHeight)

            this.ctx.fillStyle = "grey"
            this.ctx.fillRect(70, 0, 560, this.wHeight)

            this.discontinuousLine()


        },
        discontinuousLine() {
            this.ctx.strokeStyle = "white"
            this.ctx.lineWidth = 10
            this.ctx.setLineDash([35, 50])

            this.ctx.beginPath()
            this.ctx.moveTo(this.gameWidth / 2, 0)
            this.ctx.lineTo(this.gameWidth / 2, this.wHeight)
            this.ctx.stroke()
        },
        setEventListeners() {
            document.onkeydown = e => {
                switch (e.keyCode) {
                    case 37:
                        this.car.goLeft()
                        break;
                    case 39:
                        this.car.goRight()
                        break;


                }
            }
        },


        drawCar() {
            let car = new Image()
            car.src = `./images/car.png`
            car.onload = () => this.ctx.drawImage(car, 300, 500, 80, 150)
        },
        drawControlledCar(name) {
            this.car = new Car(this.ctx, name)
            setInterval(() => {
                this.clearScreen()
                this.car.draw()
            }, 10)
        },
        // clearScreen() {
        // // this.ct
        // }

    }

    //Aquí termina la app del juego

    class Car {
        constructor(ctx, name) {
            this._ctx = ctx
            this._image = new Image()
            this._image.src = `./images/${name}`
            this._posX = 300
            this._posY = 5
            this._vel = 4
        }
        draw() {
            this._ctx.drawImage(this._image, this._posX, this._posY)
        }
        goLeft() {
            this._posX -= this._vel
        }
        goRight() {
            this._posX += this._vel
        }
    }


    document.getElementById("start-button").onclick = carApp.init('myCanvas')


};
