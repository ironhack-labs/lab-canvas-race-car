const $canvas = document.querySelector('canvas');
const game = new Game ($canvas);

window.addEventListener('load', () => {

  const $triggerGameStart = document.querySelector('button');
  const $body = document.querySelector('body');

  $triggerGameStart.addEventListener('click', () => {
    $body.classList.replace('game-paused', 'game-playing');
    game.start();
  });

});


/* window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    
    
  };

  function startGame() {
    game.start
  
  }
}; */
