
//animation of body content on home-page
$(document).ready(function() {
    $('.project-container').fadeIn({queue: false, duration: 1500});
    $('.project-container').animate({'margin-top': '40px'}, 1500);
 });

//animation of body content on each project pages
 $(document).ready(function() {
     $('.item-container').fadeIn({queue: false, duration: 1500});
     $('.item-container').animate({'margin-top': '40px'}, 1500);
  });

//animation of headers on each page
 $(document).ready(function() {
     $('.introduction').fadeIn({queue: false, duration: 2500});
     $('.introduction').animate({'margin-top': '57px'}, 1500);
  });

//animation of anchor scrolling
 $(document).on('click', 'a', function(event){

    $('html,body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
