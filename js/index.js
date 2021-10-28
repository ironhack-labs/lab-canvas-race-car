window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  board.init();//Inicia la generación de la interfaz del canvas (carretera)

  function startGame() {
    //Start game
    console.log("Start")
    carObj.init();
    obstacle.init();
    update()
  }

  function update(){
      setInterval(() => {
        clearScreen(document.querySelector("#canvas").getContext("2d"))
        board.init();
        carObj.drawCar()
        obstacle.startDraw()
        obstacle.moveAll()
        obstacle.detectColion()
      }, 1000 / 60)
  }

  function clearScreen(ctx) {
    ctx.clearRect(0, 0, 500, 700)
  }

  function stop() {
    clearInterval(this.intervalId)
  }

};


