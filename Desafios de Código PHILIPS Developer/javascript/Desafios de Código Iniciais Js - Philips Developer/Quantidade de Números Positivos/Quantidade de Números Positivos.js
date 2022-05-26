/*
Desafio
Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos. assim como é exibido abaixo no exemplo de saída. Não se esqueça de incluir na mensagem de saída o sufixo " valores positivos", conforme o exemplo abaixo:
*/
num = Array(6);

num[0] = gets();
num[1] = gets();
num[2] = gets();
num[3] = gets();
num[4] = gets();
num[5] = gets();

positivos = num.filter(value => value > 0);

console.log(positivos.length + " valores positivos");