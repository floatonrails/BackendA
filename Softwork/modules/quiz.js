export function perguntaQuiz() {
  return perguntas[Math.floor(Math.random() * perguntas.length)].pergunta;
}

export function verificarResposta(resposta) {
  const atual = perguntas.find(p => resposta.toLowerCase() === p.resposta.toLowerCase());
  return atual ? "✅ Correto!" : "❌ Errado.";
}

