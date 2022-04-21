document.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowLeft':
          //console.log("im being clicked")
        carPlayer.x -= 15;
        break;
        case 'ArrowRight':
          //console.log("im being clicked")
        carPlayer.x += 15;
        break;
    }
  })



