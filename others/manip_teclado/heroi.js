// CÓDIGOS ÚNICOS PARA AS DIREÇÕES
var DIRECAO_ESQUERDA = 1;
var DIRECAO_DIREITA = 2;

// CONSTRUTOR HEROI
function Heroi(ctx, teclado, animacao) {
	this.ctx = ctx;
	this.teclado = teclado;
	this.animacao = animacao;
	this.x = 0;
	this.y = 0;

	// DIREÇÃO PADRÃO
	this.direcao = DIRECAO_DIREITA;
}

Heroi.prototype = {
	atualizar: function() {
		// PARA QUE NÃO ULTRAPASSE OS LIMITES DA TELA CANVAS
		if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
			this.direcao = DIRECAO_ESQUERDA;
			this.x -= 10;
		}
		else if (this.teclado.pressionada(SETA_DIREITA) && this.x < this.ctx.canvas.width - 20) {
			this.direcao = DIRECAO_DIREITA;
			this.x += 10;
		}
	},

	desenhar: function() {
		this.ctx.fillRect(this.x, this.y, 20, 50);
	},

	atirar: function() {
		// ATÉ PORQUE O TIRO TAMBÉM É UMA BOLA, PORÉM MENOR
		var tiro = new Bola(this.ctx);
		tiro.x = this.x + 10;
		tiro.y = this.y + 10;
		tiro.raio = 10;
		tiro.cor = 'white';

		// SE TIVER PRESSIONADO A ESQUERDA, VAI P ESQUERDA
		if (this.direcao == DIRECAO_ESQUERDA)
			tiro.velocidadeX = -20;
		// SE TIVER PRESSIONADO A DIREITA, VAI PRA DIREITA
		else 
			tiro.velocidadeY = 20;

		this.animacao.novoSprite(tiro);
	}
} 