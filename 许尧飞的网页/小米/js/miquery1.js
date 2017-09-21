$(function(){
	$(".cemian").hover(function(){
	      $(".juti").eq($(this).index()).css("display","block");
		},
		function(){
	       $(".juti").eq($(this).index()).css("display","none");
		});
	let t=setInterval(fn, 2000);
	let num=0;
	function fn(){
        num++;
        if (num==$(".bxia").length) {
        	num=0;
        }
        $(".bxia").css("display","none").eq(num).css("display","block");
	};
	$(".fangxiang1").click(function(){
		num--;
		if (num==-1) {
			num=$(".bxia").length;
		}
		$(".bxia").css("display","none").eq(num).css("display","block");
	})
	$(".fangxiang2").click(function(){
		fn();
	})
})
