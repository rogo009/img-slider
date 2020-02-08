const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children); // make array of UL children (img slides)
const nextButton = document.querySelector('.button-right');
const prevButton = document.querySelector('.button-left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children); // make array out of div w/ dot-buttons

const slideSize = slides[0].getBoundingClientRect(); // shows all dimensions
const slideWidth = slideSize.width; //show width only
// refactor lines 8 + 9
// const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to one another, must get the slide width and arrange visually

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// left arrow moves sldies to left


// right arrow moves slides to right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
});

// nav indicators moves to specific slide

//readME.md 
// using Array.from() method to make an array out of elements
// using getBoundingClientRect() to get object dimensions
// can refactor lines 8 + 9 to become slideWidth = slides[0].getBoundingClientRect().width;
