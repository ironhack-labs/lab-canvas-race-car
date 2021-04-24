
window.onload = () => {
  const game = new Game('canvas');

  document.getElementById('start-button').onclick = () => {

    game.start();
    console.log("start")
  };

  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event);
    console.log("movessss")
  });

};





