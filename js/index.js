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

    const myObstacles = []

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
      // if (carX < 50) {
      //   carX *= -1
      // }

      // Right wall
      // if(carX > canvas.width-100){
      //   carX *= -1
      // }

      if(isMovingLeft){
        carX -= carSpeedX
      }else if(isMovingRight){
        carX += carSpeedX
      }
    
  
      requestAnimationFrame(animate)
    }

    // const update = () => {
    //   ctx.fillStyle = myObstacles.color;
    //   ctx.fillRect(myObstacles.x, myObstacles.y, myObstacles.width, myObstacles.height);
    // }

    const addObstacles = () => {
      // for (i = 0; i < myObstacles.length; i++) {
      //   myObstacles[i].y += -1
      //   myObstacles[i].update()
      // }

      let y = canvas.height
      let minWidth = 20
      let maxWidth = 200
      let width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      )

      let minGap = 50
      let maxGap = 200
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)
      
      myObstacles.push({
        width : width, 
        height : 10 , 
        color : 'red', 
        x : 0, 
        y : y
      })

      myObstacles.push({
        width : `${y-width-gap}`, 
        height :  10, 
        color : 'red', 
        x : `${width + gap}`, 
        y : y
      })

    }


  function startGame() {
    // startScreen.style.display = "none";
    // canvas.style.display = "block";

    animate()

    setInterval(() => {
      addObstacles()
    }, 3000)

    // console.log(myObstacles)
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
