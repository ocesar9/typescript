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

console.log(somar2(10,4));

const nitendo = {
  nome: 'Nitendo',
  preco: '2000'
}

function trasnformarPreco(produto: {nome:string;preco:string}){
  produto.preco = 'R$' + produto.preco;
  return produto;
}

console.log(trasnformarPreco(nitendo));


// String, Number e Boolean
const frase = 'Front end';
const preco2 = 500;
const condi = preco > 100;


console.log(typeof frase);
console.log(typeof preco2);
console.log(typeof condi);

if(typeof frase === 'string') {
  console.log('Frase e uma string');
  frase.toLocaleLowerCase
} 
else{
  console.log('Frase nao e uma string');
} 

const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";

console.log(typeof String);

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
console.log(typeof frase3.toLowerCase())