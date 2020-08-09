/* eslint-disable max-len */
// 1 - Iniciar o canvas e incluir a imagem da pista se deslocando para baixo;
// 2 - Desenhar o carro na pista;
// 3 - Fazer o carro se movimentar para esquerda e direita (implementar boundaries, para nao deixar o carro sair da pista);
// 4 - Criar obstaculos
// 5 - Mover obstaculos e fazer aparecer varios objstaculos a cada X segundos
// 6 - Gerar obstaculos em tamanhos e posiçoes aleatorios;
// 7 - Criar logica de colisao entre carro e obstaculos;
// 8 - Sistema de pontos;
// 9 - Game over (fazer aparecer um score final).

/*
  Game - Regras do jogo(speed, ), metodos de start, verificacao de gameOver, display do resultado final, contagem de pontuacao
  Todos os elementos vao aqui dentro
*/
class Game {
  constructor(
    canvas, context, field, player, obstacleConstructor,
  ) {
    this.canvas = canvas;
    this.context = context;
    this.field = field;
    this.player = player;
    this.obstacleConstructor = obstacleConstructor;
    this.animationId = 0;
    this.obstacles = [];
    this.fieldSpeed = 2;
    this.newObstacleRateFPS = 120;
    this.carSpeed = {
      initialSpeed: 0,
      speedIncrement: 1.2,
    };
    this.frames = 0;
    this.isGameOver = false;
    this.score = {
      points: 0,
      pointsIncrementFPS: 30,
      htmElement: document.querySelector('#game-score'),
    };

    this.context.font = '40px Comic Sans';
  }

  configureKeyboardControls() {
    // this.obstacles.push(new this.obstacleConstructor(
    //   this.canvas, this.context, 0, 0, 400, 30, 'black',
    // ));
    document.onkeydown = (event) => {
      this.carSpeed.initialSpeed += this.carSpeed.speedIncrement;

      this.player.move(event.keyCode, this.carSpeed.initialSpeed);
    };
    document.onkeyup = () => {
      this.carSpeed.initialSpeed = 0;
    };
  }

  startGame() {
    this.clearField();

    this.field.drawField();
    this.field.move(this.fieldSpeed);

    this.player.drawPlayer();

    this.createObstacles();
    this.moveObstacles();
    this.checkClearObstacles();

    this.checkCollision();

    this.updateScore();

    this.frames += 1;

    // this.obstacle[0].drawObstacle();
    // this.obstacle[0].move(this.fieldSpeed);

    if (this.isGameOver) {
      window.cancelAnimationFrame(this.animationId);
      this.showFinalGamesStats();
    } else {
      this.animationId = window.requestAnimationFrame(() => this.startGame());
    }
  }

  clearField() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  createObstacles() {
    if (this.frames % this.newObstacleRateFPS === 0) {
      const newObstacle = this.generateRandomObstacle();

      this.obstacles.push(newObstacle);
    }
  }

  moveObstacles() {
    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
      obstacle.move(this.fieldSpeed);
    });
  }

  checkClearObstacles() {
    this.obstacles.forEach((obstacle, index) => {
      if (obstacle.posY >= this.canvas.height) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  generateRandomObstacle() {
    const randomSize = this.generateRandomNumber(100, 325);

    const maxPosX = this.canvas.width - randomSize;
    const randomPosX = this.generateRandomNumber(0, maxPosX);

    const newObstacle = new this.obstacleConstructor(
      this.canvas, this.context, randomPosX, 0, randomSize, 30, 'black',
    );
    return newObstacle;
  }

  checkCollision() {
    this.obstacles.forEach((obstacle) => {
      if (this.player.crashWith(obstacle)) {
        this.isGameOver = true;
      }
    });
  }

  updateScore() {
    if (this.frames % this.score.pointsIncrementFPS) {
      this.score.points += 1;
    }

    this.drawScore();
  }

  drawScore() {
    this.score.htmElement.innerText = this.score.points;
  }

  showFinalGamesStats() {
    setTimeout(() => {
      this.clearField();

      this.context.fillStyle = 'black';
      this.context.fillRect(0 ,0 , this.canvas.width, this.canvas.height);
      this.context.textAlign = 'center';
      this.context.font = '50px Comic Sans';
      this.context.fillStyle = 'red';
      this.context.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 3);

      this.context.fillStyle = 'white';
      this.context.fillText('Your final score is:', this.canvas.width / 2, this.canvas.height / 3 + 70);

      this.context.fillText(this.score.points, this.canvas.width / 2, this.canvas.height / 3 + 140);
    }, 1000);
  }

  // eslint-disable-next-line class-methods-use-this
  generateRandomNumber(minValue, maxValue) {
    const min = minValue;
    const max = maxValue;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    return random;
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    const fieldImg = new Image();
    fieldImg.src = './images/road.png';

    const carImg = new Image();
    carImg.src = './images/car.png';

    fieldImg.onload = () => {
      carImg.onload = () => {
        const field = new Field(
          canvas, context, 0, 0, canvas.width, canvas.height, fieldImg,
        );
        const player = new Player(
          canvas, context, 220, 500, 60, 120, carImg,
        );

        const game = new Game(canvas, context, field, player, Obstacle);

        game.configureKeyboardControls();
        game.startGame();
      };
    };
  };
};
