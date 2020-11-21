const cl = (...p)=>console.log(...p)

/* <body>
<div class="game-intro">
  <img src="./images/logo.png" alt="" class="logo-img" />
  <br />
  <button id="start-button">StartGame</button>
  <p>Use the left and right arrow to control the car!</p>
  <img src="./images/arrows.png" alt="" class="arrows-img" />
</div>

<div id="game-board">
  <canvas id="canvas" width="500" height="700"></canvas>
</div> */


const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


//// mine for testing
window.addEventListener('load',()=>{
  console.log("js connected")
    //drawingLoop()

  //drawStuff()
  
});
/////////////////


//////// GAME /////
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
   
    startGame();
  };

  function startGame() {
    drawingLoop()
    
  }
};

//// draw  background & car////////
const score = 0

const carImg = new Image()
carImg.src = './images/car.png'
const car = {x: 235 , y: 600 ,width: 30,height:75}

const backGround = {x: 0, y: 0, width:canvas.width, height: canvas.height}
const backGroundImg = new Image()
backGroundImg.src = './images/road.png'



const drawStuff = () => {
 
  context.drawImage(backGroundImg, backGround .x, backGround.y, backGround.width, backGround.height);

  context.fillStyle = 'white';
  context.font = '22px Arial';
  context.fillText(`Score: ${score}`, 75, 695);

  context.drawImage(carImg, car.x, car.y, car.width, car.height);
}

/// MOVE CAR//////
document.addEventListener('keydown', event => {
  switch (event.code) {
    case 'ArrowLeft':
    case 'KeyA':
      cl("arrow left")
      if (car.x >= 45) 
      car.x -= 10;
      break;
    case 'ArrowRight':
    case 'KeyD':
      cl("arrow right")
      if (car.x <= canvas.width - car.width - 45) 
      car.x += 10;
      break;
    default:
      console.log('You can use only arrows and ASDW!');
  }
});

const clearCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

////DRAWING LOOP//////////
const drawingLoop = () => {
  clearCanvas()
  drawStuff()


  //setTimeout(drawingLoop, 30);
  requestAnimationFrame(drawingLoop);
};


////////// OBSTACLES////////
//// obstacle max lengths
// left start 70 
// context.fillStyle = '#96131a'
// context.fillRect(70,0, 300,25);/// longest
// // right start  
// context.fillStyle = '#96131a'
// context.fillRect(435, 0, -180,35); longest



/// rect left 
const drawRecLeft= (y)=> {
  context.fillStyle = '#96131a';
  
  const recLW2 = Math.floor(Math.random()* (canvas.width -250) + 70)
  context.fillRect(70, y, recLW2, 30);
  // y needs to go down canvas in speed not grow each time, then produce new ones
  //setTimeout(drawRecLeft, 1000)
};







let y = 0

 const updateRecL = () => {
   y += 10;
   // testing but...
/// need to produce ones of different sizes that drop down same size.. this is dropping down one and changing width each time
// redrawing  all components each time including random width
// clearRect  to actual rectangle? set time to create new ones
  clearCanvas();

  drawRecLeft(y)

  setTimeout(updateRecL, 800)
  //requestAnimationFrame(updateRecL);


};

 //updateRecL();
//  drawRecLeft(0)
// drawRecLeft(0)


////// MY BAD--- REEAADDD DUMMY

// Now let's make this interesting. We should create obstacles that show up every specific amount of time.

// They will always start in the position 0 of the y axis (the obstacles will be coming from the top of the canvas), but you should make them appear in a random place of the x axis.

// Iteration 5: Move the obstacles
// For moving the obstacles, we need to update our canvas continuously. In this iteration, you need to continually change the position of the obstacles in every update, making them move down the road.
 



 












