const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height

const carPlayer = new Car()

function drawTheRoad() {
  const img = new Image();
  img.src = "../images/road.png"
  ctx.drawImage(img, 0, 0, cWidth, cHeight);
}



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  const gameLogic = {
    frames: 0,
    start: function() {
      this.interval = setInterval(updateGameArea, 20)
    },
    stop: function(){
    clearInterval(this.interval)
  },
  }
  

  function startGame() {
    gameLogic.start()
    
    
  }
  

  function updateGameArea() {
    drawTheRoad();
    carPlayer.drawCar();
    carPlayer.update();
    updateObstacles();
    checkGameOver();
  }
};

const obstacles = [];

function updateObstacles() {
  gameLogic.frames++;

  for (let i = 0; i < obstacles.length; i++){
    obstacles[i].y -=1;
    obstacles[i].update()
  }

  if(gameLogic.frames % 120 === 0){
    let y = cHeight;

    let minWidth = 25;
    let maxWidth = 150;

    let width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

    let minGap = 50;
    let maxGap = 100;

    let gap = Math.floor(Math.random() * (maxGap - minGap) + minGap);

    obstacles.push(new Car(20, width, 'red', y, 0))
    obstacles.push(new Car(20, y- width - gap, 'red', y, width +gap))
  }
}

function checkGameOver(){
  const crashed = obstacles.some(function(obstacle) {
      return carPlayer.crashHeigth(obstacle)
  })
  if(crashed) {
      gameLogic.stop();
  }
}























