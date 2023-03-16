/*

Esercizio 1
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

const main = document.querySelector('main');
const paliGame = document.getElementById('pali');
const btnGame1 = document.querySelector('.game1');
const btnGame2 = document.querySelector('.game2');
const form = document.getElementById('palindrome-form');
const input = document.querySelector('input[name="palindrome"]');
const resultPalindrome = document.querySelector('.resultPalindrome');
const btnPalindrome = document.querySelector('.btnPalindrome');



/* choose the game */

btnGame1.addEventListener('click', () => {
    paliGame.classList.toggle('d-none');
    changeButton(
        btnGame1, 
        'Palindromi', 
        'Back Home', 
        'btn-outline-primary',
        'btn-outline-danger' );
});

form.addEventListener('input', () => {
    if (form.checkValidity()) {   
        btnPalindrome.disabled = false;     
    } else {
        btnPalindrome.disabled = true;    
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    resultPalindrome.append(checkStr(input.value));
    input.value = '';
});


function checkStr(str1){
    resultPalindrome.innerHTML = '';
    let strModify = str1.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversed = '';
    let result;
    for (let i = strModify.length - 1; i >= 0; i--){
        reversed += strModify.charAt(i);
    }
    if (reversed === strModify) {
            return result = createChild('h2', ['text-success'], `La stringa "${input.value}" &egrave; un palindromo.`);

    } else {
        return result = createChild('h2', ['text-danger'], `La stringa "${input.value}" non &egrave; un palindromo.`);
        
    }

}

function changeButton(element, firstText, secondText, firstClass, secondClass){
    element.innerText = element.innerText === firstText ? secondText : firstText;
    element.classList.toggle(firstClass);
    element.classList.toggle(secondClass);
}

/* 

Esercizio 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/
