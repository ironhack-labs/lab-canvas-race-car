class Game{
    constructor(canvas){
    this.canvas=canvas;
    this.context= $canvas.getContext('2d');
    }

    //initiate the game
    /*
    startGame(){
        window.addEventListener('onload', funtion {
            document.getElementbyId('start-button').onclick=
        }

    }  */

    paint(){
        this.board = new Board(this);
        this.board.paint();
    }

};