/**
 * função que irá ler o arquivo csv e passar para um array
 */

var tabelaDados=[];

d3.csv("/home/eduardo/github/tp1VdD/src/data/dados-tp1.csv", function(data) {
    console.log(data[0]);
    
    data.forEach(function(element) {
        var aux = [];
        aux.push(element.permalink);
        aux.push(element.company);
        aux.push(element.numEmps);
        aux.push(element.category);
        aux.push(element.city);
        aux.push(element.state);
        aux.push(element.fundedDate);
        aux.push(element.raisedAmt);
        aux.push(element.raisedCurrency);
        aux.push(element.round);
        tabelaDados.push(aux);
        //console.log(aux)
    }, this);
    
})

/*
var tabelaDados = [ 
    ["13/08/16","Burnley","Swansea","0","1"],
    ["13/08/16","Crystal Palace","West Brom","0","1"],
    ["13/08/16","Everton","Tottenham","1","1"],
    ["13/08/16","Hull","Leicester","2","1"],
    ["13/08/16","Man City","Sunderland","2","1"],
    ["13/08/16","Middlesbrough","Stoke","1","1"],
    ["13/08/16","Southampton","Watford","1","1"],
    ["14/08/16","Arsenal","Liverpool","3","4"],
    ["14/08/16","Bournemouth","Man United","1","3"],
    ["15/08/16","Chelsea","West Ham","2","1"],
    ["19/08/16","Man United","Southampton","2","0"],
    ["20/08/16","Burnley","Liverpool","2","0"],
    ["20/08/16","Leicester","Arsenal","0","0"],
    ["20/08/16","Stoke","Man City","1","4"],
    ["20/08/16","Swansea","Hull","0","2"],
    ["20/08/16","Tottenham","Crystal Palace","1","0"],
    ["20/08/16","Watford","Chelsea","1","2"],
    ["20/08/16","West Brom","Everton","1","2"],
    ["21/08/16","Sunderland","Middlesbrough","1","2"],
    ["21/08/16","West Ham","Bournemouth","1","0"],
    ["27/08/16","Chelsea","Burnley","3","0"],
    ["27/08/16","Crystal Palace","Bournemouth","1","1"],
    ["27/08/16","Everton","Stoke","1","0"],
    ["27/08/16","Hull","Man United","0","1"],
    ["27/08/16","Leicester","Swansea","2","1"],
    ["27/08/16","Southampton","Sunderland","1","1"],
    ["27/08/16","Tottenham","Liverpool","1","1"],
    ["27/08/16","Watford","Arsenal","1","3"],
    ["28/08/16","Man City","West Ham","3","1"],
    ["28/08/16","West Brom","Middlesbrough","0","0"],
    ["10/09/16","Arsenal","Southampton","2","1"],
    ["10/09/16","Bournemouth","West Brom","1","0"],
    ["10/09/16","Burnley","Hull","1","1"],
    ["10/09/16","Liverpool","Leicester","4","1"],
    ["10/09/16","Man United","Man City","1","2"],
    ["10/09/16","Middlesbrough","Crystal Palace","1","2"],
    ["10/09/16","Stoke","Tottenham","0","4"],
    ["10/09/16","West Ham","Watford","2","4"],
    ["11/09/16","Swansea","Chelsea","2","2"],
    ["12/09/16","Sunderland","Everton","0","3"],
    ["16/09/16","Chelsea","Liverpool","1","2"],
    ["17/09/16","Everton","Middlesbrough","3","1"],
    ["17/09/16","Hull","Arsenal","1","4"],
    ["17/09/16","Leicester","Burnley","3","0"],
    ["17/09/16","Man City","Bournemouth","4","0"],
    ["17/09/16","West Brom","West Ham","4","2"],
    ["18/09/16","Crystal Palace","Stoke","4","1"],
    ["18/09/16","Southampton","Swansea","1","0"],
    ["18/09/16","Tottenham","Sunderland","1","0"],
    ["18/09/16","Watford","Man United","3","1"],
    ["24/09/16","Arsenal","Chelsea","3","0"],
    ["24/09/16","Bournemouth","Everton","1","0"],
    ["24/09/16","Liverpool","Hull","5","1"],
    ["24/09/16","Man United","Leicester","4","1"],
    ["24/09/16","Middlesbrough","Tottenham","1","2"],
    ["24/09/16","Stoke","West Brom","1","1"],
    ["24/09/16","Sunderland","Crystal Palace","2","3"],
    ["24/09/16","Swansea","Man City","1","3"],
    ["25/09/16","West Ham","Southampton","0","3"],
    ["26/09/16","Burnley","Watford","2","0"],
    ["30/09/16","Everton","Crystal Palace","1","1"],
    ["01/10/16","Hull","Chelsea","0","2"],
    ["01/10/16","Sunderland","West Brom","1","1"],
    ["01/10/16","Swansea","Liverpool","1","2"],
    ["01/10/16","Watford","Bournemouth","2","2"],
    ["01/10/16","West Ham","Middlesbrough","1","1"],
    ["02/10/16","Burnley","Arsenal","0","1"],
    ["02/10/16","Leicester","Southampton","0","0"],
    ["02/10/16","Man United","Stoke","1","1"],
    ["02/10/16","Tottenham","Man City","2","0"],
    ["15/10/16","Arsenal","Swansea","3","2"],
    ["15/10/16","Bournemouth","Hull","6","1"],
    ["15/10/16","Chelsea","Leicester","3","0"],
    ["15/10/16","Crystal Palace","West Ham","0","1"],
    ["15/10/16","Man City","Everton","1","1"],
    ["15/10/16","Stoke","Sunderland","2","0"],
    ["15/10/16","West Brom","Tottenham","1","1"],
    ["16/10/16","Middlesbrough","Watford","0","1"],
    ["16/10/16","Southampton","Burnley","3","1"],
    ["17/10/16","Liverpool","Man United","0","0"],
    ["22/10/16","Arsenal","Middlesbrough","0","0"],
    ["22/10/16","Bournemouth","Tottenham","0","0"],
    ["22/10/16","Burnley","Everton","2","1"],
    ["22/10/16","Hull","Stoke","0","2"],
    ["22/10/16","Leicester","Crystal Palace","3","1"],
    ["22/10/16","Liverpool","West Brom","2","1"],
    ["22/10/16","Swansea","Watford","0","0"],
    ["22/10/16","West Ham","Sunderland","1","0"],
    ["23/10/16","Chelsea","Man United","4","0"],
    ["23/10/16","Man City","Southampton","1","1"],
    ["29/10/16","Crystal Palace","Liverpool","2","4"],
    ["29/10/16","Man United","Burnley","0","0"],
    ["29/10/16","Middlesbrough","Bournemouth","2","0"],
    ["29/10/16","Sunderland","Arsenal","1","4"],
    ["29/10/16","Tottenham","Leicester","1","1"],
    ["29/10/16","Watford","Hull","1","0"],
    ["29/10/16","West Brom","Man City","0","4"],
    ["30/10/16","Everton","West Ham","2","0"],
    ["30/10/16","Southampton","Chelsea","0","2"],
    ["31/10/16","Stoke","Swansea","3","1"],
    ["05/11/16","Bournemouth","Sunderland","1","2"],
    ["05/11/16","Burnley","Crystal Palace","3","2"],
    ["05/11/16","Chelsea","Everton","5","0"],
    ["05/11/16","Man City","Middlesbrough","1","1"],
    ["05/11/16","West Ham","Stoke","1","1"],
    ["06/11/16","Arsenal","Tottenham","1","1"],
    ["06/11/16","Hull","Southampton","2","1"],
    ["06/11/16","Leicester","West Brom","1","2"],
    ["06/11/16","Liverpool","Watford","6","1"],
    ["06/11/16","Swansea","Man United","1","3"],
    ["19/11/16","Crystal Palace","Man City","1","2"],
    ["19/11/16","Everton","Swansea","1","1"],
    ["19/11/16","Man United","Arsenal","1","1"],
    ["19/11/16","Southampton","Liverpool","0","0"],
    ["19/11/16","Stoke","Bournemouth","0","1"],
    ["19/11/16","Sunderland","Hull","3","0"],
    ["19/11/16","Tottenham","West Ham","3","2"],
    ["19/11/16","Watford","Leicester","2","1"],
    ["20/11/16","Middlesbrough","Chelsea","0","1"],
    ["21/11/16","West Brom","Burnley","4","0"],
    ["26/11/16","Burnley","Man City","1","2"],
    ["26/11/16","Chelsea","Tottenham","2","1"],
    ["26/11/16","Hull","West Brom","1","1"],
    ["26/11/16","Leicester","Middlesbrough","2","2"],
    ["26/11/16","Liverpool","Sunderland","2","0"],
    ["26/11/16","Swansea","Crystal Palace","5","4"],
    ["27/11/16","Arsenal","Bournemouth","3","1"],
    ["27/11/16","Man United","West Ham","1","1"],
    ["27/11/16","Southampton","Everton","1","0"],
    ["27/11/16","Watford","Stoke","0","1"],
    ["03/12/16","Crystal Palace","Southampton","3","0"],
    ["03/12/16","Man City","Chelsea","1","3"],
    ["03/12/16","Stoke","Burnley","2","0"],
    ["03/12/16","Sunderland","Leicester","2","1"],
    ["03/12/16","Tottenham","Swansea","5","0"],
    ["03/12/16","West Brom","Watford","3","1"],
    ["03/12/16","West Ham","Arsenal","1","5"],
    ["04/12/16","Bournemouth","Liverpool","4","3"],
    ["04/12/16","Everton","Man United","1","1"],
    ["05/12/16","Middlesbrough","Hull","1","0"],
    ["10/12/16","Arsenal","Stoke","3","1"],
    ["10/12/16","Burnley","Bournemouth","3","2"],
    ["10/12/16","Hull","Crystal Palace","3","3"],
    ["10/12/16","Leicester","Man City","4","2"],
    ["10/12/16","Swansea","Sunderland","3","0"],
    ["10/12/16","Watford","Everton","3","2"],
    ["11/12/16","Chelsea","West Brom","1","0"],
    ["11/12/16","Liverpool","West Ham","2","2"],
    ["11/12/16","Man United","Tottenham","1","0"],
    ["11/12/16","Southampton","Middlesbrough","1","0"],
    ["13/12/16","Bournemouth","Leicester","1","0"],
    ["13/12/16","Everton","Arsenal","2","1"],
    ["14/12/16","Crystal Palace","Man United","1","2"],
    ["14/12/16","Man City","Watford","2","0"],
    ["14/12/16","Middlesbrough","Liverpool","0","3"],
    ["14/12/16","Stoke","Southampton","0","0"],
    ["14/12/16","Sunderland","Chelsea","0","1"],
    ["14/12/16","Tottenham","Hull","3","0"],
    ["14/12/16","West Brom","Swansea","3","1"],
    ["14/12/16","West Ham","Burnley","1","0"],
    ["17/12/16","Crystal Palace","Chelsea","0","1"],
    ["17/12/16","Middlesbrough","Swansea","3","0"],
    ["17/12/16","Stoke","Leicester","2","2"],
    ["17/12/16","Sunderland","Watford","1","0"],
    ["17/12/16","West Brom","Man United","0","2"],
    ["17/12/16","West Ham","Hull","1","0"],
    ["18/12/16","Bournemouth","Southampton","1","3"],
    ["18/12/16","Man City","Arsenal","2","1"],
    ["18/12/16","Tottenham","Burnley","2","1"],
    ["19/12/16","Everton","Liverpool","0","1"],
    ["26/12/16","Arsenal","West Brom","1","0"],
    ["26/12/16","Burnley","Middlesbrough","1","0"],
    ["26/12/16","Chelsea","Bournemouth","3","0"],
    ["26/12/16","Hull","Man City","0","3"],
    ["26/12/16","Leicester","Everton","0","2"],
    ["26/12/16","Man United","Sunderland","3","1"],
    ["26/12/16","Swansea","West Ham","1","4"],
    ["26/12/16","Watford","Crystal Palace","1","1"],
    ["27/12/16","Liverpool","Stoke","4","1"],
    ["28/12/16","Southampton","Tottenham","1","4"],
    ["30/12/16","Hull","Everton","2","2"],
    ["31/12/16","Burnley","Sunderland","4","1"],
    ["31/12/16","Chelsea","Stoke","4","2"],
    ["31/12/16","Leicester","West Ham","1","0"],
    ["31/12/16","Liverpool","Man City","1","0"],
    ["31/12/16","Man United","Middlesbrough","2","1"],
    ["31/12/16","Southampton","West Brom","1","2"],
    ["31/12/16","Swansea","Bournemouth","0","3"],
    ["01/01/17","Arsenal","Crystal Palace","2","0"],
    ["01/01/17","Watford","Tottenham","1","4"],
    ["02/01/17","Everton","Southampton","3","0"],
    ["02/01/17","Man City","Burnley","2","1"],
    ["02/01/17","Middlesbrough","Leicester","0","0"],
    ["02/01/17","Sunderland","Liverpool","2","2"],
    ["02/01/17","West Brom","Hull","3","1"],
    ["02/01/17","West Ham","Man United","0","2"],
    ["03/01/17","Bournemouth","Arsenal","3","3"],
    ["03/01/17","Crystal Palace","Swansea","1","2"],
    ["03/01/17","Stoke","Watford","2","0"],
    ["04/01/17","Tottenham","Chelsea","2","0"],
    ["14/01/17","Burnley","Southampton","1","0"],
    ["14/01/17","Hull","Bournemouth","3","1"],
    ["14/01/17","Leicester","Chelsea","0","3"],
    ["14/01/17","Sunderland","Stoke","1","3"],
    ["14/01/17","Swansea","Arsenal","0","4"],
    ["14/01/17","Tottenham","West Brom","4","0"],
    ["14/01/17","Watford","Middlesbrough","0","0"],
    ["14/01/17","West Ham","Crystal Palace","3","0"],
    ["15/01/17","Everton","Man City","4","0"],
    ["15/01/17","Man United","Liverpool","1","1"],
    ["21/01/17","Bournemouth","Watford","2","2"],
    ["21/01/17","Crystal Palace","Everton","0","1"],
    ["21/01/17","Liverpool","Swansea","2","3"],
    ["21/01/17","Man City","Tottenham","2","2"],
    ["21/01/17","Middlesbrough","West Ham","1","3"],
    ["21/01/17","Stoke","Man United","1","1"],
    ["21/01/17","West Brom","Sunderland","2","0"],
    ["22/01/17","Arsenal","Burnley","2","1"],
    ["22/01/17","Chelsea","Hull","2","0"],
    ["22/01/17","Southampton","Leicester","3","0"],
    ["31/01/17","Arsenal","Watford","1","2"],
    ["31/01/17","Bournemouth","Crystal Palace","0","2"],
    ["31/01/17","Burnley","Leicester","1","0"],
    ["31/01/17","Liverpool","Chelsea","1","1"],
    ["31/01/17","Middlesbrough","West Brom","1","1"],
    ["31/01/17","Sunderland","Tottenham","0","0"],
    ["31/01/17","Swansea","Southampton","2","1"],
    ["01/02/17","Man United","Hull","0","0"],
    ["01/02/17","Stoke","Everton","1","1"],
    ["01/02/17","West Ham","Man City","0","4"],
    ["04/02/17","Chelsea","Arsenal","3","1"],
    ["04/02/17","Crystal Palace","Sunderland","0","4"],
    ["04/02/17","Everton","Bournemouth","6","3"],
    ["04/02/17","Hull","Liverpool","2","0"],
    ["04/02/17","Southampton","West Ham","1","3"],
    ["04/02/17","Tottenham","Middlesbrough","1","0"],
    ["04/02/17","Watford","Burnley","2","1"],
    ["04/02/17","West Brom","Stoke","1","0"],
    ["05/02/17","Leicester","Man United","0","3"],
    ["05/02/17","Man City","Swansea","2","1"],
    ["11/02/17","Arsenal","Hull","2","0"],
    ["11/02/17","Liverpool","Tottenham","2","0"],
    ["11/02/17","Man United","Watford","2","0"],
    ["11/02/17","Middlesbrough","Everton","0","0"],
    ["11/02/17","Stoke","Crystal Palace","1","0"],
    ["11/02/17","Sunderland","Southampton","0","4"],
    ["11/02/17","West Ham","West Brom","2","2"],
    ["12/02/17","Burnley","Chelsea","1","1"],
    ["12/02/17","Swansea","Leicester","2","0"],
    ["13/02/17","Bournemouth","Man City","0","2"],
    ["25/02/17","Chelsea","Swansea","3","1"],
    ["25/02/17","Crystal Palace","Middlesbrough","1","0"],
    ["25/02/17","Everton","Sunderland","2","0"],
    ["25/02/17","Hull","Burnley","1","1"],
    ["25/02/17","Watford","West Ham","1","1"],
    ["25/02/17","West Brom","Bournemouth","2","1"],
    ["26/02/17","Tottenham","Stoke","4","0"],
    ["27/02/17","Leicester","Liverpool","3","1"],
    ["04/03/17","Leicester","Hull","3","1"],
    ["04/03/17","Liverpool","Arsenal","3","1"],
    ["04/03/17","Man United","Bournemouth","1","1"],
    ["04/03/17","Stoke","Middlesbrough","2","0"],
    ["04/03/17","Swansea","Burnley","3","2"],
    ["04/03/17","Watford","Southampton","3","4"],
    ["04/03/17","West Brom","Crystal Palace","0","2"],
    ["05/03/17","Sunderland","Man City","0","2"],
    ["05/03/17","Tottenham","Everton","3","2"],
    ["06/03/17","West Ham","Chelsea","1","2"],
    ["08/03/17","Man City","Stoke","0","0"],
    ["11/03/17","Bournemouth","West Ham","3","2"],
    ["11/03/17","Everton","West Brom","3","0"],
    ["11/03/17","Hull","Swansea","2","1"],
    ["12/03/17","Liverpool","Burnley","2","1"],
    ["18/03/17","Bournemouth","Swansea","2","0"],
    ["18/03/17","Crystal Palace","Watford","1","0"],
    ["18/03/17","Everton","Hull","4","0"],
    ["18/03/17","Stoke","Chelsea","1","2"],
    ["18/03/17","Sunderland","Burnley","0","0"],
    ["18/03/17","West Brom","Arsenal","3","1"],
    ["18/03/17","West Ham","Leicester","2","3"],
    ["19/03/17","Man City","Liverpool","1","1"],
    ["19/03/17","Middlesbrough","Man United","1","3"],
    ["19/03/17","Tottenham","Southampton","2","1"],
    ["01/04/17","Burnley","Tottenham","0","2"],
    ["01/04/17","Chelsea","Crystal Palace","1","2"],
    ["01/04/17","Hull","West Ham","2","1"],
    ["01/04/17","Leicester","Stoke","2","0"],
    ["01/04/17","Liverpool","Everton","3","1"],
    ["01/04/17","Man United","West Brom","0","0"],
    ["01/04/17","Southampton","Bournemouth","0","0"],
    ["01/04/17","Watford","Sunderland","1","0"],
    ["02/04/17","Arsenal","Man City","2","2"],
    ["02/04/17","Swansea","Middlesbrough","0","0"],
    ["04/04/17","Burnley","Stoke","1","0"],
    ["04/04/17","Leicester","Sunderland","2","0"],
    ["04/04/17","Man United","Everton","1","1"],
    ["04/04/17","Watford","West Brom","2","0"],
    ["05/04/17","Arsenal","West Ham","3","0"],
    ["05/04/17","Chelsea","Man City","2","1"],
    ["05/04/17","Hull","Middlesbrough","4","2"],
    ["05/04/17","Liverpool","Bournemouth","2","2"],
    ["05/04/17","Southampton","Crystal Palace","3","1"],
    ["05/04/17","Swansea","Tottenham","1","3"],
    ["08/04/17","Bournemouth","Chelsea","1","3"],
    ["08/04/17","Man City","Hull","3","1"],
    ["08/04/17","Middlesbrough","Burnley","0","0"],
    ["08/04/17","Stoke","Liverpool","1","2"],
    ["08/04/17","Tottenham","Watford","4","0"],
    ["08/04/17","West Brom","Southampton","0","1"],
    ["08/04/17","West Ham","Swansea","1","0"],
    ["09/04/17","Everton","Leicester","4","2"],
    ["09/04/17","Sunderland","Man United","0","3"],
    ["10/04/17","Crystal Palace","Arsenal","3","0"],
    ["15/04/17","Crystal Palace","Leicester","2","2"],
    ["15/04/17","Everton","Burnley","3","1"],
    ["15/04/17","Southampton","Man City","0","3"],
    ["15/04/17","Stoke","Hull","3","1"],
    ["15/04/17","Sunderland","West Ham","2","2"],
    ["15/04/17","Tottenham","Bournemouth","4","0"],
    ["15/04/17","Watford","Swansea","1","0"]
];
*/

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
var quantidadeLinhaImpressao = 15;

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
var maxRangePag = 22;

/**
 * Primeiro indice sendo mostrado na paginacao.
 */
var firstPageInList;

/**
 * Inicializando a pagina.
 */
$('document').ready( function() {
    copiaTabelas();
    ordenaPorColuna(1);
    reinicializaTabela();

    var pagination = $('ul.pagination');
    createPagination(pagination);
});

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
                if( tabelaDados[ linha ][ coluna ].includes( stringTextoBusca ) ) {
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
    mostreProximosDadosTabela();
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
        $('li#previous-btn').css('visibility', 'hidden');
    }

    // First element will be the current active.
    firstPageInList  = 1;
    var pageSelected = 1;
    $('ul.pagination > li.pag-index').first()
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
function ordenaPorColuna( coluna ) {
    var funcaoOrdenacao;

    // ordena em relação à data. Essa ordenação não é lexicográfica
    if( coluna == 0 ) {
        funcaoOrdenacao = function( a, b ) {
            a_split = a[ coluna ].split( '/' );
            b_split = b[ coluna ].split( '/' );

            // se ano igual
            if( a_split[ 2 ].localeCompare( b_split[ 2 ] ) == 0 ) {
                // se mês igual
                if( a_split[ 1 ].localeCompare( b_split[ 1 ] ) == 0 ) {
                    // retorna o dia
                    return a_split[ 0 ].localeCompare( b_split[ 0 ] );
                // caso contrário, retorna o mês
                } else {
                    return a_split[ 1 ].localeCompare( b_split[ 1 ] );
                }
            // caso contrário, retorna o ano
            } else {
                return a_split[ 2 ].localeCompare( b_split[ 2 ] );
            }
        }
    // ordena demais colunas. Ordenação lexicográfica
    } else {
        funcaoOrdenacao = function( a, b ) {
            return a[ coluna ].localeCompare( b[ coluna ] );
        }
    }
    tabelaDados.sort( funcaoOrdenacao );
    tabelaDadosImpressao.sort( funcaoOrdenacao );
    reinicializaTabela();
}

/**
 * adiciona as tuplas que serão exibidas na tabela. Utilizada
 * internamente
 */
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