const main = document.querySelector('main');
const paliGame = document.getElementById('pali');
const pariDispariGame = document.getElementById('paridispari');
const btnGame1 = document.querySelector('.game1');
const btnGame2 = document.querySelector('.game2');
const formPali = document.getElementById('palindrome-form');
const formPD = document.getElementById('paridispari-form')
const input = document.querySelector('input[name="palindrome"]');
const inputPD = document.querySelector('input[name="userNum"]');
const selected = document.querySelector('select');
const resultPalindrome = document.querySelector('.resultPalindrome');
const resultPariDispari = document.querySelector('.resultPariDispari');
const btnPalindrome = document.querySelector('.btnPalindrome');
const btnPariDispari = document.querySelector('.btnPariDispari');



/* choose the game */

btnGame1.addEventListener('click', () => {
    paliGame.classList.toggle('d-none');
    btnGame2.classList.toggle('d-none');

    changeButton(
        btnGame1, 
        'Palindromi', 
        'Back Home', 
        'btn-outline-primary',
        'btn-outline-danger' );
        animatedTheBg('');
});

btnGame2.addEventListener('click', () => {
    pariDispariGame.classList.toggle('d-none');
    btnGame1.classList.toggle('d-none');
    changeButton(
        btnGame2, 
        'Pari o Dispari', 
        'Back Home', 
        'btn-outline-primary',
        'btn-outline-danger' );
        animatedTheBg('');
});

/*

Esercizio 1
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

formPali.addEventListener('input', () => {
    if (formPali.checkValidity()) {   
        btnPalindrome.disabled = false;     
    } else {
        btnPalindrome.disabled = true;    
    }
});

formPali.addEventListener('submit', (event) => {
    event.preventDefault();
    resultPalindrome.append(checkStr(input.value));
    input.value = '';
});



/* 

Esercizio 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/


formPD.addEventListener('input', () => {
    if (formPD.checkValidity() && inputPD.value <=5 && inputPD.value >0) {   
        btnPariDispari.disabled = false;     
    } else {
        btnPariDispari.disabled = true;    
    }
});

formPD.addEventListener('submit', (event) => {
    event.preventDefault();
    let text='', color = '';
    if (checkWinner(inputPD.value, selected.selectedIndex)){
        text = 'Hai vinto!';
        color = ['text-success'];
        animatedTheBg('success');
    } else {
        text = 'Hai perso.';
        color = ['text-danger'];
        animatedTheBg('lose');
    }
    resultPariDispari.append(createChild('h3', color, text));
    inputPD.value = '';
});

/*  FUNCTIONS  */
function checkWinner(userNum, userChoice) {
resultPariDispari.innerHTML = '';

  const random = getRandomInt(1, 5);
  const sum = parseInt(userNum) + random;
  resultPariDispari.append(createChild('small', '', `&Egrave; uscito: ${sum}`));
  if (userChoice === 0) {
    if (sum % 2 === 0) {
      return true;
    }
  } else {
     if (sum % 2 != 0) {
      return true;
    }
  }
  return false;

  
}


function checkStr(str1){
    resultPalindrome.innerHTML = '';
    let strModify = str1.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversed = '';
    for (let i = strModify.length - 1; i >= 0; i--){
        reversed += strModify.charAt(i);
    }
    if (reversed === strModify) {
        animatedTheBg('success');
            return result = createChild('h2', ['text-success'], `La stringa "${input.value}" &egrave; un palindromo.`);

    } else {
        animatedTheBg('lose');
        return result = createChild('h2', ['text-danger'], `La stringa "${input.value}" non &egrave; un palindromo.`);
        
    }

}

function changeButton(element, firstText, secondText, firstClass, secondClass){
    element.innerText = element.innerText === firstText ? secondText : firstText;
    element.classList.toggle(firstClass);
    element.classList.toggle(secondClass);
    resultPalindrome.innerHTML = '';
    resultPariDispari.innerHTML = '';   
}


function animatedTheBg(className){
    const divBg = document.getElementById('animatedBg');
    divBg.classList.remove('animate');
    divBg.className = className;
    divBg.offsetWidth;  
    divBg.classList.add('animate');
   
}