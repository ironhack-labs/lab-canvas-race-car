window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();

    };

    function startGame() {
        moveApp.init('canvas')

    }
};