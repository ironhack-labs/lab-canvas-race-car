class Controls {
    constructor(car) {
        this.car = car;
    }
        setKeyBindings() {
            window.addEventListener('keydown', event => {
                event.preventDefault();
                const key = event.keyCode;
                if (key >= 37 && key <= 39) {
                    
                    switch (key) {
                        case 37:
                        this.car.x -= 5
                     
                            break;
                        case 39:
                        this.car.x += 5
                   
                            break;
                    }
                }
            })
        }
    }
