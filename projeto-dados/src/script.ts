import fetchData from "./fetchData.js";
import normalizarTransacao from "./utils/normalizarTransacao.js";



async function handleData(){
    const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?");
    if(!data) return;
    const transacoes = data.map(normalizarTransacao);
    console.log(transacoes);
    transacoes.forEach(item =>{
        console.log(item.data.getHours());
    })
}

handleData();