
//animation of headers on each page
 //$(document).ready(function() {
     $('.introduction').fadeIn({queue: false, duration: 900});
     $('.introduction').animate({'margin-top': '90px'}, 900);
//  });

$('.intro-hero').fadeIn({queue: false, duration: 1000});
$('.intro-hero').animate({'margin-left': '-10px'}, 900);

$('.about-me').fadeIn({queue: false, duration: 900});
$('.about-me').animate({'margin-top': '150px'}, 900);

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

  //fading in view projects button (delayed)
  $('.project-intro').delay(900).queue(function(next) {
      $(this).fadeIn({duration:900, queue:false}).animate({'margin-top':  '40px'}, {duration:900, queue:false});
   });

   //fading in projects (delayed)
   $('.project-container').delay(900).queue(function(next) {
       $(this).fadeIn({duration:900, queue:false});
    });




  //showing side menu on project page to get the attention of the user, and click function to activate the menu.
  $('#menu-tab').delay(2000).show("slide",{ direction: 'right' }, 2000).effect( "bounce",{ direction: 'right', distance: 20, times:1 }, 500 );


   $( '#menu-tab' ).click(function(){ //animating the slide menu
     $('.menu').toggle('slide', { direction: 'right' }, 400);
       $('#menu-tab').animate({ 'margin-right' : $('#menu-tab').css('margin-right') == '0px' ? '245px' : '0px'}, 400);

   });

  /* $('#menu-container').click( function(event){
       event.stopPropagation();
   });

   $(document).click( function(){
        $('.menu').hide('slide', { direction: 'right' }, 400);
        $('#menu-tab').animate({ 'margin-right' : $('#menu-tab').css('margin-right') == '0px' ? '-215px' : '0px'}, 400);
    });*/

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

//animation to reveal .even-more-projects, and others
$('#view-more').click(function(){
  $('.even-more-projects').slideToggle(500);
  $('#view-more').html($('#view-more').text() == 'View Less' ? 'View All' : 'View Less');

});

$('#reveal').click(function(){ //on lurkers.html
  $('#narrative').slideToggle(500);
});


//reveal .hidden-process on all project pages
$('#view-research-process').click(function(){
  $('#hidden-research-process').slideToggle(1000);
  $('#view-research-process').html($('#view-research-process').text() == 'Hide Research Decisions' ? 'View Research Decisions' : 'Hide Research Decisions');
});

$('#view-ideation-process').click(function(){
  $('#hidden-ideation-process').slideToggle(1000);
  $('#view-ideation-process').html($('#view-ideation-process').text() == 'Hide Ideation Decisions' ? 'View Ideation Decisions' : 'Hide Ideation Decisions');
});

$('#view-implementation-process').click(function(){
  $('#hidden-implementation-process').slideToggle(1000);
  $('#view-implementation-process').html($('#view-implementation-process').text() == 'Hide Implementation Decisions' ? 'View Implementation Decisions' : 'Hide Implementation Decisions');
});

$('#view-process').click(function(){
  $('.hidden-process').slideToggle(1300);
  //$('#view-implementation-process').html($('#view-implementation-process').text() == 'Hide Implementation Process' ? 'View Implementation Process' : 'Hide Implementation Process');
});


//scroll reveal goes here
window.sr = ScrollReveal();
sr.reveal('#view-research-process', { duration: 1200, scale: .98, distance: '100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('#view-ideation-process', { duration: 1200, scale: .98, distance: '100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('#view-implementation-process', { duration: 1200, scale: .98, distance: '100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});

//sr.reveal('#process', { duration: 1200, scale: .98, distance: '100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('#whatlearndid', { duration: 1400, scale: .98, distance: '80px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('.more-projects', { duration: 1100, scale: .98, distance: '100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});

//about page scroll stuff
sr.reveal('.blurb-parts', { duration: 1400, scale: .98, distance: '100px', easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});


$(window).bind('scroll', function () {

    if ($(window).scrollTop() > 10)
        $('.mainmenu').addClass('nav-down');
    else
        $('.mainmenu').removeClass('nav-down');
});


// Hide Header on on scroll down
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.mainmenu').outerHeight();

$(window).scroll(function(event){

    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.mainmenu').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.mainmenu').removeClass('nav-up');
        }
    }

    lastScrollTop = st;
});


//zoom image on click
$('.process_pic').click(function() {
    $(this).toggleClass('transition');
});

//animation of smooth anchor scrolling
 $(document).on('click', 'a', function(event){

    $('html,body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);

    event.preventDefault();
});
