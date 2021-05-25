'use strict';

const form = document.querySelector('#generateMadLib');
const nameInput = document.querySelector('#nameInput');
const subjectInput = document.querySelector('#subjectInput');
const myName = document.querySelector('#myName');
const mySubject = document.querySelector('#mySubject');

const generateButton = document.querySelector('#madLibButton');


function changeName () {
    myName.innerHTML = nameInput.value;

}

function changeSubject () {
    mySubject.innerHTML = subjectInput.value;

}


function grabValues () {
    const replacementWords = document.querySelectorAll('input');
    const replacementArray = Array.from(replacementWords);
    const test = Array.isArray(replacementArray);
    console.log(test);
    replacementArray.forEach(element => console.log(element.value));
    replacementArray.forEach((index) => {
        console.log('index: '+ index);
    })
     
}

function changePlaceholders () {

}

// create another function to change those placeholder values.


generateButton.addEventListener('click', function() {
    // changeName();
    // changeSubject();
    grabValues();
}); 


