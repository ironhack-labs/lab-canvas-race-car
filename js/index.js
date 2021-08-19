const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let xCar = 225


// class Car {

//   constructor(){
//     this.x = 225
//     this.y = 600
    
//   }
// }

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();    

  };

  

  function startGame() {
    
    printCar();
    printCanvas();
    setInterval(()=> {

    updateGame()


    }, 1000/60)
  }

  function printCanvas () {
    ctx.fillStyle = "green"
    ctx.fillRect(0,0,500,700)

    ctx.fillStyle = "grey"
    ctx.fillRect(30,0,440,700)

    //ctx.beginPath()
    //ctx.moveTo(50,0)
    //ctx.lineTo(50,700)
    //ctx.stroke()

    ctx.fillStyle = "white"
    ctx.fillRect(50,0,10,700)
    
    //ctx.beginPath()
   // ctx.moveTo(450,0)
   // ctx.lineTo(450,700)
   // ctx.stroke()

    ctx.fillStyle = "white"
    ctx.fillRect(440,0,10,700)

  /* DIFERENTES FORMAS DE HACER UNA LINEA SALTEADA
    ctx.fillStyle = "white"
    ctx.fillRect(245,0,10,700) */

    //faltarian cuadrados grises cada x posicion


  /*  let distance = 0
    for (let i = 0; i < 18; i++) {
      
      ctx.beginPath()
      ctx.moveTo(250, distance)
      distance += 20
      ctx.lineTo(250, distance)
      ctx.lineWidth = 10
      ctx.strokeStyle = "#ffffff"
      ctx.stroke()  

      ctx.beginPath()
      ctx.moveTo(250, distance)
      distance += 20
      ctx.lineTo(250, distance)
      ctx.lineWidth = 10
      ctx.strokeStyle = "grey"
      ctx.stroke()  
    }*/

    ctx.beginPath();
    ctx.setLineDash([20, 10]);
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 700);
    ctx.lineWidth = 5
    ctx.strokeStyle = "white"
    ctx.stroke();
  }

  function printCar () {

    //158 width 319px heigth
    const carImage = new Image();
    const tamaño = 158/319
    // "src" has to point as the image is used in HTML file
    carImage.src = "../images/car.png";
    
    let yCar = 600
    carImage.onload = () => {
      ctx.drawImage(carImage,xCar,yCar,100*tamaño,100)
    }

  }

  function clearCanvas() {

    ctx.clearRect(0,0,500,700)

  }

  function moveLeft() {
    xCar -= 25;
  }
  function moveRight() {
    xCar += 25;
  }

  function updateGame() {
    clearCanvas()
    printCanvas()
    printCar()
    

  }

  document.addEventListener('keydown', e => {
    switch (e.key) {
    case "ArrowLeft": moveLeft();
    console.log('left'); break;
    case "ArrowRight": moveRight();
    console.log('right'); break;
    }

  })


};
// window.requestAnimationFrame(updateGame)

