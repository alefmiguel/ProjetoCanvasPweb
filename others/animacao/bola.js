var canvas = document.getElementById('canvas-animacao');
var ctx = canvas.getContext('2d');

var b1 = new Bola(ctx);
b1.x = 100;
b1.y = 200;
b1.velocidadeX = 20;
b1.velocidadeY = -10;
b1.cor = 'blue';
b1.raio = 20;

var b2 = new Bola(ctx);
b2.x = 200;
b2.y = 100;
b2.velocidadeX = -10;
b2.velocidadeY = 20;
b2.cor = 'black';
b2.raio = 30;