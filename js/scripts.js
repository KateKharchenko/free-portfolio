(function() {
    let closeBtns = document.querySelectorAll('[data-close]'),
        openBtns = document.querySelectorAll('[data-open]');
    console.log(closeBtns);
    closeBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            document.body.classList.remove('with-modal');
            document.querySelector('.modal.open').classList.remove('open');
        })
    })

    openBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.getAttribute('data-target');
            document.body.classList.add('with-modal');
            document.querySelector('.' + target).classList.add('open');
        })
    })
})();