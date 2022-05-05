


// Fai inserire un numero, che chiameremo N, all’utente.

// const N = Number(prompt("Inserisci un numero"));

const N = Number(prompt("Inserisci un numero"))
// const newArr = [];
const array = [];

// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

// Fintanto che N è maggiore di 0 crea un array

let i = 1;

while (i <= N) {
    const newArr = [];
    // Crea un ciclo per popolare l'array con 10 numeri casuali

    for (let i = 0; i < 10; i++) {
        newArr.push(Math.floor(Math.random() * 100) + 1);
    }
    array.push(newArr);
    i++;
}

console.log(array);
