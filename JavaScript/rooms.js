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
  if (position < window.innerHeight) {
      content.classList.add('fadeRight');
  }
});
window.addEventListener('scroll', function () {
  var content = document.querySelector('#third');
  var position = content.getBoundingClientRect().top;
  if (position < window.innerHeight ) {
      content.classList.add('fadeLeft');
  }
});
window.addEventListener('scroll', function () {
  var content = document.querySelector('#fourth');
  var position = content.getBoundingClientRect().top;
  if (position < window.innerHeight) {
      content.classList.add('fadeRight');
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