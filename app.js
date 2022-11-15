const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const testimonial = document.querySelectorAll('.testimonial-info');
const img = document.querySelectorAll('.img');

let i = 0;



const buttonPressed = (asd) => {
    for (let i = 0; i < testimonial.length; i++) {
        testimonial[i].classList.add('hidden');
        img[i].classList.add('hidden');
    }

    if (i < 0) {
        i = testimonial.length - 1;
    }
    if (i > testimonial.length - 1) {
        i = 0;
    }
    asd;


    testimonial[i].classList.remove('hidden');
    img[i].classList.remove('hidden');
}



btnPrev.addEventListener('click', () => {
    buttonPressed(i--);
});

btnNext.addEventListener('click', () => {
    buttonPressed(i++);
});