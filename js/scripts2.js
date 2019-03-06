

$(document).ready(function(){
  $("#selectForm").submit(function(event){
    event.preventDefault();
    var x = $("input[name=a1]:checked").val();
    var z = $("input[name=a2]:checked").val();
    var w = $("input[name=a3]:checked").val();
    var y = $("input[name=a4]:checked").val();
    var increment = -1;
    price=0

    items=[x,z,w,y];
    values=["1","2","3","4"];

    for(i=0;i<=items.length;i++){
       if(items[i]==values[i]){
           increment +=1
           document.getElementById("counter").innerHTML = increment;
          values.forEach(function(elements){
          var numbers = parseInt(elements)
          for(j=0;j<=numbers;j++){
            finalPrice=parseInt(price=price+numbers)
            document.getElementById("price").innerHTML = finalPrice;
          }

        });
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
