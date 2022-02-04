$(".user-register").click(function () {
  $(".salesman-register").css({
    "border-bottom": ".5px solid #000",
    "border-left": ".5px solid #000",
    "border-radius": "0 0 0 10px",
    "opacity": "0.4",
  });
  $(".user-register").css({
    "border": "none",
    "border-radius": "0",
    "opacity": "1",
  });
  $('.salesman-register__form').addClass('hide');
});
$(".salesman-register").click(function () {
    $(".salesman-register").css({
      "border": "none",
      "border-radius": "0",
      "opacity": "1",
    });
    $(".user-register").css({
        "border-bottom": ".5px solid #000",
        "border-right": ".5px solid #000",
        "border-radius": "0 0 10px 0",
        "opacity": "0.4",
      });
    $('.salesman-register__form').removeClass('hide');
  });
