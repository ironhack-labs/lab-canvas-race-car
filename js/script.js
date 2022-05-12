const canvas = document.querySelector("canvas");
canvas.style.backgroundColor = "#ffffff";

const ctx = canvas.getContext("2d");

let f = new FontFace('Roboto', '/images/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf');

f.weight = 600;

let car = new Image ();
car.src = "/images/pngwing.com-halfsize.png"

let bg = new Image ();
bg.src= "/images/palm-trees-tropical-straight-ahead-road.jpg"

let logo = new Image ()
logo.src = "/images/logo.png"

let arrows = new Image ();
arrows.src = "/images/arrows.png"

let obst = new Image ();
obst.src = "/images/obstacle.png"

let crash = new Image ();
crash.src = "/images/crash.jpg"

let carX = canvas.width / 2 - car.width / 2;
let carY = canvas.height - car.height;
const carSpeedValue = 5;

let isCarGoingLeft = false;
let isCarGoingRight = false;

let gameOver = false;

let intrvlID
let obstArr = []

let score = 0

function createObstacles() {
  if (!intrvlID) {
    intrvlID = setInterval(createObst2, 5000)
  }
} 

function createObst2() {
  
  let randomStartPos = Math.floor(Math.random() * canvas.width)
  obstArr.push([obst,randomStartPos,0,obst.width,obst.height])

}
  
const obstFallSpeed = 5

const startBtn = document.getElementById('start-button')

function drawObstacle() {
  obstArr.forEach(obstacle => {
    obstacle[2] = obstacle[2] + obstFallSpeed
    ctx.drawImage(obstacle[0],obstacle[1],obstacle[2],obstacle[3],obstacle[4])
    if (obstacle[2]>canvas.height) {
      score+=1
      obstArr.shift()}
  })
  
}
//  && 

function checkCollision() {
  obstArr.forEach(obstacle => {
    if ((carX-car.width) <= obstacle[1] && obstacle[1] <= (carX+car.width)) {
      if ((carY-car.height) <= obstacle[2] && obstacle[2] <= (carY+car.height)) {
      gameOver = true;
      }
  
  }
})
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };
}

  function startGame() {
    startBtn.style.display = "none";
    canvas.style.display = "block";
    requestAnimationFrame(animate);
  }

function animate () {
  if (gameOver === false){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
  drawCar();
  createObstacles();
  drawObstacle()
  checkCollision()
  f.load().then(drawScore())
  requestAnimationFrame(animate)
}
  else if (gameOver === true) {
    drawFinalScore()
  }
}

function drawCar () {
  // ctx.beginPath();
  ctx.drawImage(car, carX, carY, car.width, car.height)
  
  // ctx.closePath();
  if (isCarGoingLeft) {
    if (carX > 0) {
      carX -= carSpeedValue;
    }
  } else if (isCarGoingRight) {
    if (carX < canvas.width - car.width) {
      carX += carSpeedValue;
    }
  }
}

function drawScore() {
  // f.load().then(function() {
    
  // //   // Ready to use the font in a canvas context
  // });
  // ctx.beginPath();
  ctx.font = 'bold 24px sans-serif'
  ctx.fillStyle = "indigo";
  ctx.fillText(`Score : ${score}`, 10, 30);
  // ctx.closePath();
}

function drawFinalScore() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(crash, 0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 40px sans-serif'
  ctx.fillStyle = "white";
  ctx.fillText(`Final score : ${score}`, canvas.width/2-150, canvas.height/2-20);
  startBtn.style.display = "inline";
  gameOver = false;
  score = 0;
  obstArr=[]
  let carX = canvas.width / 2 - car.width / 2;
  let carY = canvas.height - car.height;
  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };

}

document.addEventListener("keydown", event => {
  if (event.code === "ArrowLeft") {
    isCarGoingLeft = true;
      }
  if (event.code === "ArrowRight") {
    isCarGoingRight = true;
  }
});

// startBtn.addEventListener("click", () => {
//     startGame();
//   })


document.addEventListener("keyup", event => {
  isCarGoingLeft = false;
  isCarGoingRight = false;
});