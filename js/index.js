const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

const road = new Road ('images/road.png', 0, 0);
const car =  new Car ('images/car.png', 0, 0, 50, 90);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  
  function startGame() {
    road.drawRoad()
    car.drawCar()
   
  }
};

