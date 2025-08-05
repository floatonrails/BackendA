<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>MotivaBox</title>
</head>
<body>
    <h1>MotivaBox</h1>
    <p id="frase"></p>
    <p id="senha"></p>
    <p id="data"></p>
    <p id="perguntaQuiz"></p>
    <p id="respostaQuiz"></p>
    <ul id="listaTarefas"></ul>
    <script type="module" src="./main.js"></script>
</body>
</html>
<script>
// main.js
import { mostrarFrase } from './modules/frases.js';
import { gerarSenha } from './modules/senha.js';
import { converterData } from './modules/datas.js';
import { perguntaQuiz, verificarResposta } from './modules/quiz.js';
import { adicionarTarefa, mostrarTarefas } from './modules/tarefas.js';

document.getElementById('frase').textContent = `🌟 Frase: ${mostrarFrase()}`;
document.getElementById('senha').textContent = `🔐 Senha: ${gerarSenha()}`;
document.getElementById('data').textContent = `📆 Data Convertida: ${converterData("19-07-2025")} `;

const pergunta = perguntaQuiz();
document.getElementById('perguntaQuiz').textContent = `🧠 Pergunta: ${pergunta}`;

// Simulando uma resposta para o quiz
const resposta = verificarResposta("Brasília");
document.getElementById('respostaQuiz').textContent = `🧠 Resposta: ${resposta ? "Correta" : "Incorreta"}`;

adicionarTarefa("Estudar JS");
adicionarTarefa("Praticar exercícios");

const listaTarefas = document.getElementById('listaTarefas');
mostrarTarefas().forEach(tarefa => {
    const li = document.createElement('li');
    li.textContent = tarefa;
    listaTarefas.appendChild(li);
});

// Executa testes de cada módulo no console
console.log("🌟 Frase:", mostrarFrase());
console.log("🔐 Senha:", gerarSenha());
console.log("📆 Data Convertida:", converterData("19-07-2025"));
console.log("🧠 Pergunta:", perguntaQuiz());
console.log("🧠 Resposta:", verificarResposta("Brasília"));
console.log("📝 Tarefas:", mostrarTarefas());

</script>
