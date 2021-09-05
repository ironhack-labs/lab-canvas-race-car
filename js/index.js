window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let crashed = false;

    const road = new Image()
    road.src = "images/road.png"

    setTimeout(() => {ctx.drawImage(road, 0, 0, canvas.width, canvas.height)},500)

    //Car

    class carClass {
      constructor() {
        this.carX = (canvas.width/2)-25;
        this.carY = 500
        this.carW = 50
        this.carH = 100

        const carImg = new Image()
        this.img = carImg
        carImg.src = "images/car.png"

      }
      moveLeft() {
        if (this.carX > 0)
        this.carX -= 25;
      }
      moveRight() {
        if (this.carX <= canvas.width-50)
          this.carX += 25;        
      }
      draw() {
       ctx.drawImage(this.img, this.carX, this.carY, this.carW, this.carH),500
      }
    }

    const playerOne = new carClass()


     //Obstacle

     class obstacleClass{
      constructor(x,y,w,h){
      this.y = 0
      this.x = (Math.random()*200)+50
      this.w = (Math.random()*500)
      this.h = 30
      ctx.fillStyle = '#9B0000'   


      }
      speed(){
      this.y += 5  
      }
      draw(){
        ctx.fillRect(this.x,this.y,this.w,this.h)
      }
    }

    let obstaculo = new obstacleClass(0,0,200,30)

    //Car controls

    document.addEventListener('keydown', e =>{
      switch(e.key){
        case 'ArrowLeft': playerOne.moveLeft();
        console.log('left'); 
        break;
        case 'ArrowRight': playerOne.moveRight();
        console.log('right'); 
        break;
      }
      refreshCar()
    })


    //CREATING ARRAY


    let arrObstaculos = []

    setInterval(()=>{
      arrObstaculos.push(new obstacleClass)
    }, 1000)

    //COLLISION DETECTOR
    const isColliding = (obj1,obj2) =>{

      if(obj1.carX > obj2.x + obj2.w ||
        obj1.carX + obj1.carW < obj2.x||
        obj1.carY > obj2.y + obj2.h||
        obj1.carY + obj1.carW < obj2.y){
          //no collision 

        }else{
          //collision 
          const gameOver = new Image()
          gameOver.src = 'http://pngimg.com/uploads/game_over/game_over_PNG58.png'

          ctx.drawImage(gameOver, (canvas.width/2)-250,(canvas.height/2)-250, 500, 500)
          if (crashed == false) {
            setTimeout(()=>{alert ('Try Again!!!');
            return},200);
            crashed = true;
          }
        }
    }


    let score = 0

    setTimeout(()=>{setInterval(()=>{
      score += 1
    }, 1000)},1500)

    function drawScore(num){
      ctx.font = '30px arial';
      ctx.fillStyle = 'white'
      ctx.fillText(`Score: ${num}`, 100, 100)
    }

    //FUNCTION OBSTACLE + BACKGROUND

    const refreshObstaculo = ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(road, 0, 0, canvas.width, canvas.height)

        //llamada collapse
        for(let i = 0; i < arrObstaculos.length; i++){
          isColliding(playerOne, arrObstaculos[i])
        }

        /* console.log(isColliding) */
        //-------

        ctx.fillStyle = '#9B0000'
        arrObstaculos.forEach(obstaculo=>{obstaculo.speed()})
        arrObstaculos.forEach(obstaculo=>{obstaculo.draw()})

        drawScore(score)
        requestAnimationFrame(refreshObstaculo)
    }


    // CAR FUNCTION

    const refreshCar = (()=>{
      ctx.clearRect(playerOne.carX, playerOne.carY, playerOne.width, playerOne.height)

      playerOne.draw()

      requestAnimationFrame(refreshCar)
    })

    //CALLING REFRESH FUNCTIONS

    refreshObstaculo()
    refreshCar()





    } 
  }