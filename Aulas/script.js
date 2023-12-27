"use strict";
// Annotation e Inference 1
const total = 100;
function somar(a, b) {
    return a + b;
}
console.log(somar(5, 10));
let produto = "Livro";
let preco = 200;
// produto = 300;
// preco = 300;
// const carro: {
//   marca: string;
//   portas: number;
// } = {
//   marca: "Audi",
//   portas: 5,
// };
const carro = {
    marca: "Audi",
    portas: 5,
};
// carro.marca = 3;
const barato = preco < 400 ? true : "produto caro";
console.log(barato);
function somar2(a, b) {
    return `${a + b}`;
}
console.log(somar2(10, 4));
const nitendo = {
    nome: "Nitendo",
    preco: "2000",
};
function trasnformarPreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
console.log(trasnformarPreco(nitendo));
// String, Number e Boolean
const frase = "Front end";
const preco2 = 500;
const condi = preco > 100;
console.log(typeof frase);
console.log(typeof preco2);
console.log(typeof condi);
if (typeof frase === "string") {
    console.log("Frase e uma string");
    frase.toLocaleLowerCase;
}
else {
    console.log("Frase nao e uma string");
}
const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";
console.log(typeof String);
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
console.log(typeof frase3.toLowerCase());
// Union Types 1
let total2 = 200;
total2 = "4000";
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return false;
    }
}
if (isNumber("200")) {
    console.log("é um numero");
}
console.log(isNumber("200"));
const button = document.querySelector("button");
button?.click();
let total3 = 20;
total3 = "30";
function preencherDados(dados) {
    document.body.innerHTML +=
        `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado:${dados.teclado ? 'sim' : 'nao'}</p>
    </div>
  `;
}
preencherDados({
    nome: "Computador",
    preco: 2000,
    teclado: true,
});
preencherDados({
    nome: "Notebook",
    preco: 1500,
    teclado: false,
});
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: true,
};
function printarCategoria(categoria) {
    console.log(categoria);
}
printarCategoria('codigo');
// printarCategoria('teste');
// Arrays
const numeros = [10, 20, 30, 1, 2, 3];
const valores = [10, 'Taxas', 30, '40', 50, 3];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
function filtrarValores(data) {
    return data.filter(item => typeof item === 'number');
}
console.log(maiorQue10(numeros));
console.log(filtrarValores(valores));
const dados = [
    ["senhor dos aneis", 80],
    ["a guerra dos tronos", 120]
];
// Any
// Never use any
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto("   senhor dos aneis redondos"));
//console.log(normalizarTexto(200)) // Error Because should be a string value
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    manipularData(data);
}
fetchJSON("../Exercicios/jsons/cursos.json");
function manipularData(data) {
    console.log(data.nome);
}
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML +=
            `
    <div>
      <h2>${curso.nome}</h2>
      <p>Horas: ${curso.horas}</p>
    </div>
    `;
    });
}
const dados2 = 'o any gera problemas';
// mostrarCursos(dados2); // Error becouse should have Curso[] structure
mostrarCursos([{ nome: 'Julio', horas: 300 }]);
// Null e Undefined
const button2 = document.querySelector('button');
const config = localStorage.getItem('config');
if (button2 !== null)
    button2.click();
if (button2)
    button2.click();
button2?.click();
let total4;
function teste() { }
console.log(typeof total);
if (total4)
    console.log('Total foi definido');
else
    console.log('Total não foi definido');
const jogo = {
    nome: 'Nintendo',
};
const livro = {};
console.log(jogo.nome);
console.log(jogo?.nome?.toLowerCase());
console.log(livro.nome);
// console.log(livro.nome.toLowerCase()); Error because livro.nome is undefined
// Instance of 
class Produto {
    nome;
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro3 = new Produto('A Guerra dos Tronos', 200);
console.log(livro3.precoReal());
console.log(livro3 instanceof Produto);
console.log(livro3 instanceof Array);
class Livro {
    autor;
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome, preco);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit')
        return new Livro('J. R. R. Tolkien');
    if (busca === 'Dark Souls')
        return new Jogo('Dark Souls', 1);
    return null;
}
const produto2 = buscarProduto('O Hobbit');
const produto3 = buscarProduto('Dark Souls');
if (produto2 instanceof Livro) {
    console.log(produto2.autor);
}
if (produto3 instanceof Livro) {
    console.log(produto3.autor);
}
if (produto3 instanceof Produto)
    console.log(produto3.nome);
// Interfaces do DOM
const video = document.querySelector('#videoprincipal');
if (video instanceof HTMLVideoElement)
    console.log(video.src);
const links = document.querySelectorAll('.link');
console.log(links instanceof NodeList);
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
    else {
        console.log(typeof link);
    }
});
const arrayLinks = Array.from(links);
const anchorLinks = arrayLinks.filter((link) => link instanceof HTMLAnchorElement);
console.log(anchorLinks);
