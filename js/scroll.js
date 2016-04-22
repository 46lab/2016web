// JavaScript Document

// Button "Back to Top"
$(document).ready(function(){
  // hide #back-top first
  $("#back-top").hide();  
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 350) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });
  // scroll body to 0px on click
  $('#back-top a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1200);
    return false;
    });
  });
});

// Button "Menu"
$(function(){
  $('a img').hover(function(){
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
  }, function(){
    if (!$(this).hasClass('currentPage')) {
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
  });
});


// Accordion Menu
$(function(){
   $('.subMenu').hide();
   //
   $('#menu .archive').click(function(e){     
       $('+ul.subMenu',this).slideToggle();
   });
});


(function($){
$(function(){ 
    // slow display for footer
    $(window).on('scroll',function(){
        var obj = new Object();
        obj.y = document.documentElement.scrollTop  || document.body.scrollTop;
        if(obj.y > 1200){    // When it is scrolled 1000px, display animation at bottom:0px
            $('footerbg2-t').animate({
                bottom: '0px'
                },'slow',function(){
                    $(this).stop(true,true).queue([]);
                });
        } else {
            $('footerbg2-t').animate({   //1000px以内なら下方向へ80pxアニメーション（つまり画面外に動かす）
                bottom: '-100px'
            },'slow',function(){
                    $(this).stop(true,true).queue([]);
                });
        }
    });
 
 
});
})(jQuery);


// 
$(function(){
	var flg = "close";
     $(".slideropen").click(function(){
      $("#slideBox").slideToggle("slow");
	  if(flg == "close") {
	    $(this).text('━');
		flg = "open";
	  } else {
        $(this).text('╋');
		flg = "close";		
//	  $("div p").text("ー");
	 }
     });
})

// Go to ancker slowly	
$(function(){
 $('a[href^=#]').click(function(){
     var speed = 500;
     var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });
});


//  Logo display
$(function() {
var topBtn = $('#page-top');   
topBtn.hide();
// If scroll => 100 then display image
$(window).scroll(function () {
     if ($(this).scrollTop() > 600) {
         topBtn.fadeIn();
     } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
     $('body,html').animate({
          scrollTop: 400
      }, 800);
      return false;
  });
});



$(function(){
$('.effect').css("opacity",".3");
$(window).scroll(function (){
  $('.effect').each(function(){
    var imgPos = $(this).offset().top;   
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 200){
      $(this).animate({
        "margin-left": "40px",
       "opacity": "1"
      }, 500);
    }
   });
});
});