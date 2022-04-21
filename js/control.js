document.addEventListener('keydown', e => {
    switch (e.code) {
        case 'ArrowLeft':
            car.moveLeft();
            break;
        case 'ArrowRight':
            car.moveRight();
            break;
    }
    updateGameArea();
})
