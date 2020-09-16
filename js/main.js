var slideIndex = 1;
var dotHTML = ""

function plusSlides(n) {
  //console.log("inside plusSlides with a value of " + n);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  //console.log(n);
  showSlides(slideIndex = n);
}

//built the dots
dotHTML += 
 "<div class='dot' onclick='currentSlide(1)'></div>"+
 "<div class='dot'onclick='currentSlide(2)'></div>"+
 "<div class='dot' onclick='currentSlide(3)'></div>";

//show the slide and dots
function showSlides(n) {
 var slides = document.getElementsByClassName("my-slides");
 var dots = document.getElementsByClassName("dot");
 
 //if the current slide's index is less than 0, move back to the last index (in-loop)
 if (n < 1) {
    //console.log("inside the if ");
    slideIndex = slides.length;
  }
 
 //if the current slide's index is greater than 4, move back to the first index (in-loop)
  if (n > slides.length) {
    slideIndex = 1;
  }

 //hide the slideshow
 for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
 }
 
 //change dot active for each slide
 for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
 }
 
 //first page load
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
}

document.getElementById("dotCon").innerHTML = dotHTML; //show dots
showSlides(slideIndex); //show slider

//Credits: https://stackoverflow.com/questions/16270761/how-to-insert-a-large-block-of-html-in-javascript/16270807