const nav = document.querySelector('#main-nav')
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const expanders = document.querySelectorAll('.menu-expand');

openBtn.addEventListener('click', () => {
    nav.classList.add('open');
    openBtn.classList.add('hide');
    closeBtn.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('open');
    openBtn.classList.remove('hide');
    closeBtn.classList.add('hide');
})

expanders.forEach(expander => {
    expander.addEventListener('click', () => {
        expander.classList.toggle('rotate');
        expander.nextElementSibling.classList.toggle('dropdown-open');
    })
});






const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const testimonials = document.querySelectorAll('.testimonial');

let i = 0;
display(i);

function display(i) {
    testimonials.forEach((testimonial) => {
        testimonial.style.display = 'none';
    });
    testimonials[i].style.display = 'block';
}

function nextSlide() {
    i++;
    if(i > testimonials.length - 1) {
        i = 0;
    }
    display(i);
}

function prevSlide() {
    i--;
    if(i < 0) {
        i = testimonials.length - 1;
    }
    display(i);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);