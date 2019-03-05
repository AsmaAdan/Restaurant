function search(value){
  value = document.getElementById('search').value;
  searchItems = document.getElementsByTagName("li");
  var itemsArray = []
  for(var i=0;i<=searchItems.length;i++){
    var items = searchItems[i].innerHTML


    itemsArray.push(items);

    itemsArray.forEach(element){
      alert(element);
    }

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
