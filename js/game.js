class Game {
	constructor(ctx) {
		this.ctx = ctx
		this._bg = new Background(ctx)
	}

	startGame () {
		this._draw()
		//this._load()
	}

	_draw () {
		this._bg.draw()
	}

	/* _load () {
		this._bg.load()
	} */
}