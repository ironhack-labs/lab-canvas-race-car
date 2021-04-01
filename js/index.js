window.onload = () => {

  drawingApp.init()


  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    drawingApp.init()
    let test = document.querySelector('#canvas')
    drawingApp.launch()

  }
};


