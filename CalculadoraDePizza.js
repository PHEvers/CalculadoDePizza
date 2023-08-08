var btnEnviar       = document.getElementById('btnEnviar');
var FormPromo       = document.getElementById('FormPromo');
var Tabela          = document.getElementById('Tabela');

var inputPizzaria   = document.getElementById('inputPizzaria');
var inputPromocao   = document.getElementById('inputPromocao');
var inputTamanho    = document.getElementById('inputTamanho');
var selectMedida    = document.getElementById('selectMedida');
var inputValor      = document.getElementById('inputValor');


var corpoTabela     = document.getElementById('corpoTabela');
var itemVazio       = document.getElementById('itemVazio');

var listaPromo      = [];
var promoTeste      = {
    Pizzaria:   'Pizzaria teste 1',
    Promocao:   'Promocao teste 1',
    Area:       '100',
    ValorArea:  '30',
    Total:      '80',

}

listaPromo.push(promoTeste);

function atualizaLista(){
    corpoTabela.innerHTML = '';
    if (listaPromo.length === 0){
        corpoTabela.innerHTML = '<tr> <th scope="row">1</th><td>Lista vazia</td><td>----</td><td>----</td><td>----</td><td>----</td></tr>'
        return;
    }
    for (var i = 0; i < listaPromo.length; i++){
        var evento = listaPromo[i];

        var linha = document.createElement('tr');
        
        var celulaPizzaria   = document.createElement('td');
        var celulaPromo      = document.createElement('td');
        var celulaArea       = document.createElement('td');
        var celularValorArea = document.createElement('td');
        var celulaTotal      = document.createElement('td');

        celulaPizzaria.  innerText = evento.Pizzaria;
        celulaPromo.     innerText = evento.Promocao;
        celularValorArea.innerText = evento.ValorArea;
        celulaTotal.     innerText = evento.Total;
        celulaArea.      innerText = evento.Area;

        linha.appendChild(celulaPizzaria);
        linha.appendChild(celulaPromo);
        linha.appendChild(celulaArea);
        linha.appendChild(celularValorArea);
        linha.appendChild(celulaTotal);
        
        corpoTabela.appendChild(linha);
    }
}

function Validacao(pizzaria, promocao, tamanho, valor){
    var Validacao = true
    if (pizzaria.trim().length === 0 ){
        inputPizzaria.classList.add('is-invalid');
        Validacao = false;
    }else{
        inputPizzaria.classList.remove('is-invalid');
    }

    if (promocao.trim().length === 0 ){
        inputPromocao.classList.add('is-invalid');
        Validacao = false;
    }else{
        inputPromocao.classList.remove('is-invalid');
    }

    if (tamanho.trim().length === 0 || tamanho < 0){
        inputTamanho.classList.add('is-invalid');
        Validacao = false;
    }else{
        inputTamanho.classList.remove('is-invalid');
    }

    if (valor.trim().length === 0 || valor < 0){
        inputValor.classList.add('is-invalid');
        Validacao = false;
    }else{
        inputValor.classList.remove('is-invalid');
    }
    return Validacao;
}

function SalvarPromo(event){
    event.preventDefault();
    var pizzaria = inputPizzaria.value;
    var promocao = inputPromocao.value;
    var tamanho = inputTamanho.value;
    var valor = inputValor.value;
    var medida = selectMedida.value;
    var area = 0;
    var valorArea = 0;

    if (Validacao(pizzaria, promocao, tamanho, valor) == false){
        console.log('Invalido');
    }else{
        console.log(medida);
        console.log(pizzaria);
        if(medida == 1){
            console.log('diam');
            area = (((tamanho/2)*(tamanho/2))*3.14);
            
        }else if(medida == 2){
            console.log('raio');
            area = ((tamanho*tamanho)*3.14);
            
        }else if(medida == 3){
            tamanho = tamanho/(6.28)
            console.log('perimetro');
            area = ((tamanho*tamanho)*3.14);
        }
        valorArea = valor/area;
        listaPromo.push({
            Pizzaria:   pizzaria,
            Promocao:   promocao,
            Area:       area,
            ValorArea:  valorArea,
            Total:      valor,
        });
        atualizaLista();
    }
    return true;
}



FormPromo.addEventListener('submit', SalvarPromo);
window.addEventListener('load', atualizaLista);