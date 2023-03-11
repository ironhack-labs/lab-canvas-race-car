window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

ctx = document.getElementById('canvas').getContext('2d');
const road = new Image();
road.src = '../images/road.png';
road.onload = () => ctx.drawImage(road, 0, 0, 500, 700);

const car = new Image();
car.src = '../images/car.png';
car.onload = () => ctx.drawImage(car, 250,450, 50, 80);



  function startGame() {}
};
