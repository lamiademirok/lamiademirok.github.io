/* EFFECT FOR PICTURE AND HOVERING */
$(document).ready(function(){
   
$(".projects").hover(function(){
    $(this).css('box-shadow', '1px 1px 3px white')
    
}),
$(".projects").mouseleave(function(){
    $(this).css('box-shadow', 'none')
    
}),

    $('#mypic').fadeIn(1000);

});

/* EFFECT FOR LOADING */
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);





