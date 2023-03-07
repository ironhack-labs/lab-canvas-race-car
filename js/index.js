window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let count = 0;
  obstaclesArray = [];
  //is that the correct position for global scope variables?
  class Obstacles {
    constructor(color) {
      this.x = 80 + (Math.random() * 200);
      this.y = 0;
      this.width = 100 + (Math.random() * 150);
      this.height = 30;
      this.color = color; 
    }
    print() {
      ctx.fillStyle = '#870007';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
   };

   document.getElementById('start-button').onclick = () => {
     newGame();
  };
  
  
  function newGame() {
    let score = 0;
    let level = 0;
    let carX = 215;
    let carY = 600;
    let carWidth = 60;
    let carHeight = 90;
    function load() {
      ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(carImage, carX, carY, carWidth, carHeight);
    }
    function addScore() {
      ctx.fillStyle = "white";
      ctx.font = '40px serif';
      ctx.fillText(`Score: ${score}`, 70, 50);
      ctx.fillText(`Level: ${level}`, 70, 80)
    }
    let roadImage = document.createElement("img");
    roadImage.src = "images/road.png";
    roadImage.addEventListener("load", ()=> {
      ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
    })
    
    let carImage = document.createElement("img")
    carImage.src = "images/car.png";
    carImage.addEventListener("load", ()=> {
      ctx.drawImage(carImage, carX, carY, carWidth, carHeight);
    })

    document.getElementsByTagName("body")[0].onkeyup = function(event){
      if(event.key === "ArrowLeft" && carX > 0){
          carX -= 14};
      if(event.key === "ArrowRight" && carX < (canvas.width - carWidth)){
          carX += 14};
    }
    
    function gameOver() {
      
        clearInterval(clearIntervalId);
        obstaclesArray.splice(0, obstaclesArray.length);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";      
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.font = '46px Verdana';
        
        ctx.fillText('GAME OVER!' ,130, 300);
        ctx.fillText('TRY AGAIN!' ,130, 350);
        
        ctx.fillStyle = "white";
        ctx.font = '46px serif';
        
        ctx.fillText(`Your driving skills:`, 60, 400);
        ctx.fillText(`Score: ${score}`, 230, 450);
        ctx.fillText(`Level: ${level}` ,230, 500);

        /*does I need to pass some lines like:
        count = 0;
        carX = 215;
        in order to reset variables? the result its the same passing that code or not passing it. The count, that detemines the speed of the obstacles, even if I dont pass "count = 0;", 
        when the game restarts the obstacles appear at the same inital speed.
        */
        
      }
    const clearIntervalId = setInterval(()=>{
      start()
    }, 40);

    let start = ()=>{
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      count ++;
       if (count === 90) {
        level += 1;
        score += 5;
        count = 0;
        obstaclesArray.push(new Obstacles());
      }
      // next lines of code are about adding some kind of levels, maybe kinda rudimentary but i think that at least I got to figured out a way to "make it work".
       if (level > 4 && level < 7) {
        
          obstaclesArray.forEach((obstacle) => {
          obstacle.y += 2;
          obstacle.print()
         }) 
    }
    if (level >= 7 && level < 10) {
      
      obstaclesArray.forEach((obstacle) => {
      obstacle.y += 2;
      obstacle.print()
    }) 
}
if (level >= 10 && level < 15) {
  
  obstaclesArray.forEach((obstacle) => {
  obstacle.y += 3;
  obstacle.print()
  })
  }

if (level >= 15 && level < 20) {
  
  obstaclesArray.forEach((obstacle) => {
  obstacle.y += 10;
  obstacle.print()
}) 
}
  
if (level >= 20 ) {
  //alert("Wow! you are a Pro Driver! This is the Elite level!Are you prepared?") ---> for some reason even when you press acept the box still there and completely stops the page.
  obstaclesArray.forEach((obstacle) => {
  obstacle.y += 15;
  obstacle.print()
  
});
}
  
load();
obstaclesArray.forEach((obstacle) => {
  obstacle.y += 3;
  obstacle.print();
  if (carX < obstacle.x + obstacle.width &&
    carX + carWidth > obstacle.x &&
    carY < obstacle.y + obstacle.height &&
    carY + carHeight > obstacle.y) {
      gameOver()
    }
    addScore();
})
   }
 }
}


