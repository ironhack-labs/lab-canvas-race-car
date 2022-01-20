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
    this.y += 5;
  };
}

const carImg = new Image();
carImg.src = "../images/car.png";
let carBoundaries = 35;

let ctx = "";
let canvas = "";
let score = 0;
let moveBlockInterval = "";
let createBlockInterval = "";

let car = {
  x: 100,
  y: 550,
  img: carImg,
  width: 50,
  height: 100,
};

let roadBlocks = [];

let createRandomBlock = () => {
  let randomWidth = ((Math.random() * 40 + 25) / 100) * 380;
  let randomX = Math.floor(
    Math.random() * (canvas.width - carBoundaries - randomWidth) +
      carBoundaries -
      10
  );
  roadBlocks.push(new RoadBlock(randomWidth, randomX));
  console.log(roadBlocks);
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
  let deleteLast = false;
  roadBlocks.forEach((block) => {
    block.moveDown();
  });
  if (roadBlocks[0].y >= canvas.height) {
    roadBlocks.splice(0, 1);
    score++;
  }
};

let drawBlocks = () => {
  roadBlocks.forEach((block) => {
    ctx.fillRect(block.x, block.y, block.width, block.height);
  });
};

let checkCollision = () => {
  let collision = false;
  for (let i = 0; i < roadBlocks.length; i++) {
    if (
      car.x < roadBlocks[i].x + roadBlocks[i].width &&
      car.x + car.width > roadBlocks[i].x &&
      car.y < roadBlocks[i].y + roadBlocks[i].height &&
      car.y + car.height > roadBlocks[i].y
    ) {
      collision = true;
      break;
    }
  }
  return collision;
};

let resetGame = () => {
  car.x = 100;
  car.y = 550;
  clearInterval(moveBlockInterval);
  clearInterval(createBlockInterval);
  roadBlocks = [];
  score = 0;
};

//game engine
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(car.img, car.x, car.y, car.width, car.height);
  drawBlocks();
  if (checkCollision()) {
    ctx.font = "30px Arial";
    ctx.fillText(`YOU LOST ! SCORE: ${score}`, 65, canvas.height / 2);
  } else {
    window.requestAnimationFrame(animate);
  }
}

function setIntervals() {
  moveBlockInterval = setInterval(moveBlocks, 100);
  createBlockInterval = setInterval(createRandomBlock, 3400);
}

function startGame() {
  resetGame();
  getCanvasAndContext();
  createRandomBlock();
  setIntervals();
  animate();
}
