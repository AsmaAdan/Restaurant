$(document).ready(function(){
  $("#display").click(function(){
    $(".navbar").slideToggle(800);
  });
  $(window).onscroll(function(){
    $("#logo").hide(1000);
  });
});
