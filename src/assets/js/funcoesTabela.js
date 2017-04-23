/**
 * função que irá ler o arquivo csv e passar para um array
 */

var tabelaDados=[];

/**
 * Cabecalho da tabela.
 */
var tableHeader;

/**
 * Indica se os dados estao em ordem crescente (0) ou descrescente (1).
 */
var estados;

/**
 * tabela que irá armazenar somente os dados que serão impressos
 */
var tabelaDadosImpressao;

/**
 * indica a numeração da primeira tupla da tabela a ser impressa.
 * Usada para indicar a seção da tabela que será demonstrada
 */
var primeiraLinhaImpressao = 0;

/**
 * indica a quantidade de tuplas a ser impressa por seção
 */
var quantidadeLinhaImpressao = 20;

// -------------- Variaveis para controle de paginacao ----------
/**
 * Pagina atual.
 */
var currPage = 1;

/**
 * Numero de paginas com dados.
 */
var numPages;

/**
 * Numero maximo de paginas a serem listadas na paginacao.
 */
var maxRangePag = 10;

/**
 * Primeiro indice sendo mostrado na paginacao.
 */
var firstPageInList;

d3.csv("data/dados-tp1.csv", function(data) {
    // Extracting the header (1st line in the document).
    tableHeader = Object.keys(data[0]);
    for (var i = 0; i < tableHeader.length; i++)
        tableHeader[i] = tableHeader[i].toUpperCase();
    
    // Extracting the data.
    data.forEach(function(element) {
        var line = [];
        Object.values(element).forEach(function(v) {
            line.push(v);
        });

        tabelaDados.push(line);
    }, this);
    
});

/**
 * Inicializando a pagina.
 */
$('document').ready( function() {
    copiaTabelas();

    // Inicializando o vetor de estados apos ter se obtido os campos do 
    // cabecalho.
    estados = new Array(tableHeader.length).fill(0);

    // Colocando o cabecalo na tabela recem-criada.
    var table = $('#table-header');
    console.log(table);
    createTableHeader(table);

    //var pagination = $('ul.pagination');
    //createPagination(pagination);

    ordenaPorColuna(0);
    //reinicializaTabela();
});

/**
 * Creates a table header. Needs the global var tableHeader.
 */
function createTableHeader(table) {
    var header = $('<tr></tr>');
    var th, a;

    for (var i = 0; i < tableHeader.length; i++) {
        th = $('<th></th>')
             .attr('onclick','ordenaPorColuna(' + i + ')')
             .appendTo(header);
        a = $('<a></a>')
             .attr('href','javascript:void(0)')
             .text(tableHeader[i])
             .appendTo(th);
    }

    header.appendTo(table);
}

/**
 * adiciona uma linha na tabela. Utilizada internamente.
 */
function adicionaLinha( novaLinha ) {
    var tabela = document.getElementById( "tabela-dinamica" );
    var linha = tabela.insertRow();

    for( indiceColuna = 0; indiceColuna < novaLinha.length; 
        indiceColuna++ ) {
        coluna = linha.insertCell( indiceColuna );
        coluna.innerHTML = novaLinha[ indiceColuna ];
    }
}

/**
 * a cópia das tabelas é feita analisando o que foi escrito no campo de texto
 * da busca. Se qualquer coluna de uma tupla tiver o que foi escrito no campo
 * de busca a tupla é adicionada na tabela de impressão. Utilizada internamente
 */
function copiaTabelas() {
    stringTextoBusca = document.getElementById( "texto-busca" ).value;
    tabelaDadosImpressao = [];

    for( linha = 0; linha < tabelaDados.length; linha++ ) {
        if( stringTextoBusca == 0 ) {
            tabelaDadosImpressao.push( tabelaDados[ linha ].slice() );
        } else {
            // analisa cada coluna da tupla
            for( coluna = 0; coluna < tabelaDados[ linha ].length; coluna++ ) {
                if( tabelaDados[ linha ][ coluna ].toLowerCase()
                    .includes( stringTextoBusca.toLowerCase() ) ) {
                    tabelaDadosImpressao.push( tabelaDados[ linha ].slice() );
                    break;
                }
            }
        }
    }

}

/**
 * reinicializa a tabela para que as tuplas sejam exibidas com ordem
 * diferente. Utilizada internamente
 */
function reinicializaTabela() {
    primeiraLinhaImpressao = 0;

    var pagination = $('ul.pagination');
    resetPagination(pagination);
}

/**
 * deixa na tabela que será impressa somente as tuplas com valores referentes
 * ao que foi passado no texto de busca
 */
function modificaTabelaParaBusca() {
    copiaTabelas();
    reinicializaTabela();

    var pagination = $('ul.pagination');
    updatePagination(pagination);
}

/**
 * retira todas as linhas da tabela. Utilizada internamente.
 */
function limpaTabela() {
    var tabela = document.getElementById( "tabela-dinamica" );
    var quantidadeLinha = tabela.rows.length;

    // apaga linha por linha
    while( --quantidadeLinha ) {
        tabela.deleteRow( quantidadeLinha );
    }
}

// --------------- Pagination functions ------------------------

/**
 * Rotates the pagination indexes to the right, if possible.
 */
function moveForward() {
    // Checks whether is possible to move forward.
    if (firstPageInList + maxRangePag > numPages)
        return;

    $('li#previous-btn').css('visibility', 'visible');

    // Cleaning the active mark.
    $('li.pag-index').removeClass('active');

    // Calculating the new first index.
    firstPageInList += maxRangePag;
    if ((firstPageInList + maxRangePag -1) > numPages) {
        firstPageInList = numPages - maxRangePag + 1;
    }

    // Updating numbers.
    $('ul.pagination > li.pag-index').each(function() {
        $(this).children('a').text(firstPageInList + $(this).data('id'));
        // In case of the active page continue in the list.
        if (firstPageInList + $(this).data('id') == currPage) {
            $(this).addClass('active');
        }
    });

    if ((firstPageInList + maxRangePag) > numPages)
        $('li#next-btn').css('visibility', 'hidden');
}

/**
 * Rotates the pagination indexes to the right, if possible.
 */
function moveBack() {
    // Checks whether is possible to move back.
    if (firstPageInList == 1)
        return;

    $('li#next-btn').css('visibility', 'visible');

    // Cleaning the active mark.
    $('li.pag-index').removeClass('active');

    // Calculating the new first index.
    firstPageInList -= maxRangePag;
    if (firstPageInList <= 0) {
        firstPageInList = 1;
    }

    // Updating numbers.
    $('ul.pagination > li.pag-index').each(function() {
        $(this).children('a').text(firstPageInList + $(this).data('id'));
        // In case of the active page continue in the list.
        if (firstPageInList + $(this).data('id') == currPage) {
            $(this).addClass('active');
        }
    });

    if (firstPageInList == 1)
        $('li#previous-btn').css('visibility', 'hidden');
}

/**
 * Creates the Pagination Buttons and put it in pagList.
 * @param {*} pagList list of pagination elements.
 * @param {*} n number of pagination buttons.
 */
function createPaginationButtons(pagList, n) {

    // Width of the buttons in the pagination.
    var btnWidth = 30 + Math.floor(Math.log10(numPages)) * 10;
    console.log(btnWidth);

    // Adds the previous button only if it is necessary.
    if (n < numPages) {
        var li = $('<li></li>')
            .attr('id','previous-btn')
            //.addClass('disabled')
            .appendTo(pagList);
        var a = $('<a></a>')
            .attr('href','javascript:moveBack()')
            .appendTo(li)
            .css('width', btnWidth + 'px');
        var icon = $('<i></i>')
            .addClass('fa')
            .addClass('fa-chevron-left')
            //.text(' PREV')
            .appendTo(a);
        }

    // Creating and adding the numbers buttons.
    for (i = 0; i < n; i++) {
        li = $('<li></li>')
            .attr('class','pag-index')
            .data('id', i)
            .appendTo(pagList);
        a = $('<a></a>')
            .attr('href','javascript:void(0)')
            .css('width', btnWidth + 'px')
            .text(i+1)
            .appendTo(li);
    }

    // Adds the next button only if it is necessary
    if (n < numPages) {
        li = $('<li></li>')
            .attr('id','next-btn')
            .appendTo(pagList);
        a = $('<a></a>')
            .attr('href','javascript:moveForward()')
            .css('width', btnWidth + 'px')
            //.text('NEXT ')
            .appendTo(li);
        icon = $('<i></i>')
            .addClass('fa')
            .addClass('fa-chevron-right')
            .appendTo(a);
    }
}

/**
 * Creates the pagination system.
 * @param {*} pagination Pagination element.
 */
function createPagination(pagination) {
    numPages = Math.ceil(tabelaDadosImpressao.length/quantidadeLinhaImpressao);
    console.log('Numero de paginas: ' + numPages);

    if (numPages < maxRangePag) {
        createPaginationButtons(pagination, numPages);
    } else {
        createPaginationButtons(pagination, maxRangePag);
        pagination.find('li#previous-btn').css('visibility', 'hidden');
    }

    // First element will be the current active.
    firstPageInList  = 1;
    var pageSelected = 1;
    pagination.find('li.pag-index').first()
                                   .addClass('active');

    // Function that updates the active page markation.
    pagination.on('click', 'li.pag-index', function() {
        // Changing the page that viewed as active.
        $('li.pag-index').removeClass('active');
        $(this).addClass('active');

        pageSelected = firstPageInList + $(this).data('id');
        // Updates the table only if the page is not currently displayed.
        if (currPage != pageSelected) {
            showTableSlice(pageSelected - 1);
            currPage = pageSelected;
        }
    });
}

/**
 * Activates the first page.
 * @param {*} pagination Pagination element
 */
function resetPagination(pagination) {
    console.log('Reseting Pagination.');
    if (firstPageInList == 1) {
        pagination.find('li.pag-index').removeClass('active')
                                       .first()
                                       .addClass('active');
    } else {
        updatePagination(pagination);
    }
    showTableSlice(0);
}

/**
 * Updates the pagination based on the current numPages.
 * @param {*} pagination Pagination element.
 */
function updatePagination(pagination) {
    console.log('Updating pagination.');
    // Destroying the old pagination.
    pagination.empty();
    // Creating the new one.
    createPagination(pagination);
}

/**
 * Modify the table to show just one part of it.
 * @param {*} n - number of the slice. The slice begin in 
 * (quantidadeLinhaImpressao * n) and have quantidadeLinhaImpressao elements
 * or less.
 */
function showTableSlice(n) {
    // Validation of argument.
    if (quantidadeLinhaImpressao * n < tabelaDadosImpressao.length) {
        limpaTabela();

        var begin = quantidadeLinhaImpressao * n;
        var end = Math.min( 
            begin + quantidadeLinhaImpressao,
            tabelaDadosImpressao.length 
        );

        for (lnumber = begin; lnumber < end; lnumber++) {
            adicionaLinha(tabelaDadosImpressao[lnumber]);
        }
    }
}

/**
 * ordena a tabela baseada nos valores da coluna indicada
 */
var ordenaPorColuna = (function () {
    var funcaoOrdenacao;
    /*
     * guarda os estados da coluna para ordenar entre
     * crescente e decrescente
     */

    return function ( coluna ) {
        if(estados[coluna] == 0 ) {
            funcaoOrdenacao = function( a, b ) {
                return a[ coluna ].localeCompare( b[ coluna ] );
            }
            estados[coluna] = 1;
        } 
        else {
            funcaoOrdenacao = function( a, b ) {
                return b[ coluna ].localeCompare( a[ coluna ] );
            }
            estados[coluna] = 0;
        }
        
        tabelaDados.sort( funcaoOrdenacao );
        tabelaDadosImpressao.sort( funcaoOrdenacao );
        reinicializaTabela();
    }

})();

/**
 * adiciona as tuplas que serão exibidas na tabela. Utilizada
 * internamente

function mostreProximosDadosTabela() {
    limpaTabela();

    var limiteImpressao = Math.min( 
        primeiraLinhaImpressao + quantidadeLinhaImpressao,
        tabelaDadosImpressao.length 
    );
    for( linha = primeiraLinhaImpressao; linha < limiteImpressao; linha++ ) {
        adicionaLinha( tabelaDadosImpressao[ linha ] );
    }
}
 */