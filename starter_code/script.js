var myObstacles = [];

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        var gameBoard = document.getElementById('game-board');
        this.canvas.width = 400;
        this.canvas.height = 800;
        this.canvas.id = 'canvas';
        this.context = this.canvas.getContext("2d");
        gameBoard.appendChild(this.canvas);
    },
    drawRoad: function() {
        var ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = '#008100';
        ctx.fillRect(25, 25, 400, 800);

        ctx.beginPath();
        ctx.fillStyle = '#808080';
        ctx.fillRect(60, 25, 300, 800);

        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.fillRect(80, 25, 20, 800);

        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.fillRect(320, 25, 20, 800);

        ctx.beginPath();
        ctx.setLineDash([5, 15]);
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#fff';
        ctx.stroke();
        ctx.lineWidth = 10;
    }
}

var car = {
    x: 180,
    y: 670,
    moveUp: function() { this.y -= 25 },
    moveDown: function() { this.y += 25 },
    moveLeft: function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
}

function drawCar(car) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, car.x, car.y, 60, 120);
    }
    img.src = 'images/car.png';
}

/*function drawObstacles(width, height, style, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = style;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}*/


window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    function startGame() {
        myGameArea.start();
        myGameArea.drawRoad();
        drawCar(car);


        document.onkeydown = function(e) {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            switch (e.keyCode) {
                case 38:
                    car.moveUp();
                    drawCar(car);
                    ctx.clearRect(car.x, car.y, 400, 800);
                    myGameArea.drawRoad();
                    car.moveUp();
                    break;
                case 40:
                    car.moveDown();
                    drawCar(car);
                    myGameArea.drawRoad();
                    car.moveUp();
                    break;
                case 37:
                    car.moveLeft();
                    drawCar(car);
                    myGameArea.drawRoad();
                    car.moveUp();
                    break;
                case 39:
                    car.moveRight();
                    drawCar(car);
                    myGameArea.drawRoad();
                    car.moveUp();
                    break;
            }
        }
    }
}