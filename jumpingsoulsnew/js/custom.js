
(function($) {

  new WOW().init();

  // jQuery(window).load(function() {
  //   jQuery("#preloader").delay(100).fadeOut("slow");
  //   jQuery("#load").delay(100).fadeOut("slow");
  // });


  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    }

    else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {

    $('.navbar-nav li a').on('click', function(event) {

      if ($(this).is('a:not([href^="#"])') || $(this).attr("href") == '#') {
        return;
      }
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

    $('.page-scroll a').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });

  });

	var navMain = $(".navbar-collapse");
	navMain.on("click", "a:not([data-toggle])", null, function () {
	   navMain.collapse('hide');
	});



  $('#intro').carousel({
        interval: 8000,
        pause: false
  }).on('slide.bs.carousel', function () {
  document.getElementById('player').pause();
});

$('#player').on('ended', function () {
  if (document.exitFullscreen) {
       document.exitFullscreen(); // Standard
   } else if (document.webkitExitFullscreen) {
       document.webkitExitFullscreen(); // Blink
   } else if (document.mozCancelFullScreen) {
       document.mozCancelFullScreen(); // Gecko
   } else if (document.msExitFullscreen) {
       document.msExitFullscreen(); // Old IE
   }
       this.currentTime = 0;
  $('.carousel').carousel('next');
});





  $(".nav li").on("click", function() {
       $(".nav li ").removeClass("active");
       $(this).addClass("active");
     });
     $("#testimonial-slider").owlCarousel({
           items:1,
           itemsDesktop:[1000,1],
           itemsDesktopSmall:[979,1],
           itemsTablet:[768,1],
           pagination:true,
           transitionStyle:"backSlide",
            stopOnHover : true,
           autoPlay:true
       });


       // $.get("nav.html", function(data){
       //     $("#nav-placeholder").replaceWith(data);
       // });
       $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
  return false;
});



$('video').on('play', function (e) {
    $("#intro").carousel('pause');
});
$('video').on('stop pause ended', function (e) {
    $("#intro").carousel();
});







}
)(jQuery);
