window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {
        carApp.renderGame()

    }
};

carApp.init('canvas')