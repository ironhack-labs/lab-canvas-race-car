window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const carApp = {
      appName: 'App About Car :p',
      author: 'Andrew',
      version: 'Beta 0.0.1',
      gameSize: { w: 500, h: 700 },
      ctx: undefined,
      obstacles: [],
      car: undefined,
      count: 0,
      points: 0,
      intervalId: undefined,

      init() {
        this.setContext();
        this.drawBoard();
        this.createCar();
        this.drawAll();
        this.setEventHandlers();
        this.createObstacles();
        this.setCollisionsObs();
        this.setCollisionsLines();
        this.gamePoint();
        this.endGame();
      },
      setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d');
      },
      drawBoard() {
        // Green background
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h);
        // Gray background
        this.ctx.fillStyle = '#808080';
        this.ctx.fillRect(30, 0, this.gameSize.w - 60, this.gameSize.h);
        // White lines
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 13;
        this.ctx.beginPath();
        this.ctx.moveTo(45, 0);
        this.ctx.lineTo(45, this.gameSize.h);
        this.ctx.stroke();
        this.ctx.closePath();


        this.ctx.beginPath();
        this.ctx.moveTo(this.gameSize.w - 45, 0);
        this.ctx.lineTo(this.gameSize.w - 45, this.gameSize.h);
        this.ctx.stroke();
        this.ctx.closePath();


        // White dotted line

        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 7;
        this.ctx.beginPath();
        this.ctx.moveTo(this.gameSize.w / 2, 50);
        this.ctx.setLineDash([35, 20]);
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.setLineDash([0, 0]);
      },
      createCar() {
        this.car = new Car(this.ctx, (this.gameSize.w / 2) - 50, 500, 100);
      },
      createObstacles() {
        this.obstacles.push(new Obstacles(this.ctx, 100));
      },
      clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
      },
      setEventHandlers() {
        document.addEventListener('keydown', event => {
          const { key } = event
          key === 'ArrowRight' ? this.car.moveRight() : null
          key === 'ArrowLeft' ? this.car.moveLeft() : null
        })
      },
      setCollisionsObs() {

        this.obstacles.map(eachElm => {
          if (eachElm.pos.x < this.car.pos.x + this.car.carSize.w &&
            eachElm.pos.x + eachElm.obsSize.w > this.car.pos.x &&
            eachElm.pos.y < this.car.pos.y + this.car.carSize.h &&
            eachElm.obsSize.h + eachElm.pos.y > this.car.pos.y) {
            // ¡colision detectada!
            this.endGame();
          }

          // Add points when obstacles touches bottom
          if (eachElm.pos.y === 630) {
            this.points++;
          }
        });
      },
      setCollisionsLines() {
        // Left line
        if (0 < this.car.pos.x + this.car.carSize.w &&
          0 + 50 > this.car.pos.x &&
          500 < this.car.pos.y + this.car.carSize.h &&
          100 + 500 > this.car.pos.y) {
          // ¡colision detectada!
          this.endGame();
        }

        // Right line
        if (450 < this.car.pos.x + this.car.carSize.w &&
          450 + 20 > this.car.pos.x &&
          500 < this.car.pos.y + this.car.carSize.h &&
          100 + 500 > this.car.pos.y) {
          // ¡colision detectada!
          this.endGame();
        }
      },
      gamePoint() {
        this.ctx.font = '30px Arial';
        this.ctx.fillStyle = 'White';
        this.ctx.fillText(`Points: ${this.points}`, 55, 30);
      },
      endGame() {
        clearInterval(this.intervalId);
        this.ctx.fillStyle = '#890000';
        this.ctx.fillRect(30, 0, this.gameSize.w, this.gameSize.h);
        this.ctx.font = '30px Arial';
        this.ctx.fillStyle = 'Black';
        this.ctx.fillText(`GAME OVER!! Total Points: ${this.points}`, 55, 100);
      },
      drawAll() {
        setInterval(() => {
          this.count++;
          this.count % 60 === 0 ? this.createObstacles() : null;
          this.clearAll();
          this.drawBoard();
          this.gamePoint();
          this.car.draw();
          this.setCollisionsObs();
          this.setCollisionsLines();
          this.obstacles.forEach(elm => {
            elm.move();
            elm.drawObs();
          });
        }, 40);
      },
    }
    return carApp.init();
  }
};
