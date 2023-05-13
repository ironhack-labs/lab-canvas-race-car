window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    // Declaramos la variables 
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // Primera iteración
    const roadImg = new Image();
    roadImg.src = "./images/road.png"
    roadImg.onload = function(){
      ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);  
    }
  
    // Segunda iteración
    const carImg = new Image();
    carImg.src = "./images/car.png";
    let carX = canvas.width / 2 - 25;
    let carY = canvas.height - 100;
    carImg.onload = function(){
      ctx.drawImage(carImg,carX,carY,50,100);
    };

    // Tercera Iteración
    document.addEventListener('keydown', (event) => {
      if (event.code === 'ArrowLeft' && carX > 50) {
        carX -= 10;
      } else if (event.code === 'ArrowRight' && carX < canvas.width - 100) {
        carX += 10;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(carImg, carX, carY, 50, 100);
    });
  
    // 4,5 y 6 Iteración

// Player score
let score = 0;

// Define obstacle properties
let obstacles = [];
const obstacleWidth = 50;
const obstacleHeight = 50;
const obstacleSpeed = 5;

setInterval(() => {
  const obstacleX = Math.floor(
    Math.random() * (canvas.width - obstacleWidth)
  );

  obstacles.push({
    x: obstacleX,
    y: 0,
    width: obstacleWidth,
    height: obstacleHeight,
  });
}, 2000);

function drawObstacles() {
  // Loop through all obstacles
  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i];
    obstacle.y += obstacleSpeed; // move obstacle down
    ctx.fillStyle = 'red';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height); // draw obstacle

    // Check collision with car
    if (
      carX < obstacle.x + obstacle.width &&
      carX + 50 > obstacle.x &&
      carY < obstacle.y + obstacle.height &&
      carY + 100 > obstacle.y
    ) {
      alert(`Game over! Your score is ${score}`);
      location.reload(); // restart the game
    }

    // Check if obstacle is off the screen
    if (obstacle.y > canvas.height) {
      obstacles.splice(i, 1); // remove obstacle from array
      score++; // increment score for avoiding obstacle
    }
  }
}

// Game loop
function update() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw road and car
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImg, carX, carY, 50, 100);
  // Move and draw obstacles
  drawObstacles();
  // Draw score
  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, 50, 50);
  // Request next frame
  requestAnimationFrame(update);
}
// Start game loop
update();
}
};

