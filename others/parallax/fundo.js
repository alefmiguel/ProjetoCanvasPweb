// é melhor carregar as imgs pelo construtor...
function Fundo(ctx, imagem) {
	this.ctx = ctx;
	this.imagem = imagem;
	this.velocidade = 0;
}

Fundo.prototype = {
	atualizar: function() {
		this.posicaoEmenda += this.velocidade;

		// se passar da posição... zera!
		if (this.posicaoEmenda > this.imagem.height)
			this.posicaoEmenda = 0;
	},

	// cada fundo deve ser desenhando 2x
	desenhar: function() {
		var img = this.imagem; // serve como um ALIAS no SQL

		// primeira cópia
		var posicaoY = this.posicaoEmenda - img.height;
		this.ctx.drawImage(img, 0, posicaoY, img.width, img.height);

		// segunda cópia
		posicaoY = this.posicaoEmenda;
		this.ctx.drawImage(img, 0, posicaoY, img.width, img.height);

		// emendar => pra tentar demonstrar ÚNICA IMAGEM
	}
}