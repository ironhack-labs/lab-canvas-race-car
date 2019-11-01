
let $canvas = document.querySelector('canvas');



window.onload = function() {
    document.getElementById("start-button").onclick = function() {
       const myGame = new Game($canvas);
       myGame.startGame();
    };
  
   
  };