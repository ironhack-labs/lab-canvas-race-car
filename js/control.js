document.addEventListener('keydown', e => {
    console.log(car)

    switch (e.code) {
        case 'ArrowLeft':
            car.moveLeft();
            break;
        case 'ArrowRight':
            car.moveRight();
            break;
    }
})
