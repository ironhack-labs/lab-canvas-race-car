window.onload = () => {

    document.getElementById('start-button').onclick = () => {
      startGame();
    };

    let myObstacles = [];

    let requestId = null;

    function startGame() {
      console.log('start function');
      context = canvas.getContext("2d");
      // interval = setInterval(updateGameArea(), 20);
      let img = new Image();
      img.onload = function () {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }.bind(this);
      img.src = '../images/road.png';
      requestId = window.requestAnimationFrame(updateGameArea);
    };

    let myGameArea = {
      canvas: document.getElementById("canvas"),
      frames: 0,

      stop: function () {
        // clearInterval(interval);
        window.cancelAnimationFrame(requestId);
      },

      score: function () {
        var points = Math.floor(frames / 5);
        context.font = "18px serif";
        context.fillStyle = "black";
        context.fillText("Score: " + points, 350, 50);
      }
    };

    img = new Image();
    img.src = '../images/road.png';

    const clear = () => {
      console.log('clear');
      context.clearRect(0, 0, 10000, 100000);
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    function updateGameArea() {
      // update the player's position before drawing
      clear();
      newPlayer.newPos();
      newPlayer.update();
      // update the obstacles array
      updateObstacles();
      // animate the canvas
      requestId = window.requestAnimationFrame(updateGameArea);
      // check if the game should stop
      checkGameOver();
      // update and draw the score
      myGameArea.score();
    }

    let img2 = new Image();
    img2.src = '../images/car.png';

    let img3 = new Image();
    img3.src = '../images/car180.png';

    let img4 = new Image();
    img4.src = '../images/car1802.png';

    class Car {
      constructor(x, y, imagem) {
        this.x = x;
        this.y = y;
        this.imagem = imagem;
        //SPEED - ACELERATION
        this.speedX = 0;
        this.speedY = 0;
      }

      update() {
        console.log('update')
        context.drawImage(this.imagem, this.x, this.y, 90, 180);
      }

      newPos() {
        console.log('new poisition')
        this.x += this.speedX;
        this.y += this.speedY;
      }

      left() {
        return this.x;
      }
      right() {
        return this.x + this.width;
      }
      top() {
        return this.y;
      }
      bottom() {
        return this.y + this.height;
      }
    
      // crashWith(obstacle) {
      //   return !(
      //     this.bottom() < obstacle.top() ||
      //     this.top() > obstacle.bottom() ||
      //     this.right() < obstacle.left() ||
      //     this.left() > obstacle.right()
      //   );
      // }
    }

    let newPlayer = new Car(200,450,img2);

    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 65: // a
        case 37: // left arrow
          newPlayer.speedX -= 1;
          break;
        case 68: // d
        case 39: // right arrow
          newPlayer.speedX += 1;
          break;
      }
    };

    document.onkeyup = function (e) {
      newPlayer.speedX = 0;
      newPlayer.speedY = 0;
    };

    class Obstacles {
      constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        //SPEED - ACELERATION
        this.speedX = 0;
        this.speedY = 0;
      }

      update() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
      }
    }

      function updateObstacles() {
        for (i = 0; i < myObstacles.length; i++) {
          myObstacles[i].y += 5;
          myObstacles[i].update();
        }
        myGameArea.frames += 2;
        if (myGameArea.frames % 300 === 0) {
          // var x = myGameArea.canvas.width;
          var lane = Math.floor(Math.random() * 3);
          // var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          // myObstacles.push(new Car(100*lane, -200, img3));
          if (lane === 0){
            myObstacles.push(
              new Car(90 + 30 * lane, -200, img3)
            );
          } else {
            myObstacles.push(
              new Car(320, -200, img4)
            );
          }
        }
      }

    //   function checkGameOver() {
    //     var crashed = myObstacles.some(function(obstacle) {
    //       return newPlayer.crashWith(obstacle);
    //     });
      
    //     if (crashed) {
    //       myGameArea.stop();
    //     }
    // }
  }