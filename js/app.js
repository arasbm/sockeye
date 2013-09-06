document.addEventListener('DOMContentLoaded',function(){
  var slide = document.getElementById("slide-box");

  slide.addEventListener("click", function(){
    slide.slideNext();
  });

  document.getElementById("goto-chinook").addEventListener("click", function(){
    slide.slideTo(6);
  });

  document.getElementById("goto-coho").addEventListener("click", function(){
    slide.slideTo(0);
  });

  document.getElementById("goto-pink").addEventListener("click", function(){
    slide.slideTo(1);
  });

  document.getElementById("goto-chum").addEventListener("click", function(){
    slide.slideTo(3);
  });

  document.getElementById("goto-sockeye").addEventListener("click", function(){
    slide.slideTo(4);
  });

  document.getElementById("goto-steelhead").addEventListener("click", function(){
    slide.slideTo(5);
  });


  
});
