$('.next').click(function(){
    $('.next').css("visibility", "hidden");
    $('.prev').css("visibility", "visible")
    $('.s1').css("margin-left", "-640px");
})
$('.prev').click(function(){
    $('.next').css("visibility", "visible");
    $('.prev').css("visibility", "hidden");
    $('.s1').css("margin-left", "0");

})