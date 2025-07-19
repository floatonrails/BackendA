export function mostrarFrase() {
  const frases = [
    "Acredite no seu potencial.",
    "Você é mais forte do que imagina.",
    "Não existe vitória sem esforço."
  ];
  return frases[Math.floor(Math.random() * frases.length)];
}

