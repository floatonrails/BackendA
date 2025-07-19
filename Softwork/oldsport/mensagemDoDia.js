let dados = require('./dados.js');

function retornarMensagemDoDia(dia) {
    return dados.frases[dia - 1];
};
exports.retornarMensagemDoDia = retornarMensagemDoDia;
