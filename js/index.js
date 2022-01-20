window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
class RoadBlock {
  constructor(width, x) {
    this.width = width;
    this.x = x;
    this.y = 0;
    this.height = 25;
  }

  moveDown = () => {
    this.y -= 1;
    return this.y <= 0 ? true : false;
  };
}

const carImg = new Image();
carImg.src = "../images/car.png";
let carBoundaries = 35;

let ctx = "";
let canvas = "";

let car = {
  x: 100,
  y: 550,
  img: carImg,
  width: 50,
  height: 100,
};

let roadBlocks = [];

let createRandomBlock = () => {
  let randomWidth = ((Math.random() * 35 + 25) / 100) * 380;
  let randomX = Math.random() * (canvas.width - carBoundaries - randomWidth);
  roadBlocks.push(new RoadBlock(randomWidth, randomX));
  console.log("creating new block");
};

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      car.x = car.x - 10 >= carBoundaries ? car.x - 10 : carBoundaries;
      break;
    case "ArrowRight":
      car.x =
        car.x + 10 <= canvas.width - car.width - carBoundaries
          ? car.x + 10
          : canvas.width - car.width - carBoundaries;
      break;
  }
});

let getCanvasAndContext = () => {
  canvas = document.getElementById("canvas");
  canvas.style.display = "block";
  ctx = canvas.getContext("2d");

  canvas.height = 700;
  canvas.width = 448;
};

let moveBlocks = () => {
  roadBlocks.forEach((block) => {
    block.y += 5;
  });
};

let drawBlocks = () => {
  roadBlocks.forEach((block) => {
    ctx.fillRect(block.x, block.y, block.width, block.height);
  });
};

//game engine
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(car.img, car.x, car.y, car.width, car.height);

  drawBlocks();

  window.requestAnimationFrame(animate);
}

function setIntervals() {
  setInterval(moveBlocks, 100);
  setInterval(createRandomBlock, 3250);
}

function startGame() {
  getCanvasAndContext();
  setIntervals();
  animate();
}
