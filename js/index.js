window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    this.context = document.querySelector("#canvas").getContext("2d");
    let roadImg = new Image();
    roadImg.src = './images/road.png';
    this.context.drawImage(roadImg, 100, 0, 400, 540);
  }
};
