'use strict';

function main () {

  var startBtn = document.getElementById("start-button");

  var parentElement = document.getElementById("game-board");
  
  var game = new Game(parentElement);

  startBtn.onclick = function() {
    game.start();
  };

};

window.onload = main;