var app = {
    version: '0.1',
    ctx: undefined,
    canvasDOM: undefined,
    w: 550,
    h: 550,
    car: {
        width: 50,
        height: 100,
        x: 205,
        y: 440,
    },
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
        var img = new Image();
        
        function drawCar(car) {
            img.onload = () => {
            ctx.drawImage(img, car.x, car.y, car.width, car.height);
            };
            img.src = 'images/car.png';

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
        }
        
        function drawLineRoad() {
        ctx.fillStyle = "#fff"
        for(let i = 0; i < 600; i+=60 ) {
            ctx.fillRect(225, 0 + i, 8, 20 )
        }
        }

        function moveCar(keyPress, car) { 
        if(keyPress == 37) {
        car.x -= 25 
        } else if (keyPress == 39) {
        car.x += 25
        }
        }


        drawCar(this.car)
        drawRoad()
        drawLineRoad()
        moveCar(keyPress, this.car)
            
    },
    init: function(canvasSelector) {
        this.canvasDOM = document.querySelector(canvasSelector)
        this.ctx = this.canvasDOM.getContext('2d');
        this._setCanvasDimensions()
        this._listener()
        this._draw()
    }
}   
