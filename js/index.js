$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

        
    $('#back-to-top').tooltip('show');

    $('#wordpressImg').hover(
         function(){ $(this).addClass('animated tada') },
         function(){ $(this).removeClass('animated tada') }
    );

    $('#fewdImg').hover(
         function(){ $(this).addClass('animated bounce') },
         function(){ $(this).removeClass('animated bounce') }
    );

    $('#designImg').hover(
         function(){ $(this).addClass('animated tada') },
         function(){ $(this).removeClass('animated tada') }
    );

    $('#photographyImg').hover(
         function(){ $(this).addClass('animated flash') },
         function(){ $(this).removeClass('animated flash') }
    );

    $('#projectsImg').hover(
         function(){ $(this).addClass('animated rubberBand') },
         function(){ $(this).removeClass('animated rubberBand') }
    );

    $('#educationImg').hover(
         function(){ $(this).addClass('animated wobble') },
         function(){ $(this).removeClass('animated wobble') }
    );


    $('.nav-item a').click(function(){
        $(".collapse").collapse('hide');
    });
});


