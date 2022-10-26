const dataISO = '2022-06-07T01:01:06.336Z';

// criando uma variavel que guarda a data acima no modo data
const data = new Date(dataISO);

// funçao para adicioinar um zero na formataçao da data (dia, mes, hora e minuto) caso seja um numero de 9 para baixo
function addZero(value) {
    if(value < 10) return `0${value}`;
    if(value >= 10) return `${value}`;
};

// funçao para pegar data completa (dia mes ano hora minuto)
function fullDataFormat(data){
    const day = addZero(data.getDate());
    const month = addZero(data.getMonth() + 1);
    const year = data.getFullYear();

    const hours = addZero(data.getHours());
    const minutes = addZero(data.getMinutes());

    return `${day}/${month}/${year}  ${hours}:${minutes}`;
}

// funçao para pegar a data semi completa (dia mes ano)
function calendarDataFormat(data){
    const day = addZero(data.getDate());
    const month = addZero(data.getMonth() + 1);
    const year = data.getFullYear();

    return `${day}/${month}/${year}`;
}
console.log(data);
console.log(fullDataFormat(data));
console.log(calendarDataFormat(data));