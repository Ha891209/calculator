//Ha elkészült a design írd meg azt a javascript kódot ami a számológép megfelelő működését megvalósítja.

//Követelmények: 

//Az eval metódus használata SZIGORÚAN TILOS! Most és mindörökké!
//Egyelőre nem kell foglalkozni azzal az esettel, hogy mi történik, ha két műveleti jel van egymás után. Ilyen esetekben dobhattok hibát. A felső input mezőben jelenjen meg az ERROR szöveg. 
//Egymás után több művelet is végrehajtható. Pl.: 10-20+3*2. Ilyen esetben a precedencia szabályokra még nem kell odafigyeled, csak balról jobbra, sorba értékelődjenek ki a műveletek!
//A számok, és műveleti jelek a felső input mezőben jelenjenek meg
//Az egyenlőségjelre kattintva az inputban megjelenik a művelet(ek) eredménye
//A C gomb törli az input mező tartamát

'use strict';
const input = document.querySelector('input');
let inputText;
let inputNumber = [];
let memory;
let result = {};
const writeToInput = (text) => {
    inputText = (input.value);
    input.value = inputText + text;
}
document
    .querySelectorAll('.numbers')
    .forEach(item => item.addEventListener('click', () => writeToInput(item.textContent)));

const signToMemory = (text) => {
        if (inputNumber.length === 0) {
            inputNumber.push(parseFloat(input.value));
            console.log(inputNumber[0]);
        } else {
            calculate();
        }
        input.value = '';
        writeToInput(text);
        memory = text;
    }    
document
        .querySelectorAll('.sign')
        .forEach(item => item.addEventListener('click', () => signToMemory(item.textContent)));
    
const calculate = () => {
            inputNumber.push(parseFloat(input.value.slice(1)));
            result = {
                '+': inputNumber.reduce((prev, current) => (prev + current)),
                '-': inputNumber.reduce((prev, current) => (prev - current)),
                'x': inputNumber.reduce((prev, current) => (prev * current)),
                '÷': inputNumber.reduce((prev, current) => (prev / current)),
            }
            inputNumber.splice(0, 2, result[memory]);
            if (Number.isNaN(result[memory])) {
                input.value = 'Error';
            } else {
                input.value = result[memory];
            }
        }        
document
            .querySelector('.equal')
            .addEventListener('click', calculate);

const deleteBtn = () => {
                input.value = '';
                result = 0;
                inputNumber = [];
            }
document
            .querySelector('.delete')
            .addEventListener('click', deleteBtn);    