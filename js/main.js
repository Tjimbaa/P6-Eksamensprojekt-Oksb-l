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

  if (introPosition < screenPosition) {
    introText.classList.add("test-appear1");
  }
}

window.addEventListener("scroll", scrollAppear2);
