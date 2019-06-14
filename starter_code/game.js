class Game{
  constructor(){
    this.w = 600;
    this.h = 800;
    this.ctx = undefined
    this.intervalId = undefined
    this.fps = 60
    this.counter = 0;
    this.carDimensions = 100
    this.carStartPoint = {
      x: 425,
      y: 590
    }
    this.positionInc = 50;
    this.img = new Image();
    this.img.src = "images/car.png";
    this.obstacles = []
    this.posX = Math.random()*350
    this.posY = -30
    this.width = Math.random()*100 + 50
    this.height = 30  
    
  } 

  init = (id)=>{
    this.ctx = id.getContext("2d")
    this.start()
  }
  
  start = () =>{
    this.intervalId = setInterval(()=>{
      this.clearScreen();
      this.draw();
      this.drawObst();
      this.listener();
      
      // this.addObstacles()
      this.counter++;
    },1000/this.fps)
  } 
  
  clearScreen = () =>{
    this.ctx.clearRect(0,0,600,800);
  }

  // addObstacles = () =>{

  //   if (this.counter%400===0) accelerator++

  //   if ((this.counter%80===0)||(this.counter%(Math.floor(Math.random()*120)+40)===0)) this.obstacles.push(obsta)

  //   this.obstacles.forEach(function(elm){
  //     this.ctx.fillStyle = "red"
  //     this.ctx.fillRect(elm.this.posX, elm.this.posY,elm.this.width, elm.this.height)
  //     elm.this.posY+=2+accelerator
  //     })
  //     this.obstacles = this.obstacles.filter(function(elm){
  //       let obsta = elm.thisposY<800
  //       return obsta} 

  drawObst = () => {

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  };
    let i = 0
     
    this.obstacles.push([randomInt(60, 460), this.posY, randomInt(100, 300), this.height])
    this.ctx.beginPath();
    this.ctx.fillStyle = '#860000';
    this.ctx.rect(this.obstacles[0][0], this.obstacles[0][1]+=1, this.obstacles[0][2], this.obstacles[0][3])
    this.ctx.fill();
    this.ctx.closePath();

      if(this.obstacles[0][1] > 400) { 
      this.obstacles.push([randomInt(50, 400), this.posY, randomInt(100, 400), this.height])
      this.ctx.beginPath();
      this.ctx.fillStyle = '#860000';
      this.ctx.rect(this.obstacles[1][0], this.obstacles[1][1]+=1, this.obstacles[1][2], this.obstacles[1][3])
      this.ctx.fill();
      this.ctx.closePath();

      if(this.obstacles[1][1] > 400) { 
        this.obstacles.push([randomInt(50, 400), this.posY, randomInt(100, 400), this.height])
        this.ctx.beginPath();
        this.ctx.fillStyle = '#860000';
        this.ctx.rect(this.obstacles[2][0], this.obstacles[2][1]+=1, this.obstacles[2][2], this.obstacles[2][3])
        this.ctx.fill();
        this.ctx.closePath();
  
        this.obstacles.pop()} 
i++
      }
      


    } 
    // for (i = this.posY; i > 800; i++){
    //   this.obstacles
    // } 
    //  this.obstacles.pop()
  
   

  draw = () => {
    this.drawBackground();
    this.drawCar();
  } 

  drawBackground = () => {
    this.ctx.fillStyle = `rgb(0, 128, 0)`;
    this.ctx.beginPath();
    this.ctx.rect(0, 0, 600, 800);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.fillStyle = `rgb(128, 128, 128)`;
    this.ctx.beginPath();
    this.ctx.rect(50, 0, 500, 800);
    this.ctx.fill();
    this.ctx.closePath();
  
    this.ctx.fillStyle = `rgb(255, 255, 255)`;
    this.ctx.beginPath();
    this.ctx.rect(60, 0, 20, 800);
    this.ctx.fill();
    this.ctx.closePath();
  
    this.ctx.fillStyle = `rgb(255, 255, 255)`;
    this.ctx.beginPath();
    this.ctx.rect(520, 0, 20, 800);
    this.ctx.fill();
    this.ctx.closePath();
  
    this.ctx.setLineDash([40, 60]);
    this.ctx.lineWidth = 20;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineDashOffset = -this.counter*2;
    this.ctx.moveTo(300, 0);
    this.ctx.lineTo(300, 800);
    this.ctx.stroke();
    this.ctx.closePath();  
  } 

  drawCar = () => {
   this.ctx.drawImage(
      this.img,
      this.carStartPoint.x,
      this.carStartPoint.y,
      this.carDimensions,
      this.carDimensions * 2
    );
  } 

  listener = ()=> {
    document.onkeydown = (e) =>{  
    e.preventDefault();
    

    switch (e.keyCode) {
      case 39: //goes to the right
        if (this.carStartPoint.x < 425){ this.carStartPoint.x += this.positionInc;}
        break;

      case 37: //goes to the left
      if (this.carStartPoint.x > 75) {this.carStartPoint.x -= this.positionInc;}
        break;
    }
  } 
  } 

//   drawObstacles = () =>{
//         this.obstacles.forEach(function(elm){
//         this.ctx.fillStyle = "red"
//         this.ctx.fillRect(elm.this.posX, elm.this.posY,elm.this.width, elm.this.height)
//         elm.this.posY+=2+accelerator
//         })
//         this.obstacles = this.obstacles.filter(function(elm){
//         return elm.this.posY<800
//     })
// }

  stop = () =>{
    clearInterval(this.intervalId)
  } 
  
  
} 




  

  // window.onkeydown = function(e) {
  //   console.log(e.keyCode);
  //   const positionInc = 30;

  //   switch (e.keyCode) {
  //     case 39: //goes to the right
  //       dataModel.x += positionInc;
  //       break;

  //     case 37: //goes to the left
  //       dataModel.x -= positionInc;
  //       break;
  //   }

    // to be completed by my favourite students :)
    // if (dataModel.y < carDimensions) {
    //     dataModel.y = h
    // }

// function clearScreen() {
//   ctx.clearRect(0, 0, w, h);
// }
// startGame()
