// quiz.js
const perguntas = [
    { pergunta: "Qual é a capital do Brasil?", resposta: "Brasília" }
];

export function perguntaQuiz() {
    const perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
    return perguntaAleatoria.pergunta;
}

export function verificarResposta(respostaUsuario) {
    const perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];
    return respostaUsuario === perguntaAleatoria.resposta;
}

