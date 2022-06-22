function Nave(ctx, teclado, imagem) {
	this.ctx = ctx;
	this.teclado = teclado;
	this.imagem = imagem;
	this.x = 0;
	this.y = 0;
	this.velocidade = 0;
}

Nave.prototype = {
	atualizar: function() {
		// vários if's => várias teclas pressionadas ao msm tempo
		if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0)
			this.x -= this.velocidade;
		
		if (this.teclado.pressionada(SETA_DIREITA) && this.x < this.ctx.canvas.width - this.imagem.width)
			this.x += this.velocidade;
		
		if (this.teclado.pressionada(SETA_ACIMA) && this.y > 0)
			this.y -= this.velocidade;
		
		if (this.teclado.pressionada(SETA_ABAIXO) && this.y < this.ctx.canvas.height - this.imagem.height)
			this.y += this.velocidade;
	},

	desenhar: function() {
		this.ctx.drawImage(this.imagem, this.x, this.y, this.imagem.width, this.imagem.height);
	},

	atirar: function() {
		var t = new Tiro(this.ctx, this);
		this.animacao.novoSprite(t); // a própria posição
	}
}