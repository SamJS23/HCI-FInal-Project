let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.addEventListener('scroll', function () {
  var content = document.querySelector('#first');
  var position = content.getBoundingClientRect().top;
  if (position < window.innerHeight) {
      content.classList.add('fadeLeft');
  }
});
window.addEventListener('scroll', function () {
  var content = document.querySelector('#second');
  var position = content.getBoundingClientRect().top;
  if (position < window.innerHeight - 50 ) {
      content.classList.add('fadeRight');
  }
});
window.addEventListener('scroll', function () {
  var content = document.querySelector('#third');
  var position = content.getBoundingClientRect().top;
  if (position < window.innerHeight - 65 ) {
      content.classList.add('fadeLeft');
  }
});
window.addEventListener('scroll', function () {
  var content = document.querySelector('#fourth');
  var position = content.getBoundingClientRect().top;
  if (position < window.innerHeight - 65 ) {
      content.classList.add('fadeRight');
  }
});
window.addEventListener('scroll', function () {
  var content = document.querySelector('#main1');
  var position = content.getBoundingClientRect().top;
  if (position < window.innerHeight - 70) {
      content.classList.add('fadeIn');
  }
});
document.querySelector('#togglePopup1').addEventListener("click", function(){
  document.querySelector("#popup1").classList.add("active");
});
document.querySelector('#close1').addEventListener("click", function(){
  document.querySelector("#popup1").classList.remove("active");
});
document.querySelector('#togglePopup2').addEventListener("click", function(){
  document.querySelector("#popup2").classList.add("active");
});
document.querySelector('#close2').addEventListener("click", function(){
  document.querySelector("#popup2").classList.remove("active");
});
document.querySelector('#togglePopup3').addEventListener("click", function(){
  document.querySelector("#popup3").classList.add("active");
});
document.querySelector('#close3').addEventListener("click", function(){
  document.querySelector("#popup3").classList.remove("active");
});
document.querySelector('#togglePopup4').addEventListener("click", function(){
  document.querySelector("#popup4").classList.add("active");
});
document.querySelector('#close4').addEventListener("click", function(){
  document.querySelector("#popup4").classList.remove("active");
});