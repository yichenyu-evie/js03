(function() {

   function Slideshow(element) {
     this.el = document.querySelector(element);
     this.init();
   }

   Slideshow.prototype = {
     init: function() {
       this.wrapper = this.el.querySelector(".slider-wrapper");
       this.slides = this.el.querySelectorAll(".slideshow-container");

       this.slidesCount = this.slides.length;

       this.previous = this.el.querySelector(".slideshow-container-previous");
       this.next = this.el.querySelector(".slideshow-container-next");
       this.index = 0;
       this.total = this.slides.length;
       this.timer = null;
       this.nextButton = this.el.querySelector(".next");
       this.prevButton = this.el.querySelector(".prev");

       this.addDots();
       this.action();
       this.stopStart();
       this.nextSlide();
       this.prevSlide();
     },
     _slideTo: function(slide) {
       var currentSlide = this.slides[slide];
       currentSlide.style.opacity = 1;

       // dots
       var lis = this.ulEl.querySelectorAll("li");
        [].forEach.call(lis, function(el, index) {
		    if( index !== slide ){
		    	el.classList.remove("active");
		    } else{
		    	el.classList.add("active");
		    }
		});
		// dots end

       for (var i = 0; i < this.slides.length; i++) {
         var slide = this.slides[i];
         if (slide !== currentSlide) {
           slide.style.opacity = 0;
         }
       }


     },
     action: function() {
       var self = this;
       self.timer = setInterval(function() {
         self.index++;
         if (self.index == self.slides.length) {
           self.index = 0;
         }
         self._slideTo(self.index);

       }, 10000);
     },
     stopStart: function() {
       var self = this;
       self.el.addEventListener("mouseover", function() {
         clearInterval(self.timer);
         self.timer = null;

       }, false);
       self.el.addEventListener("mouseout", function() {
         self.action();

       }, false);
     },
     nextSlide: function() {
       var self = this;
       self.nextButton.addEventListener("click", function() {
         clearInterval(self.timer);
         self.timer = null;
         self.index++;
         if (self.index == self.slides.length) {
           self.index = 0;
         }
         self._slideTo(self.index);

       });
     },
     prevSlide: function() {
       var self = this;
       self.prevButton.addEventListener("click", function() {
         clearInterval(self.timer);
         self.timer = null;
         self.index--;
         if (self.index == -1) {
           self.index = self.slides.length - 1;
         }

         self._slideTo(self.index);

       });
     },
     addDots: function(){
     	var ul = document.createElement('ul');
     	this.wrapper.appendChild(ul);
     	this.ulEl = ul; // for else where uses

     	for ( let i = 0; i< this.slidesCount ; i++ ){
 	     	var li = document.createElement('li');
    	 	ul.appendChild(li);
     	}
     	this.ulEl.querySelector('li').classList.add('active');
     },



   };

   document.addEventListener("DOMContentLoaded", function() {

     var slider = new Slideshow("#main-slider");

   });


 })();
