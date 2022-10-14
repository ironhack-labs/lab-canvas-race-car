const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');       


//Background
const road = new Sprite({
  position: {
    x:0,
    y:0,
  }
})

//Player
const player = new Player();
const obstacle = new Obstacles();

// Animation
function animate() {
    window.requestAnimationFrame(animate)
    road.draw()
//obstacle.draw()
    player.draw()
    player.update()
  }

  animate()

// Call Controls  
window.addEventListener('keydown', (event) => {
  switch (event.key) {
        case 'ArrowRight':
          player.moveRight();
          break
        case 'ArrowLeft':
          player.moveLeft();
          break
  }
})

// DONT DEL
// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
    
//   };

//   function startGame() {}
// };
