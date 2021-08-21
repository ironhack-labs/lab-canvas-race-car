window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    //DOM CONSTANTS
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    function drawRoad() {
    ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
    }

    const road = new Image();
    road.src = '/images/road.png';
    road.addEventListener('load', () => {
      // this.road = road;
      drawRoad();
    });
    

    class raceCar {
      constructor () {
        this.carX = canvas.width / 2;
        this.carY = 500;
        this.carHeight = 100;
        this.carWidth = 50;
        const car = new Image();
        car.src = '/images/car.png';        
      }
    }


    }
};
