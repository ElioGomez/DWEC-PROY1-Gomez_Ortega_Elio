//Esta son las funciones qu ehacen funcionar el slider 

//var slideIndex = 1;
//showSlides(slideIndex);

//Permite pasar imagenes con las flechas a los lados del carrusel
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Permite pasar la imagen con los botones de de abajo, ademas que indica cual es la imagen inicial
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//Esta funcion recibe 3 dives que contienen una imagen con un texto y forma el slider
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}