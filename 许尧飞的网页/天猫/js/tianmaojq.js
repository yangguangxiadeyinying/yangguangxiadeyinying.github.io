$(function(){
	/*最上面的悬浮框*/
	$(window).scroll(function() {
		var gd=$(window).scrollTop();
		if(gd>700){
			    $(".fukuang").css("top","0");
		}
		else{
			    $(".fukuang").css("top","-60");
		}
	});
   /*头部*/
   $(".quanbian").hover(function() {
   	  $(".baoxia").css("display","block");
   }, function() {
      $(".baoxia").css("display","none");
   });
   $(".quanbian1").hover(function() {
   	  $(".baoxia1").css("display","block");
   }, function() {
   	  $(".baoxia1").css("display","none");
   });
   $(".shoujiban").hover(function() {
   	  $(".tanma").css("display","block");
   	  $(".sanjiao5").css("display","block");
   }, function() {
   	  $(".tanma").css("display","none");
   	  $(".sanjiao5").css("display","none");
   });
   $(".zhichi").hover(function(){
   	  $(".baoxia2").css("display","block");
   },function(){
   	  $(".baoxia2").css("display","none");
   })
   $(".wangzhan").hover(function(){
   	  $(".baoxia3").css("display","block");
   },function(){
   	  $(".baoxia3").css("display","none");
   })
   /*侧导航*/
   $(".zuodan>li").hover(function(){
   	  $(".cela").eq($(this).index()).show().parent().siblings().children().eq(1).css("display","none");
   },function(){
   	  $(".cela").css("display","none");
   })
   /*banner图*/
   /*点动图*/
   $(".lunguo>li").click(function(){
   	  $(".bxia").css("opacity","0").eq($(this).index()).css("opacity","1");
   	  $(".lunguo>li").eq($(this).index()).addClass("huanse").siblings().removeClass("huanse");
   })
   /*自动轮播*/
   let t=setInterval(fn, 5000);
   let index=-1;
   function fn(){
	   index++;
	   if (index>=5) {
	   	   index=-1;
	   }
	   $(".bxia").css("opacity","0").eq(index).css("opacity","1");
	   $(".lunguo>li").eq(index).addClass("huanse").siblings().removeClass("huanse");
    }
    /*暂停效果*/
    $(".zhuye").hover(function(){
    	clearInterval(t);
    },function(){
        t=setInterval(fn, 5000);
    })
    /*banner 左边的效果*/
    $(".fangzuo").click(function(){
    	$(".da1").css("left","0");
    	$(".fangzuo").css("display","none");
    	$(".fangyou").css("display","block");
    });
      $(".fangyou").click(function(){
    	$(".da1").css("left","-492px");
    	$(".fangzuo").css("display","block");
    	$(".fangyou").css("display","none");
    })
    /*左边定位的效果*/
    let gh;
    $(window).scroll(function(){
        gh=$(window).scrollTop();
	    if (gh<=800) {
	    	$(".zhibiao").css("display","none");
	    }
	    else if(gh>800){
	    	$(".zhibiao").css("display","block");
	    }
    })
    $(".zhibiao>li").eq(1).click(function(){
        $(document.documentElement).animate({scrollTop:1930},100);
        $(".zhibiao>li").eq(1).css("background","pink").siblings(".match").css("background","#525151");
    })
    $(".zhibiao>li").eq(2).click(function(){
        $(document.documentElement).animate({scrollTop:2430},100);
        $(".zhibiao>li").eq(2).css("background","blue").siblings(".match").css("background","#525151");
    })
    $(".zhibiao>li").eq(3).click(function(){
        $(document.documentElement).animate({scrollTop:3050},100);
        $(".zhibiao>li").eq(3).css("background","pink").siblings(".match").css("background","#525151");
    })
    $(".zhibiao>li").eq(7).click(function(){
        $(document.documentElement).animate({scrollTop:3500},100);
        $(".zhibiao>li").eq(7).css("background","red").siblings(".match").css("background","#525151");
    })
    $(".zhibiao>li").eq(8).click(function(){
        $(document.documentElement).animate({scrollTop:0},200);
    })
     $(window).scroll(function(){
	     if ($(window).scrollTop()>1930&&$(window).scrollTop()<2430) {
	     	$(".zhibiao>li").eq(1).css("background","pink").siblings('.match').css("background","#525151")
	     }
	     else if ($(window).scrollTop()>=2430&&$(window).scrollTop()<3050) {
	     	$(".zhibiao>li").eq(2).css("background","blue").siblings('.match').css("background","#525151")
	     }
	     else if ($(window).scrollTop()>=3050&&$(window).scrollTop()<3500) {
	     	$(".zhibiao>li").eq(3).css("background","pink").siblings('.match').css("background","#525151")
	     }
	     else if ($(window).scrollTop()>=3500) {
	     	$(".zhibiao>li").eq(7).css("background","red").siblings('.match').css("background","#525151")
	     }
    })
})


