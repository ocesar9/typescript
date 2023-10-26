"use strict";
// Annotation e Inference 1
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto('MinDate Minds'));
// Union Types
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value === 'string') {
        return Number(value);
    }
    else {
        throw 'value deve ser um número ou uma string';
    }
}
console.log(toNumber(200));
console.log(toNumber('200'));
console.log(toNumber('Texto'));
// Types e Interfaces
async function fetchProduct() {
    const response = await fetch('./jsons/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML +=
        `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>
      <div>
        <h3>${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>${data.empresaMontadora.nome}</h3>
      </div>
    </div>
    
  `;
}
// Arrays
async function fetchCursos() {
    const response = await fetch("./jsons/cursos.json");
    const cursos = await response.json();
    mostrarCursos(cursos);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2 style="color: ${curso.nivel === 'iniciante' ? 'yellow' : 'green'};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p
        <p>Tipo: ${curso.gratuito ? "Gratuito" : "Pago"}</p>
        <p>Tags: ${curso.tags}</p>
        <p>Tags: ${curso.idAulas.join(' | ')}</p>
      </div>
    `;
    });
}
