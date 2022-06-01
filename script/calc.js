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

