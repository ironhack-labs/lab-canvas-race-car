window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    // create the canvas and display the road , image in images foler, canvas HTML is in starter code  
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image(); // create new image element 
    img.onload = function() {
    ctx.drawImage(img, 10, 70, 500, 700)
    }
    img.src = '/images/road.png'
};
}
