// Crea due tag div con due id diversi:
const redDiv = document.getElementById("red");
const greenDiv = document.getElementById("green");

// un div avrà il testo colorato di rosso mentre l’altro di verde.

redDiv.style.color = "red";
greenDiv.style.color = "green";

// Partendo da un array di numeri, stampiamo nell’id rosso i numeri pari e in verde i numeri dispari.


const Numbers = [12, 24, 11, 239, 68, 932, 65, 222, 7545, 8, 9, 26];
const evenNum = [];
const oddNum = [];

for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] % 2 === 0) {
        evenNum.push(Numbers[i]);
        redDiv.innerHTML = evenNum;
    } else {
        oddNum.push(Numbers[i]);
        greenDiv.innerHTML = oddNum;
    }
}