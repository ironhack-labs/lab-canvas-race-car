window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    
    // Get the canvas element
    const canvas = document.getElementById("canvas");
    
    // Get the canvas 2D context
    const ctx = canvas.getContext("2d");

    
    // Create an image object for the road
    const road = new Image();
    road.src = "./images/road.png";

    
    // Wait for the image to load
    road.onload = function() {
      // Draw the road image on the canvas
      ctx.drawImage(road, 0, 0);

      // Create an image object for the car
      const car = new Image();
      car.src = "./images/car.png";

      // Wait for the car image to laod
      car.onload = function() {
        // Draw the car image on the canvas
        ctx.drawImage(car, 120, 300, 40, 65);
      }
    
  

    let carX = 120; // Initial position of the car

    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 37) { // left arrow
          if (carX > 0) { // check the left boundary
              carX -= 10; // move the car 10 pixels to the left
              ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
              ctx.drawImage(road, 0, 0); // redraw the road
              ctx.drawImage(car, carX, 300, 40, 65); // redraw the car
          }
      } else if (event.keyCode === 39) { // right arrow
          if (carX < canvas.width - 30) { // check the right boundary
              carX += 10; // move the car 10 pixels to the right
              ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
              ctx.drawImage(road, 0, 0); // redraw the road
              ctx.drawImage(car, carX, 300, 40, 65); // redraw the car
          }
      }

      let obstacles = [];
      for (let i = 0; i < 1; i++) {
          let x = Math.random() * canvas.width;
          let y = -50;
          obstacles.push({x, y});
      }
  
      setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(road, 0, 0);
        ctx.drawImage(car, carX, 300, 40, 65);
  
        for (let obstacle of obstacles) {
            ctx.fillRect(obstacle.x, obstacle.y, 30, 30);
            obstacle.y += 2;
        }
      }, 40);
  });
    }
  }

  
  // Hide the game intro element
  document.querySelector('.game-intro').getElementsByClassName.display = 'none';
};





