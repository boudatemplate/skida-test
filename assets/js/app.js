(function($) {
    "use strict";
    $(window).on("scroll",function(){
        $(window).scrollTop()>=50?$(".sticky").addClass("sticky-add"):
        $(".sticky").removeClass("sticky-add");
    })

    $(window).on("scroll",function(){
        $(window).scrollTop()>=50?$(".header-style-2.sticky").addClass("sticky-add"):
        $(".header-style-2.sticky").removeClass("sticky-add");
    })
    

    $(".sub-btn").click(function(){
        $(this).next(".dropdown-menu").slideToggle();
    })

    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    $(".menu-btn").click(function(){
        $(".slide-bar").toggleClass('show');
        $(this).toggleClass('active')
    })
        
    //active isotope filter
    $('.filter').isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows"
    });


    //isotope click
    $('.filter-menu span').click(function(){
        $('.filter-menu span').removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $('.filter').isotope({
            filter: selector
        });
        return false;
    });

    $(".faq-title-box").click(function(){
        $(this).parent().toggleClass("active");
    })

    //owl-carousel brand
    $("#projects").owlCarousel({
        loop:true,
        dots:true,
        autoplayTimeout:500000,
        autoplay:true,
        margin:30,
        smartSpeed:450,
        responsive:{
            0:{
                items:1
            },
            991:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    //owl-carousel clients
    $("#clients").owlCarousel({
        loop:true,
        dots:true,
        autoplayTimeout:6000,
        autoplay:true,
        margin:20,
        smartSpeed:450,
        responsive:{
            0:{
                items:1
            },
            991:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $("#brand").owlCarousel({
        loop:true,
        dots:false,
        autoplayTimeout:5000,
        autoplay:true,
        margin:30,
        smartSpeed:450,
        responsive:{
            0:{
                items:2
            },
            991:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
})(window.jQuery);
