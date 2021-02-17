class Game {
  constructor(canvas, context, field, player, obstacleConstructor) {
    this.canvas = canvas;
    this.context = context;
    this.field = field;
    this.player = player;
    this.obstacleConstructor = obstacleConstructor;
    this.obstacles = [];
    this.fieldSpeed = 3;
    this.carSpeed = {
      initialSpeed: 0,
      spedIncrement: 1.2, 
    }
    this.frames = 0;
  }

  configureKeyboardControls() {
    document.onkeydown = (event) => {
      this.carSpeed.initialSpeed += this.carSpeed.spedIncrement;

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

    this.creatObstacles();
    this.moveObstacles();


    ///////////// REMOVER OS OBTACULOS //////////


    this.frames += 1;


    window.requestAnimationFrame(() => this.startGame());
  }

  clearField() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
  }

  creatObstacles() {
    if (this.frames % 120 === 0) {
      const newObstacles = new this.obstacleConstructor(
        this.canvas, this.context, 0, 0, 350, 30, 'red'
      );

      this.obstacles.push(newObstacles);
    }
  }

  moveObstacles() {
    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
      obstacle.move(this.fieldSpeed);
    });

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
          canvas, context, 0, 0, canvas.width, canvas.height, fieldImg
          );
        const player = new Player(
          canvas, context, 210, 520, 80, 160, carImg
        );

        const game = new Game(canvas, context, field, player, Obstacle);
        
        game.configureKeyboardControls();
        game.startGame();
      };
    };
  };
};
