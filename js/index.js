window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {
        const juego = new Juego(ctx)

        juego.start()
    }
};