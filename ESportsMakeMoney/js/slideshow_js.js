var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var next = document.getElementsByClassName("next");
  var prev = document.getElementsByClassName("prev");
  
  if (n > slides.length) {
	  slideIndex = 1;
	 }
  if (n < 1) {
	  slideIndex = slides.length;
	 }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
	}

  slides[slideIndex-1].style.display = "block";

  if (slideIndex == 1) {
    prev.style.display = "none";
  } else if (slideIndex == slides.length) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
    prev.style.display = "block";
  }

}
