
window.onload = () => {
  const game = new Game('canvas');

  document.getElementById('start-button').onclick = () => {

    game.start();
    console.log("start")
  };

};


