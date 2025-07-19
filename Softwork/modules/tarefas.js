const tarefas = [];

export function adicionarTarefa(texto) {
  if (texto) tarefas.push(texto);
}

export function mostrarTarefas() {
  console.log("📒 Tarefas:");
  tarefas.forEach((t, i) => console.log(`${i + 1}. ${t}`));
}

