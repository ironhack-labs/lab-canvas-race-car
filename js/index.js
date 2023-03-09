window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  const startBtn = document.querySelector("#start-button");
  const splashScreen = document.querySelector(".game-intro");

  startBtn.onclick = () => {
    startGame();
  };
  function startGame() {
    console.log("game started");
    splashScreen.style.display = "none";
    canvas.show();
    loop();
  }
  let canvas;
  let car;
  let carX = 200;
  let carY = 400;

  let carGoingRight = false;
  let carGoingLeft = false;

  let obsArr = [
    { x: 200, y: -50, w: 75, h: 20 },
    { x: 50, y: -200, w: 45, h: 20 },
    { x: 275, y: -250, w: 75, h: 20 },
  ];
  let bg;
  let backgroundY = 0;
  let backgroundY2 = -600;
  function preload() {
    car = loadImage("../images/car.png");
    bg = loadImage("../images/road.png");
  }
  function setup() {
    canvas = createCanvas(400, 600);
    canvas.hide();
    noLoop();
  }
  function draw() {
    image(bg, 0, backgroundY, 400, 600);
    image(bg, 0, backgroundY2, 400, 600);
    image(car, carX, carY, 70, 150);

    obsArr.forEach((oneObs) => {
      rect(oneObs.x, oneObs.y, oneObs.w, oneObs.h);
      oneObs.y += 2;

      if (oneObs.y > 600) {
        oneObs.y = -300;
        oneObs.x = random(50, 275);
      }

      if (
        carY < oneObs.y + oneObs.h &&
        carY + 150 > oneObs.y &&
        carX < oneObs.x + oneObs.w &&
        carX + 70 > oneObs.x
      ) {
        noLoop();
      }
    });

    backgroundY += 2;
    backgroundY2 += 2;

    if (backgroundY > 600) {
      backgroundY = -600;
    }
    if (backgroundY2 > 600) {
      backgroundY2 = -600;
    }

    if (carGoingRight && carX + 70 < 350) {
      carX += 2;
    }
    if (carGoingLeft && carX > 50) {
      carX -= 2;
    }
  }

  function keyPressed(e) {
    if (e.code === "ArrowRight") {
      carGoingRight = true;
    }
    if (e.code === "ArrowLeft") {
      carGoingLeft = true;
    }
  }
  function keyReleased() {
    carGoingLeft = false;
    carGoingRight = false;
  }
};
