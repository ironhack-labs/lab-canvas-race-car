window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');
    let score = 0;
    let animate = true;
    let obstacles = [];

    let car = {
      posX: canvas.width / 2 - 50 / 2,
      posY: canvas.height - 80,
      width: 50,
      height: 80,
      render: function () {
        let img = new Image();
        img.src = './images/car.png';
        ctx.drawImage(img, this.posX, this.posY, this.width, this.height);
      },
    };

    let road = {
      render: function () {
        let img = new Image();
        img.src = './images/road.png';
        ctx.drawImage(
          img,
          canvas.width / 2 - (canvas.width - 150) / 2,
          0,
          canvas.width - 150,
          canvas.height
        );

        ctx.fillStyle = 'red';
        ctx.font = '18px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(`Score: ${score}`, 5, 15);
      },
    };

    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowLeft':
          if (car.posX > 75) car.posX -= 20;
          break;
        case 'ArrowRight':
          if (car.posX < 370) car.posX += 20;
          break;
      }
    });

    function addObstacle() {
      console.log('adding obstacles');
      let obstacle = {
        posX: 0,
        posY: 0,
        height: 10,
        minWidth: 120,
        maxWidth: 220,
        minGap: 70,
        maxGap: 150,
        color: 'red',
        render() {
          if (!this.width) {
            this.width = Math.floor(
              Math.random() * (this.maxWidth - this.minWidth + 1) +
                this.minWidth
            );
            this.gap = Math.floor(
              Math.random() * (this.maxGap - this.minGap + 1) + this.minGap
            );
          }
          ctx.fillStyle = this.color;
          ctx.fillRect(this.posX, this.posY, this.width, this.height);
          ctx.fillRect(
            this.width + this.gap,
            this.posY,
            canvas.width - this.width - this.gap,
            this.height
          );
        },
      };
      obstacles.push(obstacle);
    }

    function checkForCollision(obstacle) {
      if (
        car.posX <= obstacle.posX + obstacle.width &&
        obstacle.posY >= car.posY &&
        obstacle.posY < canvas.height
      ) {
        animate = false;
      }

      let posX = obstacle.width + obstacle.gap;

      if (
        (car.posX > posX || car.posX + car.width > posX) &&
        obstacle.posY > car.posY &&
        obstacle.posY < canvas.height
      ) {
        animate = false;
      }

      // SCORE UDPATE
      if (obstacle.posY > canvas.height) {
        score++;
        obstacles.shift();
      }
    }

    function gameOver() {
      ctx.fillStyle = 'black';
      ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 150, 300, 300);

      ctx.font = 'normal bold 18px arial';
      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`GAME OVER`, canvas.width / 2, canvas.height / 2 - 15);
      ctx.fillText(`SCORE: ${score}`, canvas.width / 2, canvas.height / 2 + 10);
    }

    function gameLoop() {
      if (!animate) {
        gameOver();
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      road.render();
      car.render();
      for (let i = 0; i < obstacles.length; i++) {
        checkForCollision(obstacles[i]);
        obstacles[i].render();
        obstacles[i].posY += 3;
      }
      requestAnimationFrame(() => {
        gameLoop();
      });
    }

    setInterval(() => {
      addObstacle();
    }, 3000);

    gameLoop();
  }
};
