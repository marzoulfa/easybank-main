/********* Initializing on scroll animation *********** */
AOS.init();

/**** Constants ***** */
const body = document.querySelector('body');
const btnHumburger = document.getElementById("btnHumburger");
const header = document.querySelector('.header');
const overlay = document.querySelector



btnHumburger.addEventListener('click', function(){

    header.classList.toggle('open');
    body.classList.toggle('hideScroll');
    
});