const $canvas = document.querySelector('canvas');

const game = new Game ($canvas);
const context = $canvas.getContext('2d');

window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        
        
        game.startGame();
    };
    
};