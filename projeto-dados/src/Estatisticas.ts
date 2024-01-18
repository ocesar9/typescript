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
    status;
    semana;
    melhorDia;
    constructor(transacoes: Transacao[]){
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
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

    private setSemana(){
        const semana = {
            ["Domingo"]:0,
            ["Segunda"]:0,
            ["Terça"]:0,
            ["Quarta"]:0,
            ["Quinta"]:0,
            ["Sexta"]:0,
            ["Sábado"]:0,
        }

        for (let index = 0; index < this.transacoes.length; index++) {
            const day = this.transacoes[index].data.getDay()
            switch (day) {
                case 0:
                    semana["Domingo"] += 1;
                    break;
            
                case 1:
                    semana["Segunda"] += 1;
                    break;
            
                case 2:
                    semana["Terça"] += 1;
                    break;
            
                case 3:
                    semana["Quarta"] += 1;
                    break;
            
                case 4:
                    semana["Quinta"] += 1;
                    break;
            
                case 5:
                    semana["Sexta"] += 1;
                    break;
            
                case 6:
                    semana["Sábado"] += 1;
                    break;
            
                default:
                    break;
            }
        }
        console.log(semana);
        return semana;
    }

    private setMelhorDia(){
        console.log(Object.entries(this.semana).sort((a,b)=>{
            return b[1] - a[1];
        }))
        return Object.entries(this.semana).sort((a,b)=>{
            return b[1] - a[1];
        })[0] 
    }
}