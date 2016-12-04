
//animation of headers on each page
 //$(document).ready(function() {
     $('.introduction').fadeIn({queue: false, duration: 900});
     $('.introduction').animate({'margin-top': '140px'}, 900);
//  });

$('.intro-hero').fadeIn({queue: false, duration: 1000});
$('.intro-hero').animate({'margin-left': '-10px'}, 900);

//animation of body content on home-page
/*$(document).ready(function() {
    $('.project-container').fadeIn({queue: false, duration: 1500});
    $('.project-container').animate({'margin-top': '40px'}, 1600);
 });*/

//animation of body content on each project pages
// $(document).ready(function() {
     $('.item-container').fadeIn({queue: false, duration: 900});
     $('.item-container').animate({'margin-top': '40px'}, 900);
//  });

  //fading in sub-intro delay
  $('.project-intro').hide().delay(1000).queue(function(next) {
      $(this).fadeIn({duration:1000, queue:false}).animate({'margin-top':  '40px'}, {duration:1000, queue:false});
   });

  //showing side menu on project page to get the attention of the user, and click function to activate the menu.
  $('#menu-container').hide().delay(2000).show(1000);

   $( '#menu-tab' ).click(function(){ //animating the slide menu
     $('.menu').toggle('slide', { direction: 'right' }, 400);
       $('#menu-tab').animate({ 'margin-right' : $('#menu-tab').css('margin-right') == '0px' ? '210px' : '0px'}, 400);
   });


  //clicking to reveal projects
  $("#current-projects").click(function(){
        $(".past-project-container").fadeOut(1000);
        $(".project-container").fadeIn(1300);
    });

  /*$("#past-projects").click(function(){
        $(".project-container").fadeOut(1000);
        $(".past-project-container").fadeIn(1300);
    });*/

  /*$(".back-to-top").click(function(){
          $(".project-container").fadeOut(1500);
      });*/

//animation to reveal .even-more-projects
$('#view-more').click(function(){
  $('.even-more-projects').slideToggle(500);
});

//animation of smooth anchor scrolling
 $(document).on('click', 'a', function(event){

    $('html,body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);

    event.preventDefault();
});
