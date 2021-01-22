window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');


  class Road {
    constructor() {
      this.road = new Image();
      this.road.src = "../images/road.png";
      this.interval = setInterval(updateGameArea, 20);
    }

    drawImage() {
      ctx.drawImage(this.road, 0, 0, 500, 700);
    }

    clear() {
      ctx.clearRect(0, 0, 500, 700);
    }
  }

  class Player {
    constructor() {
      this.width = 40;
      this.height = 80;
      this.x = 230;
      this.y = 600;
      this.car = new Image();
      this.car.src ="../images/car.png";
    }

    drawImage() {
      ctx.drawImage(this.car, this.x, this.y, 40, 80);
    }
  }

  const road = new Road();
  const car = new Player();

  function startGame() {
      road.drawImage();
      car.drawImage();
  }

  function updateGameArea() {
    road.clear();
    road.drawImage();
    car.drawImage();
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      car.x -= 10;
      console.log("carro para esquerda");
    } else {
      car.x += 10;
      console.log("carro para direita");
    }
  });
  
};



// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   const gameBg = new Image();
//   gameBg.src = '../images/road.png';
//   let carImg = new Image();
//   carImg.src ='../images/car.png';

//   function startGame() {
//     let canvas = document.getElementById('canvas');
//     let ctx = canvas.getContext('2d');
    
//     ctx.drawImage(gameBg, 0, 0, 500, 700);
//     ctx.drawImage(carImg, 225, 620, 50, 80);

//   }

  
// };







