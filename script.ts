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