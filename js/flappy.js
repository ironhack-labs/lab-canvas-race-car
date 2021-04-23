const canvas = document.getElementById("main")
const ctx = canvas.getContext("2d")
// CANVAS AREA
const myGameArea = {
    frames: 0,
    score: function () {
        const points = Math.floor(this.frames / 5);
        ctx.font = '18px serif';
        ctx.fillStyle = 'black';
        ctx.fillText(`Score: ${points}`, 350, 50);
    },
  };
// JUGADOR Y OBSTÁCULOS
class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
      }
      left() {
        return this.x;
      }
      right() {
        return this.x + this.width;
      }
      top() {
        return this.y;
      }
      bottom() {
        return this.y + this.height;
      }
      crashWith(obstacle) {    
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() || 
            this.right() < obstacle.left() || 
            this.left() > obstacle.right());
      }
    update() {  // GENERA UNA FIGURA COLOR ROJO
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() { // new Position del jugador o del obstáculo
        this.x += this.speedX;
        this.y += this.speedY;
    }
}
const player = new Component(30, 30, 'red', 0, 110);
const myObstacles = [];
// ACTUALIZACIÓN DE OBSTÁCULOS
  function updateObstacles() {
    for (let i = 0; i < myObstacles.length; i++) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myGameArea.frames += 1;
    if (myGameArea.frames % 120 === 0) {
      let x = canvas.width;
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      // PRIMER PIPE
      myObstacles.push(new Component(10, height, 'green', x, 0));
      // SEGUNDO PIPE
      myObstacles.push(new Component(10, x - height - gap, 'green', x, height + gap));
      console.log(myObstacles)
    }
  }
// GAME OVER
  function checkGameOver(id) {
    const crashed = myObstacles.some(function (obstacle) {
      return player.crashWith(obstacle); // DEVUELVE UN VERDADERO O FALSO
    });
    if (crashed) {
        cancelAnimationFrame(id)
    }
  }
function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// MOTOR
function updateGameArea() {
    clear()
    player.newPos();
    player.update();
    updateObstacles();
    myGameArea.score()
    let frameId = requestAnimationFrame(updateGameArea)
    checkGameOver(frameId);
} 
// INVOCACIÓN DEL JUEGO
updateGameArea();
// EVENTOS
document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 38: // up arrow
        player.speedY -= 1;
        break;
      case 40: // down arrow
        player.speedY += 1;
        break;
      case 37: // left arrow
        player.speedX -= 1;
        break;
      case 39: // right arrow
        player.speedX += 1;
        break;
    }
  });
  document.addEventListener('keyup', (e) => {
    player.speedX = 0;
    player.speedY = 0;
});