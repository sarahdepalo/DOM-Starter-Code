'use strict';

const form = document.querySelector('#generateMadLib');
const nameInput = document.querySelector('#nameInput');
const subjectInput = document.querySelector('#subjectInput');
const myName = document.querySelector('#myName');
const mySubject = document.querySelector('#mySubject');

const generateButton = document.querySelector('#madLibButton');


// function changeName () {
//     myName.innerHTML = nameInput.value;

// }

// function changeSubject () {
//     mySubject.innerHTML = subjectInput.value;

// }

// Solution that uses forEach:
function grabValues () {
    const replacementWords = document.querySelectorAll('input');
    const replacementArray = Array.from(replacementWords);
    // Tests that the above is actually an array:
    const test = Array.isArray(replacementArray);
    console.log(test);
    console.log(replacementArray);
    //Tests that its getting the right values:
    replacementArray.forEach((element, index) => {
       console.log(element.value, index);
       myName.innerHTML = replacementArray[0].value;
       mySubject.innerHTML = replacementArray[1].value;
 
    })
   }


generateButton.addEventListener('click', function() {
    // changeName();
    // changeSubject();
    grabValues();
}); 


