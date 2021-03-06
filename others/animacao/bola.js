function Bola(context, x, y) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.velocidadeX = 0;
    this.velocidadeY = 0;
    this.cor = 'black';
    this.raio = 10;
}

Bola.prototype = {
    atualizar: function() {
        // let ctx = this.context;

        // // motivo de rebater
        // if(this.x < this.raio || this.x > ctx.canvas.width - this.raio)
        //     this.velocidadeX *= -1;

        // if(this.y < this.raio || this.y > ctx.canvas.height - this.raio)
        //     this.velocidadeY *= -1;

        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    },

    desenhar: function() {
        let ctx = this.context;
        ctx.save();
        ctx.fillStyle = this.cor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.restore();
    }
}
