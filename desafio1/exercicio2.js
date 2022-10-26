const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// com filter:

const arrayFilter = arrayNumeros.filter(valor => valor % 2 === 0);

console.log(arrayFilter);

// com forEach:

const arrayForEach = []

arrayNumeros.forEach(function(value){
    if(value % 2 === 0) arrayForEach.push(value);
});

console.log(arrayForEach)
