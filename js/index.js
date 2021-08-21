window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

  // ***** DEFINIMOS EL CANVAS ***** //
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")

  // ***** CREAMOS Y DEFINIMOS LOS ELEMENTOS ***** //
  
    // ***** CARRETERA como IMAGEN***** //
    // Creamos la imagen
    let roadImg = new Image()
    roadImg.src = "../images/road.png"
    // Pintamos la imagen (OJO --> drawImage porque es una imagen)
    ctx.drawImage(roadImg,0,0,canvas.width,canvas.height)

    // ***** COCHE como OBJETO ***** //
    class Car {
      constructor(){
        // Definimos las propiedades del Coche  
        this.carHeight = 90
        this.carWidth = 50
        this.carX = (canvas.width / 2) - ( this.carWidth/2) // situa el eje central del coche en el eje central del canvas
        this.carY = canvas.height-(this.carHeight+20) // lo situa abajo del canvas con "margen inferior 20"
        
        // Creamos la imagen Coche
        const carImg = new Image()
        this.img = carImg
        // Pintamos la imagen Coche (OJO --> drawImage porque es una imagen)
        carImg.src = "../images/car.png"
        }
      // Definimos el movimiento del Coche
        // if --> Limitamos su rango de movimiento para que no se salga del canvas
        // Le decimos cuanto en X se desplaza por cada click de tecla
      moveRight(){
      if(this.carX < canvas.width - 40 - this.carWidth) // limita el movimiento del coche dentro de la carretera sin pisar cesped
      this.carX += 10
      }
      moveLeft(){
      if(this.carX - 40 > 0 ) // limita el movimiento del coche dentro de la carretera sin pisar cesped
      this.carX -= 10
      }

      // Pintamos la imagen Coche
      drawCar(){
      ctx.drawImage(this.img, this.carX, this.carY, this.carWidth, this.carHeight)
      }
    }
       const newCar = new Car

    
    // ***** OBSTACULOS como OBJETO ***** //
    class Obstacle {
      constructor(){
        // Definimos las propiedades del obstáculo
        // Math.random() * (max - min) + min  ---->  número random entre 2 valores
        this.obstacleWidth = (Math.random()* (canvas.width - 200) + 50) // limita el tamaño para que siempre este dentro de la carretera y siempre quepa el coche
        this.obstacleHeight = 20
        this.obstacleX = (Math.random() * (canvas.width - 90 - this.obstacleWidth)) + 40  // empiezan desde cualquier posición en X >= 40 y lo limita a la carretera sin coger cesped y que siempre quepa el coche 
        this.obstacleY = 0  // aparecen siempre desde arriba 
      }

      obstacleUpdate(){
        // Definimos la velocidad de los obstaculos en Y
        this.obstacleY +=  2
      }
            
      drawObstacle(){
        // Pintamos la forma obstaculo (OJO --> fillRect porque no es un archivo imagen)
        ctx.fillRect(this.obstacleX, this.obstacleY, this.obstacleWidth, this.obstacleHeight)
      }
    }

    // Creamos un array para ir añadiendo obstaculos (no solo uno)
    const obstaclesArray = []
    // Añade los obstaculos al array con un delay de 2 segundos, es decir frecuencia con la que aparecen (hacerlo aleatorio¿?)
    setInterval(() => {obstaclesArray.push(new Obstacle); console.log(obstaclesArray)}, 2000)
     

    // ***** Creamos la PUNTUACION como TEXTO ***** //
    // Empieza en 0 
    let score = 0
    // Aumenta 1 punto por segundo
    setInterval(() =>{score ++;}, 1000)
    // Pintamos el texto (OJO --> fillText porque es un texto)
    const drawScore = (number) =>{ 
      ctx.font = "30px arial"
      ctx.fillStyle = "white"
      ctx.fillText(`Score:${number}`, 80, 100)
    }


  // ***** ANIMAMOS LOS ELEMENTOS ***** //
  
    // ***** Coche ******//
    const carUpdate = () =>{
      ctx.clearRect(newCar.carX, newCar.carY, 0, 0)
      newCar.drawCar()
      requestAnimationFrame(carUpdate) //callback¿?
    }
  
    //****** Obstaculos ******//
    const animateObstacle = () =>{
      // Limpiamos todo
      ctx.clearRect(0,0,canvas.width,canvas.height)

      // Pintamos el fondo para que no haya estela en los obstaculos
      ctx.drawImage(roadImg,0,0,canvas.width,canvas.height)

      // Coloreamos los Obstaculos
      ctx.fillStyle = "#870007"

      // Por cada Obstaculo del array le decimos que ejecute la funcion metodo que creamos en class obstaculos
      obstaclesArray.forEach( obstacle => obstacle.obstacleUpdate() )
      obstaclesArray.forEach( obstacle => obstacle.drawObstacle() )

      // Pintamos la puntuacion  
      drawScore(score)

      // Le decimos que queremos iniciar una animacion y que repinte para cada ciclo todo lo que hay en animateObstacle
      requestAnimationFrame(animateObstacle)
    }
    

  // ***** ORDENES DESDE EL TECLADO ***** //
    document.addEventListener("keydown", (e) =>{
      switch(e.key){
        case "a":
        case "ArrowLeft":
          console.log("left")
          newCar.moveLeft()
          break; 
        case "d":
        case "ArrowRight":
          newCar.moveRight()
          console.log("rigth")
          break;
      }
      carUpdate()
     })
    
    animateObstacle()
    carUpdate()

  }
};