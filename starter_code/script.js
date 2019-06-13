window.onload = function() {
  let canvas = document.querySelector('canvas')
  let context = canvas.getContext('2d')
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  // Draw Line function
  const drawLine = (xMove, yMove, xLine, yLine, strokeWidth, color) => {
    context.beginPath()
    context.lineWidth = strokeWidth
    context.moveTo(xMove, yMove)
    context.strokeStyle = color
    context.lineTo(xLine, yLine)
    context.stroke()
  }

  // Background
  context.beginPath()
  context.fillStyle = 'gray'
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.stroke()

  // Green Lines
  drawLine(0, 0, 0, canvas.height, 100, 'green')
  drawLine(canvas.width, 0, canvas.width, canvas.height, 100, 'green')

  drawLine(80, 0, 80, canvas.height, 20, 'white')
  drawLine(320, 0, 320, canvas.height, 20, 'white')


  

  const middleLines = (num) => {
    let sum = 0
    for (let i = 0; i < num; i++) {
      drawLine(canvas.width / 2, 20+sum, canvas.width / 2, 50+sum, 5, 'white')
      sum += 50
    }
  }
  middleLines(12)

  function startGame() {

  }
};
