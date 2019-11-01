class Player {
    constructor(game){
        this.context = game.context;
        this.width = game.width;
        this.height = game.height;
        this.position = game.position;
    }

    car(){
    const bugatti = new Image();
    bugatti.src = 'images/car.png';
    
    bugatti.addEventListener('load', () => {
    this.context.drawImage(bugatti, this.position, 520, 40, 80);
    });

    }
    
  };    