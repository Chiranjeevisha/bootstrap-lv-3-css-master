// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
     $(document).ready(

     )
     // Owl Carousel End

    //  Filter Data
    filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btons");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activ");
    current[0].className = current[0].className.replace("activ", "");
    this.className += " activ";
  });
}
// Filter Data End

      // Top-Word-Business-Animation
  
      var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
      
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };
      
      window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-rotate');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap {font-weight: bold; background: linear-gradient(to right, #fe506a 0%, #f99c4c 100%); -webkit-background-clip: text;  -webkit-text-fill-color: transparent; font-size: 5vw; font-weight: bolde; z-index: 1; }";
        document.body.appendChild(css);
      };

 // Top-Word-Business-Animation End
    
      // Animation Ends

         // Big Card Image Shadow
         $(document).ready(function(){
            $(".only-on-hover-1").hide();
            $(".big-card-img-1").hover(function(){
              $(".only-on-hover-1").show();
            });
             $(".big-card-img-1").mouseleave(function(){
              $(".big-card-img-1 p").hide();
            });
            // 2
            $(".only-on-hover-2").hide();
            $(".big-card-img-2").hover(function(){
              $(".big-card-img-2 p").show();
            });
             $(".big-card-img-2").mouseleave(function(){
              $(".big-card-img-2 p").hide();
            });
            // 3
            $(".only-on-hover-3").hide();
             $(".big-card-img-3").hover(function(){
              $(".big-card-img-3 p").show();
            });
             $(".big-card-img-3").mouseleave(function(){
              $(".big-card-img-3 p").hide();
            });
            // 4
            $(".only-on-hover-4").hide();
            $(".big-card-img-4").hover(function(){
              $(".big-card-img-4 p").show();
            });
             $(".big-card-img-4").mouseleave(function(){
              $(".big-card-img-4 p").hide();
            });
          });
           // Big Card Image Shadow End
        //    Searchbar Show & Hide
        $(document).ready(function () {
            $(".input-bx").css("display", "none");
    
            $(".bi-search").click(function () {
              $(".input-bx").css("display", "block");
            });
          });
    
          $(".bg-second").css("background", "linear-gradient(#1b2d5d, #2b8ea5)");
    
          $(document).ready(function () {
            $(".input-bx").css("display", "none");
    
            $(".bi-search").click(function () {
              $(".input-bx").css("display", "block");
            });
          });
               //    Searchbar Show & Hide End