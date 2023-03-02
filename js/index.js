window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  let carHeight = 120;
let carWidth = 70;
let carX = 215;
  let carY = 500;
  function startGame() {
    let score = 0;
        let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let roadImage = document.createElement("img")
    roadImage.src = "images/road.png"
    ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
    let carImage = document.createElement("img")
        carImage.src = "images/car.png";
        ctx.drawImage(carImage, carX, carY, carWidth, carHeight );
    
        
          document.getElementsByTagName("body")[0].onkeyup = function(event){
            if (event.key === "ArrowRight")
            alert("hola");
            }
         }
          
        
    
        }
