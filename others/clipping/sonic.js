var SONIC_DIREITA = 1;
var SONIC_ESQUERDA = 2;

function Sonic(ctx, teclado, imagem) {
    // CONSTRUTOR
    this.velocidade = 10;
    this.ctx = ctx;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
    this.imagem = imagem;

    this.sheet = new Spritesheet(ctx, imagem, 3, 8);
    this.sheet.intervalo = 60;

    this.andando = false;
    this.direcao = SONIC_DIREITA;
}

Sonic.prototype = {
    atualizar: function() {
        if (this.teclado.pressionada(SETA_DIREITA)) {
            if (! this.andando || this.direcao != SONIC_DIREITA) {
                this.sheet.linha = 1;
                this.sheet.coluna = 0;
            }

            this.sheet.proximoQuadro();
            this.direcao = SONIC_DIREITA;
            this.x += this.velocidade;
        }

        else if (this.teclado.pressionada(SETA_ESQUERDA)) {
            if (! this.andando || this.direcao != SONIC_ESQUERDA) {
                this.sheet.linha = 2;
                this.sheet.coluna = 0;
            }

            this.sheet.proximoQuadro();
            this.x -= this.velocidade;
            this.direcao = SONIC_ESQUERDA;
        }

        else {
            if (this.direcao == SONIC_DIREITA)
                this.sheet.coluna = 0;
            else if (this.direcao == SONIC_ESQUERDA)
                this.sheet.coluna = 1;

            this.sheet.linha = 0;
            this.andando = false;
        }
    },

    desenhar: function() {
        this.sheet.desenhar(this.x, this.y);
    }
}

// SEMPRE É ISSO DE:
// -> CRIAR CLASSE COM O CONSTRUTOR E ATRIBUTOS
// -> FAZER A PROTOTYPE COM TODOS OS MÉTODOS