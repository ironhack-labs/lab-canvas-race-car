window.onload = function() {
    /** @type HTMLCanvasElement */
    var canvasDOMEl = document.querySelector("#road");
    var ctx = canvasDOMEl.getContext("2d")
    canvasDOMEl.setAttribute("width", 420)
    canvasDOMEl.setAttribute("height", 700)
    var offset = 0

    loadBoard()
    movingTheLine()

    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    function startGame() {

    }

    function loadBoard() {
        //Grass
        ctx.beginPath()
        ctx.rect(0, 0, 420, 700)
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
        ctx.moveTo(205, 0)
        ctx.lineTo(205, 700)
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
        }, 35);
    }
};