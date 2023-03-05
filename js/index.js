window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext("2d");
  
      let roadImage = document.createElement("img");
      roadImage.src = "images/road.png";
  
      const playerCar = new Image();
      playerCar.src = 'images/car.png';
      const carWidth = 50;
      const carHeight = 120;
      let carX = (canvas.width - carWidth) / 2;
      let carY = canvas.height - carHeight - 10;
  
      const obstacles = [];
      const obstacleWidth = 75;
      const obstacleHeight = 25;
      const obstacleSpeed = 5;

  
      let score=0;
      
  
      function createObstacle() {
        const x = Math.floor(Math.random() * (canvas.width - obstacleWidth));
        const obstacle = { x, y:0, width: obstacleWidth, height: obstacleHeight };
        obstacles.push(obstacle);
      }
  
      setInterval(createObstacle, 1000);
  
      // Update and redraw the road images, car and obstacles on every frame
      function updateGame() {
  
  
        // Draw the first road image at its current position
        ctx.drawImage(roadImage, 0, roadY1, canvas.width, canvas.height);
  
        // Draw the second road image above the first one
        ctx.drawImage(roadImage, 0, roadY2, canvas.width, canvas.height);
  
        // Draw the car at its current position
        ctx.drawImage(playerCar, carX, carY, carWidth, carHeight);
  
         // Draw and update the obstacle
        for (let i = 0; i < obstacles.length; i++) {
          const obstacle = obstacles[i];
         obstacle.y += obstacleSpeed;
        
          
          ctx.fillStyle = "red";
          ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  
          // Check for collision with the car
          if (carX < obstacle.x + obstacle.width &&
              carX + carWidth > obstacle.x &&
              carY < obstacle.y + obstacle.height &&
              carY + carHeight > obstacle.y) {
            
                // Game over alert
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.font = "25px Arial";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText(`Game Over! Your score is ${score}`, canvas.width/2, canvas.height/2);
                return;
        
          }
  
          // Check if the obstacle has moved out of the canvas and remove it
          if (obstacle.y > canvas.height) {
            obstacles.splice(i, 1);
            score++;
          }
        }
  
        // Draw score
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(`Score: ${score}`, 10, 50);
  
        // Update the positions of the road images
        roadY1 += 10;
        roadY2 += 10;
  
        // If the first road image has moved out of the canvas, resetting its position above the second image
        if (roadY1 > canvas.height) {
          roadY1 = roadY2 - canvas.height;
        }
  
        // If second road image has moved out of the canvas, resetting its position above the first image
        if (roadY2 > canvas.height) {
          roadY2 = roadY1 - canvas.height;
        }
  
        requestAnimationFrame(updateGame);
      }
  
      let roadY1 = 0;
      let roadY2 = -canvas.height;
  
      //  Adding event listener for keydown event
      document.addEventListener("keydown", event => {
        if (event.code === "ArrowLeft") {
          // Move the car to the left
          carX -= 10;
          if (carX < 0) {
            carX = 0; // to Keep car within left boundary
          }
        }
        else if (event.code === "ArrowRight") {
          // Move car to the right
          carX += 10;
          if (carX + carWidth > canvas.width) {
            carX = canvas.width - carWidth; // Keep car within right boundary
          }
        }
      });
      
      updateGame();
    }}