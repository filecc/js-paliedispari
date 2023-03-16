/* 

Esercizio 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

/*

Esercizio 1
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

const form = document.getElementById('palindrome-form');
const input = document.querySelector('input[name="palindrome"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (form.checkValidity) {
        checkStr(input.value)
        input.value = '';
        
  }
})



function checkStr(str1){

    let strModify = str1.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversed = '';
    
    for (let i = strModify.length - 1; i >= 0; i--){
        reversed += strModify.charAt(i);
    }

    if (reversed === strModify) {
        console.log('La stringa "' + str1 + '" è un palindromo.');
    } else {
        console.log('La stringa "' + str1 + '" non è un palindromo.');
    }

}

MediaDeviceInfo