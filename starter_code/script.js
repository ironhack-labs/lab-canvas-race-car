window.onload = function() {
    /** @type HTMLCanvasElement */
    const canvasWidth = 420
    const canvasHeight = 700
    var canvasDOMEl = document.querySelector("#road");
    var ctx = canvasDOMEl.getContext("2d")
    canvasDOMEl.setAttribute("width", canvasWidth)
    canvasDOMEl.setAttribute("height", canvasHeight)
    var offset = 0

    var car = new Image();
    car.src = "./images/car.png"
    const carWidth = 60
    const carHeigth = 100
    let dataCar = {
        x: canvasWidth / 2 - carWidth / 2,
        y: canvasHeight - carHeigth - 20
    }

    loadBoard()
    movingTheLine()


    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    car.onload = function() {
        paintCar()
    }

    function startGame() {

    }

    function loadBoard() {
        //Grass
        ctx.beginPath()
        ctx.rect(0, 0, canvasWidth, canvasHeight)
        ctx.fillStyle = "rgb(0, 128, 0)"
        ctx.fill()

        //road
        ctx.beginPath()
        ctx.rect(40, 0, 340, 700)
        ctx.fillStyle = "rgb(128, 128, 128)"
        ctx.fill()

        //external lines
        ctx.beginPath()
        ctx.rect(50, 0, 10, 700)
        ctx.fillStyle = "white"
        ctx.fill()
        ctx.beginPath()
        ctx.rect(360, 0, 10, 700)
        ctx.fillStyle = "white"
        ctx.fill()
    }

    function drawMiddleLine() {
        ctx.beginPath()
        ctx.setLineDash([20, 40])
        ctx.strokeStyle = 'white'
        ctx.lineDashOffset = -offset
        ctx.moveTo(canvasWidth / 2, 0)
        ctx.lineTo(canvasWidth / 2, 700)
        ctx.lineWidth = 3
        ctx.stroke()
    }

    function clearRoad() {
        ctx.clearRect(0, 0, canvasDOMEl.width, canvasDOMEl.height)
    }

    function movingTheLine() {
        offset += 10;
        if (offset > 40) {
            offset = 0
        }
        drawMiddleLine()
        setTimeout(() => {
            clearRoad()
            loadBoard()
            movingTheLine()
            paintCar()
        }, 35);
    }

    function paintCar() {

        ctx.drawImage(car, dataCar.x, dataCar.y, carWidth, carHeigth)
    }
};