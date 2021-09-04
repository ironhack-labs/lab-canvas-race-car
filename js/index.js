window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    boardGame.start();
     
  }
  const boardGame = {
    canvas : document.querySelector('#canvas'),
    ctx : canvas.getContext('2d'),
    framesRoad : 0, 
    framesObs : 0, 
    width : this.canvas.width,
    height : this.canvas.height,
    imgCar : "/1_Week_2/3_Day_4/lab-canvas-race-car/images/car.png",
    imgBoard : "/1_Week_2/3_Day_4/lab-canvas-race-car/images/road.png",
    start : function () {
     this.interval = setInterval(updateGameArea, 1000/60);
    },
    clear : function () {
      this.ctx.clearRect(0, 0, this.width, this.height)
    }, 
    stop : function () {
      clearInterval(this.interval);
    },

    score: function () {
      const points = Math.floor(this.framesObs / 5)
      this.ctx.font = '30px serif',
      this.ctx.fillStyle = 'black',
      this.ctx.fillText(`Score: ${points}`, 350, 50)
    }
  }

  class Components {
    constructor (x, y, color, imgLink, width, height) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.imgLink = imgLink;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      // this.speedY = 0;
    }

    update () {
      const ctxNew = boardGame.ctx;
      let img = new Image();
      img.src = this.imgLink;
      ctxNew.drawImage(img, this.x, this.y, this.width, this.height)
    }
    updateRoad () {
      const ctxNew = boardGame.ctx;
      let img = new Image();
      img.src = this.imgLink;
      ctxNew.drawImage(img, this.x, this.y, this.width, this.height)
      ctxNew.drawImage(img, this.x, this.y - 700, this.width, this.height)
    }

    updateObs() {
      const ctxNew = boardGame.ctx
      ctxNew.fillStyle = this.color
      ctxNew.fillRect(this.x, this.y, this.width, this.height)
  }

    newPos () {
      this.x += this.speedX;
      // this.y += this.speedY;
    }
    newPosRoad () {
      this.y += 10;
    }

    left () {
      return this.x;
    }

    right () {
      return this.x + this.width;
    }

    top () {
      return this.y;
    }

    bottom () {
      return this.y + this.height;
    }

    //Cuando aparece un obstaculo comienza 
    crashWith(obstacle) {
      console.log(`
      ${this.bottom() < obstacle.top()}
      ${ this.top() > obstacle.bottom()}
      ${ this.right() < obstacle.left()}
      ${this.left() > obstacle.right()}
      `
          );
      return !(
        this.bottom() < obstacle.top() || //FALSE cuando el lado bottom del carro sea mayor que el lado top del obstáculo (obstcaulo arriba del carro), TRUE cuando haya pasado el obstaculo por debajo del carro (todo se basa en el sist. coordenado) 
        this.top() > obstacle.bottom() || //FALSE cuando la parte arriba del carro este encima de la parte baja del obstaculo. TRUE en caso contrario.
        this.right() < obstacle.left() || //FALSE cuando lado derecho del carro este a la derecha del lado izquierdo del obstaculo. TRUE en caso contrario
        this.left() > obstacle.right()); //FALSE cuando lado izquierdo del carro este al lado izquierdo del lado derecho del carro.
    }
  }

  function updateGameArea () {
    boardGame.clear();
    imgRoadObj.updateRoad();
    updateRoad();
    imgCarObj.newPos();
    imgCarObj.update();
    updateObstacles();
    checkGameOver();
    boardGame.score();
  }

  function updateRoad () {
    boardGame.framesRoad += 1;
    if (imgRoadObj.y > boardGame.height) {
      imgRoadObj.y = 0;
    }else if (boardGame.framesRoad % 1 === 0) {
      imgRoadObj.newPosRoad();
    }
  } 


  const myObstacles = [];
  function updateObstacles () {
    for (i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y += 1;
      myObstacles[i].updateObs();
    } 

    boardGame.framesObs += 1;
    if (boardGame.framesObs % 220 === 0) {
      let x = 500;
      let minWidth =20;
      let maxWidth = 470;
      let width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);

      let minGap = 50;
      let maxGap = 400;
      let gap = Math.floor(Math.random() * (maxGap - minGap) + minGap);

      myObstacles.push(new Components(width, 0, 'red', '', width, 20));
      // myObstacles[0] = (new Components(210, -450, 'blue', '', 100, 350)); //Segundo obstaculo
    }
  }

  function checkGameOver () {
    const crashed = myObstacles.some(function (obstacle) {
      return imgCarObj.crashWith(obstacle)
    });

    if (crashed) {
      boardGame.stop();
    }
  }

  const imgRoadObj = new Components (0, 0, '',boardGame.imgBoard, boardGame.width, boardGame.height)
  const imgCarObj = new Components (225, 575, '', boardGame.imgCar, 40, 100)


  document.addEventListener('keydown', (e) =>{
    switch(e.keyCode) {
      case 37:
        imgCarObj.speedX -= 2;
      break;

      case 39:
        imgCarObj.speedX +=2;
      break;
    }
  });

  document.addEventListener('keyup', (e) => {
    imgCarObj.speedX = 0;
  })

};

