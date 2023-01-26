/** @type {HTMLCanvasElement} */ 

const canvas = document.getElementById("canvas") //localizar o elemento, neste caso a tag canvas

const ctx = canvas.getContext("2d")

//Grab Button

const startButton = document.getElementById("start-button")


//Create Player
const player = new Component(220, 550, 50, 100, "blue", ctx)


startButton.onclick =function(){
    const game = new Game(ctx, canvas.width, canvas.height, player)
    game.start()
  }
  document.addEventListener("keydown", (e) => {
    switch(e.code){
        case "ArrowLeft":
            player.speedX -=1
            break
        case "ArrowRight":
            player.speedX +=1
            break
    }
})

document.addEventListener("keyup", () => { // controlar a velocidade
    player.speedX=0
    player.speedY=0
})
