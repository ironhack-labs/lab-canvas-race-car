window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  
  let road = new Image()
  road.src = "images/road.png"

  let car = new Image()
  car.src = "images/car.png"


  function startGame() {
    draw();
  }


let carObj = {

  x: 195,
  y: 250,
  width: 60,
  height: 120,

  turnLeft: function () {
    if (this.x > -45) {
    this.x -= 20
    }
  },

  turnRight: function () {
    if (this.x < 455) {
    this.x += 20  
    }
  },


  turnUp: function () {
    if (this.y > -30) {
    this.y -= 20  
    }
  },

  turnDown: function () {
    if (this.y < 590) {
      this.y += 20
    }
  },

  update: function () {
    ctx.drawImage(car, this.x, this.y, this.width, this.height)
  },
}

class Obstacle {
  constructor(posX) {
    this.x = posX
    this.y = 0
    this.width = 150
    this.height = 30
    this.speedX = 0
    this.speedY = 0
  }

  update() {
    ctx.fillStyle = "orange"
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.y += 2
  }

}

let obstacleArray = []
let frameCounter = 0


let draw = () => {

  ctx.clearRect(0, 0, 500, 700);
  frameCounter++

  ctx.drawImage(road, 0, 0, canvas.width, canvas.height)  
  carObj.update();

  obstacleArray.forEach(function(obstacle) { obstacle.update() })


  if (frameCounter % 120 === 0) {
    obstacleArray.push(new Obstacle(Math.round(Math.random()*400)))
  }


  window.requestAnimationFrame(draw);

}


  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        carObj.turnLeft();
        break;
      case 39: 
        carObj.turnRight(); 
        break;
      case 38:
        carObj.turnUp();
        console.log(carObj.y)
        break;
      case 40:
        carObj.turnDown();
        console.log(carObj.y)
        break;
    }
  }
}

