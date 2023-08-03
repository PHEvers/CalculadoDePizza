var btnEnviar = document.getElementById('btnEnviar');
var FormPromo = document.getElementById('FormPromo');
var Tabela = document.getElementById('Tabela');

var inputPizzaria = document.getElementById('inputPizzaria');
var inputPromocao = document.getElementById('inputPromocao');
var gridCheckBorda = document.getElementById('gridCheckBorda');
var gridCheckRefri = document.getElementById('gridCheckRefri');
var gridCheckBroto = document.getElementById('gridCheckBroto');
var inputTamanho = document.getElementById('inputTamanho');
var inputMedida = document.getElementById('inputMedida');
var inputFrete = document.getElementById('inputFrete');
var inputValor = document.getElementById('inputValor');
var inputCupom = document.getElementById('inputCupom');
var inputDesconto = document.getElementById('inputDesconto');

function SalvarPromo(event){
    event.preventDefault();
    var pizzaria = inputPizzaria.value;
    var promocao = inputPromocao.value;
    var valor = inputValor.value;
    var medida = inputMedida.value;
    var tamanho = inputTamanho.value;
    if (NovaPromo(pizzaria, promocao, valor, medida, tamanho)){

    }
}
function NovaPromo(pizzaria, promocao, valor, medida, tamanho){
    
}


FormPromo.addEventListener('submit', SalvarPromo);