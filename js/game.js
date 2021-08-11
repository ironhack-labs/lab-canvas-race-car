/* Game: 
    1) Regras do jogo;
    2) métodos de start; 
    3) verificação de game over;
    4) display de resultado final; 
    5) contagem de pontuação;
    6) player, field e obstáculos.
*/

// Ter como base o LAB dos vikings
class Game {
    constructor(canvas, context, field, player, obstacleConstructor) {
      this.canvas = canvas;
      this.context = context;
      this.field = field;
      this.player = player;
      this.animationId = 0;
      this.obstacleConstructor = obstacleConstructor;
      this.obstacles = [];
      this.obstaclesFPS = 120;
      this.fieldSpeed = 4;
      this.carSpeed = {
        intialSpeed: 1.5,
        speedIncrement: 1.8,
      };
      this.frames = 0;
      this.gameOver = false;
      this.score = {
        earnedPoints: 0,
        scorePoints: 30, 
      };
    };
  
    keyboardSettings() {
      /*teste para criar objetos aqui - não será usado 
      this.obstacles.push(new this.obstacleConstructor(
        this.canvas, this.context, 0, 0, 400, 30, 'black',
        ));*/
  
      document.onkeydown = (event) => {
        // Mantendo a tecla precionad a velocidade aumentará
        this.carSpeed.intialSpeed += this.carSpeed.speedIncrement;
  
        this.player.move(event.key, this.carSpeed.intialSpeed);
      };
  
      document.onkeyup = () => {
        this.carSpeed.intialSpeed = 0;
      };
    };
  
    startGame() {
      this.clearField();
      this.field.drawField();
      this.field.move(this.fieldSpeed);
  
      this.player.drawCar();
  
      this.createObstacles();
      this.moveObstacles();
      this.checkClearObstacles();
  
      this.checkCrash();
      // Não serão usados na versão final
      //this.obstacle.drawObstacle();
      // obstacle vai seguir a mesma velocidade de avanço do campo
      //this.obstacle.move(this.fieldSpeed);
  
      this.updatescore();
  
      /* como a requestAnimationFrame trabalha com 60fps, adicionar 1 frame aqui
      vai adicionar 60 frames a cada segundo*/
      this.frames += 1;
  
      if (this.gameOver) {
        window.cancelAnimationFrame(this.animationId);
        //limpar o canvas para tela de game over
        this.gameOverScreen();
      } else {
      // Animação - requestAnimationFrame trabalha sempre com 60fps (60 frames per second)
      this.animationId = window.requestAnimationFrame(() => this.startGame());
      }
    };
  
  
    // Limpar o canvas 
    clearField(){
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);    
    };
  
    createObstacles() {
      if(this.frames % this.obstaclesFPS === 0) {
        const newObstacle = this.randomObstacle();
        this.obstacles.push(newObstacle);
      } 
    }
  
    moveObstacles() {
      this.obstacles.forEach((obstacle) => {
        obstacle.drawObstacle();
        obstacle.move(this.fieldSpeed);
      });
    }
    /* No momento em que o obstáculo sair do canvas, ele será retirado do array
    de obstáculos
    Todo obstáculo nasce na posição x e y zero, então usarei a altura para fazer 
    verificação*/
    checkClearObstacles() {
      this.obstacles.forEach((obstacle, index) => {
        if (obstacle.yaxis >= this.canvas.height) {
          // a partir do meu index, será removido um único obstáculo
          this.obstacles.splice(index, 1);
        }
      });
    }
  
    checkCrash() {
      this.obstacles.forEach((obstacle) => {
        if (this.player.crashWith(obstacle)) {
          console.log('crash');
          this.gameOver = true;
        }
      });
    }
  
    updatescore() {
      if (this.frames % this.score.scorePoints) {
        this.score.earnedPoints += 1;
      };
  
      this.drawScore();
    };
  
    drawScore() {
      this.context.fillText(`SCORE ${this.score.earnedPoints}`, 25, 50, 300);
      this.context.font='40px Verdana';
    }
  
    gameOverScreen() {
      setTimeout(() => {
        this.clearField();
  
        this.context.fillStyle = "black";
        this.context.fillRect(0 , 0, this.canvas.width, this.canvas.height);
        this.context.textAlign='center';
        this.context.font = "50px";
        this.context.fillStyle='red';
        this.context.fillText("GAME OVER", this.canvas.width / 2, this.canvas.height / 3);
        this.context.fillStyle = "white";
        this.context.fillText("Your final score: ", this.canvas.width / 2 , this.canvas.height / 3 + 70);
        this.context.fillText(`${this.score.earnedPoints}`, this.canvas.width / 2 , this.canvas.height / 3 + 140);
      }, 1000);
    }   
  
    randomObstacle () {
      const min = 100;
      const max = 350;
      const randomSize = Math.floor(Math.random() * (max - min +1)) + min;
  
      const minXaxis = 0;
      const maxXaxis = this.canvas.width - randomSize;
      const randomXaxis = Math.floor(Math.random() * (max - min +1)) + min;
  
      const newObstacle = new this.obstacleConstructor(
        this.canvas, this.context, randomXaxis, 0, randomSize, 30, 'black',
      );
  
      return newObstacle;
    };
  };