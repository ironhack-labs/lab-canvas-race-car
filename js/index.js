const ctx = document.getElementById("canvas").getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    requestAnimationFrame(update);
  };
  document.addEventListener("keydown", (event) => {
    if (!player) return;

    player.move(event.key);
  });
};

const game = new Game();
const player = new Player();
const obstacles = [];
const obstacleSpeed = 1 * 60;
let obstacleTimer = obstacleSpeed;

function update() {
  game.draw();
  player.draw();
  obstacles.forEach((obs) => {
    console.log(obs.x)
    obs.draw();
  });
  obstacleTimer--;
  if (obstacleTimer < 1) {
    obstacleTimer = obstacleSpeed;
    obstacles.push(new Obstacle());
  }
  requestAnimationFrame(update);
}