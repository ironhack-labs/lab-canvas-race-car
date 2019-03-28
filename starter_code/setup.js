let w, h, w2, h2

function setup(canvas) {
    function setCanvasDimensions() {
        canvas.setAttribute("height", window.innerHeight);
        canvas.setAttribute("width", window.innerWidth/2);
    }

    window.onresize = function () {
        w = window.innerWidth/2;
        h = window.innerHeight;
        w2 = w / 4;
        h2 = h / 2;

        setCanvasDimensions();
        // draw();
    }

    w = window.innerWidth/2;
    h = window.innerHeight;
    w2 = w / 4;
    h2 = h / 2;

    setCanvasDimensions();
    // draw();
}