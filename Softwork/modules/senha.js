export function gerarSenha(tamanho = 12) {
  const chars = 'ABCDEFGHUYTUTRUJFSDGSDH@#$%&';
  return Array.from({ length: tamanho }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

