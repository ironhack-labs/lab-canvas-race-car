let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let positionX = 210
let positionY = 500
window.onload = () => {

  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };
  setKeyboards()


}
function updateCanvas(speed){
  ctx.clearRect(0,0,500,700)
    car()
    drawRoad()
    drawWhiteLine()
    
  
 // 
}
function collisions(){
  if(positionX <= 10){
    positionX = 10
  }else if(positionX >= 410){
    positionX = 410
  }
}


function setKeyboards(){

    document.onkeydown = function (e){

      switch(e.key){ 
        case "ArrowRight":
        positionX += 3
        car()
        collisions()
        console.log(positionX)
        break;
        case "ArrowLeft":
        positionX -= 3
        console.log(positionX)
        car()
        collisions()
        break;
      }
    }
}


  function car(){
      let img = new Image()
      img.src = "images/car.png";
      img.onload = function() {
        ctx.drawImage(img, positionX, positionY,80,160);
      }
    }
// function drawAside(){
//     // let y = 0 
      
//     }


  function drawWhiteLine(){
    for(i=0; i < 1500; i += 60){ 
      let y = [i]
      ctx.fillStyle = "white"
      ctx.fillRect(250,y,3,20)
      ctx.fillStyle = "white"
      ctx.fillRect(40,y,3,100)
      ctx.fillStyle = "white"
      ctx.fillRect(450,y,3,100)
    }
  }
 

function drawRoad() { 
  
    ctx.fillStyle = "green"
    ctx.fillRect(0,0,500,1000)
    ctx.fillStyle = "grey"
    ctx.fillRect(20,0,460,900)
    // drawAside()
   // console.log(drawAside())
    drawWhiteLine()
     }

  function startGame() {
    
    let intervalID = window.setInterval(updateCanvas, 40);
   
}
 

;
