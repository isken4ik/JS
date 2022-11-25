const btns = document.querySelectorAll('button');


// console.log(btns[0].classList.length);

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.add('red'));
// // console.log(btns[0].classList.remove('blue'));

// console.log(btns[0].classList.toggle('blue'));

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});