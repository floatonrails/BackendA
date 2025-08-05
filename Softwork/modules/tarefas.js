// tarefas.js
let tarefas = [];

export function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
}

export function mostrarTarefas() {
    return tarefas;
}

