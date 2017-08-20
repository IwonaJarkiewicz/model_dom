'use strict';

var pierwszyDiv = document.getElementById('parFirst');

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextElementSibling);
//console.log(pierwszyDiv);
//console.log(pierwszyDiv.lastChild);
//console.log(pierwszyDiv.childNodes[1]);
//console.log(pierwszyDiv.parentNode);
//console.log(pierwszyDiv.parentElement);
console.log(pierwszyDiv.nodeType);