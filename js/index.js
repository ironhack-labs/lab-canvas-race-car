let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let id = null;
let frames = 1;
let roadImg = new Image();
roadImg.src = 'images/road.png'
roadImg.onload = animate;
let carImg = new Image();
carImg.src = 'images/car.png'
carImg.onload = animate;
let bullets = [];
let obstacles = [];

let car = {
  x: canvas.width / 2 - 25,
  y: canvas.height - 90,
  width: 50,
  heigth: 70
}

function drawRoad() {
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
}


function drawCar() {
  ctx.drawImage(carImg, car.x, car.y, 50, 70);
}

function drawObstacles() {

  obstacles.forEach((obs) => {
    obs.y += 2;
    ctx.fillStyle = obs.color
    ctx.fillRect(obs.x, obs.y, obs.height, obs.width)
  });
}

function drawBullet() {
  bullets.forEach(bullet => {
    ctx.fillStyle = bullet.color;
    ctx.fillRect(bullet.x, bullet.y -= 5, bullet.width, bullet.height)
  })
}

function shootGun() {
  console.log('shootGun')
  let bullet = {
    x: car.x + car.width / 2,
    y: car.y,
    color: 'black',
    width: 2,
    height: 10
  }
  bullets.push(bullet)
}



document.onkeydown = (e) => {
  switch (e.keyCode) {
    case 37:
      car.x -= 10;
      break;
    case 39:
      car.x += 10;
      break;
    case 38:
      car.y -= 10;
      break;
    case 40:
      car.y += 10;
      break;
    case 32:
      shootGun()
      break;
  }
}
setInterval(() => {
  let obs = {
    color: "#" + ((1 << 24) * Math.random() | 0).toString(16),
    x: (460) * Math.random() + 20,
    y: 0,
    width: (canvas.width / 2) * Math.random(),
    height: 50,
    good: .5 > Math.random()
  }

  obstacles.push(obs)
}, 2500)

function detectCollision() {
  obstacles.forEach((obs, i) => { //Look at each obstacle to see if it hit the car?

    bullets.forEach((bullet, j) => {

      if (bullet.x < obs.x + obs.width &&
        bullet.x + bullet.width > obs.x &&
        bullet.y < obs.y + obs.height &&
        bullet.y + bullet.height > obs.y) {
        console.log('bullet hit')
        obstacles.splice(i, 1)
        bullets.splice(j, 1)
      }

    })

    if (obs.y === canvas.height) {
      console.log('collision')
      window.cancelAnimationFrame(id)
      //  alert('game over')
    }

  })

}

let score = 0;

function animate() {
  id = window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad()
  drawCar()
  drawObstacles()
  drawBullet()
  detectCollision()
  if (frames % 1000 === 0) {

    score += 10
    document.querySelector('#score strong').innerText = score
  }
  frames++;
}
animate();








/*<div class="game-intro">
      <img src="./images/logo.png" alt="" class="logo-img" />
      <br />
      <button id="start-button">StartGame</button>
      <p>Use the left and right arrow to control the car!</p>
      <img src="./images/arrows.png" alt="" class="arrows-img" />
    </div>*/