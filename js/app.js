document.addEventListener('DOMContentLoaded',function(){
  var deck = document.getElementById("deck");
  deck.addEventListener("click", function(){
    deck.shuffleNext();
  });
});
