// REST Operator. Guarda o resto do objeto

// Exemplo 1
const usuario = {
    nome : "Diego",
    idade : 23,
    empresa: "Rocktseat"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// Exemplo 2
const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//Exemplo 3

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3));

// Spread Operator

// Exemplo 1 - Concatenando arrays;
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2 ];

console.log(arr3);

// Exemplo 2 - Sobrepor apenas 1 propriedade

const usuario1 = {
    nome: "Samuel",
    idade: 21,
    empresa: "Rocktseat"
};

const usuario2 = { ...usuario1, nome: "Gabriel" };

console.log(usuario1);
console.log(usuario2);
