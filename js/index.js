window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    let obstacleArray = [];
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      
      const canvasBg = new Image();
      canvasBg.src = "../images/road.png";
  }
};
