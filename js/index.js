

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let frames = 0;
  let myObstacles = [];

  let roadImg = new Image();
  roadImg.src = 'images/road.png';
  
  class Car {
    constructor(x ,y){
      this.x = x;
      this.y = y;

      this.speedX = 0;
      this.speedY = 0;
    }

    update(ctx){
      let carImg = new Image();
      carImg.src = 'images/car.png';
      ctx.drawImage(carImg, this.x, this.y, 70, 100);
    }

    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  class Obstacle {
    constructor(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
    }

    update(ctx){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  let car = new Car(100, 350);

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      // case 38: // up arrow
      //   player.speedY -= 1;
      //   break;
      // case 40: // down arrow
      //   player.speedY += 1;
      //   break;
      case 37: // left arrow
        car.speedX -= 1;
        console.log('left arrow')
        break;
      case 39: // right arrow
        car.speedX += 1;
        console.log('right arrow');
        break;
    }
  };
  
  document.onkeyup = function(e) {
    car.speedX = 0;
    car.speedY = 0;
  };

  function draw(){
    ctx.clearRect(0, 0, 500, 700);
    ctx.drawImage(roadImg, 0, 0, 500, 700);
    car.update(ctx);
  }

  function updateObstacles() {

    for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].y += 1;
        myObstacles[i].update(ctx);
    }

    frames += 1;
    if (frames % 120 === 0) {
      let randomPos = canvas.width;
      let x = Math.floor(Math.random() * randomPos);
      let mindWidth = 10;
      let maxWidth = 100;
      let width = Math.floor(Math.random() * (maxWidth - mindWidth + 1) + mindWidth);
      myObstacles.push(new Obstacle(width, 10, "red", x, 0)); //width, height, color, x, y
    }
  } 

  function updateGameFrame(){
    car.newPos();
    draw();
    updateObstacles();
    window.requestAnimationFrame(updateGameFrame);
  }

  function startGame(){
    window.requestAnimationFrame(updateGameFrame);
  }
};
