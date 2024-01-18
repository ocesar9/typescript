import contador from "./utils/contador.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
    }
    setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((acc, atual) => {
            return acc + atual.valor;
        }, 0);
    }
    setPagamento() {
        return contador(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return contador(this.transacoes.map(({ status }) => status));
    }
}
//# sourceMappingURL=Estatisticas.js.map