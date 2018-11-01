
var KEY_RIGHT = 39;
var KEY_LEFT = 37;


function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.width = 500;
    this.height = 800;
    this.x = 0;
    this.y = 0;
    this.car = new Car(this.canvas, 216, 620, 70, 160, 5, 5, "images/car.png");
}
Canvas.prototype.drawBackground = function () {


    this.ctx.fillStyle = '#008500';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.x + 40, this.y, this.width - 80, this.height);

    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x + 50, this.y, this.width - 490, this.height);

    this.ctx.beginPath()
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([25, 25]);
    this.ctx.moveTo(this.width / 2, 0);
    this.ctx.lineTo(this.width / 2, this.height);
    this.ctx.stroke();
    this.ctx.closePath();




    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x + 440, this.y, this.width - 490, this.height);
}

Canvas.prototype.lineAnimation = function () {
    var offset = 0;
    setInterval(function () {
        this.ctx.clearRect(this.width / 2 - 1, 0, 5, this.height);
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'grey';
        this.ctx.lineWidth = 16; //ponemos ancho muy grande para no ver los restos de la linea al repintarse
        this.ctx.setLineDash([25, 25]);
        this.ctx.lineDashOffset = -offset; //desplaza la linea discont
        offset++;
        if (offset > 100) {
            offset = 0;
        }

        this.ctx.moveTo(this.width / 2, 0);
        this.ctx.lineTo(this.width / 2, this.height);

        this.ctx.stroke();
        this.ctx.closePath();
        this.car.drawCar();


    }.bind(this), 30);
}
function Car(canvas, x, y, width, height, vx, vy, src) {

    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vx = vx;
    this.vy = vy;
    this.src = src;
    this.setListeners();
}

Car.prototype.setListeners = function () {
    document.onkeydown = function (e) {
        e.preventDefault();
        switch (e.keyCode) {
            case KEY_LEFT:
                this.x -= this.vx;
                break;
            case KEY_RIGHT:
                this.x += this.vx;
                break;

        }
    }.bind(this);
}

Car.prototype.drawCar = function () {


    var carImg = new Image();
    carImg.src = this.src;

    this.ctx.drawImage(carImg, this.x, this.y, this.width, this.height)


}
