/*******************************
          FOR LOOP 
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

/**
 * Algumas técnicas são permitidas ou proibidas dependendo da faixa do lutador
 * segundo as regras da federacão internacional de jiu-jitsu. Uma dessas técnicas
 * é a chave de joelho que lutadores das faixas branca, azul e roxa são
 * proibidos de aplicar em competicão.
 *
 * O array 'permiteChaveDeJoelho' é o array que contém as cores de faixas
 * que podem aplicar tal técnica.
 */
var permiteChaveDeJoelho = [];

/**
 * For loop usado quando se sabe quando parar a iteracão. Nesse caso a regra de
 * parada da iteracão é quando a variável 'i' é igual ou maior que o tamanho do array.
 */
for (var i = 0; i < faixas.length; i++) {
  switch (faixas[i]) {
    case 'marron':
    case 'preta':
    case 'vermelha-preta':
    case 'vermelha-branca':
    case 'vermelha':
      permiteChaveDeJoelho.push(faixas[i]);
  }
}

console.log(
  'Permite-se aplicar chave de joelho nas faixas: %o',
  permiteChaveDeJoelho
);
