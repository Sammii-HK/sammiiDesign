// JavaScript Document


$(document).ready(function() {
  $('.portfolio-carousel').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 4000,
	  arrows: true,
	  draggable: true,
	  pauseOnFocus: true,
	  pauseOnHover: true,
	  dots: true,
	  infinitite: true,
	  fade: true,
	  cssEase: 'linear',
	  mobileFirst: true,
	  adaptiveHeight: true
	 
  });
	
  /*var lastScrollTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - lastScrollTop > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 50);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 50);
      lastScrollTop = scrollTop;
    }
  }); */
	
  //$('.hover').on('touchstart touchend', function(e) {
  //      e.preventDefault();
  //      $(this).toggleClass('hover_effect');
  //  });

});