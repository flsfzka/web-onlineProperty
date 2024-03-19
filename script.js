const buy = document.querySelector('#buy');
const rent = document.querySelector('#rent');
const sell = document.querySelector('#sell');
const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const dropdownbtn = document.querySelector('.dropdownbtn');
const navItems = document.querySelector('.nav-items');

dropdownbtn.addEventListener('click', () => {
    navItems.checkVisibility('visible');
});

buy.addEventListener('click', () => {
    form.classList.add('visible');
});

rent.addEventListener('click', () => {
    form.classList.add('visible');
});

sell.addEventListener('click', () => {
    form.classList.add('visible');
});

submit.addEventListener('click', () => {
    form.classList.remove('visible');
});