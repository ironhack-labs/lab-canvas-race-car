/* 1- Iniciar o Canvas e incluir a imagem da pista se deslocando para baixo
2- Desenhar o carro na pista
3- Fazer o carro se mover para a esquerda e a direita (e implementar boundaries)
4- Crias obstáculos
5- Mover obstáculos e fazer aparecer vários obstáculos a cada X segundos
6- Gerar obstáculos em tamanhos e posições aleatórias
7- Criar lógica de colisão entre carro e obstáculos
8- Sitema de pontos
9- Game Over + Final Score
*/




class Game {
  constructor (canvas, context, field, player, obstacle) {
    this.canvas = canvas;
    this.context = context;
    this.field = field;
    this.player = player;
    this.obstacle = obstacle;
    this.obstacles = [];
    this.fieldSpeed = 2;
    this.playerSpeed = {  
      initialSpeed: 0,
      speedIncrement: 1,
    };
  }

  configurarTeclado = () => {
    document.onkeydown = (event) => {
      this.playerSpeed.initialSpeed += this.playerSpeed.speedIncrement;
    
      this.player.movePlayer(event.keyCode, this.playerSpeed.initialSpeed);
    };

    document.onkeyup = () => {
      this.playerSpeed.initialSpeed = 0;
    };
  }

  startGame = () => {
    console.log(this.obstacle)
    this.clearField();

    this.field.drawField();
    this.field.moveField(this.fieldSpeed);

    this.player.drawPlayer();

    this.obstacle.drawObstacle();

    window.requestAnimationFrame(this.startGame);
  }

clearField= () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

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
      const obstacle = new Obstacle (
        canvas, context, 0, 0, 400, 50, 'red',
      );
    
      const game = new Game(canvas, context, field, player, obstacle);
    
      game.configurarTeclado();
      game.startGame();
    };
  };
 };
};
