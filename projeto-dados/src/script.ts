import Estatisticas from "./Estatisticas.js";
import { CountList } from "./utils/contador.js";
import { conveterReal } from "./utils/converterReal.js";
import fetchData from "./utils/fetchData.js";
import normalizarTransacao from "./utils/normalizarTransacao.js";



async function handleData(){
    const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?");
    if(!data) return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
    preencherEstatisticas(transacoes);
}

function preencherLista(lista: CountList, containerId: string): void{
    const containerElement = document.getElementById(containerId);
    if(containerElement){
        Object.keys(lista).forEach(key => {
            containerElement.innerHTML += `<p>${key}: ${lista[key]}</p>`;
        })
    }
}

function preencherEstatisticas(transacoes: Transacao[]):void{
    const data = new Estatisticas(transacoes);

    const pagamentoElement = document.getElementById("pagamento");
    if(pagamentoElement){
            console.log(Object.keys(data.pagamento));
        //     Object.keys(data.pagamento).forEach(key => {
            //         pagamentoElement.innerHTML += `<p>${key}: ${data.pagamento[key]}</p>`;
            //     })
    }
    preencherLista(data.pagamento, 'pagamento')
    preencherLista(data.status, 'status')

    const diaElement = document.querySelector<HTMLElement>("p#melhor-dia span");
    if(diaElement){
        diaElement.innerText = data.melhorDia[0];
    }

    const totalElement = document.querySelector<HTMLElement>("p#total span");
    if(totalElement){
        totalElement.innerText = conveterReal(data.total);
    }
}

function preencherTabela(transacoes:Transacao[]):void{
    const tabela = document.querySelector("table#transacoes tbody");
    if(!tabela) return ;
    transacoes.forEach((transacao)=>{
        tabela.innerHTML += 
        `
        <tr>
            <td>${transacao.nome}</td>
            <td>${transacao.email}</td>
            <td>R$: ${transacao.moeda}</td>
            <td>${transacao.pagamento}</td>
            <td>${transacao.status}</td>
        </tr>
        `
    });
}

handleData();