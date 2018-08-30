var canvas, ctx;

// con esto creo la carretera
function Road() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = 'grey';
    ctx.fillRect(40, this.y, this.width - 80, this.height);
    ctx.closePath();
    ctx.beginPath();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fillRect(60, this.y, 20, this.height);
    ctx.fillRect(this.width - 80, 0, 20, this.height);
    ctx.closePath();
    ctx.beginPath();
}

function startGame() {

}

function Car() {
    this.x = 200;
    this.y = 300;
    this.width = 120;
    this.height = 100;
    this.img = new Image();
    this.img.src = "images/car.png"
    this.img.onload = function() {
        this.draw();
    }.bind(this);

    this.draw = function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    this.moveLeft = function() {
        this.x -= 10;
    }
    this.moveRight = function() {
        this.x += 10;
    }
}


window.onload = function() {
        canvas = document.getElementById("myCanvas");
        //console.log("veo canvas");
        ctx = canvas.getContext('2d');

        var car = new Car;
        document.getElementById("start-button").onclick = function() {

            startGame();
        };