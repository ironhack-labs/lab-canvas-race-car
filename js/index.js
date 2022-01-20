window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };

  function startGame() {
    roadCarApp.init()
    console.log("iniciamos")
  }
};
