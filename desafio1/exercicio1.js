const arrayNumeros = [0, '1', '1.5', 2, 3, 4, 5, 6, 7, '8', 9];

// tirando de string para number e declarando a array final que vai sofrer as alteraçoes
const parsedArray = arrayNumeros.map(num => parseFloat(num));
const finalArray = [];

// percorrendo a array consertada:
parsedArray.forEach((currentValue, index) => {

    // no index 0, só da push nele mesmo para a array final (ja que ele nao sofreria nenhuma alteraçao)
    if (index === 0) {
        finalArray.push(currentValue)
        return;
    }

    // criando variaveis para nao poluir o codigo
    const previousValueIndex = index - 1;
    const valueToPush = parsedArray[previousValueIndex] + currentValue;

    if (valueToPush % 2 === 0) { // se for par, só retorna o novo valor como a soma dele e do anterior
        finalArray.push(valueToPush)
        return;
    } else { // senao, retorna o valueToPush + 0.5 e valueToPush
        finalArray.push(valueToPush + 0.5, valueToPush);
    }
});

console.log(finalArray);