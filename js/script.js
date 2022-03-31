window.onload = () => {
    RaceCar.init('myCanvas')
    document.getElementById('start-button').onclick = () => {
        RaceCar.startGame();
    }
}