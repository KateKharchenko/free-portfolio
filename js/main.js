let cookie = document.querySelector('.cookie');
let btnc = document.querySelector('#cookie');
btnc.addEventListener('click', function () {
    cookie.classList.remove('fadeInDown');
    cookie.classList.remove('delay-1s');
    cookie.classList.add('fadeInUp');
});

