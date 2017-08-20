'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3];

console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stwórz nowy element

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworzony nowy tekst dla elementu

newElement.appendChild(newElementContent); //dodaj tekst do elementu

console.log(newElement);
istniejacyWezel.appendChild(newElement);