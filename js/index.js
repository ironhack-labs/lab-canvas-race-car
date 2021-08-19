window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };




  function startGame() {

    //CREATING CANVAS
    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")
    ctx.fillStyle = "#9F0000"
    //CREATING IMAGES

    //ROAD
    let roadImg = new Image()
    roadImg.src = "/images/road.png"
    setTimeout(() => {ctx.drawImage(roadImg,0,0,canvas.width,canvas.height)},100)

    


    //DEFINING CAR OBJECT 
    class car {
      constructor(){
      this.height = 90
      this.width = 50
      this.carX = (canvas.width / 2) - 25
      this.carY = canvas.height-180
      
        const carImg = new Image()
        this.img = carImg
        carImg.src = "/images/car.png"
        }
      moveRight(){
      if(this.carX < canvas.width - this.width)
      this.carX += 45
      }
      moveLeft(){
      if(this.carX > 0 )
      this.carX -= 45
      }
      drawCar(){
      ctx.drawImage(this.img, this.carX, this.carY, 50, 90)
      }
    }
       let newCar = new car

    
    //DEFINING OBSTACLE OBJECT 

    class obstacle {
      constructor(){
        this.width = (Math.random()* 300) + 50
        this.height = 20
        this.obsX = (Math.random() * canvas.width) - 100
        this.obsY = 0
        this.deleteMarker = false
      }

      obstacleUpdate(){
        this.obsY +=  3
        if(this.obsY > canvas.height)this.deleteMarker = true
      }

      drawObstacle(){
        ctx.fillRect(this.obsX, this.obsY, this.width, this.height)
      }
    }

    const obstArr = []
    
    setInterval(() => {obstArr.push(new obstacle); console.log(obstArr)}, 2000)
    

    //COLLISION DETECTOR
      const isColliding = (obj1,obj2) =>{

        if(obj1.carX > obj2.obsX + obj2.width ||
          obj1.carX + obj1.width < obj2.obsX||
          obj1.carY > obj2.obsY + obj2.height||
          obj1.carY + obj1.height < obj2.obsY){
            //no collision 
            
          }else{
            //collision 
            const gameOver = new Image()
            gameOver.src = "/images/game.png"

            ctx.drawImage(gameOver, (canvas.width / 2) -150, (canvas.height / 2) -50, 300, 100)
            
            setTimeout(() => {alert("GAME OVER!")},200)
            
          }
      }
    
    //DEFINING SCORE VARIABLE
    let score = 0
    setInterval(() =>{score ++;}, 3000)
    
    const drawScore = (num) =>{ 
      ctx.font = "30px arial"
      ctx.fillStyle = "white"
      ctx.fillText(`Score:${num}`, 100, 100)
    }



     // EVENT LISTENER FOR KEY PRESS
     document.addEventListener("keypress", (e) =>{
       switch(e.key){
         case "a":
         console.log("left")
         newCar.moveLeft()
         break; 
         
         case "d":
           newCar.moveRight()
           console.log("rigth")
         break;
       }
      carUpdate()
     })
    

      

      //ANIMATE OBSTACLE FUNCTION 

      const animateObstacle = () =>{
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.drawImage(roadImg,0,0,canvas.width,canvas.height)


        for(let i = 0; i < obstArr.length; i++){
          isColliding(newCar, obstArr[i]) 
        }

        ctx.fillStyle = "#9F0000"
        obstArr.forEach( obstacle => obstacle.obstacleUpdate() )
        obstArr.forEach( obstacle => obstacle.drawObstacle() )

        drawScore(score)
        requestAnimationFrame(animateObstacle)
      }


      //ANIMATE  CAR FUNCTION
      const carUpdate = () =>{
      ctx.clearRect(newCar.carX, newCar.carY, 0, 0)
      
      newCar.drawCar()
      
      requestAnimationFrame(carUpdate)
    }



    animateObstacle()
    carUpdate()
    


  }
};
