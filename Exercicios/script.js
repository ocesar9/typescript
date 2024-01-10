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
// instanceof
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement)
    link.href = link.href.replace('http', 'https');
// Interfaces do DOM
const links = document.querySelectorAll('.link');
function ativarElemento(elemento) {
    elemento.style.color = 'red';
    elemento.style.border = '2px solid red';
}
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        ativarElemento(link);
    }
});
function arredondar(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondar(200.5));
console.log(arredondar('200.5'));
// User TypeGuard
async function fectCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}
fectCursos();
// TypeGuard and TypeProdicate
function isCurso(value) {
    if (value && typeof value === 'object' && "nome" in value && "horas" in value && "tags" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach(item => {
            document.body.innerHTML +=
                `
      <div>
        <h2>${item.nome}</h2>
        <p>${item.horas}</p>
        <p>${item.tags.join(", ")}</p>
      </div>
      `;
        });
    }
}
// Exercicio
async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const data = await response.json();
    somarVendas(data);
}
fetchVendas();
function somarVendas(vendas) {
    let total3 = 0;
    for (let i = 0; i < vendas.length; i++) {
        total3 += vendas[i][1];
    }
    document.body.innerHTML += `<h1>Total: ${total3}</h1>`;
    console.log(total3);
    // Create a tuple of the last value and the current from object Venda
    const total4 = vendas.reduce((anterior, venda) => {
        return anterior + venda[1];
    }, 0);
    console.log(total4);
    document.body.innerHTML += `<h1>Total: ${total4}</h1>`;
}
const arr = [3, 5, 10, 20, 30];
// For each number is a new loop that will be executed and sum the current number with the last
const somar = arr.reduce((anterior, atual) => {
    console.log(anterior, atual);
    return anterior + atual;
}, 0);
