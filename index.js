const express = require('express');
const app = express();
const calculadoraIMC = require('./servicos/calculadoraIMC.js')
const retornarIMC = require('./servicos/calculadoraIMC.js')
const validaParimetro = require('./servicos/calculadoraIMC')

app.get('/',(req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
    if(calculadoraIMC.validaParimetro(peso)&&calculadoraIMC.validaParimetro(altura)) {
    let imc = calculadoraIMC.efetuarCalculo(peso, altura);
    let status = calculadoraIMC.retornarIMC(imc, status)
    let json = {imc: imc, status: status}
    res.json(json);
}});
else {
    res.status(400).json( erro: "Não há valor numerico em peso ou altura")
}
app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node iniciado em: " + data);
});