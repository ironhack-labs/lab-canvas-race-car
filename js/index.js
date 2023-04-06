window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    let carX = canvas.width/2-25
    let carY = canvas.height-200

    let carSpeedX = 1

    let isMovingLeft = false
    let isMovingRight = false

    let animateId

    const drawImages = () => {
      const roadImg = new Image()
      roadImg.src = "../images/road.png"

      const carImg = new Image()
      carImg.src = "../images/car.png"
      
      ctx.drawImage(roadImg, 0, 0, canvas.width ,canvas.height)
      ctx.drawImage(carImg, carX, carY, 50 ,100)
    }


    const animate = () => {
      drawImages()

      // Left wall
      if (carX < 50) {
        carX *= -1
      }

      // Right wall
      if(carX > canvas.width-100){
        carX *= -1
      }

      if(isMovingLeft){
        carX -= carSpeedX
      }else if(isMovingRight){
        carX += carSpeedX
      }
    
  
      requestAnimationFrame(animate)
    }


  function startGame() {
    // startScreen.style.display = "none";
    // canvas.style.display = "block";

    animate()

  }

  document.addEventListener('keydown' , event => {
    if(event.key === "ArrowRight"){
      isMovingRight = true
    }
    if(event.key === "ArrowLeft"){
      isMovingLeft = true

    }
  })

  document.addEventListener('keyup', event => {
    if (event.key === "ArrowRight") {
      isMovingLeft = false
    }
    if (event.key === "ArrowLeft") {
      isMovingRight = false
    }
  })

};
