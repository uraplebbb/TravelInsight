let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}
// scripts.js

// Define a variable to store the initial background color of the navbar
let initialNavbarColor;

window.onscroll = function () {
  updateNavbar();
  updateProgressBar();
};

function updateNavbar() {
  const navbar = document.getElementById("navbar");

  // Check if the initialNavbarColor is not set yet
  if (!initialNavbarColor) {
    // Store the initial background color of the navbar
    initialNavbarColor = window.getComputedStyle(navbar).backgroundColor;
  }

  if (window.scrollY > 80) {
    navbar.style.backgroundColor = "rgb(199, 199, 199,0.777)";
  } else {
    // Restore the initial background color when scrolled back to the top
    navbar.style.backgroundColor = initialNavbarColor;
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  progressBar.style.width = progress + "%";
}
let currentSlideIndex = 0;
showSlide(currentSlideIndex);

function moveSlide(n) {
  showSlide((currentSlideIndex += n));
}

function currentSlide(n) {
  showSlide((currentSlideIndex = n));
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n >= slides.length) {
    currentSlideIndex = 0;
  } else if (n < 0) {
    currentSlideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[currentSlideIndex].style.display = "flex";
  dots[currentSlideIndex].className += " active";
}




// script.js

// Function to adjust elements based on screen size
function adjustElements() {
  const navbar = document.getElementById('navbar');
  const heroContent = document.querySelector('.hero-content h1');
  const definition = document.querySelector('.hero-content p.definition');
  const blogGrid = document.querySelector('.blog-grid');
  const iframe = document.querySelector('.video-container iframe');

  if (window.innerWidth <= 1024) {
    heroContent.style.fontSize = '28px';
    definition.style.fontSize = '14px';
    if (blogGrid) blogGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    if (iframe) {
      iframe.style.width = '600px';
      iframe.style.height = '338px';
    }
  } else if (window.innerWidth <= 768) {
    navbar.classList.add('responsive');
    heroContent.style.fontSize = '24px';
    definition.style.fontSize = '14px';
    if (blogGrid) blogGrid.style.gridTemplateColumns = '1fr';
    if (iframe) iframe.style.width = '100%';
  } else if (window.innerWidth <= 576) {
    navbar.classList.add('responsive');
    heroContent.style.fontSize = '18px';
    definition.style.fontSize = '12px';
    if (blogGrid) blogGrid.style.gridTemplateColumns = '1fr';
    if (iframe) iframe.style.width = '100%';
  } else {
    navbar.classList.remove('responsive');
    heroContent.style.fontSize = '32px';
    definition.style.fontSize = '16px';
    if (blogGrid) blogGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    if (iframe) {
      iframe.style.width = '800px';
      iframe.style.height = '450px';
    }
  }
}

// Call the function on window resize
window.onresize = adjustElements;

// Initial call to set the elements correctly on load
document.addEventListener('DOMContentLoaded', adjustElements);
