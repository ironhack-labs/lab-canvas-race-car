document.onkeydown = e => {
    switch(e.keyCode){
        case 37:
            car.moveLeft()
            return;
        case 39:
            car.moveRight()
            return;
    }
}

document.onkeyup = () => {
    car.vx = 0;
}