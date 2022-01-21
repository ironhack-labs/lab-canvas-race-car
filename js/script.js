window.onload = () => {
    document.getElementById('start-button').onclick = () => {
       startGame();
    };
    
    function startGame() {
        drawGame.pressStart();
    }
};
