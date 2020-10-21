window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame("reset");
  };

  let canvas = document.getElementById("canvas")
  let ctx = canvas.getContext("2d");
  ctx.font = "35px sans-serif";
  ctx.save();
  let frames = 299;
  let obstacles = [];
  let score = 0;

  let gameOver = false;

  let bgImg = new Image();
  let bgImgReady = false;
  bgImg.src = "../images/road.png";
  bgImg.onload = function (){
    bgImgReady = true;
  }

  let carImg = new Image();
  let carImgReady = false;
  carImg.src = "../images/car.png";
  carImg.onload = function (){
    carImgReady = true;
  }

  let carObj = {
      img: carImg,
      _x: canvas.width / 2 - 27,
      _y: 570,
      set x(num){
        if(num >= 0 && num <= 450){
          this._x = num;
        }
      },
      get x(){
        return this._x;
      },
      get y(){
        return this._y;
      },
      reset: function(){
        this._x = canvas.width / 2 - 27;
      }

  }

  addEventListener("keydown", function (event) {
    switch(event.keyCode){
      case 37:
        carObj.x -= 6;
        break;
      case 39:
        carObj.x += 6;
        break;
    }
  });

  class Obstacle{
    constructor(){
      this.minWidth = 150;
      this.maxWidth = 398;
      this.height = 30;
      this.width = Math.floor(Math.random()*(this.maxWidth-this.minWidth+1) + this.minWidth);
      this.x = Math.floor(Math.random()*(canvas.width-this.width+1));
      this.y = 0;
    }

    render(){
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  function render(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    frames += 1;
    if(bgImgReady){
      ctx.drawImage(bgImg, 0,0, canvas.width, canvas.height);
    }

    if(carImgReady){
      ctx.drawImage(carObj.img, carObj.x, carObj.y, 50, 100);
    }

    if(frames === 300){
      frames = 0;
      obstacles.push(new Obstacle());
    }

    for(let i = 0; i < obstacles.length; i++){
      if(obstacles[i].y >= canvas.height){
        obstacles.splice(i, 1);
        score += 5;
      }else{
        obstacles[i].render();
        obstacles[i].y++;
      }
    }

    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 70, 30);
    ctx.fillStyle = "red";

    if(carObj.x < obstacles[0].x + obstacles[0].width &&
      carObj.x + 50 > obstacles[0].x &&
      carObj.y < obstacles[0].y + obstacles[0].height &&
      carObj.y + 100 > obstacles[0].y){
        gameOver = true;
        ctx.fillStyle = "black";
        ctx.fillRect(100, 100, 290, 200);
        ctx.fillStyle = "white";
        ctx.fillText("Game over", 150, 150);
        ctx.fillStyle = "red";
    }

  }

  function startGame(reset) {
    if(reset === "reset"){
      obstacles = [];
      frames = 299;
      gameOver = false;
      carObj.reset();
      score = 0;
    }
    render();
    if(!gameOver){
      requestAnimationFrame(startGame);
    }
    
  }
};
