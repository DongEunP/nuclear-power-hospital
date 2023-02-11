
$(function(){
  if (matchMedia("screen and (min-width: 1281px)").matches) {
    let $win = $(window);
    $win.scroll(function(){
      let top = $('.main-visual').offset().top;
      if ($win.scrollTop() > top ) {
        console.log(top);
        $('.right-gnb').fadeIn();
      } else {
        $('.right-gnb').fadeOut();
      };
    });
  }
  
    $('.out li').mouseenter(function(){
      $('.inner').fadeIn(200);
    })
    $('.inner').mouseleave(function(){
      $('.inner').fadeOut(300);
    });
    $('.hbg').click(function(){
      $('.media-right-gnb').stop(true).slideToggle("slow");
    });
  
  
  var dwidth = jQuery(window).width();
  jQuery(window).bind('resize', function(e){
  
      var wwidth = jQuery(window).width();
  
      if(dwidth!==wwidth){
      dwidth = jQuery(window).width();
  
      if (window.RT) clearTimeout(window.RT);
      window.RT = setTimeout(function(){
          this.location.reload(false); /* false to get page from cache */
      }, 500);
  }
  });
})


  // section2
  $(function(){
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [ // 반응형 웹 구현 옵션
      {  
        breakpoint: 1280, //화면 사이즈 960px
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        } 
      }]
    
    });

  })
  
(function($){
    $(window).on("load",function(){
        $(".content").mCustomScrollbar();
    });
})(jQuery);

