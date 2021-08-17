$(document).ready(function () {

    // Sticky Menu
    window.addEventListener('scroll', function () {
        var header = this.document.querySelector('header');
        header.classList.toggle('sticky', this.window.scrollY > 500);
    });

    // Testimonial Slider Here
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });

    $(".owl-dot").html('<span>2</span>');
    $(".owl-dot.active").html('<span>1</span>');

    // BACK to TOP
    jQuery("#backtotop").click(function () {
        jQuery("body,html").animate({
            scrollTop: 0
        }, 600);
    });
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 150) {
            jQuery(".back_top").addClass("visible");
        } else {
            jQuery(".back_top").removeClass("visible");
        }
    });


});