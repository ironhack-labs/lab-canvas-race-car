const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

 // Carga de imagenes
 const fondo = new Image  ();
 fondo.src = "../images/road.png"

 const auto = new Image ()
 auto.src = "../images/car.png"

//  Arreglo de Obsataculos
 const barreras = []

//  Auto- Clase
  class Auto {
    constructor(x,y,w,h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.img = auto;
      this.velocidad = 15;
    }

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

  // Obsataculos - Clase
  class Barrera {
    constructor(x,y){
      this.x = x;
      this.y = y;
    }

    dibujarse(){
      this.y += 1
      ctx.fillRect (this.x, this.y, 100, 18)
      ctx.fillStyle = ("#FF0000")
    }

  }

  // Instancia
  const coche = new Auto (225 , 600 , 50, 80)


  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
    startGame();
    
    }
  };

  function startGame() {
    animate()

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
  

  function animate (){
      ctx.clearRect(0 ,0 , canvas.width, canvas.height)
      ctx.drawImage(fondo, 0, 0, canvas.width, canvas.height)

      coche.dibujarse()

      barreras.forEach ((barrera) => {
        barrera.dibujarse()
      })

      setInterval (() => {
        const a = new Barrera (100, 0 )
        barreras.push(a)
      }, 1000)

      window.requestAnimationFrame(animate)
    }    


  //   function creacionObstaculos (){
      // setInterval(() => {
      //     const posicionX = Math.floor(Math.random() * 100)
      //     if (posicionX <= 225 && posicionX >= 600) {
      //       const a = new Barrera (posicionX, 0  )
      //       barreras.push(a)
      //     }
      // }, 1000)
  // }


