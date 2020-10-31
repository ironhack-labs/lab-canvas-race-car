window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

    

  function startGame() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const road = new Image();
    road.src = "../images/road.png";
    ctx.drawImage(road, 0, 0, 500, 700);
    //Interation 2    
    const coche = new Image();
    coche.src = "../images/car.png";
    ctx.drawImage(coche, 210, 500, 80, 201);

    
    
    
    
  }

  function down(params) {
      
  }
  function rigth(params) {
    
  }
  function up(params) {
    
  }
  function left(params) {
    
  }

  window.addEventListener("keydown", e =>{
    if(e.keyCode === 40) return coche.down()
    if(e.keyCode === 39) return coche.rigth()
    if(e.keyCode === 38) return coche.up()
    if(e.keyCode === 37) return coche.left()
  })

};
