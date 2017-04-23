function extra(){
	var header  = document.getElementById('table-header');
	var dHeader = document.getElementById('dinamic-thead');
	var outCont = document.getElementById('out-container');
	var hRect   = header.getBoundingClientRect();
	var oRect	= outCont.getBoundingClientRect();
	if(hRect.top<0){//se o scroll esconder o cabeçalho
		dHeader.innerHTML = "";//força a atualização de alguns parâmetros de estilo
		aux  = "<table class='table table-hover'>"+
				"<thead><tr>";
		for(i=0;i<tableHeader.length;i++){//insere cada coluna do cabeçalho dinâmico
			aux += nth_tr(i, tableHeader);
		}
		aux += "</tr></thead></table>";
		dHeader.innerHTML = aux;//atualiza o cabeçalho
		$('#dinamic-thead').css("width",oRect.width);//mantém a oclusão do cabeçalho
		//igual à oclusão do resto da tabela, no caso de redimensionamento
		$('#dinamic-thead').scrollLeft($('#scroll-container').scrollLeft());
	}else{
		dHeader.innerHTML = "";//esconde o cabeçalho se o real ainda está visível
		$('#dinamic-thead').css("width",0);
	}
}

function nth_tr(i, labels){//gera a i-ésima coluna do cabeçalho com a label labels[i] e a largura da coluna correspondente
	return "<th id='tr"+i+"' style='width:"+
			(document.getElementById("tabela-dinamica").rows[0].cells[i].offsetWidth)+"px;' onclick='ordenaPorColuna("+i+")'>"+
			"<a href='#'>"+labels[i]+"</a></th>";
}

window.addEventListener("resize", extra);
window.addEventListener("scroll", extra);

//o bloco abaixo sincroniza o x-scroll do novo header e da tabela
$('#scroll-container').on('scroll', function () {
    $('#dinamic-thead').scrollLeft($(this).scrollLeft());
});