"use strict";
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
    nome: 'Nitendo',
    preco: '2000'
};
function trasnformarPreco(produto) {
    produto.preco = 'R$' + produto.preco;
    return produto;
}
console.log(trasnformarPreco(nitendo));
