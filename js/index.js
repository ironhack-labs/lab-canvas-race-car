window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {
        drawnRoad.init('canvas')
    }
};