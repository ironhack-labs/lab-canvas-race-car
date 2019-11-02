
let $canvas = document.querySelector('canvas');

let myGame = new Game($canvas);


window.onload = function() {
    document.getElementById("start-button").onclick = function() {
       myGame.startGame();
    };
    
   
  };