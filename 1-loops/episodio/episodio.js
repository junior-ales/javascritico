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

(function() {
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
})();

/**
 * Fazendo os dois ao mesmo tempo.
 */

(function() {
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
})();

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

(function() {
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
})();

/**
 * Fazendo os dois ao mesmo tempo.
 */

(function() {
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
})();

/*******************************
       ARRAY REDUCE
********************************/

/**
 * Utilizando map e filter a pessoa desenvolvendo esse código não precisa se preocupar
 * com a regra de parada e nem manter variáveis temporárias e seus estados. É definitivamente
 * um avanco, porém há um problema. Agora o código está iterando duas vezes arrays inteiros,
 * uma para transformar os itens de 'faixas' e outra pra filtrar os itens retornados do
 * map. Nesse caso em especifico o custo de performance é irrisório, mas e se fosse um
 * array com milhares de itens e com uma funcão complexa dentro do map? Seria melhor
 * uma solucão na qual um unico array fosse iterado e a transformacão e filtragem
 * acontecessem ao mesmo tempo.
 *
 * Para resolver esse problema os objetos do tipo Array em Javascript implementam uma funcão
 * chamada "reduce". Essa funcão também itera o array inteiro, mas recebe uma funcão e um
 * valor inicial como parametros. A funcão por sua vez recebe além do item do array original,
 * também o resultado acumulado da operacão anterior.
 *
 * A funcão reduce não transforma o array original, ela retorna um novo array baseado nas
 * operacões da funcão que ela recebeu. No caso abaixo, 'faixas' continuará em seu estado
 * original e 'permitemChaveDeJoelhoEmLetrasMaiusculas' irá conter o resultado acumulado
 * após a iteracão total de 'faixas'. O importante aqui é que além de mantermos uma forma descritiva de programar (não imperativa),
 * iteramos o array faixas apenas uma vez.
 *
 * À primeira vista é uma funcão complicada de entender, mas vários conceitos de operacões em
 * listas são baseados nela, por isso é importante que se invista o tempo que precisar para entende-la.
 *
 * A tabela na pagina 'index.html' desse episodio mostra um passo a passo de como as variaveis
 * vão mudando a cada iteracao até chegar ao resultado final.
 *
 */

(function() {
  var permitemChaveDeJoelhoEmLetrasMaiusculas = faixas.reduce(function(
    faixasAcumuladas,
    faixa
  ) {
    switch (faixa) {
      case 'marron':
      case 'preta':
      case 'vermelha-preta':
      case 'vermelha-branca':
      case 'vermelha':
        return faixasAcumuladas.concat(faixa.toUpperCase());

      default:
        return faixasAcumuladas;
    }
  },
  []);

  console.log(
    '[reduce] Permite-se chave de joelho: ',
    permitemChaveDeJoelhoEmLetrasMaiusculas
  );
})();
