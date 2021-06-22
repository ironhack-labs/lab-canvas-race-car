window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  document.addEventListener('keydown',(e) => {
    const tecla = e.key;
  switch(tecla){
    
    case 'a': 
    case 'ArrowLeft':
      player.moveLeft();
      break;
    case 'd':
    case 'ArrowRight':
    player.moveRigth();
      break;
  };
});

  function startGame() {
    upddateCanvas();
  };

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let animation = null;
  let counter = 0
  const score = document.getElementById('score-total')
  let totalScore = 0
  function upddateCanvas(){
    score.innerHTML = totalScore;
    counter += 1;
    clear();
    background.draw();
    player.draw();
    if(!refreshObstacle()){
      animation = requestAnimationFrame(upddateCanvas);
    }else{
      gameOver();
    }
  };
  function gameOver(){
    clear();
    ctx.fillStyle = 'black';
    ctx.fillRect(0 , 0, 500, 700);
    ctx.fillStyle = 'red';
    ctx.font = '30px Arial'
    ctx.fillText('GAME OVER!',150, 300,)
    ctx.fillStyle = 'white'
    ctx.font = '40px Arial'
    ctx.fillText(`Your final score ${totalScore}`,100, 350,)
  }

  function clear(){
    ctx.clearRect(0, 0, 500, 700);
    
  };
  
  const bgImg = new Image();
  bgImg.src = './images/road.png';
  class backgroundImg{
    constructor (){
      this.x = 0;
      this.y = 0; 
      this.image = bgImg;
    };
    draw () {
      ctx.drawImage(this.image, this.x, this.y, canvas.width, canvas.height);
    };
  }
  const background = new backgroundImg;

  const carImage = new Image();
  carImage.src = './images/car.png';
  
  class car{
    constructor(){
      this.x = 225;
      this.y = 550;
      this.width = 50;
      this.heigth = 100;
      this.speed = 15;
    };
    draw(){
      ctx.drawImage(carImage, this.x,this.y,this.width, this.heigth);
    };
    top(){
      return this.y;
    };
    bottom(){
      return this.y + this.heigth;
    };
    left(){
      return this.x;
    };
    rigth(){
      return this.x + this.width
    }
      moveLeft(){
        if(this.x > 60){
          this.x -= this.speed;
          this.draw();
        }  
      }
      moveRigth(){
        if(this.x < 390){
        this.x += this.speed;
        this.draw();
      };
    };
    checkColision(obs){
      if (
        ! 
       (this.top() > obs.bottom() ||
        this.bottom() < obs.top() ||
        this.left() > obs.rigth() ||
        this.rigth()<obs.left()   
        )
      ){
        return true;
      }
    }
  };
  const player = new car;

  class Obstacle {
    constructor( x, w){
      this.x = x;
      this.y = 0;
      this.width = w;
      this.heigth = 20
      this.speed = 6
    }
    drawObs(){
      if(this.width < 80){
        let diferença = 80 - this.width;
        this. width += diferença
      }
      if( (this.x + this.width) > 380){
        let ultrapassa = (this.x + this.width) - 380;
        this.x - ultrapassa
      }
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x, this.y, this.width, this.heigth);
    }
    top(){
      return this.y;
    };
    bottom(){
      return this.y + this.heigth;
    };
    left(){
      return this.x;
    };
    rigth(){
      return this.x + this.width
    }
    move(){
      this.y += this.speed;      
    }
  }
  let obstacles = []
  function createObstacle(){
    const x = Math.floor(Math.random() * (canvas.width - player.width - 20 - 120)) + 60
    const w = Math.floor (Math.random () * (380 - player.width - 20 - 60))

    let obstacle = new Obstacle(x, w)
    obstacles.push(obstacle)
  }
  function refreshObstacle(){
    for (let i = 0 ; i < obstacles.length; i += 1){
      let obstaculoAtual = obstacles[i];
      obstaculoAtual.move();
      obstaculoAtual.drawObs();
      if(obstaculoAtual.y > 700){
        obstacles.shift();
         totalScore += 1;
      }
      if(player.checkColision(obstaculoAtual)){
        return true ; 
      }
    };
    if(counter % 120 === 0 ) {
      createObstacle();
    };
    
  };
  //
};
