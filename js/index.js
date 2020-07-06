window.onload = () => {

  const background = new Image();
  background.src = './images/road.png';
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const car = {
  image: new Image(),
  height: 150,
  width: 80,
  x: canvas.width / 2 - 40,
  y: canvas.height - 150,
  drawCar: function(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    

  },
  moveUp: function(){
    this.y = this.y - 5;
    this.drawCar();
    },
  moveDown: function(){
      this.y = this.y + 5;
      this.drawCar();
  },
  moveLeft: function(){
      this.x = this.x - 5;
      this.drawCar();
  },
  moveRight: function(){
    this.x = this.x + 5;
    this.drawCar();
  }};

  class Obstacle {
    constructor (y) {
    this.x = Math.round(Math.random() * canvas.width / 2),
    this.y = y,
    this.height = 40,
    this.width = Math.round(Math.random() * canvas.width);
    }
    drawObstacle () {
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  car.image.src = './images/car.png';

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    car.drawCar();
    let obstacles = [];
    obstacles[0] = new Obstacle(0);
    obstacles[0].drawObstacle();
    obstacles[1] = new Obstacle(80);    
    obstacles[1].drawObstacle();
    obstacles[2] = new Obstacle(160); 
    obstacles[2].drawObstacle();    
  }
  document.addEventListener('keypress', e => {
    //console.log(e.keyCode, car);
    switch (e.keyCode) {
      case 119:
        car.moveUp();
        break;
      case 115: 
        car.moveDown();
        break;
      case 97:
        car.moveLeft();
        break;
      case 100:
        car.moveRight();
        break;
    }
  });



};



