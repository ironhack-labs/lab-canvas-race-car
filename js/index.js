window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    const canvas = document.querySelector('canvas')
    const road = new Road(canvas);
    const car = new Car(canvas)

    road.drawRoad();
    car.drawCar();

  }
};




