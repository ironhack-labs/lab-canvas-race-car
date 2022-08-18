class App {
    constructor() { }

    startGame() {
        this.drawRoad()
    }

    drawRoad() {
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 500, 700);

        //pinta el cuadrado gris
        ctx.fillStyle = 'grey'
        ctx.fillRect(20, 0, 460, 700);

        //printa el cuadrado sin relleno blanco
        ctx.beginPath()
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 7
        ctx.strokeRect(45, -10, 410, 800)
        ctx.closePath()


        //pinta las lineas discontinuas
        ctx.beginPath()
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 7
        ctx.setLineDash([30, 10])
        ctx.moveTo(250, 20)
        ctx.lineTo(250, 700)
        ctx.stroke()
        ctx.closePath()
    }

    updateCanvas() {
        ctx.clearRect(0, 0, 1200, 1200);
        app.startGame()
        car.draw()
    }



}