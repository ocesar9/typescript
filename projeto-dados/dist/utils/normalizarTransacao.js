import moedaParaNumero from "./normalizarParNumero.js";
import stringParaDate from "./stringParaDate.js";
export default function normalizarTransacao(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: stringParaDate(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: moedaParaNumero(transacao["Valor (R$)"]),
        valor: 0,
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"])
    };
}
//# sourceMappingURL=normalizarTransacao.js.map