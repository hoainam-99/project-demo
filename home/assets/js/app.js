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

var size = 0;
$('.btn-prev').click(function(){
    if(size == 0){
        size = -200;
    }else{
        size += 100;
    }
    $('.f1').css("margin-left", size + "%");
})

$('.btn-next').click(function(){
    if(size == -200){
        size = 0;
    }else{
        size -= 100;
    }
    $('.f1').css("margin-left", size + "%");
})
setInterval(function(){
    $('.btn-next').click();
},2000)

$('.login-btn').click(function(){
    $('.login').removeClass('hide');
})

$('.fa-times').click(function(){
    $('.login').addClass('hide');
})