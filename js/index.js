window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {}
};
const car = new Image();
car.src = './images/car.png';
const pista = new Image();
pista.src = './images/road.png';
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myGameArea = {
    frames: 0
};
class Component {
    constructor(width, height, x, y, dx, speed) {
        this.width = width;
        this.height = height;
        this.dx = dx
        this.y = y;
        this.x = x;
        this.speed = speed;
        this.color = 'blue';
        this.speedX = 0;
        this.speedY = 0;
    }
    imagenes() {
        context.drawImage(car, this.x, this.y, this.width, this.height);
    }
    newPos() { // new Position del jugador o del obstáculo
        this.x += this.speedX;
    }
    update() { // GENERA UNA FIGURA COLOR ROJO
        context.fillStyle = this.color;
        //                x     y   w   h
        context.fillRect(this.x, this.y, this.width, 10);
    }
    left() {
        return this.x;
    }
    right() {
        return this.x + this.width;
    }
    top() {
        return this.y
    }
    bottom(){
        return this.y + this.height
    }
    crashWith(obstacle) {
        /*     return (
            this.right() > obstacle.left() ||
            this.left() < obstacle.right());
 */
    }
}
const backgroundImage = {
    img: pista,
    x: 0,
    y: 0,
    speed: 1,
    move: function() {
        this.y += this.speed
        this.y %= canvas.height;
    },
    draw: function() {
        context.drawImage(this.img, 0, this.y, canvas.width, canvas.height);
        context.drawImage(this.img, 0, this.y - canvas.height, canvas.width, canvas.height);
    }
}
const carro = new Component(50, 80, 224, 600, 0, 10);
const myObstacles = [];
function updateObstacles() {
    for (let i = 0; i < myObstacles.length; i++) {
        myObstacles[i].y += 3;
        myObstacles[i].update();
    }
    myGameArea.frames += 1;
    if (myGameArea.frames % 120 === 0) {
        let x = canvas.width;
        let minWidth = 80;
        let maxWidth = 320;
        let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
        //                               w    h   x   y   dx  speed
        //  myObstacles.push(new Component(width, 10, 50, 50, 50, 0));
        myObstacles.push(new Component(width, 10, 63, 0, 0, 0));
        let minWidth2 = 80;
        let maxWidth2 = 320;
        let width2 = Math.floor(Math.random() * (maxWidth2 - minWidth2 + 1) + minWidth2);
        myObstacles.push(new Component(-width2, 10, 440, 200, 200, 0));
        console.log();
    }
}
// GAME OVER
function checkGameOver(id) {
    const crashed = myObstacles.some(function(obstacle) {
        return carro.crashWith(obstacle);
        // return carro.crashWith(obstacle); // DEVUELVE UN VERDADERO O FALSO
    });
    if (crashed) {
        cancelAnimationFrame(id)
    }
}
const borrar = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
const imagenes = () => {
    context.drawImage(car, carro.x, carro.y, carro.width, carro.height);
}
const keyUp = () => {
    carro.speedX = 0;
}
const keyDown = (event) => {
    switch (event.key) {
        case "ArrowRight":
            carro.speedX += 10;
            break;
        case "ArrowLeft":
            carro.speedX -= 10;
            break;
        default:
            return;
    }
}
const detectWalls = () => {
    if (carro.x < 60) {
        carro.x = 60;
    }
    if ((carro.x + carro.width) > canvas.width - 60) {
        carro.x = (canvas.width - carro.width) - 60;
    }
}

console.log(carro.top())
function handleCollisions(){
  for (let i= 0; i<myObstacles.length; i++){
    //si la posición del carro en x es menor a la coordenada en x 
    if (!(
        // carro.left() < myObstacles[i].right() || 
        // carro.right() > myObstacles[i].left() ||
        carro.top() < myObstacles[i].bottom()||
        carro.bottom() > myObstacles[i].top())
       ){
        //  cancelAnimationFrame(frameId)
         console.log("choque");
        }
  }
}
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
    function startGame() {
      borrar();
      backgroundImage.move();
      backgroundImage.draw();
      detectWalls();
      carro.imagenes();
      carro.newPos();
      updateObstacles();
      handleCollisions();
      let frameId = requestAnimationFrame(startGame);
      // cancelAnimationFrame(frameId);
    }
};