/** 
 * Recebe string '1.200,50 retorna: 1200,50
 * */ 

export default function moedaParaNumero(moeda:string):number | null{
    const numero = Number(moeda.replaceAll(".", "").replace(",",  "."))
    return isFinite(numero) ? numero : null;
}