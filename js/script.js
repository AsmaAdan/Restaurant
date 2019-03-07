$(function(){
$('#myCarousel').carousel({
      interval: 1200
    });
$('.carousel-control.right').trigger('click');
});
function search(value){
  value = getElementById('search').value();
  alert(value);
}
