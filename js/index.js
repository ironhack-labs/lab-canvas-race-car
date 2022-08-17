const startButton = document.getElementById('start-button')
const gameIntro = document.getElementById("game-intro");
const gameBoard = document.getElementById("game-board");
let roadImg;
let carImg;
let obstacles = [];
let obstacleSpeed = 4;
const canvasWidthVariable = 282;
const canvasHeightVariable = 441;
let score = 0;

startButton.addEventListener("click", startGame);

function preload(){
    roadImg = loadImage("images/road.png");
    carImg = loadImage("images/car.png");
}

function setup(){
    noLoop();
    console.log("Hello Canvas");
    player = new Player();
    spawnObstacle();
}

function draw(){
    image(roadImg, 0, 0);
    fill("black");
    text(`Score: ${score}`, 10, 15);
    player.updateAndDraw();
    obstacles = obstacles.filter((obstacle) => {
        obstacle.y += obstacleSpeed;
        fill("red");
        rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);

        const colliding = collisionBetweenTwoRectangles(obstacle, player);
        if (colliding) {
        gameOver();
        }

        const inScreen = obstacle.y < canvasHeightVariable;
        if (!inScreen) {
        score++;
    }
    return inScreen;
  });
}

function startGame() {
    const canvas = createCanvas(282,441);
    canvas.parent(gameBoard);
    gameBoard.classList.toggle("hidden");
    gameIntro.classList.toggle("hidden");
    setInterval(() => {
        spawnObstacle();
    }, 2000);
    loop();
}

function spawnObstacle() {
    const randomWidth = random(canvasWidthVariable / 4, canvasWidthVariable / 1.5)
    obstacles.push({
        x: random(canvasWidthVariable - randomWidth),
        y: 0,
        w: randomWidth,
        h: 10,
    });
}

function collisionBetweenTwoRectangles(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.w &&
      rect1.x + rect1.w > rect2.x &&
      rect1.y < rect2.y + rect2.h &&
      rect1.h + rect1.y > rect2.y
    );
}

function gameOver() {
    noLoop();
    background("black");
    fill("white");
    textAlign(CENTER, CENTER);
    text("Game over", canvasWidthVariable / 2, canvasHeightVariable / 2);
    text(`You scored ${score} points`, width / 2, height / 2 + 20);
}
