

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const roadImage = new Image();
    roadImage.src = 'images/road.png';

    const carImage = new Image();
    carImage.src = 'images/car.png';

      roadImage.onload = function() {
      carImage.onload = function() {

        ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
  
        const carWidth = 60;
        const carHeight = 120;
        const carX = canvas.width / 2 - carWidth / 2;
        const carY = canvas.height - carHeight;
  
        ctx.drawImage(carImage, carX, carY, carWidth, carHeight);
      }
    }
  }
}