window.onload = function() {

    //CANVAS INFORMATION ========================
    const canvasWidth = 420
    const canvasHeight = 700
        /** @type HTMLCanvasElement */
    var canvasDOMEl = document.querySelector("#road");
    /** @type CanvasRenderingContext2D */
    var ctx = canvasDOMEl.getContext("2d")
    canvasDOMEl.setAttribute("width", canvasWidth)
    canvasDOMEl.setAttribute("height", canvasHeight)
        //offset for the middle
    var offset = 0

    var car = new Image();
    car.src = "./images/car.png"
    const carWidth = 50
    const carHeigth = carWidth * 2
    let dataCar = {
        x: canvasWidth / 2 - carWidth / 2,
        y: canvasHeight - carHeigth - 20
    }

    let obstacle = {
        widthObstacle: Math.floor(Math.random() * (270 - carWidth + 1) + carWidth),
        xPos: Math.floor(Math.random() * ((70 - carWidth) + 1) + 70),
        yPos: 0,
        thicknessObstacle: 10
    }
    let arrayObstacles = []

    loadBoard()
    movingTheLine()


    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    car.onload = function() {
        paintCar()
    }

    window.onkeydown = function(e) {
        const positionInc = 15
        switch (e.keyCode) {
            case 39:
                dataCar.x += positionInc
                break;
            case 37:
                dataCar.x -= positionInc
                break;
        }
        if (dataCar.x < 0) {
            dataCar.x = 0
        }
        if (dataCar.x > canvasWidth - carWidth) {
            dataCar.x = canvasWidth - carWidth
        }
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
        ctx.closePath()

        //road
        ctx.beginPath()
        ctx.rect(40, 0, 340, 700)
        ctx.fillStyle = "rgb(128, 128, 128)"
        ctx.fill()
        ctx.closePath()

        //external lines
        ctx.beginPath()
        ctx.rect(50, 0, 10, 700)
        ctx.fillStyle = "white"
        ctx.fill()
        ctx.beginPath()
        ctx.rect(360, 0, 10, 700)
        ctx.fillStyle = "white"
        ctx.fill()
        ctx.closePath()
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
        ctx.closePath()
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

    function initObstacles() {
        for (cont = 0; cont < arrayObstacles.length; cont++) {
            arrayObstacles[cont] = new obstacle;
        }
    }

    function removeObstacle() {
        arrayObstacles.shift
    }

    function addObstacle() {
        arrayObstacles.pop
    }

    function moveObstacle(increment) {
        for (cont = 0; cont < arrayObstacles.length; cont++) {
            arrayObstacles[cont].yPos += increment
        }
    }

    function printObstacle() {
        for (cont = 0; cont < arrayObstacles.length; cont++) {
            ctx.beginPath()
            ctx.rect(arrayObstacles.xPos, arrayObstacles.yPos, arrayObstacles.width, arrayObstacles.height)
            ctx.fillStyle = "rgb(135,0,7)"
            ctx.fill()
            ctx.closePath()
        }
    }

    function hasColisioned() {
        if (
            dataCar.x + dataCar.width >= arrayObstacles[0].xPos &&
            arrayObstacles[0].xPos + arrayObstacles[0].width >= dataCar.x &&
            dataCar.y + dataCar.height >= arrayObstacles[0].yPos &&
            arrayObstacles[0].yPos + arrayObstacles[0].height >= dataCar.y
        ) {
            return true
        } else {
            return false
        }
    }

};