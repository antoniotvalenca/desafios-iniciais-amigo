// funçao para adicionar 0 caso o valor (dia, mes) seja menor que 10

function addZero(data){
    if(data < 10) return `0${data}`;
    if(data >= 10) return `${data}`;
}

// funcao para formatar para o dia anterior a data que será recebida

function formatarData(data, format){
    const day = addZero(data.getDate() - 1);
    const month = addZero(data.getMonth() + 1);
    const year = data.getFullYear();

    if(format === 'DD'){
        return `${day}`;
    } else if (format === 'DD/MM') {
        return `${day}/${month}`;
    } else if(format === 'DD/MM/YYYY') {
        return `${day}/${month}/${year}`;
    } else {
        return "parâmetro inválido";
    }
}

const dataFormatada = formatarData(new Date(), 'DD/MM');
console.log(dataFormatada);