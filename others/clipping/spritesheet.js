// SERÁ RESPONSÁVEL POR ALTERNAR ENTRE AS ANIMAÇÕES DA IMG
// GERENCIAR TEMPO DE UMA ANIMAÇÃO E OUTRA
// CALCULAR POSIÇÃO DE CORTE - CLIPPING

// CLASSE SPRITESHEET
function Spritesheet(ctx, imagem, linhas, colunas) {
    this.ctx = ctx;
    this.imagem = imagem;
    this.numLinhas = linhas;
    this.numColunas = colunas;
    this.intervalo = 0;
    this.linha = 0;
    this.columa = 0;
}

// ONDE TODOS OS MÉTODOS DA CLASSE ACIMA FICAM ARMAZENADOS
Spritesheet.prototype = {
    proximoQuadro: function() { 
        // PASSA P/ PROX QUANDO TEM
        var agora = new Date().getTime();

        if (! this.ultimoTempo) this.ultimoTempo = agora;

        if (agora - this.ultimoTempo < this.intervalo) return;

        if (this.coluna < this.numColunas - 1)
            this.coluna++;
        else
            this.coluna = 0;
        
        // GUARDAR O ULTIMO MOMENTO
        this.ultimoTempo = agora;
    },
    
    desenhar: function(x, y) {
        var larguraQuadro = this.imagem.width / this.numColunas;
        var alturaQuadro = this.imagem.height / this.numLinhas;

        this.ctx.drawImage(
            this.imagem, // IMAGEM

            // ONDE TÁ 
            larguraQuadro * this.coluna, 
            alturaQuadro * this.linha,
            larguraQuadro, 
            alturaQuadro,

            // AONDE VAI
            x,
            y,
            larguraQuadro, 
            alturaQuadro 
        );
    }
}