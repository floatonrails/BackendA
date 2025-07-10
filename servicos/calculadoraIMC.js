function efetuarCalculo(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function retornarIMC(imc) {
let status;
if (imc < 18.5) {
status = "Abaixo do peso"
}
else if(imc >= 18.5 && imc < 24.9)
{
    status = 'Peso normal'
}
else if(imc >= 24.9 && imc < 30)
{
    status = "Acima do peso"
}
    else
{
    status = 'Obeso';
}
};
function validaParametro(erro) {;
    if(isNaN(parametro))
    {
    return false
}
    else {
return true
    }
}
exports.retornarIMC = retornarIMC
exports.efetuarCalculo = efetuarCalculo
exports.validaParametro = validaParimetro
