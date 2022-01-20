const carRaceApp = {
    appName: 'Car Race App',
    author: 'Andre Documet',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,    // importante definir el contexto
    car: undefined,     // importante definir el auto
    obstacles: [],
    init(w, h) {
        this.setContext();
        this.setSize(w, h);
        this.createCar();
        this.drawCar();
        this.setEventHandlers();

        //this.drawAllObstacles();
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d');

    },
    setSize(w, h) {              // dichos valores se los doy cuando invoco la función
        this.gameSize = { w: w, h: h }
        document.querySelector('#canvas').setAttribute('width', this.gameSize.w);
        document.querySelector('#canvas').setAttribute('height', this.gameSize.h);
    },
    drawRoadBoard() {
        //Draw Road Green Rectangle
        this.ctx.fillStyle = '#058007';
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h);
        //Draw Road Lead color rectangle
        this.ctx.fillStyle = '#b2b2b2';
        this.ctx.fillRect(50, 0, this.gameSize.w - 100, this.gameSize.h);
    },
    drawDashedLines(w, h) {
        //Lineas espaciadas en el centro
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.moveTo(this.gameSize.w / 2, 0);
        this.ctx.setLineDash([40, 20]);
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h);
        this.ctx.stroke();
        this.ctx.closePath();

        //Linea continua izquierda
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(70, 0)
        this.ctx.setLineDash([40, 0]);
        this.ctx.lineTo(70, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        //Linea continua derecha
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w - 70, 0)
        this.ctx.setLineDash([40, 0]);
        this.ctx.lineTo(this.gameSize.w - 70, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    createCar() {
        this.car = new Car(this.ctx, 300, 500, 100, 100)   // instancia del Car
    },
    drawCar() {
        setInterval(() => {
            this.clearScreen()
            this.drawRoadBoard();
            this.drawDashedLines();
            this.car.draw();
            //this.createObstacles();
        }, 40)
    },
    clearScreen() {              // Función borra todo: va desde el origen a todo la dimension del juego
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },
    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
        })
    }
    // createObstacles() {
    //     this.obstacles.push(
    //         new Obstacles(this.ctx, 100, 0, 50, 50)
    //     )
    // }
    // drawAllObstacles() {}

}

// createObstacles(){
//     this.ctx.fillStyle='brown'
//     this.ctx.fillRect(46,0,212,20)
//     this.ctx.fillRect(46,16,70,20)
//     this.ctx.fillRect(150,100,108,20)
//     this.ctx.fillRect(46,200,70,20)
//     this.ctx.fillRect(46,320,135,20)
// }