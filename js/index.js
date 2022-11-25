const game = new Game("canvas") ;

const startBtn = document.getElementById("start-button")
  startBtn.onclick("click" , () => {
    game.start()
  })

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };
}

