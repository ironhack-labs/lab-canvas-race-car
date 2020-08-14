const $canvas = document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
const $fondo = document.querySelector(".road-img");
const $cochesits = document.querySelector(".car-img");

let intervalId;
let keys = [];
let scrollSpeed = 5;
let imgHeight = 0;
let canWidth = $canvas.width;
let canHeight = $canvas.height;
let yaInicio = false;
let obstacles = [];
let frames = 0;
let score = 0;
let colores = ['MEDIUMPURPLE', 'CHARTREUSE', 'DEEPSKYBLUE', 'CRIMSON', '#BADA55'];

//CLASE PARA LOS COCHES
class Coche {
    constructor(x, y, source) {
            this.x = x;
            this.y = y;
            this.speedX = 0;
            this.speedY = 0;
            this.source = source;
            this.width = 40;
            this.height = 100;
        }
        //MÉTODO PARA PINTAR COCHE
    draw() {
            ctx.drawImage($fondo, 0, imgHeight, 500, 700);
            ctx.drawImage($fondo, 0, imgHeight - canHeight, 500, 700);
            imgHeight += scrollSpeed;
            if (imgHeight === canHeight) {
                imgHeight = 0;
            }
            ctx.drawImage(this.source, this.x, this.y, 50, 100);
        }
        //MÉTODO ACTUALIZACIÓN DE POSICIÓN
    newPos() {
        this.x += this.speedX
        if (this.x > 400) {
            this.x = 400;
        }
        if (this.x < 50) {
            this.x = 50;
        }
    }
    isTouching(obstacle) {
        return (
            this.x < obstacle.x + obstacle.width &&
            this.x + this.width > obstacle.x &&
            this.y < obstacle.y + obstacle.height &&
            this.y + this.height > obstacle.y
        )
    }
}

//CLASE PARA OBSTÁCULOS
class Obstacle {
    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 20;
    }
    draw() {
        let randColor = Math.floor(Math.random() * 4);
        ctx.fillStyle = colores[randColor];
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.y += scrollSpeed;
    }
}

//FUNCIÓN PARA LIMPIAR EL CANVAS
function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}

//FUNCIÓN QUE GENERA OBSTÁCULOS
function generateObstacles() {
    if (frames % 60 === 0) {
        let minWidth = 150
        let maxWidth = 250
        let randomWidth = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth)
        let randomX = Math.floor(Math.random() * (400 - randomWidth) + 39)
        obstacles.push(new Obstacle(randomX, 0, randomWidth))
    }
}

//FUNCIÓN PARA PINTAR LOS OBSTÁCULOS
function drawObstacles() {
    obstacles.forEach((obstacle, i) => {
        obstacle.draw()
        if (obstacle.y > 700) {
            obstacles.splice(i, 1)
        }
    })
}
//SCORE
function printScore() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 10, 120, 25);
    ctx.fillStyle = "blueviolet";
    ctx.font = "20px Sans-serif"
    if (frames % 30 === 0) score++
        ctx.fillText(`Score: ${score}`, 10, 30)
}


//AL CARGARSE LA PÁGINA
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        //EVITAMOS QUE SE CARGE VARIAS VECES EL JUEGO
        if (!yaInicio) {
            startGame();
            yaInicio = true;
        }
    };
};

//FUNCIÓN PARA ARRANCAR EL JUEGO
function startGame() {
    const coche = new Coche(225, 558, $cochesits);

    //UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE UPDATE
    update();

    //FUNCIÓN PARA CHECAR COLISIONES
    function checkCollitions() {
        obstacles.forEach(obstacle => {
            if (coche.isTouching(obstacle)) {
                clearInterval(intervalId)
                alert('Perdisteeeeeeeeee ALV!')
            }
        })
    }

    function update() {
        frames++;
        clearCanvas();
        coche.draw();
        coche.newPos();
        generateObstacles();
        drawObstacles();
        printScore();
        checkKeys();
        checkCollitions();
    }
    intervalId = setInterval(update, 1000 / 60);

    //FUNCIÓN PARA LAS TECLAS
    function checkKeys() {
        if (keys[37]) {
            coche.speedX = -8;
        } else if (keys[39]) {
            coche.speedX = 8;
        } else {
            coche.speedX = 0;
        }
    }

    document.addEventListener("keydown", event => {
        keys[event.keyCode] = true;
    })
    document.addEventListener("keyup", event => {
        keys[event.keyCode] = false;
    })
}