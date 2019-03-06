var x = document.getElementById("myCheck1").value;
var z = document.getElementById("myCheck1").value;
var w = document.getElementById("myCheck1").value;
var y = document.getElementById("myCheck1").value;
var increment = 0;

function increase(){
  if (x=true){
    increment+=1;
    document.getElementById("counter").innerHTML = increment;
  }
}



$(document).ready(function(){
  $("#display").click(function(){
    $(".navbar").slideToggle(800);
  });
  $("#morning").click(function(){
    $("#breakfast").slideDown(800);
    $("#lunch").slideUp(800);
    $("#dinner").slideUp(800);
  });
  $("#noon").click(function(){
    $("#lunch").slideDown(800);
    $("#breakfast").slideUp(800);
    $("#dinner").slideUp(800);
  });
  $("#night").click(function(){
    $("#dinner").slideDown(800);
    $("#breakfast").slideUp(800);
    $("#lunch").slideUp(800);
  });
});
