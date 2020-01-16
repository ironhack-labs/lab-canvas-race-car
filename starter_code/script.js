window.onload = function() {

  this.img = './images/car.png'
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

;



  function onboard(){
   const canvas = document.querySelector('canvas')
        ctx= canvas.getContext('2d');
        /*************inicioX+inicioY+tamañoX+tamañoY */
const Canvaswidth = canvas.width/2
const Canvasheigth = canvas.height
const rayitas = 12;

console.log('hola');


        ctx.fillStyle = 'green'
    ctx.fillRect(Canvaswidth, 0, Canvaswidth, Canvasheigth);

   ctx.fillStyle ='gray';
   ctx.fillRect(Canvaswidth+100 , 0, Canvaswidth-200, Canvasheigth);
   ctx.fillStyle = 'white'
   ctx.fillRect(Canvaswidth+120 , 0, 15, Canvasheigth);
   ctx.fillStyle = 'white'
   ctx.fillRect(2*Canvaswidth-135 , 0, 15, Canvasheigth);
   ctx.fillStyle = 'white'
 for(let i =0; i<rayitas; i++){
  ctx.fillRect(Canvaswidth+Canvaswidth/2 ,110*i, 5,Canvasheigth/rayitas);
 }
 
   
   
  //  ctx.fillRect(Canvaswidth+Canvaswidth/2 , 0, 5, Canvasheigth/12);
   

 
    
  }

  function startGame() {


  }



  onboard()


};



