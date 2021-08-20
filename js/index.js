window.onload = () => {

  //Classes
  class Car {
    constructor(x, y) {
    this.x = 225;
    this.y = 700;
    this.speed = 30;
    }
 
    drawCar() {
        carPicture = new Image(50, 80);
        let x = this.x
        let y = this.y
        carPicture.onload = function() {
          game.context.drawImage(carPicture, x, y, 50, 80)
        }
        carPicture.src = './images/car.png'
    }

    moveRight() {
      if(this.x < 365) {
        this.x += this.speed
        let x = this.x
        let y = this.y
        carPicture = new Image(50, 50);
        carPicture.onload = function() {
        game.context.drawImage(carPicture, x, y, 50, 80)
        }
        carPicture.src = './images/car.png'
        }
    }

    moveLeft() {
        if(this.x > 85) {
          this.x -= this.speed
          let x = this.x
          let y = this.y
          carPicture = new Image(50, 50);
          carPicture.onload = function() {
            game.context.drawImage(carPicture, x, y, 50, 80)
          }
          carPicture.src = './images/car.png'
        }
    }

    updateCar(){
      let x = this.x
      let y = this.y
        game.context.drawImage(carPicture, x, y, 50, 80)
    }
  }

  class Obstacle {
    constructor(width, x, y){
      this.width = width;
      this.x = x;
      this.y = y;
      this.height = 20; //always the same
      this.speed = 30;
    }

    drawObstacle() {
      game.context.fillStyle = 'red';
      game.context.fillRect(this.x, this.y, this.width, 20);
    }
  } 

  //WORK IN PROGRESS

  // const obstacles = [];

  // function createObstacle() {
  //   const obstacle = new Obstacle();
  //   obstacles.push(obstacle.drawObstacle(100, 50, 50));
  // }

  let started = false;
  let carPicture; //hoisted
  let car = new Car;

  const game = {
    canvas: document.getElementById('canvas'),
    road: function() {
      this.context = this.canvas.getContext("2d");
      this.context.fillStyle = 'green';
      this.context.fillRect(0, 15, 500, 800);
      this.context.fillStyle = 'grey';
      this.context.fillRect(50, 15, 400, 800)
      this.context.strokeStyle = 'white';
      this.context.setLineDash([]);
      this.context.lineWidth = 10;
      this.context.strokeRect(80, 0, 340, 810);
      this.context.beginPath();
      this.context.lineWidth = 5;
      this.context.setLineDash([20, 30]);
      this.context.moveTo(250, 0);
      this.context.lineTo(250, 810)
      this.context.stroke();
    },
    
    init: function() {
      car.drawCar(game)
      started = true;
    }
  }

  //Paint the road
  game.road();

  //onClick
  document.getElementById('start-button').onclick = () => {
    if (!started) {
      startGame();
    }
  };

  function startGame() {
    game.init()
    intervalID = setInterval(() => {
      updateGame()
    },30)

  }

  function updateGame() {
    game.context.clearRect(0,0,game.canvas.width, game.canvas.height);
    game.road()
    car.updateCar()
  }

  document.onkeydown = function(e) {
    switch (e.key) {
      case 'ArrowLeft': // left arrow
      car.moveLeft()
      break;
      case 'ArrowRight': // right arrow
      car.moveRight()
        break;
    }
  };



  


  //on load

};



