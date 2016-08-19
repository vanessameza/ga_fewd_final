// console.log('Testing console');

// $(document).click(function(){
//     alert("This is a test.");
// });

// jQuery on "#id".hover add class animate  
// remove class animate when hover on id is no longer occuring

$(document).ready(function(){
    $('#wordpressImg').hover(
         function(){ $(this).addClass('animated tada') },
         function(){ $(this).removeClass('animated tada') }
    )

    $('#fewdImg').hover(
         function(){ $(this).addClass('animated bounce') },
         function(){ $(this).removeClass('animated bounce') }
    )

    $('#designImg').hover(
         function(){ $(this).addClass('animated tada') },
         function(){ $(this).removeClass('animated tada') }
    )

    $('#photographyImg').hover(
         function(){ $(this).addClass('animated flash') },
         function(){ $(this).removeClass('animated flash') }
    )

    $('#projectsImg').hover(
         function(){ $(this).addClass('animated rubberBand') },
         function(){ $(this).removeClass('animated rubberBand') }
    )

    $('#educationImg').hover(
         function(){ $(this).addClass('animated wobble') },
         function(){ $(this).removeClass('animated wobble') }
    )
    
});

