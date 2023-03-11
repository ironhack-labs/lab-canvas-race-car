const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    createRoad();
    startGame();
  };

  function startGame() {}
};
function createRoad() {
  const img = document.createElement("img");
  img.src = "/images/road.png";
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
}
