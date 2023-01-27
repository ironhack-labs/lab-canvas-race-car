window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let gameStarted = false;
  
  let count = 0;
  let carPosx = 215;
  let carPosy = 500;
  let carWidth = 70;
  let carHeight = 120;

  class Obstacles {
    constructor(color) {
      this.x = 40 + Math.floor(Math.random() * 200);
      this.y = 0;
      this.width = 100 + Math.floor(Math.random() * 200);
      this.height = 30;
      /* this.color = color; */
    }
    print() {
      ctx.fillStyle = '#870007';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  obstaclesArr = [];

  document.getElementById('start-button').onclick = () => {
    if(!gameStarted) {
      startGame();
    }
  };
  
  function startGame() {
    gameStarted = true;
    let score = 0;
    let roadImage = document.createElement("img");
    let keyPress = false;

    roadImage.src = "images/road.png";
    roadImage.addEventListener("load", ()=> {
      ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
    })
    let carImage = document.createElement("img")
    carImage.src = "images/car.png";
    carImage.addEventListener("load", ()=> {
      ctx.drawImage(carImage, carPosx, carPosy, carWidth, carHeight);
    })

    document.getElementsByTagName("body")[0].addEventListener("keydown", (event)=>{
      if(!keyPress) {
        switch(event.key){
          case "ArrowLeft":
            console.log("pos antes: ", carPosx);
            if(carPosx > 0) carPosx -= 10;
            keyPress = true;
            console.log("pos despues: ", carPosx);
            break;
          case "ArrowRight": 
            if(carPosx < (canvas.width - carWidth)) carPosx += 10;
            keyPress = true;
            break;
        }
      }
    })

    function print() {
      ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(carImage, carPosx, carPosy, carWidth, carHeight);
    }

    function addScore() {
      ctx.fillStyle = "white";
      ctx.font = '40px serif';
      ctx.fillText(`Score: ${score}`, 70, 50);
    }
    function gameOver() {
      obstaclesArr.splice(0, obstaclesArr.length);  //objects array reset
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "red";
      ctx.font = '48px serif';
      ctx.fillText('Game Over!', 130, 300);
      ctx.fillStyle = "white";
      ctx.font = '52px serif';
      ctx.fillText(`Your final score`, 90, 360);
      ctx.fillText(`${score}`, 220, 420);
      /* console.log("antes: ", identificador); */
      clearInterval(identificador);
      /* console.log("despues: ", identificador); */
      /* document.getElementsByTagName("body")[0].removeEventListener("keydown", "keydown", (event)=>{null}); */
      //reset variables para reiniciar juego

      gameStarted = false;  
      carPosx = 215;
      count = 0;
    }

    let update = ()=>{
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      count ++;
      keyPress = false;
  
      if (count == 70) {
        score += 5;
        count = 0;
        obstaclesArr.push(new Obstacles());
      }

      print();
      obstaclesArr.forEach((obstacle) => {
        obstacle.y += 3;
        obstacle.print();
        if((carPosy) < (obstacle.y + obstacle.height) && (carPosy + carHeight) > (obstacle.y)) {  // y axis restrictions
          if((carPosx + carWidth) > (obstacle.x) && (carPosx) < (obstacle.x + obstacle.width)) {  // x axis restrictions
            gameOver();
          }
        } 
        if(obstaclesArr.length > 4) obstaclesArr.shift();
      });
      addScore();
    }

    let identificador = setInterval(()=>{
      update();
    }, 40);
  }
};

