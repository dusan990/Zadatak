import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
   const navLinks = document.querySelectorAll('.main_nav ul li a');
   const navList = document.querySelectorAll('.main_nav ul li');
   const currentUrl = window.location.href;

   for (let i = 0; i < navLinks.length; i++) {
      // currentPage === navigationLinks[i].href ? navigationList[i].className += ' active' : ''
      var linkUrl = navLinks[i].href;

      if ((currentUrl.indexOf(linkUrl) !== -1) || (currentUrl.endsWith("/index.html") || currentUrl.endsWith("/")) && i === 0) {
         // Add the "active" class to the navigation link
         navList[i].classList.add('active');
      }
   }
});


let slideIndex:number = 1;
showSlides(slideIndex);

function showSlides(n:number) {
   const slides:HTMLCollectionOf<Element> = document.getElementsByClassName("product-slider-slide");

   n > slides.length ? slideIndex = 1 : null
   n < 1 ? slideIndex = slides.length : null

   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }

   slides[slideIndex - 1].style.display = "block";
}

const prevSlideBtn = document.getElementById("prev");
const nextSlideBtn = document.getElementById("next")

nextSlideBtn!.addEventListener('click', () => {
   showSlides(slideIndex += 1);
})
prevSlideBtn!.addEventListener('click', () => {
   showSlides(slideIndex - 1);
})
