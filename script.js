const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children); // make array of UL children (img slides)
const nextButton = document.querySelector('.button-right');
const prevButton = document.querySelector('.button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children); // make array out of div w/ dot-buttons

const slideSize = slides[0].getBoundingClientRect(); // shows all dimensions
const slideWidth = slideSize.width; //show width only

//arrange slides next to one another, must get the slide width and arrange visually

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

// function to remove class list and change display of each slide

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// left arrow moves sldies to left

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
});

// right arrow moves slides to right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
});

// nav indicators moves to specific slide

dotsNav.addEventListener('click', e => {
    // what indicator was clicked on
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot); // returns index # of the dot clicked
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');

    // console.log(targetIndex); // logs the index of the button (remember it's an array) clicked
});


//readME.md 
// using Array.from() method to make an array out of elements
// using getBoundingClientRect() to get object dimensions
// can refactor lines 8 + 9 to become slideWidth = slides[0].getBoundingClientRect().width;
// first time using: translateX, transform, .left property, using querySelector to look for a specific class name within a designated div "track" in this case line 29
// practice using: forEach method, nextElementSibling, prevElementSibling, using parameters in arrow functions
