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

      class gameArea {
        constructor(player){
          this.player = player;
          this.y = 0;
          this.img = canvasBg;
        }
        //Loads the Background for The Game
        loadBackground(){
          ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
          ctx.drawImage(this.img, 0, 0);
        }
      }
  }
};
