const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const roadImg = new Image();
roadImg.src = "../images/road.png";
let roadImgX = 0;
let roadImgY = 0;

const carImg = new Image();
carImg.src = "../images/car.png";
let carImgX = 224;
let carImgY = 550;


window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
//When clicking start game this functions start in order:
  function startGame() {
    paintMainScreen();
    addListeners();
    
  }

  //Keyboard interaction
  function addListeners() {
    window.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 37:
          carImgX -= 20;
          break;
        case 39:
          carImgX += 30;
          break;
      }
      updateCanvas();
    });
  }
  
//Canvas has to be updated every single time with same background and new images with new positions
  function updateCanvas() {
    keyboardInteraction()
    
    
  }

  function keyboardInteraction(){                       //HOW DO I SET A MAX/MIN VALUE to carImgX so it doesn't count over min and max canvas.width
    if (carImgX < 420 && carImgX > 20) {
      ctx.clearRect(0, 0, canvas.Width, canvas.height);
      setTimeout(() => {
        ctx.drawImage(roadImg, roadImgX, roadImgY, 500, 700);
      }, 10);
      setTimeout(() => {
        ctx.drawImage(carImg, carImgX, carImgY, 50, 100);
      }, 10);
    }
  }
//It paints the main screen
  function paintMainScreen() {
    setTimeout(() => {
      ctx.drawImage(roadImg, roadImgX, roadImgY, 500, 700);
    }, 10);

    setTimeout(() => {
      ctx.drawImage(carImg, carImgX, carImgY, 50, 100);
    }, 10);
  }

  
};

// class Component {
  //   constructor(width, height, color, x, y) {
  //     this.width = width;
  //     this.height = height;
  //     this.color = color;
  //     this.x = x;
  //     this.y = y;
  //   }
  
  // let myObstacles = [];
  // function createObstacles(){

  //   let y = canvas.height;
  //   let minWidth = 20;
  //   let maxWidth = 200;
  //   let width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
  //   let minGap = 40;
  //   let maxGap = 200;
  //   let gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);

  //   myObstacles.push(new Component(width, 10, 'red', 0, y);
  //   myObstacles.push(new Component(y - width - gap, 10, 'red', width + gap));

  //   for (i = 0; i < myObstacles.length; i++) {
  //     myObstacles[i].y += 1;
  //     myObstacles[i].update();
  //   }

  //   }