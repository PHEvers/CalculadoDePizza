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
    if (NovaPromo(pizzaria)=false){
        console.log('teste');
    }
    
}
function NovaPromo(pizzaria){
    var Validacao = true
    if (pizzaria.trim().length === 0){
        inputPizzaria.classList.add('is-invalid');
        Validacao = false;
    }else{
        inputPizzaria.classList.remove('is-invalid');
    }
    return Validacao;
}


FormPromo.addEventListener('submit', SalvarPromo);