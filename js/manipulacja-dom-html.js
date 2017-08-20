'use strict';

var mainHeader = document.getElementById('main-header') //przypisujemy nagłówek strony do zmiennej

var tresc = mainHeader.innerHTML; //pobieranie treści z nagłówka
console.log(tresc);

mainHeader.innerHTML = "Treść nagłówka"; //dodajemy treść
var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwsszylink do zmiennej
console.log(link);

link.href = "http://akademia108.pl"; //nadpisujemy atrybut href w link

link.className = 'nowa-klasas'; //nadpisujemy nazwę klasy w linku

link.style.color = '#11aa22'; //dodajemy styl

