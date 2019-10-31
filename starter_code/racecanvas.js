/** @type HTMLCanvasElement */
let canvasDOMEL = document.getElementById("carRace");

/**@type CanvasRenderingContext2D. */
let ctx = canvasDOMEL.getContext("2d");




class Car {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed * 5;
    }

    drawCar() {
        this.x = 120;
        this.y = 550;
        let image = new Image();
        image.src = "lab-canvas-race-car/starter_code/images/car.png"
        image.onload = function(){
            startGame();
        }
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x += this.speed;
    }
}

class Obstacle {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
    }

    generateObstacle() {
     // this.y = (0,600)
        //Math.random(0,400)
    }
}


let w = 400;
let h = 600;

let w2 = w / 2;
let h2 = h / 2;

function animate() {

    setInterval(() => {

        ctx.clearRect(0, 0, w, h);

        //green
        ctx.beginPath()
        ctx.fillStyle = "#008100";
        ctx.fillRect(0, 0, w, h);
        ctx.closePath()

        //grey
        ctx.beginPath()
        ctx.fillStyle = "#808080";
        ctx.fillRect(50, 0, 300, h);
        ctx.closePath()

        //white line
        ctx.beginPath()
        ctx.fillStyle = "white";
        ctx.fillRect(60, 0, 10, h);
        ctx.closePath();

        //white dashed
        ctx.beginPath()
        ctx.fillStyle = "white";
        ctx.fillRect(330, 0, 10, h);
        ctx.closePath()


        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.setLineDash([30, 15]);
        ctx.moveTo(w2, 0);
        ctx.lineTo(w2, h);
        ctx.strokeStyle = "white";
        ctx.stroke();

    }, 1);
}

window.onkeydown = function (e) {
    switch (e.key) {
        case "ArrowLeft":
            if (x > 50 && x < 300) {
                x -= 5;
            };
            break;
        case "ArrowRight":
            if (x > 50 && x < 300) {
                x += 5;
            };
    }
}

