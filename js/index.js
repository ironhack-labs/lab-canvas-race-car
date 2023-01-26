/**@type {HTMLCanvasElement} */

const canvas = document.getElementById ('canvas');

const ctx = canvas.getContext ('2d');

const player = new Component(canvas.width / 2, canvas.height / 2, 50, 120);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

let road = new Image ()
road.src = 'images/road.png'

let car = new Image ()
car.src = 'images/car.png'

function startGame () {

ctx.drawImage (road, 0, 0, canvas.width, canvas.height)
  
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
        player.speedY -= 1;
    break;
        case "ArrowDown":
        player.speedY += 1;
    break;     
    case "ArrowLeft":
         player.speedX -= 1;
    break;   
    case "ArrowRight":
         player.speedX += 1;
    break;        

  }
});

document.addEventListener("keyup",() => {
 player.speedX = 0;
 player.speedY = 0;
});
}