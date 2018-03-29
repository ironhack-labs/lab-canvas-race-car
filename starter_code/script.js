window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();

  };

  var lienzo = new Canvas();

  function startGame() {
      
     var coche = new Car();
     render();
      
    }

    function render(){
      console.log("TEST");
 
     setInterval(function(){
       startAnimation();
     }, 40);
     
    } 

    function startAnimation(){
      lienzo.clean();
      lienzo.draw();
      car.draw();
      console.log("HOLA");
    }



}
