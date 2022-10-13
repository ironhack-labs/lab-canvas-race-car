const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        let game = new Game(ctx, 400, 640, player);
        game.start()
    };
  
  };

const player = new Component(175, 480, 50, 50, 'red', ctx);
document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowRight':
        player.x += 5;
        break;
      case 'ArrowLeft':
        player.x -= 5;
        break;
    }
  });







