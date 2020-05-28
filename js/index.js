


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log('click')
    const canvas = document.getElementById('canvas')
    new Game(canvas).start()
  };

  // function startGame() {
  //   new Game(ctx)
  // }
};
