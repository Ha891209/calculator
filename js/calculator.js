//Ha elkészült a design írd meg azt a javascript kódot ami a számológép megfelelő működését megvalósítja.

//Követelmények: 

//Az eval metódus használata SZIGORÚAN TILOS! Most és mindörökké!
//Egyelőre nem kell foglalkozni azzal az esettel, hogy mi történik, ha két műveleti jel van egymás után. Ilyen esetekben dobhattok hibát. A felső input mezőben jelenjen meg az ERROR szöveg. 
//Egymás után több művelet is végrehajtható. Pl.: 10-20+3*2. Ilyen esetben a precedencia szabályokra még nem kell odafigyeled, csak balról jobbra, sorba értékelődjenek ki a műveletek!
//A számok, és műveleti jelek a felső input mezőben jelenjenek meg
//Az egyenlőségjelre kattintva az inputban megjelenik a művelet(ek) eredménye
//A C gomb törli az input mező tartamát

'use strict';

const input = document.querySelector('.calculator__screen');
const numbers = document.querySelectorAll('.numbers');
const operator = document.querySelectorAll('.sign');
const equal = document.querySelector('.equal');
const del = document.querySelector('.numbers delete');
let inputText;
let inputNumber = [];
let content;
let result = {};

const calculate = () => {
    inputNumbers.push(parseFloat(input.value.slice(1)));
    result = {
        '+': inputNumbers.reduce((prev, current) => (prev + current)),
        '-': inputNumbers.reduce((prev, current) => (prev - current)),
        'x': inputNumbers.reduce((prev, current) => (prev * current)),
        '÷': inputNumbers.reduce((prev, current) => (prev / current))
    };
    inputNumbers.splice(0, 2, result[content]);
    
    if (isNaN(result[content]) === true) {
        result[content] = 'ERROR';
    }
    input.value = result[content];
}

const resetCalculator = () => {
    input.value = '';
    result = 0;
    inputNumbers = [];
};

console.log(calculate);
console.log(resetCalculator);