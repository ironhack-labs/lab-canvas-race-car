window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };



  console.log(roadApp)
  function startGame() {
    roadApp.init()
  }
};
