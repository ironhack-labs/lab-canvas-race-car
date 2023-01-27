window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  }

  function startGame() {
    // alert('Are you sure you want to begin??')
    console.log('Game Started')
    raceCarApp.init()
  }
}