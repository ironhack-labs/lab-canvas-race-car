
// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
    
    
//     startGame();
//   };
  
//   function startGame() {
    
//   }
// };

let car;
let road;
let myCar;
let obstacles = [];

function preload(){
  road = loadImage('../images/road.png');
  car = loadImage('../images/car.png');
};

function setup(){
createCanvas(road.width, road.height);
myCar = new Car();


function addObstacle(){
  obstacles.push(new Obstacle());
}
setInterval(addObstacle, 1000);

}

function draw(){
  image(road,0 ,0);
  image(car,myCar.x,myCar.y,50,80);
  
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].move();
    obstacles[i].show();
  }



  
  
  

}




