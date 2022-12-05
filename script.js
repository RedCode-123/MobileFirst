'use strict';

let goToLeft = document.querySelector('#go-left');
let goToRight = document.querySelector('#go-right');
let currency = document.querySelector('.main-tables-container');
let brockers = document.querySelector('.main-tables-container-2');

goToLeft.addEventListener('click', leftAction);
goToRight.addEventListener('click', rightAction);


function leftAction() {
    // console.log('Ir a la izquierda');
    currency.classList.toggle('inactive');
    brockers.classList.toggle('inactive');
}
function rightAction() {
    // console.log('Ir a la derecha');
    currency.classList.toggle('inactive');
    brockers.classList.toggle('inactive');
}
