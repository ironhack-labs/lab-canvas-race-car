var app = {
    version: '0.1',
    ctx: undefined,
    canvasDOM: undefined,
    w: 550,
    h: 550,
    _setCanvasDimensions: function () {
        this.canvasDOM
            .setAttribute("width", this.w);

        this.canvasDOM
            .setAttribute("height", this.h)
    },
    _listener: function() {
        document.addEventListener("keydown", (e) => {
        this._draw(e.keyCode)});
    },
    _draw: function(keyPress) {
        var ctx = this.ctx;
        var car = {
        x: 205,
        y: 440,
        moveCar:  function(keyPress) { 
                if(keyPress == 37) {
                this.x -= 25 
                } else if (keyPress == 39) {
                this.x += 25
                }
            }
        }
        
        function drawRoad() {
        ctx.fillStyle = "#068200";
        ctx.fillRect(25, 0, 30, 600);
        ctx.fillStyle = "#808080";
        ctx.fillRect(55, 0, 10, 600);
        ctx.fillRect(75, 0, 300, 600);
        ctx.fillRect(385, 0, 10, 600);
        ctx.fillStyle = "#068200";
        ctx.fillRect(395, 0, 30, 600);
        ctx.fillStyle = "#fff"
        for(let i = 0; i < 600; i+=60 ) {
            ctx.fillRect(225, 0 + i, 8, 20 )
        }
        }


        var img = new Image();

        function drawCar(car) {
            img.onload = function() {
            ctx.drawImage(img, car.x, 440, 50, 100);
            };
            img.src = 'images/car.png';

        }

        drawCar(car)
        drawRoad()
        car.moveCar(keyPress)

        



    },
    init: function(canvasSelector) {
        this.canvasDOM = document.querySelector(canvasSelector)
        this.ctx = this.canvasDOM.getContext('2d');
        this._setCanvasDimensions()
        this._listener()
        this._draw()
    }
}   
