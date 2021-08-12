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
  constructor (canvas, context, field, player) {
    this.canvas = canvas;
    this.context = context;
    this.field = field  ;
    this.player = player;
    this.obstacle = [];
    this.speed = 2;
  }

  startGame() {
    this.clearField();
    this.field.drawField();
    this.field.moveField(this.speed);

window.webkitRequestAnimationFrame(()=> this.startGame());
  }

clearField() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    
    const fieldImg = new Image();
    fieldImg.src = './images/road.png';

    fieldImg.onload = () => {
      const field = new Field(
        canvas, context, 0, 0, canvas.width, canvas.height, fieldImg,
      );
      //const player = new Player();
    
      const game = new Game(canvas, context, field);
    
      game.startGame();
  };
 };
};
