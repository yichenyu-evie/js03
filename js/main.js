
var slideIndex = 1;

function plusSlides(n) {
    console.log("inside plusSlides with a value of " + n);
   // fadeOutEffect();
    showSlides(slideIndex += n);
    //fadeOut();
}



function currentSlide(n){
    console.log(n);
    //showSlides(slideIndex = n);
}

function moveDot(){
    var imgs = document.getElementsByClassName("carousel-item");
    
    var docContianer = document.getElementById("dotanddot");
    htmlDots = '<div style="text-align:center">';
    for (i = 0; i < imgs.length; i++){
    htmlDots += `<span class="dot" onclick="currentSlide(${i+1})" ></span>`
   }
    htmlDots += '</div>'
    docContianer.innerHTML = htmlDots;
    console.log(htmlDots);
      
}

function jump(n) {
    
}
 
moveDot();

function showSlides(n){
     console.log("inside showSlides with a value of " + n);
    
    var slides = document.getElementsByClassName("my-slides");

    //var dots = document.getElementsByClassName("dot");
    console.log(slides);
    

    //resets it end node
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    //hides the slides
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        
    }
    
    //for dot
    

//    for (i = 0; i < slides.length; i++){
//        
//       // dots[i].className = dots[i].className.replace(" active", "");
//    }
//   
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}



showSlides(slideIndex);