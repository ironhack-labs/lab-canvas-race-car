const canvas = document.querySelector("canvas");
canvas.style.border = "solid 2px black";
const ctx = canvas.getContext("2d");

const startScreen = document.querySelector(".game-intro");

// Score
let totalScore = 0;
let gameOver = false;

//car variables
let carWidth = 55;
let carHeight = 140;
let carX = 200;
let carY = 400;
const carSpeedValue = 5;

//obstacle 1 variables
let obstacle1Width = 200;
let obstacle1Height = 30;
let obstacle1X = 10;
let obstacle1Y = 10;
let obstacle1Speed = 5

//obstacle 1 variables
let obstacle2Width = 130;
let obstacle2Height = 30;
let obstacle2X = 250;
let obstacle2Y = -300;
let obstacle2Speed = 5

const backgrounImg = new Image()
backgrounImg.src = "images/road.png"
const carImage = new Image()
carImage.src = "images/car.png"

let isCarGoingLeft = false;
let isCarGoingRight = false;

window.onload = () => {
  // hide the canvas until we press start button
  canvas.style.display = "none"

  document.getElementById('start-button').onclick = () => {
    gameOver = false
    obstacle1Y = 10;
    obstacle2Y = -300;
    totalScore = 0;
    startGame();
  };

  function carMove() {
    if (isCarGoingLeft) {
      if (carX > 0) {
        carX -= carSpeedValue;
      }
    } else if (isCarGoingRight) {
      if (carX < canvas.width - carWidth) {
        carX += carSpeedValue;
      }
    }
  }

// Obstacle 1 functions

  function drawObstacle1() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(obstacle1X, obstacle1Y, obstacle1Width, obstacle1Height);
    ctx.closePath();
  }

  function moveObstacle1() {
    if (
      (obstacle1Y + obstacle1Height) === carY && 
      (obstacle1X + obstacle1Width) > carX &&
      obstacle1X < (carX + carWidth)
     )
     {
      gameOver = true
    }
    if (obstacle1Y < canvas.height){
      obstacle1Y += obstacle1Speed
    } else {
      obstacle1Y = 0
      obstacle1X = Math.floor(Math.random() * canvas.width)
      totalScore += 1
    }
  }

// Obstacle 2 functions

  function drawObstacle2() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(obstacle2X, obstacle2Y, obstacle2Width, obstacle2Height);
    ctx.closePath();
  }

  function moveObstacle2() {
    if (
    (obstacle2Y + obstacle2Height) === carY && 
    (obstacle2X + obstacle2Width) > carX &&
    obstacle2X < (carX + carWidth)
    )
    {
      gameOver = true
    }
    if (obstacle2Y < canvas.height){
      obstacle2Y += obstacle2Speed
    } else {
      obstacle2Y = 0
      obstacle2X = Math.floor(Math.random() * canvas.width)
      totalScore += 1
    }
  }

  // Draw score function
  function drawScore() {
    ctx.beginPath();
    ctx.font = "30px sans-serif";
    ctx.fillStyle = "green";
    ctx.fillText(`Score : ${totalScore}`, 10, 30);
    ctx.closePath();
  }

  // Game over text function

  function drawGameOver() {
    ctx.beginPath();
    ctx.font = "40px sans-serif";
    ctx.fillStyle = "green";
    ctx.fillText(`GAME OVER ${totalScore} points`, 50, 200);
    ctx.closePath();
  }

  let animationFrameId;

  function startGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("start game");
    startScreen.style.display = "none"
    canvas.style.display = "block"
    ctx.drawImage(backgrounImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(carImage, carX, carY, carWidth, carHeight)
    carMove()
    drawObstacle1()
    moveObstacle1()
    drawObstacle2()
    moveObstacle2()
    drawScore()
    
    if (gameOver) {
      cancelAnimationFrame(animationFrameId);
      drawGameOver()
      setTimeout(() => {
        startScreen.style.display = "block"
        canvas.style.display = "none"
      },"2500");
     
      
    } else {
      animationFrameId = requestAnimationFrame(startGame);
    }
   

    document.addEventListener("keydown", event => {
      if (event.code === "ArrowLeft") {
        isCarGoingLeft = true;
        console.log("moving left")
      }
      if (event.code === "ArrowRight") {
        isCarGoingRight = true;
        console.log("moving right")
      }
    });

      document.addEventListener("keyup", event => {
        isCarGoingLeft = false;
        isCarGoingRight = false;
        console.log("stop movement")
      });
  }
};