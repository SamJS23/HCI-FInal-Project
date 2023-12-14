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
let Index = 1;
showS(Index);

function plusS(n) {
  showS(Index += n);
}

function currentS(n) {
  showS(Index = n);
}

function showS(n) {
  let i;
  let s = document.getElementsByClassName("myS");
  let d = document.getElementsByClassName("d");
  if (n > s.length) {Index = 1}    
  if (n < 1) {Index = s.length}
  for (i = 0; i < s.length; i++) {
    s[i].style.display = "none";  
  }
  for (i = 0; i < d.length; i++) {
    d[i].className = d[i].className.replace(" active", "");
  }
  s[Index-1].style.display = "block";  
  d[Index-1].className += " active";
  
}
window.addEventListener('scroll', function () {
  var content = document.querySelector('#main1');
  var position = content.getBoundingClientRect().top;
  if (position < window.innerHeight - 70) {
      content.classList.add('fadeIn');
  }
});