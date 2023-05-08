

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  

     

  function startGame() {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const roadImage = new Image();{}
    roadImage.src = 'images/road.png';

    

    const carImage = new Image();
    carImage.src = 'images/car.png';

    //   roadImage.onload = function() {
    //   carImage.onload = function() {

    //     ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
  
    //     const carWidth = 60;
    //     const carHeight = 120;
    //     const carX = canvas.width / 2 - carWidth / 2;
    //     const carY = canvas.height - carHeight;

    //     ctx.drawImage(carImage, carX, carY, carWidth, carHeight);

    //   }
    // }

    const roadImageMove = {
      img:roadImage,
      y:0,
      speed: -1,
      draw: function(){
          this.y--; //Esto le resta un pixel cada segundo 

          if(this.y < -canvas.width) {
            this.y=0;

          }

          ctx.drawImage(this.img, 0, this.y, canvas.width, canvas.height) //Aqui pintamos la img que se sale 
          ctx.drawImage(this.img, 0, this.y + canvas.width, canvas.width, canvas.height)            //Acaba en el min 1:07                                                     //aquí pintamos la 'posición de una segunda imagen, que entra conforme sale la priemra
  
          }
        }
  
    function updateCanvas(){
            //limpiar el canvas
      ctx.clearRect(0,0,canvas.width, canvas.height)
      //Pintar otra vez el camino en la nueva posición
        roadImageMove.draw();
      // roadImageMove.draw();                                                         //min25  && en el 54 otra vez
      //Ahora hay que hacer el "loop infinito"                                  // minuto 1:02

            }


        setInterval(updateCanvas, 1000/60)
    
  }




}