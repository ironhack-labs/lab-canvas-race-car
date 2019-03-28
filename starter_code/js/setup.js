let w, h, w2, h2

function setup(canvas, draw) {
    function setCanvasDimensions() {
        canvas.setAttribute("height", window.innerHeight)
        canvas.setAttribute("width", window.innerWidth)
    }

    window.onresize = function () {
        w = window.innerWidth
        h = window.innerHeight
        w2 = w / 2
        h2 = h / 2

        setCanvasDimensions()
        draw()
    }

    w = window.innerWidth
    h = window.innerHeight
    w2 = w / 2
    h2 = h / 2

    setCanvasDimensions()
    draw()
}