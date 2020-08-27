window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    // Start the canvas
    drawingApp.init("canvas")
    // Draw the others elements
    drawingApp.draw()
    
  };

  
};
