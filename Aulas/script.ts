// Annotation e Inference 1

const total = 100;

function somar(a: number, b: number) {
  return a + b;
}

console.log(somar(5, 10));

let produto: string = "Livro";
let preco: number = 200;

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
const barato: boolean | string = preco < 400 ? true : "produto caro";
console.log(barato);

function somar2(a: number, b: number): string {
  return `${a + b}`;
}

console.log(somar2(10, 4));

const nitendo = {
  nome: "Nitendo",
  preco: "2000",
};

function trasnformarPreco(produto: { nome: string; preco: string }) {
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
} else {
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

let total2: string | number = 200;
total2 = "4000";

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

if (isNumber("200")) {
  console.log("é um numero");
}

console.log(isNumber("200"));

const button = document.querySelector("button");
button?.click();

// Types e Interfaces

// Types are implemented when the variables defined contains more than one type;
// Interfaces are implemented when the variables defined only contains one type;

type NumberOrString = number | string; 

let total3: NumberOrString = 20; 
total3 = "30";

// Direct Types
type TypeProduto = {
  nome: string, 
  preco: number, 
  teclado: boolean 
}

// Objects
interface InterfaceProduto {
  nome: string, 
  preco: number, 
  teclado: boolean 
}

function preencherDados(dados:TypeProduto) {
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

const computador: TypeProduto = {
  nome: "Computador",
  preco: 2000,
  teclado: true,
}

type Categorias = 'design' | 'codigo' | 'descod';
function printarCategoria(categoria : Categorias){
  console.log(categoria);
}

printarCategoria('codigo')
// printarCategoria('teste');

// Arrays
const numeros = [10,20,30, 1 , 2 , 3];
const valores = [10, 'Taxas', 30, '40', 50, 3]

function maiorQue10(data:Array<number>){
  return data.filter((n) => n > 10)
}

function filtrarValores(data: Array<number | string>){
  return data.filter(item => typeof item === 'number');

}


console.log(maiorQue10(numeros));
console.log(filtrarValores(valores));

const dados = [
  ["senhor dos aneis", 80],
  ["a guerra dos tronos", 120]
]

// Any

// Never use any
function normalizarTexto(texto:any) {
  return texto.trim().toLowerCase();
}

console.log(normalizarTexto("   senhor dos aneis redondos"))
//console.log(normalizarTexto(200)) // Error Because should be a string value


async function fetchJSON(url:string){
  const response = await fetch(url);
  const data = await response.json();
  manipularData(data);
}

fetchJSON("../Exercicios/jsons/cursos.json")

function manipularData(data: {nome:string}){
  console.log(data.nome);
}

interface Curso {
  nome:string;
  horas:number;
}

function mostrarCursos(cursos: Curso[]){
  cursos.forEach((curso) => {
    document.body.innerHTML +=
    `
    <div>
      <h2>${curso.nome}</h2>
      <p>Horas: ${curso.horas}</p>
    </div>
    `
  })
}
const dados2: any = 'o any gera problemas';
// mostrarCursos(dados2); // Error becouse should have Curso[] structure
mostrarCursos([{nome: 'Julio', horas:300}])


// Null e Undefined

const button2 = document.querySelector('button');
const config =  localStorage.getItem('config');

if(button2 !== null) button2.click();
if(button2) button2.click();
button2?.click();

let total4;

function teste() {}

console.log(typeof total);

if(total4) console.log('Total foi definido')
else console.log('Total não foi definido');


interface Product {
  nome?: string;
}

const jogo: Product = {
  nome: 'Nintendo',
}

const livro: Product = {}

console.log(jogo.nome);
console.log(jogo?.nome?.toLowerCase());
console.log(livro.nome);
// console.log(livro.nome.toLowerCase()); Error because livro.nome is undefined

// Instance of 

class Produto {
  nome: string;
  preco?: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  precoReal(){
    return `R$ ${this.preco}`;
  }
}

const livro3 = new Produto('A Guerra dos Tronos', 200);

console.log(livro3.precoReal());
console.log(livro3 instanceof Produto);
console.log(livro3 instanceof Array);

class Livro {
  autor:string;
  constructor(autor:string){
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores:number;
  constructor(nome:string,jogadores:number){
    super(nome,preco);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca:string){
  if(busca === 'O Hobbit') return new Livro('J. R. R. Tolkien');
  if(busca === 'Dark Souls') return new Jogo('Dark Souls',1);
  return null;
}

const produto2 = buscarProduto('O Hobbit');
const produto3 = buscarProduto('Dark Souls');

// The use of instance of verification able to use constructor methods

if(produto2 instanceof Livro){
  console.log(produto2.autor);
}

if(produto3 instanceof Livro){
  console.log(produto3.autor);
}

if(produto3 instanceof Produto) console.log(produto3.nome);

// Interfaces do DOM

const video = document.querySelector('#videoprincipal');

if(video instanceof HTMLVideoElement) console.log(video.src);

const links = document.querySelectorAll('.link');

console.log(links instanceof NodeList);
links.forEach((link) => {
  if(link instanceof HTMLAnchorElement){
    console.log(link.href);
  }else{
    console.log( typeof link);
  }
})

const arrayLinks = Array.from(links);
const anchorLinks = arrayLinks.filter((link) => link instanceof HTMLAnchorElement);
console.log(anchorLinks);

// Eventos e Callback

// Every event have a type associated

const button3 = document.querySelector('button');

function handleClick(event:PointerEvent) {
  console.log(event);
}

button3?.addEventListener('pointerdown', handleClick);

function handleScroll(event:Event){
  console.log(event);
}

window.addEventListener('scroll', handleScroll);

// function ativarMenu(event: TouchEvent | MouseEvent | KeyboardEvent){
function ativarMenu(event: Event){
  if(event instanceof MouseEvent){
    console.log(event.pageX);
  }
  if(event instanceof TouchEvent){
    console.log(event.touches[0].pageX);
  }
  console.log(event);
}

document.documentElement.addEventListener('mousedown', ativarMenu)
document.documentElement.addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu);

const buttons4 = document.querySelector('button');
function handleClick2(this: HTMLButtonElement, event: MouseEvent){
  console.log(this)
  const elemento = event.currentTarget;
  if(elemento instanceof HTMLElement){
    console.log(elemento.innerText);
  }
}

buttons4?.addEventListener('click', handleClick2);

// Generics

function retorno<variavel>(a: variavel): variavel{
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

const numeros4 = [1,2,3,4,5,6,7,8,9];
const frutas = ['banana', 'pera','laranja', 'maça', 'banana', 'uva', 'melão'];

function firstFive<TipoLista>(lista: TipoLista[]): TipoLista[]{
  return lista.slice(0,5);
}

console.log(firstFive(numeros4));
console.log(firstFive(frutas));

function notNull<T>(arg:T){
  if(arg !== null) return arg;
  else return null;
}

console.log(notNull('Julio')?.toLocaleLowerCase());
console.log(notNull(200)?.toFixed());

function tipoDado<T>(a:T){
  const resultado = {
    ddo:a,
    tipo: typeof a,
  }
  console.log(resultado);
}

tipoDado(true)
tipoDado(200);

// Tipo has all HTMLElements parameters
function extractText<Tipo extends HTMLElement>(el: Tipo){
  return {
    texto: el.innerText,
    el
  }
}

const link4 = document.getElementById('origamid');

if(link4){
  console.log(extractText(link4).el);
}

// Specifying the element selection type
const link5 = document.querySelector<HTMLAnchorElement>('#origamid');
console.log(link5?.href);

async function getData<T>(url:string) : Promise<T> {
  const response = await fetch(url);
  return response.json();
}

interface Notebook {
  nome:string;
  preco:number;
}

async function handleData(){
  const notebooks = await getData<Notebook>('https://api.origamid.dev/json/notebook.json');
  console.log(notebooks);
}

handleData();

// Functions

function somar3(a: number, b: number, c?:number):number{
  return a + b + (c ? c : 0);
}

console.log(somar3(3,4));

const subtrair = (a: number, b: number) => a - b;

console.log(subtrair(3, 4));

type Callback = (event:MouseEvent) => void;

function isString(value:any){
  if(typeof value === 'string'){
    return true;
  }
}

console.log(isString('Teste'));
console.log(isString(8));

// function abortar(mensagem:string){
//   throw new Error(mensagem);
// }

// abortar('Um erro ocorreu')
// console.log('Tente novamente');

interface Quadrado {
  lado: number;
  perimetro (lado: number):number
}

function calcular(form: Quadrado){
  form.perimetro(3)
}

// Function Overload 
// Structure the function in all values possibilities
function normalizar(valor:string):string
function normalizar(valor:string[]):string[]
function normalizar(valor:string | string[]): string | string[]{
  if(typeof valor === 'string'){
    return valor.trim().toLowerCase();
  } else  {
    return valor.map(item => item.trim().toLowerCase());
  }
}

console.log(normalizar(' PRoduto ').toLocaleUpperCase);
console.log(normalizar(['BanaNa', '  UvA']).filter);

function $(seletor: 'a') : HTMLAnchorElement | null;
function $(seletor: 'video') : HTMLVideoElement | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

console.log($('a'));
console.log($('video'));

// Type Guard e Control Flow

const obj = {
  nome: 'Origamid',
};

if("preco" in obj) {
  console.log("Sim");
}

async function fectchProduto(){
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}

interface Produto2 {
  nome:string;
  preco:number;
}

function handleProduto(data: Produto2) {
  console.log(data);
  // Typeguard to verify if in the object type has the proper
  if('total' in data) {
    document.body.innerHTML +=
    `
      <p>Nome: ${data.nome}</p>
      <p>Preco: ${data.preco}</p>
    `
  }
}

fectchProduto();

function typeGuard(value:unknown){
  // With use of unknown is only possible to use the types parameters after verifying from the variable type
  if(typeof value === 'string'){
    return value.toLocaleUpperCase()
  }
  if(typeof value === 'number'){
    return value.toFixed();
  }
  if(value instanceof HTMLElement){
    return value.innerText;
  }
}


console.log(typeGuard("Origamid"));
console.log(typeGuard(200));
console.log(typeGuard(document.body));

// User TYpe Guard

async function fectCursos(){
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}

fectCursos();

function handleCursos(data: unknown){
  if(data instanceof Array){
    console.log('É uma intância de Array');

  }
  if(Array.isArray(data)){
    console.log('É array')
  }
}

// TypeGuard and TypePredicate
// The function indicates the return is true if is a string
function isString2(value: unknown): value is string {
  return typeof value === 'string';
}
function handleData2(data: unknown){
  if(isString2(data)){
    data.toLocaleLowerCase
  }
  
}

async function fectchProduto2(){
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto3(json);
}
fectchProduto2();

interface Produto3 {
  nome:string;
  preco:number;
}

function isProduto3(value: unknown): value is Produto3{
  // TypeGuard
  // Verify that value is a object with nome property 
  if(value && typeof value == 'object' && "nome" in value){
    return true
  }else{
    return false;
  }
}

function handleProduto3(data: unknown){
  if(isProduto3(data)){
    console.log(data.nome);
  }
}

// Type Assertion

// This use lose type safety if the element is not found
const video2 = document.querySelector('#video') as HTMLVideoElement;
console.log(video2)

interface Produto4{
  nome:string;
  preco:number;
}

async function fetchProduto3(){
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  // Type Assertion to indicate objects format
  return response.json() as Promise<Produto4>;
}
fetchProduto3();

async function handleProduto4(){
  const produto = await fetchProduto3();
  console.log(produto.nome)
}

// !non-null
const video3 = document.querySelector('video')!;
video3.volume;

document.querySelector("a")!.href = "https://www.origamid.com";

const video4 = document.querySelector(".player") as HTMLVideoElement;
const video5 = <HTMLVideoElement>document.querySelector(".player");
const video6 = document.querySelector<HTMLVideoElement>(".player");

// Desctructuring

const {body}: {body:HTMLElement} = document;


interface Produto5{nome:string;preco?:number}

function handleData3({nome,preco}: Produto5){
  nome.includes('book');
  preco?.toFixed()

}

handleData3({
  nome: "Notebook",
  preco: 200
});

function handleClick3({currentTarget,pageX}:MouseEvent){
  if(currentTarget instanceof HTMLElement){
    currentTarget.innerHTML += `<h1>Mouse click em x: ${pageX}</h1>`;
  }
}

document.documentElement.addEventListener('click', handleClick3)

// ...rest

function comparar(tipo:string, ...numeros: number[]){
 if(tipo === "menor"){
  return Math.min(...numeros);
 }
 if(tipo === "maior"){
  return Math.max(...numeros);
 } 
}

console.log("Menor " + comparar('menor', 3,4,5,6));
console.log("Maior " + comparar('maior', 3,4,5,6));

// Intersection

type Produto6 = {
  preco:number;
}

type Carro = {
  rodas:number;
  portas:number;
}

function handleProdutoCarro(dados: Produto6 & Carro){
  dados.preco
  dados.rodas
  dados.portas
}

handleProdutoCarro({rodas:4,portas:2, preco:30000})

type TipoCarro = {
  rodas:number;
  portas:number
}

// Using Type we can create a new type by another type and add new properties
type TipoCarroComPreco = TipoCarro & {
  preco:number;
}

// Classes

console.log(document.constructor)

class Produto7 {
  readonly tipo = "produto";
  nome:string;
  // Can be a extandable property
  protected preco:number;
  constructor(nome:string,preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  getPreco(){
    return this.preco;
  }

  // Method only can be acessed by the class
  static transformarPreco(preco:number){
    return `R$ ${preco}`;
  }
}

const livro2 = new Produto7("O Senhor dos Anéis",300);
console.log(livro2.nome)
// Cannot be redeclared because is a property only to be readen 
// console.log(livro2.tipo = 'peixe')

// Cannot be acessed because is a private property
// console.log(livro2.preco);
console.log(livro2.getPreco());
console.log(Produto7.transformarPreco(livro2.getPreco()));
