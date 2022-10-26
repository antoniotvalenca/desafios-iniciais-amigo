const array1 = [0, 1, 2, 3, 4, 5, 6, 70, 8, 9];
const array2 = [0, 100, 200, 300, 4, 500, 6, 70, 88, 9];
const array3 = [00, 1, 2, 88, 9, 88, 5, 8, 0, 200, 100];

// usando 0 (...operator) para criar uma array com todos os valores

const array4 = [...array1, ...array2,...array3];

// filtrando os valores repetidos com filter

// no caso do .indexOf(valor) ele vai procurar o index que possui aquele valor. se tiver mais de um index com aquele
// ... mesmo valor, ele entende que o index original é o primeiro que tiver aquele valor

const array5 = array4.filter(function(valor, index){
    return array4.indexOf(valor) === index;
});

console.log(array5);