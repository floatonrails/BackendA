// datas.js
export function converterData(data) {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const partes = data.split("-");
    return `${partes[0]} de ${meses[parseInt(partes[1]) - 1]} de ${partes[2]}`;
}

