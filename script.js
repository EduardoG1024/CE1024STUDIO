const openBtn1 = document.querySelector('#open-modal1');
const openBtn2 = document.querySelector('#open-modal2');
const openBtn3 = document.querySelector('#open-modal3');
const openBtn4 = document.querySelector('#open-modal4');
const dialog1 = document.querySelector('#dialogproyecto1');
const dialog2 = document.querySelector('#dialogproyecto2');
const dialog3 = document.querySelector('#dialogproyecto3');
const dialog4 = document.querySelector('#dialogproyecto4');
const closeBtn1 = document.querySelector('#close-modal1');
const closeBtn2 = document.querySelector('#close-modal2');
const closeBtn3 = document.querySelector('#close-modal3');
const closeBtn4 = document.querySelector('#close-modal4');

//proyecto1
openBtn1.addEventListener('click', () => dialog1.showModal());
closeBtn1.addEventListener('click', () => dialog1.close());

//proyecto2
openBtn2.addEventListener('click', () => dialog2.showModal());
closeBtn2.addEventListener('click', () => dialog2.close());

//proyecto3
openBtn3.addEventListener('click', () => dialog3.showModal());
closeBtn3.addEventListener('click', () => dialog3.close());

//proyecto4
openBtn4.addEventListener('click', () => dialog4.showModal());
closeBtn4.addEventListener('click', () => dialog4.close());
