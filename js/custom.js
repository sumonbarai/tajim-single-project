$(document).ready(function () {
    // banner slider
    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false
    });
    // testimonial slider
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
    });
    // veno box
    $(document).ready(function () {
        $('.venobox').venobox({
            bgcolor: '#201C42'    
        });
    });
    // back to top button
    $(window).scroll(function(){
        let scrolling=$(window).scrollTop();
        if(scrolling>200){
            $(".back-to-top").show(500);
        }else{
            $(".back-to-top").hide(500);
        }
    });

    $(".back-to-top").on("click",function(){
        $("body,html").animate({
            scrollTop:0
        },2000);
    });
    // active link
    $(".header-area .navbar-nav .nav-item").click(function(){
        $(this).addClass("active-menu").siblings().removeClass("active-menu");
    });
    // stikey menu
    $(window).scroll(function(){
        let scrolling=$(window).scrollTop();
        if(scrolling>200){
            $(".header-area").css({
                "background":"rgba(20, 15, 60, 0.89)",
                "position":"fixed",
                "top":0
            });
        }else{
            $(".header-area").css({
                "background":"transparent",
                "position":"absolute",
                "top":"2rem"
            });
        }
    });


});