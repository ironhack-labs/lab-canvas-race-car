function CreateObstacles(ctx) {
    this.obs = [{
        x: 10,
        y: 0,
        width: 75,
        height: 20
    }
        , {
        x: 30,
        y: 0,
        width: 75,
        height: 20
    }
        , {
        x: 50,
        y: 0,
        width: 75,
        height: 20
    }
    ];
}

CreateObstacles.prototype.render = function (ctx) {
    this.obs.forEach(element => {
        ctx.fillRect(element.x, element.y += 5, element.width, element.height)
        if (element.y > 750) {
            element.x = this.getRandomInt(20, 310);
            element.y = this.getRandomInt(0, 200);
            element.width = this.getRandomInt(50, 150);
            element.height = 20;
        }
    });
}


CreateObstacles.prototype.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
        

