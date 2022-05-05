// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 

const numbers = []
let sum = 0;


// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// Fintanto che la somma è minore di 50
while (sum < 50) {

    // chiedo il numero all'utente
    const userNum = Number(prompt("Inserisci un numero"));
    numbers.push(userNum);
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
}

console.log(sum);