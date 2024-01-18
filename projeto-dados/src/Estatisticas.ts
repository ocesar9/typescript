// Create a new instance of Transacao overwrite the valor property
type TransacaoValor = Transacao & {valor: number}

function filtrarValor(transacao:Transacao): transacao is TransacaoValor {
    return transacao.valor !== null
}

export default class Estatisticas {
    private transacoes;
    total;
    constructor(transacoes: Transacao[]){
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    private setTotal(){
        return this.transacoes.filter(filtrarValor).reduce((acc, atual) => {
            return acc + atual.valor;
        },0);
    }
}