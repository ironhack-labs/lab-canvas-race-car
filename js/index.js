window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  function startGame() {

    canvas.width = 500;
    canvas.height = 700;
    let background = new Image();
    background.src = "images/road.png";
    ctx.drawImage(background, 0, 0, 500, 700);
    // let startBoard = document.getElementsByClassName('game-intro')[0];
    // startBoard.style.display = "none";
    clearGame();
    createPlayer();
    updateGameArea();
  }

  function clearGame(){
    //clear instructions
    ctx.clearRect(0, 0, canvas.weight, canvas.height)

  };
  
  let player = new Image();

  function createPlayer() {
    player.src = "images/car.png";
    ctx.drawImage(player, 250, 350, 50, 75)
   
    player.speedX = 0;
    player.speedY = 0;
  }
  // function clear() {
  //   canvas.ctx.clearRect(0, 0, canvas.weight, canvas.height)
  // }

  function updateGameArea() {
    clearGame();
    newPosition();
    update();
  }

  function update() {
    document.addEventListener('keydown', (element) => {
      switch (element.keycode) {
        case 37: 
        player.speedX--;
        break
        case 39:
        player.speedX++;
      }
    });
    document.addEventListener('keyup', (element) => {
        player.speedX = 0;
    });
  }
  function newPosition() {
    player.x += player.speedX;
  }

  
};
