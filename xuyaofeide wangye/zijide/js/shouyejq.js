$(function(){
	/*导航*/
    $(".zhongjian>li").hover(function(){
	   	$(".juti").eq($(this).index()).css("display","block").parent()
	   	.siblings("").children(".juti").css("display","none");
	   	$(".sanjiao").eq($(this).index()).css("display","block").parent()
	   	.siblings("").children(".sanjiao").css("display","none");
   },function(){
	   	$(".juti").css("display","none");
	   	$(".sanjiao").css("display","none");
   })
   /*banner图*/
   /*点击*/
   $(".yuan").click(function(){
   	 $(".bxia").eq($(this).index()).css("display","block").siblings(".bxia").css("display","none");
   	 $(".yuan").eq($(this).index()).addClass('yanse').siblings(".yuan").removeClass("yanse");
   })
   /*自动轮播*/
   let t=setInterval(fn, 5000);
   let num=0;
   function fn(){
     num++;
     if (num>$('.bxia').length-1) {
     	num=0;
     }
     $(".bxia").eq(num).css("display","block").siblings('.bxia').css("display","none");
     $(".yuan").eq(num).addClass('yanse').siblings(".yuan").removeClass("yanse");
    }
    /*暂停*/
    $(".datu").hover(function(){
    	clearInterval(t);
    },function(){
    	t=setInterval(fn, 5000)
    })
   /*左右箭头*/
   $(".bright").click(function(){
   	fn();
   })
   $(".bleft").click(function(){
   	fn1();
   })
   function fn1(){
   	num--;
   	if (num<0) {
   		num=$(".bxia").length-1;
   	}
   	 $(".bxia").eq(num).css("display","block").siblings('.bxia').css("display","none");
     $(".yuan").eq(num).addClass('yanse').siblings(".yuan").removeClass("yanse");
   }
/*产品案例*/
    let a=0;
    let s=-1;
    let n=setInterval(fn2, 10)
    function fn2(){
       a++;
       $(".tuzhong1").css("left",0-1*a+"px");
       $(".tuzhong2").css("left",1440-1*a+"px");
       if (a>=1440) {
       	s++;
       	$(".tuzhong1").css("left",1440-s*1+"px");
        $(".tuzhong2").css("left",1440-1*a+"px");
        if (a>2880) {
        	a=0;
        	s=-1;
        	$(".tuzhong1").css("left","0px");
        }
       }
    }
    /*暂停效果*/
    $(".tuzhong").hover(function(){
    	clearInterval(n);
    },function(){
    	n=setInterval(fn2, 10)
    })
/*返回顶部*/
    $(window).scroll(function(){
    	console.log($(window).scrollTop())
    	if ($(window).scrollTop()<400) {
    		$(".guding").css("display","none");
    	}else if ($(window).scrollTop()>=400) {
            $(".guding").css("display","block");
    	}
    })
    $(".guding").click(function(){
        $(document.documentElement).animate({scrollTop:0},300);
    })
})
