/*******************************
          WHILE LOOP 
********************************/

// As cores das faixas do jiu-jitsu
var faixas = [
  'branca',
  'azul',
  'roxa',
  'marron',
  'preta',
  'vermelha-preta',
  'vermelha-branca',
  'vermelha'
];

/*
 * Algumas técnicas são permitidas ou proibidas dependendo da faixa do lutador
 * segundo as regras da federacão internacional de jiu-jitsu.
 * 
 * Uma dessas técnicas é a chave de punho que é permitida para lutadores de 
 * todas as faixas, menos os da branca.
 */

// // A variável 'faixaEscolhida' irá conter a resposta do usuário para a pergunta abaixo
// var faixaEscolhida = '';
//
// /**
//  * While loops são utilizados quando não se sabe a quantidade de iteracões
//  * necessárias para sair do loop. Nesse caso a regra de parada é quando
//  * o usuário responde 'branca', qualquer outro resultado mantém o loop.
//  */
// while (faixaEscolhida !== 'branca') {
//   faixaEscolhida = prompt(
//     'Em qual faixa lutadores são proibidos de usar a chave de punho?'
//   );
// }

/*******************************
          FOR LOOP 
********************************/

/*
 * Outra técnica é a chave de joelho que lutadores das faixas branca,
 * azul e roxa são proibidos de aplicar em competicão.
 * 
 * O array 'permiteChaveDeJoelho' é o array que contém as cores de faixas
 * que podem aplicar tal técnica.
 */
var permiteChaveDeJoelho = [];

/**
 * For loop usado quando se sabe a quantidade de iteracões necessárias para
 * parar sair do loop. Nesse caso a regra de parada da iteracão é quando a
 * variável 'i' é igual ou maior que o tamanho do array.
 */
for (var i1 = 0; i1 < faixas.length; i1++) {
  switch (faixas[i1]) {
    case 'marron':
    case 'preta':
    case 'vermelha-preta':
    case 'vermelha-branca':
    case 'vermelha':
      permiteChaveDeJoelho.push(faixas[i1]);
  }
}

console.log(
  'Permite-se aplicar chave de joelho nas faixas: %o',
  permiteChaveDeJoelho
);

/**
 * Para dar mais ênfase às faixas que permitem chave de joelho, antes de
 * imprimi-las no console elas serão modificadas para aparecer em letras maiúsculas.
 */
var faixasEmLetrasMaiusculas = [];

for (var i2 = 0; i2 < permiteChaveDeJoelho.length; i2++) {
  faixasEmLetrasMaiusculas.push(permiteChaveDeJoelho[i2].toUpperCase());
}

console.log(
  'Permite-se aplicar chave de joelho nas faixas: %o',
  faixasEmLetrasMaiusculas
);

/**
 * While e for são maneiras de iterar o array de maneira procedural, ou seja,
 * a pessoa que desenvolveu esse codigo está dando instrucão por instrucão ao
 * compilador em como percorrer o array além de controlar a regra de parada
 * explicitamente.
 */
