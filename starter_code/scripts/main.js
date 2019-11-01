window.addEventListener('load', () => {
    const $canvas = document.querySelector('canvas');
    const game = new Game($canvas);
    const $gameStart = document.querySelector('button');

    $gameStart.addEventListener('click', () => {
        //game.paintRoad();
        game.startGame();
      });

/*     window.onload = function() {
        document.getElementById("start-button").onclick = function() {
        game.paintRoad();
        game.startGame();
    }
} */
})