export let ConfigGame =
    {
        deltaPista: 25,
        rayaW: 10,
        limiteXIni: function (canvasW) {
            return ConfigGame.deltaPista + ConfigGame.rayaW
        },
        limiteXFin: function (canvasW) {
            return canvasW -ConfigGame.deltaPista - ConfigGame.rayaW*2;
        },
        carH:100
    };