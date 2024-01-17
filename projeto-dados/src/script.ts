import fetchData from "./utils/fetchData.js";
import normalizarTransacao from "./utils/normalizarTransacao.js";



async function handleData(){
    const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?");
    if(!data) return;
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
}

function preencherTabela(transacoes:Transacao[]):void{
    const tabela = document.querySelector("table#transacoes tbody");
    console.log(tabela);
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