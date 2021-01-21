window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
    document.getElementById('restart-button').onclick = () => {
        restartGame();
    };

    function startGame() {
        carApp.renderGame()
    }

    function restartGame() {
        carApp.restartGame()
        carApp.renderGame()
    }
};

carApp.init('canvas')