import "./styles/main.scss";

document.addEventListener("DOMContentLoaded", () => {
   const navigationLinks = document.querySelectorAll('.main_nav ul li a');
   const navigationList = document.querySelectorAll('.main_nav ul li');
   const currentPage = document.location.href;
   
   for (let i = 0; i < navigationLinks.length; i++) {
      currentPage === navigationLinks[i].href ? navigationList[i].className += ' active' : ''
	}
 });