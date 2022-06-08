//* CONTEXTO GRÁFICO COM CANVAS */

//! USANDO PARA ANIMAÇÕES NO CARREGAMENTO DA PAGE */
window.onload = function() {
	// aqui trabalharemos com o canvas
}

//! USO DO GETCONTEXT DO CANVAS */
//? PRIMEIRO EU CAPTURO
//? EM SEGUIDA, DETERMINO O CONTEXTO
// REFERENCIANDO O CANVAS
var canvas = document.getElementById('canvas-name');
//? document.getQuerySelector('#canvas-name') */

// REFERENCIANDO O CONTEXTO DO CANVAS
var context = canvas.getContext("2d");

//! SISTEMA DE COORDENADAS */
// é como se fosse um plano cartesiano
// x = horizontal / y = vertical

//! MÉTODO FILLRECT e STROKERECT */
// propriedades para o desenho de retângulos etc
fillRect(x, y, largura, altura) //? fundo
strokeRect(x, y, largura, altura) //? contorno

// PRIMEIRO COMEÇA DO PONTO SUPERIOR ESQUERDO
// DEPOIS, O RETÂNGULO VAI P DIREITA E P BAIXO

//! EXEMPLO PRÁTICO DA COLORIZAÇÃO */
context.fillRect(50, 50, 100, 100);
// posição x, posição y, largura, altura

//! CAMINHOS ou PATHS */
// desenhos mais complexos
// ficam pré-salvos na memória
// antes de tudo, usa-se o beginPath()
// beginPath -> ótimo pra não sobrepôr

//! ARCOS CIRCUNFERÊNCIAS */
// método usado: ARC
// o arco é parte de uma circunferência
// criar linhas curvas (mais complexo)
// circunferência = arco de 360°






// // iniciei as variáveis abaixo)
		// var canvas = document.getElementById('canvas-name');
		// var ctx = canvas.getContext('2d');

		// ctx.fillRect(40, 50, 100, 100);
		// ctx.strokeRect(50, 50, 100, 100);
		
		// // PRIMEIRO PREENCHE
		// // DEPOIS DESENHA 
		// ctx.fillStyle = 'orange'; // colore o retângulo
		// ctx.fillRect(50, 50, 100, 100); // cria o retângulo com fundo preenchido
		
		// ctx.lineWidth = 2;
		// ctx.strokeStyle = 'blue';
		// ctx.strokeRect(50, 50, 100, 100); // cria o retângulo com borda apenas

		// // desenhando a estrela abaixo)
		// ctx.strokeStyle = 'red';
		// ctx.beginPath(); // PRIMEIRO INICIO
		// ctx.moveTo(75, 250); // PONTO INICIAL
		// ctx.lineTo(150, 50);
		// ctx.lineTo(225, 250);
		// ctx.lineTo(35, 120);
		// ctx.lineTo(250, 120);
		// ctx.lineTo(75, 250);
		// ctx.stroke(); // desenha tudo o que foi salvo nos caminhos ou PATHS
		
		// // desenhando um arco abaixo)
		// ctx.lineWidth = 6;
		// ctx.strokeStyle = 'black';
		// ctx.beginPath();
		// ctx.arc(50, 50, 40, 90*Math.PI/180, 270*Math.PI/180, false);
		// ctx.stroke();
		// ctx.fillStyle = 'blue';
		
		// ctx.fill();

		// // segundo arco criado abaixo)

		// ctx.beginPath();
		// ctx.arc(55, 50, 40, 90*Math.PI/180, 270*Math.PI/180, true);
		// ctx.fillStyle = 'tomato';
		// ctx.stroke();
		// ctx.fill();

		// // circunferência completa abaixo)
		// ctx.lineWidth = 3;
		// ctx.beginPath();
		// ctx.arc(250, 50, 40, 0, 2*Math.PI);
		// ctx.fillStyle = 'orange';
		// ctx.fill();
		// ctx.stroke();

		// trabalhando com imagens no canvas)
		// var img = new Image();
		// img.src = 'media/ovni.png'; 
		// img.onload = function() {
		// 	var x = 40;
			
		// 	for (var i = 1; i <= 5; i++) {
		// 		ctx.drawImage(img, x, 20, 64, 32);
		// 		// a metade do tamanho abaixo)
		// 		// ctx.drawImage(img, x, 20, 32, 16);

		// 		// o dobro do tamanho abaixo)
		// 		// ctx.drawImage(img, x, 20, 64, 64);
		// 		x += 70;
		// 	}
		// }

		// var img = new Image();
		// img.src = 'media/explosao.png'
		// img.onload = function() {
		// 	ctx.drawImage(
		// 	img,
		// 	80, 10, 60, 65,
		// 	20, 20, 60, 65
		// 	)
		// }

		// usando o método SAVE e RESTORE
		// ctx.fillStyle = 'green';
		// ctx.strokeStyle = 'black';
		// ctx.lineWidth = '2';
		// ctx.strokeRect(50, 50, 25, 25);
		// ctx.fillRect(50, 50, 25, 25);

		// ctx.save();

		// ctx.fillStyle = 'purple';

		// ctx.restore(); // retornou para o verde

		// ctx.strokeRect(100, 50, 25, 25);
		// ctx.fillRect(100, 50, 25, 25);

		// var x = 20;
		// var y = 100;
		// var raio = 50;

		// requestAnimationFrame(mexerBola);

		// var anterior = new Date().getTime();
		// requestAnimationFrame(mexerBola);
			
		// function mexerBola() {
		// 	var agora = new Date().getTime();
		// 	var decorrido = agora - anterior;

		// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
		// 	ctx.beginPath();
		// 	ctx.arc(x, y, raio, 0, Math.PI*2);
		// 	ctx.fill();
		// 	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
		// 	var velocidade = 50;
		// 	x += velocidade * decorrido / 1000;
		// 	// raio -= .3
		// 	y += 2

		// 	anterior = agora;
		// 	requestAnimationFrame(mexerBola);
		// }	

		// // função construtora
		// function Caneta(cor, espessura) {
		// 	this.cor = cor;
		// 	this.espessura = espessura;

		// 	// método para refinar uma caneta
		// 	this.refinar = function() {
		// 		this.espessura -= 0.5;
		// 	}
		// }
		
		// // instanciando os objetos da classe caneta
		// var caneta1 = new Caneta('vermelha', 2);
		// var caneta2 = new Caneta('azul', 3);

		// // document.write(caneta1.cor + ':' + caneta1.espessura); 
		// // document.write('<br>');
		// // document.write(caneta2.cor + ':' + caneta2.espessura);

		// // outra forma de instanciar (sem construtor)
		// var caneta3 = {
		// 	cor: 30,
		// 	espessura: 4,
		// 	refinar: function() {
		// 		this.espessura -= 0.3;
		// 	}
		// }

	