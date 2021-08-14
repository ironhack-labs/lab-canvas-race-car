window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    
    const fieldImg = new Image();
    fieldImg.src = './images/road.png';
    const playerImg = new Image();
    playerImg.src = './images/car.png';

    fieldImg.onload = () => {
      playerImg.onload = () => {
      const field = new Field(
        canvas, context, 0, 0, canvas.width, canvas.height, fieldImg,
      );
      const player = new Player(
        canvas, context, 220, 550, 60, 120, playerImg,
      );

      const game = new Game(canvas, context, field, player, Obstacle);
    
      game.configurarTeclado();
      game.startGame();
    };
  };
 };
};
