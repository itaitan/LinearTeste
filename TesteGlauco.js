// =========== exercicio 1 =============

/**Escreva uma função que receba como parâmetros o primeiro elemento de uma progressão aritmética, a razão dessa progressão,
   e um número n, e devolva o n-esimo elemento dela. 
Não é necessário usar fórmulas prontas, basta lembrar que uma PA começa em um certo valor e vai sendo somado um valor fixo (chamado razão
 */

// const prog = (primeiro, razao, n) => {
//   let resultado = primeiro;
//   let array = [];
//   array.push(primeiro);
//   for (i = 1; i <= n; i++) {
//     resultado += razao;
//     array.push(resultado);
//   }
//   console.log(array);
//   console.log(array[n - 1]);
//   console.log(array.length);
// };

// prog(5, 2, 9);

// =========== exercicio 2 =============
/** Para A = True, B = True e C = False, qual o resultado da avaliação das seguintes expressões:
a) (A ou B) e (A e C) retorna false
b) não B ou (A ou C) retorna false
 */

//  =========== exercicio 3 =============
/** Escreva uma função chamada Parece, que recebe como parâmetro dois vetores A e B,
 *  e mais o número de elementos de cada um. Essa função retorna True se os vetores forem “parecidos” ou False,
 *  caso contrário. O critério para ser “parecido” é que pelo menos 90% dos elementos de A estejam em B e 80% dos elementos de B estejam em A. */

// vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 11, 23, 24, 25];
// let tamanho = 0;

// if (vetor1.length >= vetor2.length) {
//   tamanho = vetor1.length;
// } else {
//   tamanho = vetor2.length;
// }

// const comparacao = (a, b, tamanho) => {
//   let resultado = 0;
//   for (i = 0; i < tamanho; i++) {
//     for (y = 0; y < tamanho; y++) {
//       if (a[i] === b[y]) {
//         resultado++;
//       }
//     }
//   }
//   let porcentagem = (resultado / 100) * 1000;

//   return porcentagem;
// };

// const parece = (a, b) => {
//   if (a >= 90 && b >= 80) {
//     return true;
//   }

//   return false;
// };

// let ComparaV1comV2 = comparacao(vetor1, vetor2, tamanho);

// let ComparaV2comV1 = comparacao(vetor2, vetor1, tamanho);

// console.log(ComparaV1comV2, "compara v1 com v2");
// console.log(ComparaV2comV1, "compara v2 com v1");

// console.log(parece(ComparaV1comV2, ComparaV2comV1));

// =========== exercicio 4 =============

/**Escreva um algoritmo que tenha como entrada dois vetores, chamados Vetor1 e Vetor2,
 *  já populados (preenchidos) com números positivos em ordem crescente.
 *  O número de elementos dos vetores, são dados, respectivamente, pelas variáveis nVetor1 e nVetor2.
    A rotina deve preencher um terceiro vetor, chamado Vetor3, preferencialmente de forma ordenada,
    só com os números que estejam em ambos os vetores de entrada.
 */

// vetor1 = [];
// vetor2 = [];
// vetor3 = [];
// nVetor1 = 4;
// nVetor2 = 6;
// nVetor3 = 0;
// let tamanho = 0;

// const PopuladoArray = (tamanho) => {
//   let vetor = [];
//   for (i = 0; i < tamanho; i++) {
//     vetor.push(Math.floor(Math.random() * 10));
//   }

//   return vetor.sort();
// };
// const verificar = (a, b, tamanho) => {
//   vetorCal = [];
//   for (i = 0; i < tamanho; i++) {
//     for (y = 0; y < tamanho; y++) {
//       if (a[i] === b[y]) {
//         vetorCal.push(a[i]);
//       }
//     }
//   }

//   return vetorCal;
// };

// vetor1 = PopuladoArray(nVetor1);
// vetor2 = PopuladoArray(nVetor2);

// if (vetor1.length >= vetor2.length) {
//   tamanho = vetor1.length;
// } else {
//   tamanho = vetor2.length;
// }
// vetor3 = verificar(vetor1, vetor2, tamanho);
// nVetor3 = vetor3.length;
// console.log(vetor3);

// =========== exercicio 5 =============

/** Criar uma estrutura de banco RELACIONAL a seguir: */

// create table Cliente (
//     Id_Cliente Integer primary key auto_increment,
//     Nome Varchar(50) not null,
//     Endereco Varchar(100) not null
// );

// create table Produtos
// (
//     Id_Produto Integer primary key auto_increment,
//     Código int not null,
//     Descricao Varchar(100) not null
// );

// create table Vendas(
//     Id_Vendas Integer primary key auto_increment,
//     fkCliente int not null,
//     fkProduto int not null,
//     Quantidade int not null,
//     PrecoTotal double not null,
//     DataVenda TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
// );
// insert into Cliente (Nome, Endereco) values ('Paulo', 'Rua 1');
// insert into Cliente (Nome, Endereco) values ('Ita', 'Rua 2');
// insert into Cliente (Nome, Endereco) values ('Kekel', 'Rua 3');
// insert into Cliente (Nome, Endereco) values ('Roger', 'Rua 4');
// insert into Cliente (Nome, Endereco) values ('Bruno', 'Rua 5');

// Select * from Cliente
// insert into Produtos (Código, Descricao) values (1, 'Caneta');
// insert into Produtos (Código, Descricao) values (2, 'Lapis');
// insert into Produtos (Código, Descricao) values (3, 'Borracha');
// insert into Produtos (Código, Descricao) values (4, 'Caderno');
// insert into Produtos (Código, Descricao) values (5, 'Regua');

// Select * from Produtos
// insert into Vendas (fkCliente, fkProduto, Quantidade, PrecoTotal, DataVenda) values (1, 1, 5, 5.3, now());

// insert into Vendas (fkCliente, fkProduto, Quantidade, PrecoTotal, DataVenda) values (1, 2, 1, 1, '2022-07-08 18:00');

// =========== exercicio 6 =============

/** Baseado na estrutura criada no item (6), montar escrever uma SQL simples para obter: */

// -- a Quantidade total de venda de cada Produto (exibir Código do produto)
// select fkProduto, sum(PrecoTotal) from Vendas inner join Produtos as p on p.Código = fkProduto group by fkProduto

// -- b Quantidade total de compra de cada cliente (exibir Nome do cliente)
// select fkCliente, c.Nome, sum(PrecoTotal) from Vendas inner join Cliente as c on c.Id_Cliente = fkCliente group by fkCliente , c.Nome

// -- c Valor total vendido a cada dia
// select sum(PrecoTotal) from Vendas group by DATE(DataVenda)

// -- d Quais Produtos não foram vendidos nunca (exibir Código do produto)
// Select p.Código from Vendas right join Produtos as p on p.Código = fkProduto where fkProduto is null

// -- e Quais clientes nunca compraram (exibir Nome do cliente)
// Select c.Nome from Vendas right join Cliente as c on c.id_Cliente = fkCliente where fkCliente is null

// -- f Quantos produtos diferentes cada cliente comprou, independente de quantidade de venda, preço e data (exibir Nome do Cliente)
// select (c.nome), count(distinct fkproduto)
// from vendas
// inner join Cliente as c on c.id_Cliente = fkCliente
// inner join Produtos as p on p.Código = fkProduto
// group by c.nome
