window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  }
}


  
  function drawBoard () {
    // on récupère le canvas 
    var ctx = document.getElementById("game").getContext("2d");

    // créer un fond gris 
    ctx.fillStyle="#808080";
    ctx.fillRect(0, 0, 400, 800);

    // // créer les 2 bordures vertes
    ctx.fillStyle = "#357F1A";
    ctx.fillRect(0, 0, 40, 800);    
    ctx.fillRect(360, 0, 40, 800); 

    // // créer les bordures blanches
    ctx.fillStyle = "white";
    ctx.fillRect(50, 0, 10, 800);    
    ctx.fillRect(340, 0, 10, 800); 

    // // créer la ligne discontinue
    ctx.strokeStyle = "white";
    ctx.setLineDash([20,20]); // longueur des traits et espaces entre eux
    ctx.moveTo(200,0); // où commence la ligne
    ctx.lineTo(200,800); // où termine la ligne
    ctx.lineWidth= 5; // largeur des pointillés
    ctx.stroke(); // trace les pointillés
  };

  // CREER LA VOITURE ET SES CARACTERISTIQUES
  var car = {
    x: 170, // position initiale x
    y: 600, //position initiale y
    moveLeft: function() { 
      if (this.x >= 60) {
        this.x -= 10};
      },
    moveRight: function() { 
      if (this.x <= 280) {
        this.x += 10}
      }
  }

  // DESSINER LA VOITURE

  function draw(car) {
    // on récupère le canvas 
    var ctx = document.getElementById("game").getContext("2d");
    var img= new Image();
    img.onload= function() {
      ctx.drawImage(img, car.x, car.y, 60, 120);

    }
    img.src= "./images/car.png";
  };

  // DECLARER LES TOUCHES POUR DEPLACER LA VOITURE 
  document.onkeydown = function(key) {
    switch (key.keyCode) {
      case 37: car.moveLeft(); //touche du clavier vers la gauche
      break; 
      case 39: car.moveRight();
      break;
    }
    updateCanvas();
  };


  //UpdateCanvas permet de raffraîchir l'écran pour afficher la nouvelle frame de l'animation
  function updateCanvas() {
    draw(car);
    drawBoard();
  };


  // COMMENCER LE JEU
  function startGame() {
    // Ajouter l'image de la voiture
    drawBoard();
    draw(car);
  };

/*____________________________________________________ */

var myObstacles = [];


// fonction qui permet de créer un obstacle 
 function component (width, x) {
    this.width = width;
    this.height = 20;
    this.x = x;
    this.y = 0;
    this.speedY = 80;

    /*this.update = function {
      ctx = canvas.context;
      ctx.fillStyle = red;
      ctx.fillRect(this.x, this.y, this.width, this.height);

      
    }*/
  
    this.newPos = function () {
      this.y += this.speedY;
    };
 }

 var ctx = document.getElementById("game").getContext("2d");

 width = Math.floor(Math.random()*180);
 x = Math.floor(Math.random() * ((340-width) - 60)) + 60;
