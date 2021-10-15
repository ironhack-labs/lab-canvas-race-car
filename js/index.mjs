"use-strict";

import Game from "./game.mjs";


// get the canvas
const canvas = document.querySelector('#canvas');
// capture 2D context
const ctx = canvas.getContext('2d');
console.log(ctx);



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    
  }
};



//ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
