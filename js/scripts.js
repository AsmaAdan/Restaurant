$(document).ready(function(){
  $("#display").click(function(){
    $(".navbar").slideToggle(800);
  });
  $("#morning").click(function(){
    $("#breakfast").slideDown(800);
    $("#lunch").slideUp(800);
    $("#dinner").slideUp(800);
    $("#startUp").hide(1500);
  });
  $("#noon").click(function(){
    $("#lunch").slideDown(800);
    $("#breakfast").slideUp(800);
    $("#dinner").slideUp(800);
    $("#startUp").hide(800);
  });
  $("#night").click(function(){
    $("#dinner").slideDown(800);
    $("#breakfast").slideUp(800);
    $("#lunch").slideUp(800);
    $("#startUp").hide(800);
  });
  $("#orderBreakfast").click(function(){
    $("#choice1").slideDown(80);
  });
  $("#orderLunch").click(function(){
    $("#choice2").slideDown(80);
  });
  $("#orderDinner").click(function(){
    $("#choice3").slideDown(80);
  });
  $("#packageOne").click(function(){
    $("#content1").slideToggle(80);
  });
  $("#packageTwo").click(function(){
    $("#content2").slideToggle(80);
  });
});
$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});
