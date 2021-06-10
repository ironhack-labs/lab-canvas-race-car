// carRaceApp.init()

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {
        console.log('click')
        carRaceApp.obstacles= [],
        carRaceApp.framesCounter= 0,
        carRaceApp.score= 0,
        carRaceApp.init()
    }
  };