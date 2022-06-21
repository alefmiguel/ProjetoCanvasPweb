function Colisor() {
	this.sprites = [];
	this.aoColidir = null;
}

Colisor.prototype = {
	novoSprite: function(sprite) {
		this.sprites.push(sprite);
	},

	// CORAÇÃO DA CLASSE COLISOR
	processar: function() {
		// verificação de colisão
		var jaTestados = new Object(); // objeto vazio
		
		for (var i in this.sprites) {
			for (var j in this.sprites) {
				if (i == j) continue; // ele com ele mesmo

				// GERAÇÃO DE STRINGS ÚNICAS PARA OS OBJETOS
				var id1 = this.stringUnica(this.sprites[i]);
				var id2 = this.stringUnica(this.sprites[j]);

				// " ! " -> FUNCIONA COMO UM " NOT "
				if (! jaTestados[id1]) jaTestados[id1] = [];
				if (! jaTestados[id2]) jaTestados[id2] = [];

				// TESTE DE REPETIÇÃO
				if (! (jaTestados[id1].indexOf(id2) >= 0 || jaTestados[id2].indexOf(id1) >= 0)) {
					// ABSTRAIR A COLISÃO (outra checagem)
					this.testarColisao(this.sprites[i], this.sprites[j]);
					jaTestados[id1].push(id2);
					jaTestados[id2].push(id1);
				}
			}
		}
	},

	testarColisao: function(sprite1, sprite2) {
		// identificando quais são os retângulos
		var rets1 = sprite1.retangulosColisao();
		var rets2 = sprite2.retangulosColisao(); 

		// ISSO DAQUI É UMA LABEL NO JS
		colisoes:
			for (var i in rets1) {
				for (var j in rets2) {
					if (this.retangulosColidem(rets1[i], rets2[j])) {
						// colidiu, vamos avisá-los
						sprite1.colidiuCom(sprite2);
						sprite2.colidiuCom(sprite1);

						// TRATADOR GERAL DO PROBLEMA DE RESPOSTA
						if (this.aoColidir) this.aoColidir(sprite1, sprite2); // se existir...

						// Achou o que queria? VAZA!
						break colisoes;
					}
				}
			}
	},

	retangulosColidem: function(rets1, rets2) {
		// FÓRMULA DE INTERSECÇÃO ENTRE RETÂNGULOS
		return rets1.x + (rets1.largura) > rets2.x && rets1.x < (rets2.x + rets2.largura) && (rets1.y + rets1.altura) > rets2.y && rets1.y < (rets2.y + rets2.altura);
	},

	stringUnica: function(sprite) {
		var str = '';
		var retangulos = sprite.retangulosColisao();

		for (var i in retangulos) {
			str += 'x:' + retangulos[i].x + ',' +
				   'y:' + retangulos[i].y + ',' +
				   'l:' + retangulos[i].largura + ',' +
				   'a:' + retangulos[i].altura + '\n';
		}

		return str;
	}
}