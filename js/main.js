
//animation of headers on each page
 $(document).ready(function() {
     $('.introduction').fadeIn({queue: false, duration: 1300});
     $('.introduction').animate({'margin-top': '140px'}, 1300);
  });

//animation of body content on home-page
/*$(document).ready(function() {
    $('.project-container').fadeIn({queue: false, duration: 1500});
    $('.project-container').animate({'margin-top': '40px'}, 1600);
 });*/

//animation of body content on each project pages
 $(document).ready(function() {
     $('.item-container').fadeIn({queue: false, duration: 1500});
     $('.item-container').animate({'margin-top': '40px'}, 1600);
  });

  //fading in sub-intro delay
  $(".project-intro").hide(0).delay(2800).fadeIn(1300);

  //clicking to reveal projects
  $("#current-projects").click(function(){
        $(".project-container").fadeToggle(1500);
    });

    $(".back-to-top").click(function(){
          $(".project-container").fadeOut(1500);
      });



//animation of anchor scrolling
 $(document).on('click', 'a', function(event){

    $('html,body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
});
