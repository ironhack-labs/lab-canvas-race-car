window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const score = document.getElementById('score')
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
   const game = new Game(ctx)
   game.start();

  };
 
};
