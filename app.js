"use strict";


// Carousel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
    })
    items[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);

// Remove hidden for right division of new look
function handleResize() {
    const rightDivision = document.getElementById('right-division');
    if (window.innerWidth >= 1040) {
        console.log("viewing!");
        rightDivision.removeAttribute('hidden');
    } else {
        console.log("hiding");
        rightDivision.setAttribute('hidden', "");
    }
}

handleResize();

window.addEventListener('resize', handleResize);

