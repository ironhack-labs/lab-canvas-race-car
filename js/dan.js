// const carImg = new Image();
// carImg.src = './images/car.png';
// const raceImg = new Image();
// raceImg.src = './images/road.png';
// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');
// const car = {
//     width: 50,
//     height: 100,
//     x: 224,
//     y: 500,
//     dx: 0,
//     speed: 10
// }
// const race = {
//     width: canvas.width,
//     height: canvas.height,
//     img: raceImg,
//     x: 0,
//     y:0,
//     dx: 0,
//     speed: -10
// }
// function drawCar(){
//   context.drawImage(carImg, car.x, car.y, car.width, car.height);
// }
// function drawBackground(){
//   context.drawImage(raceImg, 0, 0, race.width, race.height);
// }
// function moveBg(){
//   race.dx = race.speed
//   race.x += race.dx
// }
// function newPos(){
//   car.x += car.dx
// }
// function clear(){
//   context.clearRect(0,0,canvas.width, canvas.height)
// }
// function moveRight(){
//   car.dx = car.speed
// }
// function moveLeft(){
//   car.dx = -car.speed
// }
// function keyDown(event){
//   console.log(event.key)
//   switch (event.key) {
//     case "ArrowRight":
//       moveRight()
//       console.log("I moved Right")
//       break;
//     case "ArrowLeft":
//       moveLeft()
//       console.log("I moved Left")
//       break;
//     default:
//       break;
//   }
// }
// function detectWalls(){
//   if(car.x < 0){
//     car.x = 0
//   }if(car.x + car.width > canvas.width){
//     car.x = canvas.width - car.width
//   }
// }
// function keyUp(){
//   car.dx = 0
//   car.dy = 0
// }
// window.onload = () => {
//     clear()
//     detectWalls()
//     drawBackground()
//     newPos()
//     drawCar()
//     requestAnimationFrame(onload)
//     document.getElementById('start-button').onclick = () => {
//         startGame();
//     };
//     function startGame() {
//       // drawBackground()
//       // drawCar()      
//     }
// };
// //eventos
// document.addEventListener('keydown', keyDown)
// document.addEventListener('keyup', keyUp )

function handleCollisions(){
  for (let i = 0; i < obstaclesArray.length; i++){
      if  (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
          bird.x + bird.width > obstaclesArray[i].x &&
          ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0 ||
          // (bird.y > canvas.height - obstaclesArray[i].bottom &&
          // bird.y + bird.height < canvas.height)))){
          //             //collision detected
          //     ctx.font = ""
          //     ctx.drawImage(bang, bird.x, bird.y, 50, 50)
          //     return true;
          }
  }
}