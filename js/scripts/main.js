/**  @type {HTMLCanvasElement} */ 

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

const roadImg = document.getElementById("road-img")

ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height)

const car = new Car(150, 0, 75, 75, ctx)


window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {
      const game = new Game(ctx, canvas.width, canvas.height, car)
      game.start()
    }
}

document.addEventListener("keydown", (e) => {
switch(e.code){


    case "ArrowLeft": player.speedX -= 1; break;

    case "ArrowRight": player.speedX += 1; break;
}
})

