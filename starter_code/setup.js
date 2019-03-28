function setup(canvas,startGame) {
    function setCanvasDimensions() {
        canvas.setAttribute("height", window.innerHeight);
        canvas.setAttribute("width", window.innerWidth);
    }
    window.onresize = function () {
        w = window.innerWidth;
        h = window.innerHeight;
        w2 = w / 2;
        h2 = h / 2;
        setCanvasDimensions();
        startGame();
    };
    w = window.innerWidth;
    h = window.innerHeight;
    w2 = w / 2;
    h2 = h / 2;
    setCanvasDimensions();
    startGame();
}