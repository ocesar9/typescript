import contador from "./utils/contador.js";

// Create a new instance of Transacao overwrite the valor property
type TransacaoValor = Transacao & {valor: number}

function filtrarValor(transacao:Transacao): transacao is TransacaoValor {
    return transacao.valor !== null
}

export default class Estatisticas {
    private transacoes;
    total;
    pagamento;
    status
    constructor(transacoes: Transacao[]){
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
    }
    private setTotal(){
        return this.transacoes.filter(filtrarValor).reduce((acc, atual) => {
            return acc + atual.valor;
        },0);
    }

    private setPagamento(){
        return contador(this.transacoes.map(({pagamento}) => pagamento));
        // const pagamentos = this.transacoes.map(({pagamento}) => pagamento);
        // const total = contador(pagamentos);
        // console.log(total);
    }
    
    private setStatus(){
        return contador(this.transacoes.map(({status}) => status));
    }
}