const arr = [1, 3 , 4, 5, 8 , 9];

// Percorre todos os valores
const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

// Soma os valores em cada interação
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

// Filtra os valores e retorna com base na condicional inserida no return
const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

// Retorna o valor procurado com base na condicional do return
const find = arr.find(function(item){
    return item === 2;
});

console.log(find);