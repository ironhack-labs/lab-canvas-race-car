const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
   const game1 = new Game(ctx);
   game1.start() 
  };
};
