$(document).ready(function () {
   

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('.header-bot').addClass('fixed-header');
       $('.footer-bottom').css("display","none");
        $('.box_1').addClass('fixed-header_box');
              
    }
    else {
       $('.header-bot').removeClass('fixed-header');
        $('.footer-bottom').css("display","block");
        $('.box_1').removeClass('fixed-header_box');
    }
});

  });
