var btnEnviar       = document.getElementById('btnEnviar');
var FormPromo       = document.getElementById('FormPromo');
var Tabela          = document.getElementById('Tabela');

var inputPizzaria   = document.getElementById('inputPizzaria');
var inputPromocao   = document.getElementById('inputPromocao');
var gridCheckBorda  = document.getElementById('gridCheckBorda');
var gridCheckRefri  = document.getElementById('gridCheckRefri');
var gridCheckBroto  = document.getElementById('gridCheckBroto');
var inputTamanho    = document.getElementById('inputTamanho');
var inputMedida     = document.getElementById('inputMedida');
var inputFrete      = document.getElementById('inputFrete');
var inputValor      = document.getElementById('inputValor');
var inputCupom      = document.getElementById('inputCupom');
var inputDesconto   = document.getElementById('inputDesconto');

var corpoTabela     = document.getElementById('corpoTabela');
var itemVazio       = document.getElementById('itemVazio');

var listaPromo      = [];
var promoTeste      = {
    Pizzaria:   'Pizzaria teste 1',
    Promocao:   'Promocao teste 1',
    ValorArea:  '30',
    Total:      '80',
    Adicionais: 'Borda recheada',

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
        var celularValorArea = document.createElement('td');
        var celulaTotal      = document.createElement('td');
        var celulaAdicionais = document.createElement('td');

        celulaPizzaria.  innerText = evento.Pizzaria;
        celulaPromo.     innerText = evento.Promocao;
        celularValorArea.innerText = evento.ValorArea;
        celulaTotal.     innerText = evento.Total;
        celulaAdicionais.innerText = evento.Adicionais;

        linha.appendChild(celulaPizzaria);
        linha.appendChild(celulaPromo);
        linha.appendChild(celularValorArea);
        linha.appendChild(celulaTotal);
        linha.appendChild(celulaAdicionais);

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
    var frete = inputFrete;
    var valor = inputValor.value;
    var medida = inputMedida.value;

    if (Validacao(pizzaria, promocao, tamanho, valor) == false){
        console.log('teste a = Falso');
    }else{
        console.log('teste b = True');
        listaPromo.push({
            Pizzaria:   pizzaria,
            Promocao:   promocao,
            ValorArea:  tamanho/valor,
            Total:      (valor + frete),
            Adicionais: 'Indefinido'
        });
        atualizaLista();
    }
    return true;
}



FormPromo.addEventListener('submit', SalvarPromo);
window.addEventListener('load', atualizaLista);