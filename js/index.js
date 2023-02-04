const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const canvas2 = document.getElementById('gameOver')
const ctx2 = canvas2.getContext('2d')

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
  startGame();
  }
};

const fondo = new Image  ();
 fondo.src = "../images/road.png"

 const auto = new Image ()
 auto.src = "../images/car.png"

 const barreras = []

  let puntaje = 0


  class Auto {
    constructor(x,y,w,h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.img = auto;
      this.velocidad = 35}

    dibujarse (){
      ctx.drawImage(this.img, this.x, this.y, this. w, this.h)
    }


    derecha(){
      if (this.x < 380) {
        this.x += this.velocidad
      }
      this.img = auto
    }

    izquierda (){
      if (this.x > 75){
        this.x -= this.velocidad
      }
      this.img = auto
    }


  }

 
  class Barrera {
    constructor(x,y){
      this.x = x;
      this.y = y;
    }

    dibujarse(){
      this.y += 1
      ctx.fillRect(this.x, this.y, 150, 30)
      ctx.fillStyle = ("#FF0000")
    }

  }

  document.addEventListener('keydown', (evento) => {
    switch(evento.key){
        case "ArrowRight":
            coche.derecha()
            console.log ("ArrowRigth") 
            break;
        case "ArrowLeft":
            coche.izquierda()
            console.log ("ArrowLeft") 
            break;
      }
    })


  const coche = new Auto (225 , 600 , 50, 80)

  function startGame() {
    ctx.clearRect(0 ,0 , canvas.width, canvas.height)
    ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height)
    ctx.fillText(`score: ${puntaje}`, 15 , 20) 
    coche.dibujarse()

    barreras.forEach ((barrera, indexBarrera) => {
      barrera.dibujarse()

        if (barrera.y + 30 >= coche.y && coche.x + 50 >= barrera.x && barrera.y <= coche.y + 80 && barrera.x + 150 >= coche.x){
          cancelAnimationFrame(startGame)
          clearInterval(obstaculo) 
          canvas.classList.add("none")
          canvas2.classList.remove("none")
          ctx2.fillText(`Your final score ${puntaje}`, canvas.width/4 , canvas.height/2)
        } else if (barrera.y + 30 >= canvas.height) {
          puntaje++
          barreras.splice(indexBarrera,1)
        }

      })

    window.requestAnimationFrame(startGame)
    }
    ctx2.fillStyle = "white"
    ctx2.font = "30px Arial"

    let obstaculo = setInterval (() => {
      const posicionX = Math.floor(Math.random() * 300)
      if (posicionX <= 650 && posicionX >= 100){
        const barrera = new Barrera (posicionX, 0 )
        barreras.push(barrera)
      } 
    }, 2000)



