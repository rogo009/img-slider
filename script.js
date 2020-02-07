const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children); // make array of UL children (img slides)
const nextButton = document.querySelector('.button-left');
const prevButton = document.querySelector('.button-right');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children); // make array out of div w/ dot-buttons

const slideSize = slides[0].getBoundingClientRect(); // shows all dimensions
const slideWidth = slideSize.width; //show width only

// console.log(slideWidth);

//arrange slides next to one another, must get the slide width and arrange visually

slides[0].style.left = 0;
slides[1].style.left = slideWidth + 'px'; // concatenate 'px' to make it a value otherwise
slides[2].style.left = slideWidth *2 + 'px';

// left arrow moves sldies to left
// right arrow moves slides to right
// nav indicators moves to specific slide

//readME.md 
// using Array.from() method to make an array out of elements
// using getBoundingClientRect() to get object dimensions
// can refactor lines 8 + 9 to become slideWidth = slides[0].getBoundingClientRect().width;
