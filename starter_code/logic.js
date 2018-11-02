
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
    this.vx = 5;
    this.vy = 5;
    this.car = new Car(this.canvas, 216, 620, 70, 160, this.vx, this.vy, "images/car.png");
    this.obstacle = [new Obstacles(this.canvas, this.x + 50, this.y + 400, 200, 20), new Obstacles(this.canvas, this.x + 300, this.y + 100, 200, 40), new Obstacles(this.canvas, this.x + 50, this.y - 80, 150, 20)];
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
    var idInterval = setInterval(function () {
        this.drawBackground();
        this.car.drawCar();
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

        this.car.moveCar();
        this.car.drawCar();
        this.obstacle[0].drawObstacle();
        if (this.colision()) {
            clearInterval(idInterval);
            alert("¡¡HAS PERDIDO!!");
        }
        this.obstacle[1].drawObstacle();
        if (this.colision()) {
            clearInterval(idInterval);
            alert("¡¡HAS PERDIDO!!");
        }
        this.obstacle[2].drawObstacle();
        if (this.colision()) {
            clearInterval(idInterval);
            alert("¡¡HAS PERDIDO!!");
        }




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

Car.prototype.moveCar = function () {

    if (this.x + this.width >= this.canvas.width - 50) {
        this.x = this.x - 5;
    }

    if (this.x < 50) {
        this.x = this.x + 5;
    }
}



function Obstacles(canvas, x, y, width, height) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

}

Obstacles.prototype.drawObstacle = function () {
    console.log(this.x);
    console.log(this.y);
    if (this.y > 800) {
        this.y = 0;
    }

    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y++, this.width, this.height);
}

Canvas.prototype.colision = function () {

    this.obstacle.forEach(function (item) {
        debugger
        if (this.car.x + this.car.width >= item.x && item.x + item.width >= this.car.x &&
            this.car.y + this.car.height >= item.height && item.y + item.height >= this.car.y) {
            return true;
        }
    }.bind(this))

}