window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    basic.init()
    car.init()

    basic.interValID = setInterval(()=>{    
    basic.contObastacle++
    car.moveCar()
    basic.clean()
    road.drawRoad()
    car.drawCar()
    basic.obstacle.forEach(element => {
      element.obstacleEnd()
      element.moveObstacle()
      element.drawObastacle()
      console.log(basic.obstacle.length)
    });
    basic.setscore()
    if(car.checkCollision()){
      basic.stop()
      document.body.innerHTML = ""
      document.body.classList.add("gif")
    }
    if(basic.contObastacle === 100)
    {
      basic.obstacle.push(new Obstacle)
      basic.obstacle[basic.obstacle.length-1].drawObastacle()
      basic.contObastacle = 0;
    }
    },1000/40)
  }
};


 const basic = {

    ctx : undefined,
    canvasDOM: undefined,
    canvasSize:{width:undefined , height:undefined},
    contObastacle : 0,
    obstacle:[],
    interValID: undefined,
    score: 0,
   

    init() {
      this.canvasDOM = document.querySelector("#canvas")
      this.ctx = this.canvasDOM.getContext("2d")
      this.canvasSize.width = this.canvasDOM.width
      this.canvasSize.height = this.canvasDOM.height
      this.canvasDOM.setAttribute("width", this.canvasSize.width)
      this.canvasDOM.setAttribute("height", this.canvasSize.height)
    },
    clean(){
       this.ctx.clearRect(0,0,this.canvasSize.width,this.canvasSize.height)
    },
    stop(){
      clearInterval(this.interValID)
    },
    setscore(){
      this.ctx.fillStyle = "white";
      this.ctx.font = "30px Arial";
      this.ctx.fillText("SCORE = "+ this.score, 10, 50);
    },

  }

const road = {
     drawRoad(){
      this.drawGreenRectangule()
      this.drawRoadGrey()
      this.drawWhiteLines()
      this.drawDashlines()
    },
    drawGreenRectangule(){
      basic.ctx.fillStyle = "rgb(34,139,34)";
      basic.ctx.fillRect(0,0,basic.canvasSize.width,basic.canvasSize.height)
    },
    drawRoadGrey(){
       basic.ctx.fillStyle = "rgb(169,169,169)";
      basic.ctx.fillRect(30,0,basic.canvasSize.width-60,basic.canvasSize.height)
    },
    drawWhiteLines(){
      basic.ctx.fillStyle = "rgb(255,255,255)";
      basic.ctx.fillRect(basic.canvasSize.width-50,0,10,basic.canvasSize.height)
      basic.ctx.fillStyle = "rgb(255,255,255)";
      basic.ctx.fillRect(40,0,10,basic.canvasSize.height)
    },
    drawDashlines(){

      basic.ctx.beginPath();
      basic.ctx.setLineDash([40, 40]);
      basic.ctx.moveTo(basic.canvasSize.width/2, 0);
      basic.ctx.lineTo(basic.canvasSize.width/2, basic.canvasSize.height);
      basic.ctx.stroke();
      basic.ctx.lineWidth = 10;
      basic.ctx.strokeStyle ="rgb(255,255,255)";
    },
}

const car = {

   carImg: undefined,
    carPosX : 0,
    carPosY : 0,
    
    init() {

      this.carPosX = basic.canvasSize.width/2-20
      this.carPosY=basic.canvasSize.height-80

    },

     drawCar(){
      this.carImg = new Image();
      this.carImg.src ="../images/car.png"
      basic.ctx.drawImage(this.carImg,this.carPosX,this.carPosY,40,80)
    },
     moveCar(){

      document.onkeydown = e => {

        e.key === 'ArrowLeft' && this.carPosX + 20 > 50 ? this.carPosX -= 5 :null
        e.key === 'ArrowRight' && this.carPosX + 20 < basic.canvasSize.width - 50 ? this.carPosX += 5: null 

      }
      
    },
    checkCollision(){
      if(basic.obstacle.length > 0){
      if(car.carPosX < basic.obstacle[0].obstaclePosX + basic.obstacle[0].obstacleWidth &&
        car.carPosX + 40 > basic.obstacle[0].obstaclePosX &&
        car.carPosY < basic.obstacle[0].obstaclePosY + basic.obstacle[0].obstacleHeight &&
        car.carPosY + 80 > basic.obstacle[0].obstaclePosY){
       return true
      }
      else{
        return false
      }
    }
    }
}

class Obstacle  {

  obstacleWidth = 150
  obstacleHeight = 50
  obstaclePosX = Math.random()*(basic.canvasSize.width-250)+50
  obstaclePosY = 0

  drawObastacle(){

     basic.ctx.fillStyle = "red";
     basic.ctx.fillRect(this.obstaclePosX,this.obstaclePosY,this.obstacleWidth,this.obstacleHeight)
  }
  moveObstacle(){
    this.obstaclePosY += 10
  }
  obstacleEnd(){
    this.obstaclePosY >= basic.canvasSize.height ? basic.obstacle.shift() && basic.score ++ : null
    
  }

}

