import { mostrarFrase } from './modules/frases.js';
import { gerarSenha } from './modules/senha.js';
import { converterData } from './modules/datas.js';
import { perguntaQuiz, verificarResposta } from './modules/quiz.js';
import { adicionarTarefa, mostrarTarefas } from './modules/tarefas.js';

// Executa testes de cada módulo no console
console.log("🌟 Frase:", mostrarFrase());
console.log("🔐 Senha:", gerarSenha());
console.log("📆 Data Convertida:", converterData("19-07-2025"));
console.log("🧠 Pergunta:", perguntaQuiz());
console.log("🧠 Resposta:", verificarResposta("Brasília"));
adicionarTarefa("Estudar JS");
mostrarTarefas();

