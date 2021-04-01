const raceGame = {
    name: 'HTML5 Canvas Game',
    description: 'First Canvas Project',
    author: 'MrHose',
    license: undefined,
    version: '1.0-Beta',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    car: undefined,
    init() {
        this.canvasDom = document.querySelector('#canvas');
        this.ctx = this.canvasDom.getContext('2d');
        this.setCanvasSize();
    },

    setCanvasSize() {
        this.canvasSize = {
            w: this.canvasDom.getAttribute('width'),
            h: this.canvasDom.getAttribute('height')
        }
    },

    drawRoad() {
        this.ctx.fillStyle = '#3CC433'; //Grass
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
        this.ctx.fillStyle = '#524C4C'; //Left side
        this.ctx.fillRect(20, 0, 5, this.canvasSize.h);
        this.ctx.fillStyle = 'white'; // Left side
        this.ctx.fillRect(25, 0, 5, this.canvasSize.h);
        this.ctx.fillStyle = '#524C4C'; //Road
        this.ctx.fillRect(30, 0, 440, this.canvasSize.h);
        this.ctx.fillStyle = 'white'; //Right side
        this.ctx.fillRect(470, 0, 5, this.canvasSize.h);
        this.ctx.fillStyle = '#524C4C'; //Right side
        this.ctx.fillRect(475, 0, 5, this.canvasSize.h);
        //Middle Line
        this.ctx.strokeStyle = '#ffeb3b';
        this.ctx.lineWidth = 15;
        this.ctx.beginPath();
        this.ctx.setLineDash([60, 30]);
        this.ctx.moveTo(250, 0);
        this.ctx.lineTo(250, this.canvasSize.h);
        this.ctx.stroke();
        this.ctx.closePath();
        //Middle Line
    },

    createCar() {
        this.car = new Car(this.ctx);
    },

    drawAll() {
        setInterval(() => {
            this.clearScreen()
            this.drawRoad()
            this.car.draw()

        }, 50)
    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft(this.canvasSize) : null
            e.key === 'ArrowRight' ? this.car.moveRight(this.canvasSize) : null
        }
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}


class Car {
    constructor(ctx) {
        this.ctx = ctx;
        this.init();
        this.carSize = { w: 50, h: 90 };
        this.carPos = {
            x: 225,
            y: 550
        }   //Positioning the car to the bottom - center
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        if (this.carPos.x > 30) {
            this.carPos.x -= 50 //5 steps from the center to the left
        }


    }

    moveRight() {
        if (this.carPos.x < 420) {
            this.carPos.x += 50 //5 steps from the center to the right
        }


    }
}

//coche no pinte => intervalo
