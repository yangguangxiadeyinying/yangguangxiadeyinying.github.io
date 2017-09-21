$(function(){
	/*点动图*/
	$(".xiao").click(function(){
		$(".bxia").eq($(this).index()).css("display","block").siblings('.bxia').css("display","none");
		$(".xiao").eq($(this).index()).addClass('yanse').siblings('.xiao').removeClass('yanse');
	})
	/*自动轮播*/
    let t=setInterval(fn, 5000)
    let num=0;
    function fn(){
    	num++;
    	if (num>$(".bxia").length-1) {
    		num=0;
    	}
    	$(".bxia").eq(num).css("display","block").siblings('.bxia').css("display","none");
    	$(".xiao").eq(num).addClass('yanse').siblings('.xiao').removeClass('yanse');
    }
    /*暂停*/
    $(".banner1").hover(function(){
    	clearInterval(t);
    },function(){
    	t=setInterval(fn, 5000)
    })
    /*左右箭头*/
    /*左*/
    $(".yuan1").click(function(){
    	fn1();
    })
    function fn1(){
    	num--;
    	if (num<0) {
    		num=$(".bxia").length-1;
    	}
        $(".bxia").eq(num).css("display","block").siblings('.bxia').css("display","none");
    	$(".xiao").eq(num).addClass('yanse').siblings('.xiao').removeClass('yanse');	
    }
    /*右*/
    $(".yuan").click(function(){
    	fn();
    })
})
