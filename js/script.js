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

        

  $(function(){
       // main-bg
       $(document).ready(function(){
        $('.items').slick({
          autoplay:true,
          autoplaySpeed:4000,
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear'
        });
  
       
        //섹션이미지
        $('.sec1-img-wrap').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          responsive: [ // 반응형 웹 구현 옵션
          {  
            breakpoint: 1280, //화면 사이즈 960px
            settings: {
              slidesToShow: 1
            } 
          },
          { 
            breakpoint: 768, //화면 사이즈 768px
            settings: {    
              slidesToShow: 1
            } 
          }
        ]
        });
        $('.sec2-img').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          arrows: false,
          responsive: [ // 반응형 웹 구현 옵션
          {  
            breakpoint: 1280, //화면 사이즈 960px
            settings: {
              slidesToShow: 2
            } 
          },
          { 
            breakpoint: 768, //화면 사이즈 768px
            settings: {    
              slidesToShow: 1
            } 
          }
        ]
        });
  
    })

  })


 



