function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((acc, atual) => {
            return acc + atual.valor;
        }, 0);
    }
}
//# sourceMappingURL=Estatisticas.js.map