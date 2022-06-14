var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;
var ESPAÇO = 32;

// CONSTRUTOR & CLASSE
function Teclado(elemento) {
	this.elemento = elemento;

	// teclas pressionadas numa lista
	this.pressionadas = []; 

	// teclas disparadas numa lista
	this.disparadas = [];

	// todas as funcoes de disparo numa lista
	this.funcoesDisparo = [];

	var teclado = this;
	elemento.addEventListener('keydown', function(evento) {
		var tecla = evento.keyCode;
		teclado.pressionadas[tecla] = true;
		// ativa quando eu teclo

		if (teclado.funcoesDisparo[tecla] && ! teclado.disparadas[tecla]) {
			teclado.disparadas[tecla] = true;
			teclado.funcoesDisparo[tecla] ();
		}
	});

	elemento.addEventListener('keyup', function(evento) {
		teclado.pressionadas[evento.keyCode] = false; // desativa quando eu solto
		teclado.disparadas[evento.keyCode] = false;
	});
}

// ONDE FICARÃO TODOS OS MÉTODOS DA CLASSE
Teclado.prototype = {
	pressionada: function(tecla) {
		return this.pressionadas[tecla];
	},

	disparou: function(tecla, callback) {
		this.funcoesDisparo[tecla] = callBack;
	}
}