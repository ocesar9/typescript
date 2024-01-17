import moedaParaNumero from "./normalizarParNumero.js";
import stringParaDate from "./stringParaDate.js";
export default function normalizarTransacao(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: stringParaDate(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor (R$)"],
        valor: moedaParaNumero(transacao["Valor (R$)"]),
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"])
    };
}
//# sourceMappingURL=normalizarTransacao.js.map