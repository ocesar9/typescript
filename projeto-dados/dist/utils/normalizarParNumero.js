export default function moedaParaNumero(moeda) {
    const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
    return isFinite(numero) ? numero : null;
}
//# sourceMappingURL=normalizarParNumero.js.map