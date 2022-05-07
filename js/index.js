const bg = new Background()
const car=new Car(carImg,200,545,70,100)
const cono=new Cono(100,150,50,50)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

}
  


 function upDate(){
   frames ++;
 ctx.clearRect(0,0,Canvas.width,Canvas.height)
  bg.draw()
  car.draw()
  cono.draw()
  generaConos()
  drawConos()
  
  
  if(requestId){
    //recursividad
  requestAnimationFrame(upDate)
}
 
 
  }
  function startGame() {
    
    
    requestId=requestAnimationFrame(upDate)
  }
  function generaConos(){
    if(frames %170 ===0 || frames %60 ===0){
      let x =Math.floor(Math.random() * (750  - 10) )+10
     
        const cono=new Cono(x,100,50,50)

        armyCono.push(cono)
        
    }

  }

  function drawConos(){
    armyCono.forEach((cono,index_cono)=>{

      cono.draw()
      if(car.collision(cono)){
        console.log("me esta tocando")
        requestId=undefined
        bg.gameOver()
    }

    })
  }
  




addEventListener("keydown",(event)=>{
  //izq
  if(event.keyCode ===37){
      car.x -=20;
  }
  //derecha
  if(event.keyCode=== 39){
      car.x += 20;
  }
  })