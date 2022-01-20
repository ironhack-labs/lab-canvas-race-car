

let canvas;
let canvasContext;
let ballX = 0;
let carCoordinate = 215
let arrRandomNum = [60, 100]



window.onload = function () {

  canvas = document.getElementById('canvas')
  canvasContext = canvas.getContext('2d')


  document.addEventListener('keyup', event => {
    const { key } = event
    if (carCoordinate < 380) {
      key === 'ArrowRight' ? carCoordinate += 40 : null
    }
    if (carCoordinate > 40)
      key === 'ArrowLeft' ? carCoordinate -= 40 : null

  })




  setInterval(function () {
    moveEverything()
    drawEverything()



  }, 1000 / 30)



}




function moveEverything() {











  ballX += 5

  if (ballX > canvas.height - 200) {
    arrRandomNum = []
    createObstacle()

    ballX = 0


  }

}


function drawEverything() {




  canvasContext.fillStyle = 'green'
  canvasContext.fillRect(0, 0, canvas.width, canvas.height)
  canvasContext.fillStyle = 'grey'
  canvasContext.fillRect(40, 0, 420, canvas.height)
  canvasContext.fillStyle = 'white'
  canvasContext.fillRect(60, 0, 20, canvas.height)
  canvasContext.fillRect(420, 0, 20, canvas.height)

  canvasContext.beginPath();
  canvasContext.strokeStyle = 'white';
  canvasContext.lineWidth = 10;
  canvasContext.setLineDash([20, 15]);
  canvasContext.moveTo(250, 0);
  canvasContext.lineTo(250, canvas.height);
  canvasContext.stroke();


  // OBSTACLES
  if (arrRandomNum.length) {
    canvasContext.fillStyle = 'red'
    canvasContext.fillRect(arrRandomNum[0], ballX, arrRandomNum[1], 20)
  }

  // CAR 
  canvasContext.fillStyle = 'red'
  canvasContext.fillRect(carCoordinate, 600, 70, 100)
}



function randomNum(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;


}

function createObstacle() {
  arrRandomNum = []

  let firstRandomNum = randomNum(40, 460)
  let secondRandomNum = randomNum(40, 460)
  arrRandomNum.sort(function (a, b) { return a - b });
  console.log(firstRandomNum, secondRandomNum)
  while (secondRandomNum + firstRandomNum > 460) {
    console.log("yo")
    firstRandomNum = randomNum(40, 460)
    secondRandomNum = randomNum(40, 460)
  }
  arrRandomNum.sort(function (a, b) { return a - b });

  arrRandomNum.push(firstRandomNum)
  arrRandomNum.push(secondRandomNum)


}



/*
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() { }
};*/
