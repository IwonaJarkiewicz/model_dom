'use strict';

function klikHeader() {
    console.log('kliknąłeś w header');
}
document.getElementById('title-header').onclick = klikHeader; //wywołaj funkcję na elemencie o id 'title-header'