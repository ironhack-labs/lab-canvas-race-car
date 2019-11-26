window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    function startGame() {
        const myGame = new Game();
        myGame.init();
    }
};
