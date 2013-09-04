document.addEventListener('DOMContentLoaded',function(){
  var deck = document.getElementById("slide-box");
  deck.addEventListener("click", function(){
    deck.slideNext();
  });
});
