window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {
      racingApp.init('canvas')
    }
  };  

// racingApp.drawRectangle()
// racingApp.drawLinearSquare()
// drawingApp.drawContinuousLines()
// drawingApp.drawDashedLines()
// drawingApp.drawArc()
// drawingApp.writeText('Ese Popino ahi')
// drawingApp.drawImage('football-ball.png')
