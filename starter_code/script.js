
var canvas, ctx;


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
    ctx.beginPath
ctx.lineWidth = 3;
ctx.strokeStyle="white"
ctx.moveTo(200,50)
ctx.lineTo(200,70)
ctx.moveTo(200,80)
ctx.lineTo(200,100)
ctx.moveTo(200,110)
ctx.lineTo(200,130)
ctx.moveTo(200,140)
ctx.lineTo(200,160)
ctx.moveTo(200,170)
ctx.lineTo(200,190)
ctx.moveTo(200,200)
ctx.lineTo(200,220)
ctx.moveTo(200,230)
ctx.lineTo(200,250)
ctx.moveTo(200,260)
ctx.lineTo(200,280)
ctx.moveTo(200,290)
ctx.lineTo(200,310)
ctx.moveTo(200,320)
ctx.lineTo(200,340)
ctx.moveTo(200,350)
ctx.lineTo(200,370)
ctx.moveTo(200,380)
ctx.lineTo(200,400)
ctx.moveTo(200,410)
ctx.lineTo(200,430)
ctx.moveTo(200,440)
ctx.lineTo(200,460)
ctx.moveTo(200,470)
ctx.lineTo(200,490)
ctx.moveTo(200,500)
ctx.lineTo(200,520)
ctx.moveTo(200,530)
ctx.lineTo(200,550)
ctx.moveTo(200,560)
ctx.lineTo(200,580)
ctx.moveTo(200,590)
ctx.lineTo(200,610)
ctx.moveTo(200,620)
ctx.lineTo(200,640)
ctx.stroke()
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
        }
        };
