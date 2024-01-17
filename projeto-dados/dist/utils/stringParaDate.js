export default function stringParaDate(dataString) {
    const [data, tempo] = dataString.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);
    const [hora, minuto] = tempo.split(":").map(Number);
    return new Date(ano, (mes - 1), dia, hora, minuto);
}
//# sourceMappingURL=stringParaDate.js.map