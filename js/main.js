function scrollAppear() {
  var introText = document.querySelector(".infoBox");
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if (introPosition < screenPosition) {
    introText.classList.add("test-appear");
  }
}

window.addEventListener("scroll", scrollAppear);

function scrollAppear2() {
  var introText = document.querySelector(".infoBox2");
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

    if (x.matches && introPosition < screenPosition) { // If media query matches
        introText.classList.add("test-appear2");
      } else if (introPosition < screenPosition){
        introText.classList.add("test-appear1");
      }
}
var x = window.matchMedia("(max-width: 1500px)")
window.addEventListener("scroll", scrollAppear2);
x.addListener(scrollAppear2) // Attach listener function on state changes

// SLIDESHOW QUOTES //

var slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
   var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
