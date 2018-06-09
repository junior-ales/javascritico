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
 */

/*******************************
          FOR LOOP 
********************************/

var imprimeFaixas = function() {
  /**
   * Para dar mais ênfase às faixas, antes de imprimi-las no console elas serão
   * modificadas para aparecer em letras maiúsculas.
   *
   * O array 'faixasEmLetrasMaiusculas' é o array 'faixas' com seus
   * items modificados (de letras minusculas para maiusculas).
   */
  var faixasEmLetrasMaiusculas = [];

  for (var i1 = 0; i1 < faixas.length; i1++) {
    faixasEmLetrasMaiusculas.push(faixas[i1].toUpperCase());
  }

  /**
   * Uma dessas técnicas é a chave de joelho que lutadores das faixas branca,
   * azul e roxa são proibidos de aplicar em competicão.
   *
   * O array 'permiteChaveDeJoelho' é o array 'faixas' filtrado que contém
   * somente as cores de faixas que podem aplicar tal técnica.
   */
  var permiteChaveDeJoelho = [];

  /**
   * For loop usado quando se sabe a quantidade de iteracões necessárias para
   * parar sair do loop. Nesse caso a regra de parada da iteracão é quando a
   * variável 'i2' é igual ou maior que o tamanho do array.
   */
  for (var i2 = 0; i2 < faixasEmLetrasMaiusculas.length; i2++) {
    switch (faixasEmLetrasMaiusculas[i2]) {
      case 'MARRON':
      case 'PRETA':
      case 'VERMELHA-PRETA':
      case 'VERMELHA-BRANCA':
      case 'VERMELHA':
        permiteChaveDeJoelho.push(faixasEmLetrasMaiusculas[i2]);
    }
  }

  console.log('[for 1] Permite-se chave de joelho: ', permiteChaveDeJoelho);
};

imprimeFaixas();

/**
 * Fazendo os dois ao mesmo tempo.
 */

var imprimeFaixas2 = function() {
  var permiteChaveDeJoelho = [];

  for (var i = 0; i < faixas.length; i++) {
    switch (faixas[i]) {
      case 'marron':
      case 'preta':
      case 'vermelha-preta':
      case 'vermelha-branca':
      case 'vermelha':
        permiteChaveDeJoelho.push(faixas[i].toUpperCase());
    }
  }

  console.log('[for 2] Permite-se chave de joelho: ', permiteChaveDeJoelho);
};

imprimeFaixas2();

/**
 * While e for são maneiras de iterar o array de maneira imperativa, ou seja,
 * a pessoa que desenvolveu esse codigo está dando instrucão por instrucão ao
 * compilador em como percorrer o array além de controlar a regra de parada
 * explicitamente.
 *
 * Os problemas dessa maneira de programar é que a pessoa desenvolvendo tem que
 * lidar explicitamente com várias partes da iteracão o que aumenta o risco
 * de adicionar um bug. O que aconteceria por exemplo se o array 'faixasEmLetrasMaiusculas'
 * ou a variável de indice 'i2' fossem modificadas dentro do loop? O risco de
 * entrar em um loop infinito é definitivamente maior.
 *
 * Uma maneira de mitigar esse risco é ir de uma forma de programar imperativa
 * para uma mais declarativa. Em outras palavras o código deve expressar mais
 * o *que* ele quer que o compilador faca, não *como* ele quer que o compilador faca.
 */

/*******************************
       ARRAY MAP E FILTER
********************************/

var imprimeFaixas3 = function() {
  /**
   * No primeiro caso estamos modificando os itens do array, todos os objectos
   * do tipo Array em Javascript tem uma funcao chamada "map" que faz exatamente o que
   * fizemos anteriormente: itera todos os itens do array.
   *
   * 'map' recebe uma funcao como parametro a qual recebe como atributo um item do array.
   * Essa funcao retornara o item modificado para um novo array.
   */

  var faixasEmLetrasMaiusculas = faixas.map(function(faixa) {
    return faixa.toUpperCase();
  });

  /**
   * No segundo caso estamos filtrando itens do array, podemos utilizar uma funcao que todos
   * os objectos do tipo Array em Javascript implementam chamada "filter". Ela faz exatamente
   * o que fizemos anteriormente: itera todos os itens do array, mas mais do que isso ela
   * retorna um novo array somente com os itens filtrados.
   *
   * 'filter' recebe uma funcao como parametro a qual recebe como atributo um item do array e
   * retorna um boleano. O valor de retorno sinaliza se o item em questao deve (retornando true)
   * ou nao (retornando false) ir para o novo array.
   */

  var permiteChaveDeJoelho = faixasEmLetrasMaiusculas.filter(function(faixa) {
    switch (faixa) {
      case 'MARRON':
      case 'PRETA':
      case 'VERMELHA-PRETA':
      case 'VERMELHA-BRANCA':
      case 'VERMELHA':
        return true;

      default:
        return false;
    }
  });

  console.log(
    '[map/filter 1] Permite-se chave de joelho: ',
    permiteChaveDeJoelho
  );
};

imprimeFaixas3();

/**
 * Fazendo os dois ao mesmo tempo.
 */

var imprimeFaixas4 = function() {
  /**
   * Como as funcoes 'map' e 'filter' retornam um array e todo Array em Javascript implementa
   * 'map' e 'filter' podemos concatenar as chamadas de funcao sem precisar nomear os valores
   * intermediarios.
   */

  var faixasQuePermitemChaveDeJoelhoEmLetrasMaiusculas = faixas
    .map(function(faixa) {
      return faixa.toUpperCase();
    })
    .filter(function(faixa) {
      switch (faixa) {
        case 'MARRON':
        case 'PRETA':
        case 'VERMELHA-PRETA':
        case 'VERMELHA-BRANCA':
        case 'VERMELHA':
          return true;

        default:
          return false;
      }
    });

  console.log(
    '[map/filter 2] Permite-se chave de joelho: ',
    faixasQuePermitemChaveDeJoelhoEmLetrasMaiusculas
  );
};

imprimeFaixas4();
