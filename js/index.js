const bg = new Background();
const car = new Car(carImg, 200, 545, 70, 100);
//const cono=new Cono(100,150,50,50)
const over = new Image();
over.src = "images/gameoverphrase.jpg";

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function upDate() {
  frames++;
  ctx.clearRect(0, 0, Canvas.width, Canvas.height);
  bg.draw();
  car.draw();
  //cono.draw()
  generaConos();
  drawConos();
  ctx.font = "40px Arial";
  ctx.fillStyle = `red`;
  ctx.fillText(`Points:${points}`, Canvas.width - 490, 700);

  if (requestId) {
    //recursividad
    requestAnimationFrame(upDate);
  }
}
function startGame() {
  audio.play();

  requestId = requestAnimationFrame(upDate);
}

function gameOver() {
audio.pause()
ctx.drawImage(over,105,150,300,300)
requestId= undefined


}

function generaConos() {
  if (frames % 170 === 0 || frames % 60 === 0) {
    let x = Math.floor(Math.random() * (750 - 10)) + 10;
    let w = Math.floor(Math.random() * (750 - 10)) + 10;

    if (w < 250 && x >= 65 && x < 250) {
      const obs = new Obstacules(x, 0, w, 50);
      arr.push(obs);
    }
  }
}

function drawConos() {
  arr.forEach((obs, index_obs) => {
    points ++;
    obs.draw();
    if (car.collision(obs)) {
      console.log("me esta tocando");
      requestId = undefined;
      gameOver();
    }
  });
}

addEventListener("keydown", (event) => {
  //izq
  if (event.keyCode === 37) {
    car.x -= 20;
  }
  //derecha
  if (event.keyCode === 39) {
    car.x += 20;
  }
});
