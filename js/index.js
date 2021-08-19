window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const road = new Image()
    road.src = "images/road.png"

    setTimeout(() => {ctx.drawImage(road, 0, 0, canvas.width, canvas.height)},500)
   
    //COCHE

    class carClass {
      constructor() {
        this.carX = (canvas.width/2)-25;
        this.carY = 500
 
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
       ctx.drawImage(this.img, this.carX, this.carY, 50, 100),500
      }
    }

    const playerOne = new carClass()
    

     //OBSTACULO

     class obstaculoClass{
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

    let obstaculo = new obstaculoClass(0,0,200,30)

    //CONTROLES CHOCHE

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


    //CREAR ARRAY


    let arrObstaculos = []

    setInterval(()=>{
      arrObstaculos.push(new obstaculoClass)
    }, 1000)


    let score = 0
    
    setTimeout(()=>{setInterval(()=>{
      score += 1
    }, 1000)},1500)

    function drawScore(num){
      ctx.font = '30px arial';
      ctx.fillStyle = 'white'
      ctx.fillText(`Score: ${num}`, 100, 100)
    }

    //FUNCION OBSTACULO + FONDO
    
    const refreshObstaculo = ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
        
        ctx.fillStyle = '#9B0000'
        arrObstaculos.forEach(obstaculo=>{obstaculo.speed()})
        arrObstaculos.forEach(obstaculo=>{obstaculo.draw()})

        drawScore(score)
        requestAnimationFrame(refreshObstaculo)
    }


    //FUNCION COCHE

    const refreshCar = (()=>{
      ctx.clearRect(playerOne.carX, playerOne.carY, playerOne.width, playerOne.height)

      playerOne.draw()

      requestAnimationFrame(refreshCar)
    })

    //LLAMADA FUNCIONES REFRESH

    refreshObstaculo()
    refreshCar()
    
    
    
    
    } 
  }

