window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e74c3c';
        this.style.color = 'white';
    });
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.color = 'white';
    });
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slide');
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}


