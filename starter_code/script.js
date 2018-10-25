window.onload = function () {
  document.getElementById('start-button').onclick = function () {
    startGame();
  };


  // width :467  heigth: 717
  // col vd: 38px *2
  // col grey: 391px center x inicial 38px
  // lar col white: 15px inicial 45px
  // posicao horizontal inicial p/ montar a col white.
  // x inicial 38px
  // posicao inicial da pontilhada 229 largura 9px.
  //

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const car = {
    x: 208.74,
    moveLeft() {
      if (this.x > 60) {
        this.x -= 25;
      }
    },
    moveRight() {
      if (this.x < 357.4) {
        this.x += 25;
      }
    }
  };

  // car
  function draw(car) {
    const img = new Image();
    imgScale = (158 / 319);
    img.onload = function () {
      ctx.drawImage(img, car.x, 556, 100 * imgScale, 100);
    };
    img.src = './images/car.png';
  }

  function retangulo(arg1, arg2, arg3, arg4, color) {
    ctx.fillStyle = color;
    ctx.fillRect(arg1, arg2, arg3, arg4);
    ctx.fill();
  }

  // road
  function drawRoad() {
    retangulo(0, 0, 467, 717, 'rgb(0,138,0)');
    retangulo(38, 0, 391, 717, 'rgb(128,128,128)');
    retangulo(48, 0, 12, 717, 'rgb(255,255,255)');
    retangulo(407, 0, 12, 717);

    ctx.beginPath();
    ctx.strokeStyle = 'rgb(225,225,225)';
    ctx.lineWidth = 9;
    ctx.setLineDash([25, 25]);
    ctx.moveTo(233.5, 0);
    ctx.lineTo(233.5, 717);
    ctx.stroke();
  }


  // updates direction
  function updateCanvas() {
    ctx.clearRect(0, 0, 467, 717);
    ctx.fillText(`Car_x: ${car.x}`, 580, 40);
    drawRoad();
    draw(car);
  }

  // obstaculos
  function Obstacle() {
    this.height = 41;
    this.width = 0;
    this.x = 0;
    this.y = 0;
    this.rdnObtWidth = () => {
      this.width = Math.floor((Math.random() * 215) + 206);
      // console.log('width = ${this.width}');
    };
    this.rdnObtX = () => {
      this.x = Math.floor((Math.random() * 283.4) + 67);
      // console.log('x = ${this.x}');
    };
    this.moveY = () => {
      this.y -= 1;
      console.log('movendo');
    };
  }

  function drawObstacle() {

  }

  // start game
  function startGame() {
    const obstacle = new Obstacle();
    console.log(obstacle);
    obstacle.rdnObtWidth();
    obstacle.rdnObtX();
    obstacle.moveY();
    drawRoad();
    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          console.log('left', car);
          break;
        case 39:
          car.moveRight();
          console.log('right', car);
          break;
        default: ('');
      }
      updateCanvas();
    };
    updateCanvas();
  }
};
