

$(document).ready(function(){
  $("#selectForm").submit(function(event){
    event.preventDefault();
    var x = $("input[name=1]:checked").val();
    var z = $("input[name=2]:checked").val();
    var w = $("input[name=3]:checked").val();
    var y = $("input[name=4]:checked").val();
    var increment = -1;

    items=[x,z,w,y];
    values=["value1","value2","value3","value4"];

    for(i=0;i<=items.length;i++){
       if(items[i]==values[i]){
           increment +=1
           document.getElementById("counter").innerHTML = increment;

       }
     }
});
});





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
