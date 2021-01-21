window.onload = () => {
    const startButton = document.getElementById('start-button')

    startButton.onclick = () => {
        startGame();
        startButton.setAttribute('disabled', 'true')
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