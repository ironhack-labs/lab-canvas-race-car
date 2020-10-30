const ctx = document.getElementById('canvas').getContext('2d');
//CAR
class Car {
    constructor(canvas, lives) {
        this.width = 70; 
        this.height = 150; 
        this.canvas = canvas; 
        //this.ctx = this.canvas.getContext('2d'); 
        this.x = 210; 
        this.y = 500; 
        this.speed = 5; 
        this.direction = 0 
        this.lives = 0;
    }
    update() { 
        this.x = this.x + this.direction;
    }
    draw() { 
        let imgCar = new Image()
        imgCar.src = '/LABS/15.lab-canvas-race-car/lab-canvas-race-car/images/car.png' 
        imgCar.addEventListener('load', () => {
          ctx.drawImage(imgCar, this.x, this.y, this.width, this.height)
        })
    }
    setDirection(direction) { 
        this.direction = direction;
    }

}
const car = new Car (ctx, 3)
//OBSTACULOS
class Obstacles { //creado constructor de obstaculos pero no utilizado 
    constructor(canvas, y) {
        this.size = 20;
        this.canvas = canvas;
        //this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width;
        this.y = y;
        this.speed = 5;
        this.direction = -1;
      }
    
      update() {
        this.x = this.x + this.direction * this.speed;
      }
    
      draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size);
      }
    
      setDirection(direction) {
        this.direction = direction;
      }
}
const obstacle1 = new Obstacles (canvas, 10)

//GAME
class Game {
    constructor(canvas) { 
        this.canvas = canvas;
        //this.ctx = this.canvas.getContext('2d') 
        this.car;
        this.enemies = []
    }
    updateCanvas() {
        this.car.update()
      }
      clearCanvas() {
        this.canvas.clearRect(0, 0, 500, 700);
      }
      drawCanvas() {
        car.draw();
        let img = new Image();
        img.src = '/LABS/15.lab-canvas-race-car/lab-canvas-race-car/images/road.png'; 
        img.addEventListener('load', () => {
            ctx.drawImage(img, 0, 0, 500, 700)
          })
    }
}
const game = new Game (ctx)

//EVENTOS
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    }
    function startGame() {
        game.drawCanvas()
        obstacle1.draw()
    }
}

document.onkeydown = function(e) {
    let userKey = e.key
    console.log(userKey)
      if (userKey === 'ArrowLeft') {
        car.setDirection(-5)
        game.clearCanvas()
        car.update()
        game.drawCanvas()
        car.draw()
      }
      if (userKey === 'ArrowRight') {
        car.setDirection(5)
        game.clearCanvas()
        car.update()
        game.drawCanvas()
        car.draw()
      }
    
      console.log(car)
    };

