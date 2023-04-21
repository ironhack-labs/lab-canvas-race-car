window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    // Get a reference to the canvas element and its context
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Load the road image
    const roadImage = new Image();
    roadImage.src = 'images/road.png';

    // Load the road image
    const carImage = new Image();
    carImage.src = 'images/car.png';

      roadImage.onload = function() {
      carImage.onload = function() {

        // Draw the road image on the canvas
        ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
  
        // Draw the car image on the canvas
        const carWidth = 60;
        const carHeight = 120;
        const carX = canvas.width / 2 - carWidth / 2;
        const carY = canvas.height - carHeight;
  
        ctx.drawImage(carImage, carX, carY, carWidth, carHeight);
      }
    }
  }
}