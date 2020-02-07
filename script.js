const track = document.querySelector('.carousel-track'); //don't know if this is right
const slides = Array.from(track.children);
const nextButton = document.querySelector('.button-left');
const prevButton = document.querySelector('.button-right');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();

console.log(slideSize);

// left arrow moves sldies to left
// right arrow moves slides to right
// nav indicators moves to specific slide


