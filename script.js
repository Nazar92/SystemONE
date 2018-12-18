
// responsive menu
function openMenu() {
  document.getElementById("headerMenu").style.display = "block";
};
function closeMenu() {
  document.getElementById("headerMenu").style.display = "none";
};


// slider

$(document).ready(function(){
  $('.slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  // fade: true,
  // cssEase: 'linear'
  });
});