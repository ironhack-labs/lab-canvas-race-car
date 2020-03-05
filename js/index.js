window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  let ctx = document.getElementById("canvas").getContext("2d");
  let runningGame = true
  let car = {
    x: 220,
    y: 500,
    width: 50,
    height: 100,
    speedX: 0,
    speedY: 0,
    rightPressed: function () {
      if (this.x < 500 - this.width) {
        this.x += 5;
      }
    },
    leftPressed: function () {
      if (this.x >= 0) {
        this.x -= 5;
      }
    },
    update: function () {
      ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
    }
  };
  class Obstacle {
    constructor(posX, width) {
      this.x = posX
      this.y = 0
      this.width = width
      this.height = 50
      this.speedX = 0
      this.speedY = 0
    }
    update() {
      ctx.fillRect(this.x, this.y, this.width, this.height);
      this.y += 2
    }
  }

  let counter = 0;
  let obstaclesArr = []
  let carImg = new Image();
  carImg.src = "images/car.png";

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        car.leftPressed();
        break;
      case 39:
        car.rightPressed();
        break;
    }
  };
  // document.onkeydown = function (e) {
  //   if (e.keyCode === 'ArrowRight') {
  //     car.leftPressed();

  //   }
  //   if (e.keyCode === ' ArrowLeft') {
  //     car.rightPressed();

  //   }
  // };

  function startGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    counter++
    let roadImg = new Image();
    roadImg.src = "images/road.png";
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    car.update();
    obstaclesArr.forEach((e) => {
      e.update()
    })
    if (counter % 120 === 0) {
      let randomHeight = Math.floor(Math.random() * (600 - 100))
      let randomWidth = Math.floor(Math.random() * (400 - 100))
      obstaclesArr.push(new Obstacle(randomHeight, randomWidth))
      obstaclesArr.push(new Obstacle(randomHeight, randomWidth))
      obstaclesArr.push(new Obstacle(randomHeight, randomWidth))
    }
    if (runningGame) {
      window.requestAnimationFrame(startGame);
    }
  }
};