window.onload = () => {
  let canvasSelector = document.getElementById('canvas');
  let canvas = canvasSelector.getContext("2d");

  let theRoad = new Image();
  theRoad.src = './images/road.png';

  let theCar = new Image();
  theCar.src = './images/car.png';
  let moves = 250;

  function display() { 
    let obstacle = [];
    currentObstacle= obstacle.length - 1;
    setInterval(() => {
      obstacle.push(new Obstacle());
    }, 1500)
    let frames = 0;
    setInterval(() => {
      clear();
      canvas.drawImage(theRoad, 0, 0, 500, 700); 
      canvas.drawImage(theCar, moves, 500, 50, 100);

      for(let i = 0; i<obstacle.length; ++i) {
        obstacle[i].draw();
        obstacle[i].move();
      }
      frames++
    }, 16.66)
    
  }

  function clear() {
    canvas.clearRect(0, 0, canvasSelector.width, canvasSelector.height)
  }

  class Obstacle {
    constructor() {
      this.x = 300;
      this.y = -10;
      this.width = 100;
      this.height = 20;
    }
    move() {
      this.y += 4
    }
    draw() {
      canvas.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    display()
    console.log("does it works ?");
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ArrowLeft') {
        moves = moves - 15;
        console.log('prout')
      }  else if (event.code === 'ArrowRight') {
        moves = moves + 15;
      }
    });
  }
};
