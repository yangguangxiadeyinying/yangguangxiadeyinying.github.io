$(function(){









	/*banner图*/
	/*点动图*/
	$(".yuan").click(function(){
		$(".btu").eq($(this).index()).css("display","block").siblings('.btu').css("display","none");
		$(".yuan").eq($(this).index()).addClass('yanse').siblings(".yuan").removeClass('yanse');
	})
	/*自动轮播*/
	let t=setInterval(fn, 5000)
	let num=0;
	function fn(){
		num++;
		if (num>$(".btu").length-1) {
			num=0;
		}
		$(".btu").eq(num).css("display","block").siblings('.btu').css("display","none");
		$(".yuan").eq(num).addClass('yanse').siblings(".yuan").removeClass('yanse');
	}
	/*暂停*/
    $(".zhuangtu").hover(function(){
    	clearInterval(t);
    },function(){
    	t=setInterval(fn, 5000)
    })
    /*左右箭头*/
    /*左*/
    $(".bannaleft").click(function(){
    	fn1();
    })
    function fn1 () {
    	num--;
    	if (num<0) {
    		num=$(".btu").length-1;
    	}
    	$(".btu").eq(num).css("display","block").siblings('.btu').css("display","none");
		$(".yuan").eq(num).addClass('yanse').siblings(".yuan").removeClass('yanse');
    }
   /*右*/
   $(".bannaright").click(function(){
    	fn();
    }) 
   /*固定窗口*/
   $(window).scroll(function(){
   	 if ($(window).scrollTop()<400) {
   	 	$(".guding").css("display","none");
   	 }else if ($(window).scrollTop()>=400) {
   	 	$(".guding").css("display","block");
   	 }
   })
   $(".guding").click(function(){
       $(document.documentElement).animate({scrollTop:0},200)
    })
})