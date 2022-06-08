function Animacao(context) {
	this.sprites = [];
	this.ligado = false;
	this.context = context;
}

Animacao.prototype = {
	novoSprite: function(sprite) {
		this.sprites.push(sprite);
	},

	ligar: function() {
		this.ligado = true;
		this.proximoFrame();
	},

	desligar: function() {
		this.ligado = false;
	},

	limparTela: function() {
		var ctx = this.context;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	},

	proximoFrame: function() {
		if (! this.ligado) return; // verifica

		this.limparTela();

		for (var i in this.sprites)
			this.sprites[i].atualizar();

		for (var i in this.sprites)
			this.sprites[i].desenhar();

		var animacao = this;
		requestAnimationFrame(function() {
			animacao.proximoFrame();
		})
	}
}
