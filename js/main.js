// menu
const mainTag = document.querySelector('main');
const menuTag = document.querySelector('a.toggle-nav');

menuTag.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = mainTag.classList.toggle('open');
    if (isOpen) {
        menuTag.innerHTML = `<img src="/assets/close.svg" alt="close " /> Close`;
    } else {
        menuTag.innerHTML = `<img src="/assets/menu.svg" alt="menu" /> Menu`;
    }
});

// slides
const slidesArea = document.querySelector('div.slides');
const images = slidesArea.querySelectorAll('img');

let currentSlide = 0;
let zIndex = 1;

slidesArea.addEventListener('click', () => {
    currentSlide = currentSlide + 1;
    zIndex = zIndex + 1;

    if (currentSlide >= images.length) currentSlide = 0;

    images.forEach((image) => (image.style.animation = ''));

    images[currentSlide].style.zIndex = zIndex;
    images[currentSlide].style.animation = 'fade 0.5s';
});

slidesArea.addEventListener('mouseover', () => {
    images.forEach((image) => {
        const x = 25 * Math.floor(Math.random() * 5) - 50;
        const y = 25 * Math.floor(Math.random() * 5) - 50;
        image.style.transform = `translate(${x}px, ${y}px)`;
    });
});

slidesArea.addEventListener('mouseleave', () => {
    images.forEach((image) => {
        image.style.transform = ``;
    });
});
