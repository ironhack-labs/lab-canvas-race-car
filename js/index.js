window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

const canvas = document.getElementById('canvas');
canvas.width = 500;
canvas.height = 700;
const ctx = canvas.getContext('2d');

let myObstacles = [];

function startGame() {
  // Load the road image
  const roadImg = new Image();
  roadImg.onload = () => {
    // Draw the road image on the canvas
    ctx.drawImage(roadImg, 0, 0, roadImg.width*1.5, roadImg.height*1.5);

    // Load the car image
    const carImg = new Image();
    carImg.onload = () => {
      // Set the initial position of the car
      let carX = 180;
      let carY = 500;

      // Draw the car image on the canvas
      ctx.drawImage(carImg, carX, carY, carImg.width / 3, carImg.height / 3);

      // Create a new obstacle every 2 seconds
      setInterval(() => {
        let obstacleWidth = Math.floor(Math.random() * 50) + 50;
        let obstacleX = Math.floor(Math.random() * (canvas.width - obstacleWidth));
        myObstacles.push({
          x: obstacleX,
          y: -50,
          width: obstacleWidth,
          height: 50
        });
      }, 1500);

      // Start updating the game area
      setInterval(updateGameArea, 20);
      
      // Add event listener to move the car left or right
      document.addEventListener("keydown", (event) => {
        switch (event.code) {
          case "ArrowLeft":
            carX = Math.max(20, carX - 30); // Move the car left by 20 pixels until it reaches the road limit
            break;
          case "ArrowRight":
            carX = Math.min(400 - carImg.width / 3, carX + 30) // Move the car right until it reaches the road limit
            break;
          default:
            break;
        }
        // Redraw the road and car images with updated position
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(roadImg, 0, 0, roadImg.width*1.5, roadImg.height*1.5);
        ctx.drawImage(carImg, carX, carY, carImg.width / 3, carImg.height / 3);
        // Draw each obstacle
        myObstacles.forEach((obstacle) => {
          ctx.fillStyle = 'green';
          obstacle.height = 15
          obstacle.y += 0
          ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        });
      });
    };
    carImg.src = "./images/car.png";
  };
  roadImg.src = "./images/road.png";
}

function updateGameArea() {
  // Move each obstacle down by a certain amount of pixels
  myObstacles.forEach((obstacle) => {
    (obstacle.y += 10);
  });
  }
}