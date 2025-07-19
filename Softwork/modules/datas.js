export function converterData(dataDDMMYYYY) {
  const [dia, mes, ano] = dataDDMMYYYY.split('-');
  return `${ano}-${mes}-${dia}`;
}

