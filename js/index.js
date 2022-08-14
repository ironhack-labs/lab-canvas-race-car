window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    // console.log("lets Start the game!")
    loop()
    const gameIntro = document.getElementsByClassName('game-intro')
    gameIntro[0].classList.toggle('hidden')
    const gameBoard = document.getElementById('game-board')
    gameBoard.classList.toggle('hidden')
  }

};

let obstacle
let bgimg
let car
let player
let carX = 225
let carY = 550
let carW = 50
let carH = 100
let sp = 8
let margin = 50


function preload() {
  bgimg = loadImage('images/road.png')
  car = loadImage('images/car.png')
}




function setup() {
  noLoop()
  let cnv = createCanvas(500, 700);
  cnv.parent('game-board');
}

function draw() {
  // background(128)
  image(bgimg, 0, 0, width, height)
  image(car, carX, carY, carW, carH)

  // car movement
  if (keyIsDown(LEFT_ARROW) && carX > margin) {
    carX -= sp
  }

  if (keyIsDown(RIGHT_ARROW) && (carX < width - margin - carW)) {
    carX += sp
  }

}