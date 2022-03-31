window.onload = () => {
    console.log(event)
    RaceCar.init('myCanvas')
    document.getElementById('start-button').onclick = () => {
        RaceCar.startGame();
    }
}