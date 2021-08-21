window.onload = () => {
 let newCar

  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function startGame() {
  setListeners();
  init();
}

function init() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
   newCar= new Car(ctx);
  const roadField = new Image();
  roadField.src = "../images/road.png";

  setInterval(() => {
    ctx.drawImage(roadField, 0, 0, canvas.width, canvas.height);
    newCar.init();
  }, 30);
}

function setListeners() {
  window.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.keyCode === 37) {
      newCar.moveLeft();
    } else if (e.keyCode === 39) {
      newCar.moveRight();
    }
    console.log(newCar);
  });
}

class Car {
  constructor(ctx) {
    this.car = new Image();
    this.car.src = "../images/car.png";

    this.carX = 220;
    this.carY = 550;
    this.ctx = ctx;
  }

  moveLeft() {
    console.log("left");
    this.carX -= 30;
  }
  moveRight() {
    console.log("right");
    this.carX += 30;
  }

  init() {
    this.ctx.drawImage(this.car, this.carX, this.carY, 60, 100);
    //console.log(this.init)
  }
}
//pruebas de github