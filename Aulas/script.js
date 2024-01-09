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
// The use of instance of verification able to use constructor methods
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
// Eventos e Callback
// Every event have a type associated
const button3 = document.querySelector('button');
function handleClick(event) {
    console.log(event);
}
button3?.addEventListener('pointerdown', handleClick);
function handleScroll(event) {
    console.log(event);
}
window.addEventListener('scroll', handleScroll);
// function ativarMenu(event: TouchEvent | MouseEvent | KeyboardEvent){
function ativarMenu(event) {
    if (event instanceof MouseEvent) {
        console.log(event.pageX);
    }
    if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
    }
    console.log(event);
}
document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu);
const buttons4 = document.querySelector('button');
function handleClick2(event) {
    console.log(this);
    const elemento = event.currentTarget;
    if (elemento instanceof HTMLElement) {
        console.log(elemento.innerText);
    }
}
buttons4?.addEventListener('click', handleClick2);
// Generics
function retorno(a) {
    return a;
}
// Essentially, this function takes the first variable and determines its data type for further processing.
// function retorno<string>(a: string): string{
//   return a;
// }
// function retorno<number>(a: number): number{
//   return a;
// }
console.log(retorno("A Game").toLocaleLowerCase());
console.log(retorno(200).toFixed());
console.log(retorno(true).valueOf());
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ['banana', 'pera', 'laranja', 'maça', 'banana', 'uva', 'melão'];
function firstFive(lista) {
    return lista.slice(0, 5);
}
console.log(firstFive(numeros4));
console.log(firstFive(frutas));
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
console.log(notNull('Julio')?.toLocaleLowerCase());
console.log(notNull(200)?.toFixed());
function tipoDado(a) {
    const resultado = {
        ddo: a,
        tipo: typeof a,
    };
    console.log(resultado);
}
tipoDado(true);
tipoDado(200);
// Tipo has all HTMLElements parameters
function extractText(el) {
    return {
        texto: el.innerText,
        el
    };
}
const link4 = document.getElementById('origamid');
if (link4) {
    console.log(extractText(link4).el);
}
// Specifying the element selection type
const link5 = document.querySelector('#origamid');
console.log(link5?.href);
async function getData(url) {
    const response = await fetch(url);
    return response.json();
}
async function handleData() {
    const notebooks = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebooks);
}
handleData();
// Functions
function somar3(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(somar3(3, 4));
const subtrair = (a, b) => a - b;
console.log(subtrair(3, 4));
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(isString('Teste'));
console.log(isString(8));
function calcular(form) {
    form.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map(item => item.trim().toLowerCase());
    }
}
console.log(normalizar(' PRoduto ').toLocaleUpperCase);
console.log(normalizar(['BanaNa', '  UvA']).filter);
function $(seletor) {
    return document.querySelector(seletor);
}
console.log($('a'));
console.log($('video'));
// Type Guard e Control Flow
const obj = {
    nome: 'Origamid',
};
if ("preco" in obj) {
    console.log("Sim");
}
async function fectchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
function handleProduto(data) {
    console.log(data);
    // Typeguard to verify if in the object type has the proper
    if ('total' in data) {
        document.body.innerHTML +=
            `
      <p>Nome: ${data.nome}</p>
      <p>Preco: ${data.preco}</p>
    `;
    }
}
fectchProduto();
function typeGuard(value) {
    // With use of unknown is only possible to use the types parameters after verifying from the variable type
    if (typeof value === 'string') {
        return value.toLocaleUpperCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
console.log(typeGuard("Origamid"));
console.log(typeGuard(200));
console.log(typeGuard(document.body));
// User TYpe Guard
async function fectCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}
fectCursos();
function handleCursos(data) {
    if (data instanceof Array) {
        console.log('É uma intância de Array');
    }
    if (Array.isArray(data)) {
        console.log('É array');
    }
}
// TypeGuard and TypePredicate
// The function indicates the return is true if is a string
function isString2(value) {
    return typeof value === 'string';
}
function handleData2(data) {
    if (isString2(data)) {
        data.toLocaleLowerCase;
    }
}
async function fectchProduto2() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto3(json);
}
fectchProduto2();
function isProduto3(value) {
    // TypeGuard
    // Verify that value is a object with nome property 
    if (value && typeof value == 'object' && "nome" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto3(data) {
    if (isProduto3(data)) {
        console.log(data.nome);
    }
}
// Type Assertion
// This use lose type safety if the element is not found
const video2 = document.querySelector('#video');
console.log(video2);
async function fetchProduto3() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    // Type Assertion to indicate objects format
    return response.json();
}
fetchProduto3();
async function handleProduto4() {
    const produto = await fetchProduto3();
    console.log(produto.nome);
}
// !non-null
const video3 = document.querySelector('video');
video3.volume;
document.querySelector("a").href = "https://www.origamid.com";
const video4 = document.querySelector(".player");
const video5 = document.querySelector(".player");
const video6 = document.querySelector(".player");
// Desctructuring
const { body } = document;
function handleData3({ nome, preco }) {
    nome.includes('book');
    preco?.toFixed();
}
handleData3({
    nome: "Notebook",
    preco: 200
});
function handleClick3({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML += `<h1>Mouse click em x: ${pageX}</h1>`;
    }
}
document.documentElement.addEventListener('click', handleClick3);
// ...rest
function comparar(tipo, ...numeros) {
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
    if (tipo === "maior") {
        return Math.max(...numeros);
    }
}
console.log("Menor " + comparar('menor', 3, 4, 5, 6));
console.log("Maior " + comparar('maior', 3, 4, 5, 6));
function handleProdutoCarro(dados) {
    dados.preco;
    dados.rodas;
    dados.portas;
}
handleProdutoCarro({ rodas: 4, portas: 2, preco: 30000 });
// Classes
console.log(document.constructor);
class Produto7 {
    tipo = "produto";
    nome;
    // Can be a extandable property
    preco;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    getPreco() {
        return this.preco;
    }
    // Method only can be acessed by the class
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
const livro2 = new Produto7("O Senhor dos Anéis", 300);
console.log(livro2.nome);
// Cannot be redeclared because is a property only to be readen 
// console.log(livro2.tipo = 'peixe')
// Cannot be acessed because is a private property
// console.log(livro2.preco);
console.log(livro2.getPreco());
console.log(Produto7.transformarPreco(livro2.getPreco()));
