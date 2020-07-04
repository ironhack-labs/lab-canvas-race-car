const myCanvas = document.getElementById('canvas');
const ctx = myCanvas.getContext('2d');

const roadImg = new Image();
roadImg.src = './images/road.png';
let roadY = 0;

const car = {
  image: new Image(),
  height: 150,
  width: 80,
  x: myCanvas.width / 2 - 40,
  y: myCanvas.height - 150
}
car.image.src = './images/car.png'
let speedX = 0;
let roadSpeed = 3;

const obstacles = [];
let score = 0;

const createObstacles = () => {
  width = 100 + Math.floor(Math.random() * 200);
  x = Math.floor(Math.random() * (myCanvas.width - width));
  const obstacle = {
    x: x,
    y: 0,
    height: 50,
    width: width
  }
  obstacles.push(obstacle);
}
setInterval(createObstacles, 2000);

const checkCollision = (obstacle) => {
  if (!(obstacle.x + obstacle.width < car.x || obstacle.x > car.x + car.width || obstacle.y + obstacle.height < car.y || obstacle.y > car.y + car.height)) {
    score = 0;
  } else {
    score++
    // console.log(score)
    ctx.font = "30px Arial"
    ctx.fillText(`SCORE: ${Math.floor(score / 200)}`, 10, 50)
  }
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    draw();
    roadY += roadSpeed;
    car.x += speedX;
    if (roadY > myCanvas.height) roadY = 0;
    if (car.x < 0) car.x = 0;
    if (car.x > myCanvas.width - car.width) car.x = myCanvas.width - car.width;



    window.requestAnimationFrame(startGame);
  }

  function draw() {
    ctx.drawImage(roadImg, 0, roadY, myCanvas.width, myCanvas.height);
    ctx.drawImage(roadImg, 0, roadY - myCanvas.height, myCanvas.width, myCanvas.height);
    obstacles.forEach((obstacle) => {
      obstacle.y += roadSpeed;
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
      checkCollision(obstacle);
    })
    ctx.drawImage(car.image, car.x, car.y, car.width, car.height);
  }

  document.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 37:
        speedX -= 15;
        break;
      case 39:
        speedX += 15;
        break;
    }
  })

  document.addEventListener('keyup', event => {
    speedX = 0;
  })


}