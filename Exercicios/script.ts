// Annotation e Inference 1

function normalizarTexto(texto:string) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto('MinDate Minds'))

// Union Types

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value ==='string') {
    return Number(value);
  } else {
    throw 'value deve ser um número ou uma string';
  }
}