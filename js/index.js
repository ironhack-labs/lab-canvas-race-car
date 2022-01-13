

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


window.onload = () => {
  document.getElementById('start-button').onclick = () => {

    let img = document.createElement("img");
    img.src = "images/road.png";
    let canvas = document.getElementById("canvas");
    ctx.drawImage(img, 100, 50);
   

    startGame();

  };

// javascripts/intro.js



  function startGame() {}

}



     



 
