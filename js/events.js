'use strict';

function klikHeader() {
    console.log('kliknąłeś w header');
}

function alarm(event) {
    event.preventDefault(); //zapobiegamy domyślnej akcji
    console.log('kliknięto w link');
    console.log(event.type);
}

var secondLink = document.getElementsByTagName('a')[1];
secondLink.onclick = alarm;

document.getElementById('title-header').onclick = klikHeader; //wywołaj funkcję na elemencie o id 'title-header'

var paragraf = document.getElementsByTagName('p')[0];

//paragraf.addEventListener('click', klikHeader);
document.getElementsByTagName('p')[0].addEventListener('click', klikHeader);