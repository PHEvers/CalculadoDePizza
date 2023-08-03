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

function NovaPromo(pizzaria, promocao, tamanho, valor){
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

    if (NovaPromo(pizzaria, promocao, tamanho, valor) == false){
        console.log('teste a');
    }else{
        console.log('teste b');
    }
    return true;
}



FormPromo.addEventListener('submit', SalvarPromo);