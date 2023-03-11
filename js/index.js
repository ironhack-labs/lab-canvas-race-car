window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

ctx = document.getElementById('canvas').getContext('2d');
const road = new Image();
road.src = '../images/road.png';
road.onload = () => ctx.drawImage(road, 0, 0, 500, 700);

  function startGame() {}
};
