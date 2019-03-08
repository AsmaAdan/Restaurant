$(document).ready(function(){
  var order=[];
  $("#food").submit(function(event){
    event.preventDefault();
    var a = $("input[name=torte]:checked").val();
    var b = $("input[name=strata]:checked").val();
    var c = $("input[name=waffles]:checked").val();
    var d = $("input[name=crepes]:checked").val();
    var e = $("input[name=pizza]:checked").val();
    var f = $("input[name=pomodoro]:checked").val();
    var g = $("input[name=lasagna]:checked").val();
    var h = $("input[name=cotta]:checked").val();
    var i = $("input[name=casserole]:checked").val();
    var j = $("input[name=loaf]:checked").val();
    var k = $("input[name=tortilla]:checked").val();
    var l = $("input[name=tiramisu]:checked").val();
    var delivery=$("#delivery").val();
    var people = $("#people").val();
    var increment = -1;
    var price=0

    items=[a,b,c,d,e,f,g,h,i,j,k,l];
    values=["199","299","300","200","599","499","699","250","999","1099","1200","450"];
    totalValues=[];
    totalValues.length=0;
    for(i=0;i<=items.length;i++){
       if(items[i]===values[i]){
           increment +=1
           document.getElementById("counter").innerHTML ="Items "+increment;
           t=totalValues.push(parseInt(values));
           z=order.push(parseInt(values))


        }
      }for(j=0;j<=11;j++){
        if(values[j]==items[j]){
        price+=parseInt(values[j]);
        order.push("Sh"+(price*people));
        document.getElementById("price").innerHTML = "Sh"+(price*people);

      }
    }
    window.location.href = 'mailto: dicksonparlma@gmail.com,asmaahmed.adan@gmail.com, jlmukono@gmail.com, wambitafana@gmail.com ?subject=Please complete your order &body=Your bill is '+" "+(price*people)+" "+"for"+" "+delivery;
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
$("#orderBreakfast").click(function(event){
        event.preventDefault();
        $("#food").slideToggle(800);
});
