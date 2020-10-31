"use-strict"

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
     
    //carretera
    this.context = document.querySelector("#canvas").getContext("2d");
    let imagenFondo = new Image();
    imagenFondo.src = './images/road.png';
    this.context.drawImage(imagenFondo, 140, 0, 282, 441);

    // coche
    let imagenCoche = new Image();
    imagenCoche.src = './images/car.png';
    this.context.drawImage(imagenCoche, 255, 300, 50, 100);
    
     
    var velocidad = 10;
    document.body.onkeydown = function(event){
      switch(event.code){
        case 'ArrowLeft':
            imagenCoche -= velocidad;
                    
            break;
        case 'ArrowRight':
            imagenCoche += velocidad;
                    
            break;
    }
  }
   
  }
    


    // SE va a la chachu
  // const createRoad = () => {
  //   let imagenFondo = new Image();
  //   imagenFondo.src = './images/road.png';
  //   this.context.drawImage(imagenFondo, 140, 0, 282, 441);
  // 
  // }
  // const createCar = () => {
  //   let imagenCoche = new Image();
  //   imagenCoche.src = './images/car.png';
  // car.onload = () => {
  //   this.context.drawImage(imagenCoche, 255, 300, 50, 100);
  // }
  // }
  // //Movimiento derecha e izquierda:
  // const moveCar = () => {
  //     if(direction === 'right' && X < 400){
  //     createRoad()
  //     X+=10
  //     createCar()
  //     } else if (direction === 'left' && X > 50){
  //     createRoad()
  //     X-=10
  //     createCar()
  //     }
  //     }
  //   
  // document.addEventListener('keydown', (event)=>{
  //     if(event.key === 'ArrowLeft'){
  //         direction = 'left'
  //         moveCar()
  //     } else if(event.key === 'ArrowRight'){
  //         direction='right'
  //         moveCar()
  //     } 
  //     });

  // }
    
    
  //carDirection = (event) => {
  //  if (event.code === "ArrowRight") {
  //    x = x + 100;
  //   imagenCoche.style.left = x + 'px';
  //  } else if (event.code === "ArrowLeft") {
  //    x = x - 100;
  //    imagenCoche.style.left = x +'px';
  //  }
  //};

  //document.addEventListener("keydown", carDirection);
    // cuando presiona una tecla
   // function moveCar(event){
   //     if(event.code === "ArrowRight"){
   //       x = x + 100;
   //       imagenCoche.style.left = x + 'px';
   //   }
   //   else if(event.code === "ArrowLeft"){
   //     x = x - 100;
	//     imagenCoche.style.left = x +'px';
   // }}
   //                   
   // moveCar();
    
  
};
