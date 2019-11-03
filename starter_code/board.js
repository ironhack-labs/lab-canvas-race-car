class Board {
        drawBoard(game) {
            game.context.fillStyle = 'green';
            game.context.fillRect(0,0,25, game.height);
            game.context.fillRect(game.width-25,0,25, game.height);
            game.context.fillStyle = 'gray';
            game.context.fillRect(25,0,10, game.height);
            game.context.fillRect(game.width-25-10,0,10, game.height);
            game.context.fillRect(25+10+10,0,game.width-90, game.height);
            const WHITEWIDTH = 4
            const WHITELENG = 40
            const SEPARATOR = 60
            context.fillStyle = 'white';
            for (let i=0; i<1000; i+=SEPARATOR){
                game.context.fillRect((game.width-WHITEWIDTH)/2,i,WHITEWIDTH,WHITELENG);
            }
        }
}