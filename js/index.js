window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

function drawImg() {
  var canvas = document.querySelector("#canvas"),
  context = canvas.getContext('2d');

  makeBase();

  function makeBase() {
    baseImage = new Image();
    baseImage.src = '../images/road.png'
    baseImage.onload = function() {
      context.drawImage(baseImage, 0, 0, 500, 700);
    }
  }
}
drawImg();