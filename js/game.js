
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const carMove = 5;
const obsMove = 10;


window.onload = () => {
  // document.getElementById('start-button').onclick = () => {
  startGame();
  // };
};
function startGame() {

  const obstacles = [];
  const road = new Road(context);
  const player = new Car(context);
  const obstacle = new Obstacle(context);

  drawGame(road, player, obstacle);
  document.addEventListener('keydown', (event) => {
    clear();
    // context.clearRect(0, 0, 1200, 1200);
    if (event.key === 'ArrowRight') {
      player.moveRight();
      // obstacle.moveDown();
      // car.draw(context);
    }
    else if (event.key === 'ArrowLeft') {
      player.moveLeft();
      // obstacle.moveDown();
    }
    // drawAll(road, car)


    road.draw(context);
    player.draw(context);
    setInterval(() => {
      // context.clearRect(0, 0, 1200, 1200);
      obstacle.moveDown();
      obstacle.draw(context);
    }, 1000 / 60);

    // obstacle.moveDown();
    // obstacle.draw(context);
  });
  clear();
  // context.clearRect(0, 0, 1200, 1200);

};

function drawGame(road, player, obstacle) {
  player.draw(context);
  obstacle.draw(context);
  road.draw(context);
}

function clear() {
  context.clearRect(0, 0, 1200, 1200);
}


