$(function(){
	/*头部*/
	$(".che").hover(function(){
		$(".zhuangche").css({zIndex:"3",height:"100"});
		$(".chezi").css("display","block");
	},function(){
		$(".zhuangche").css({zIndex:"0",height:"0"});
		$(".chezi").css("display","none");
	})
	/*搜索框*/
	$(".text123").click(function(){
		$(".xiaomimix").css("display","none");
		$(".rengongzhineng").css("display","none");
		$(".tishi").css("display","block")
	})
	$(".text123").blur(function(){
		$(".xiaomimix").css("display","block");
		$(".rengongzhineng").css("display","block");
		$(".tishi").css("display","none");
	})
	/*导航*/
    $(".nav-l").hover(function(){
        $(".xiangqing").animate({height:226}, 100);
    },function(){
        $(".xiangqing").animate({height:0}, 100);
    });
    $(".nav-l>li").hover(function(){
       $(".xiangqing1").eq($(this).index()-1).css("display","block").parent().siblings('.xiangqing1').children('.xiangqing1').css("display","none");
    },function(){
        $('.xiangqing1').eq($(this).index()-1).css("display","none");

    })
    /*侧导航*/
     $(".cemian").each(function(index,obj){
       $(this).mouseenter(function(){
       	$(".juti").eq(index).show().parent().siblings().children().eq(2).hide();
       })  
    });
      $(".cemian").each(function(index,obj){
       $(this).mouseleave(function(){
       	$(".juti").css({display:"none"});
       })  
    });
    /*点动图*/
    $(".luoguo>li").each(function(index,obj){
         $(this).click(function(){
         	$(".bxia").eq(index).show().siblings(".bxia").hide();
         	$(".luoguo>li").eq(index).css({background:"blue"}).siblings()
         	.css({background:"white"});
         });
    });
    /*自动轮播*/
    let t=setInterval(fn, 5000); 
    let num=0;
    function fn(){
    	num++;
    	if (num==$(".bxia").length) {
    		num=0;
    	}
    	$(".bxia").eq(num).show().siblings(".bxia").hide();
    	$(".luoguo>li").eq(num).css({background:"blue"}).siblings().css({background:"white"});
    }
    $(".banner").mouseenter(function() {
    	clearInterval(t);
    }).mouseleave(function(){
    	t=setInterval(fn, 5000);
    });
    /*右箭头*/
    $(".fangxiang2").click(function(){
    	fn();
    	$(".luoguo>li").eq(num).css({background:"blue"}).siblings().css({background:"white"});
    })
    /*左箭头*/
    $(".fangxiang1").click(function(){
    	fn1();
    	$(".luoguo>li").eq(num1).css({background:"blue"}).siblings().css({background:"white"});
    });
    let num1=0;
    function fn1(){
    	num1--;
    	if (num1==-1) {
    		num1=$(".bxia").length;
    	}
    	$(".bxia").eq(num1).show().siblings(".bxia").hide();
    }
    /*小米明星单品 */
    $(".big-zuo").click(function(){
    	$(".big-zuo").removeClass('bianse');
    	$(".big-you").addClass('bianse');
        $(".tuji1").stop();
        $(".tuji1").animate({marginLeft:0}, 100);
    })
    $(".big-you").click(function(){
    	$(".big-you").removeClass('bianse');
    	$(".big-zuo").addClass('bianse');
        $(".tuji1").stop();
        $(".tuji1").animate({marginLeft:-1240}, 100);
    })
    setInterval(move, 5000);
    let flag=true;
    function move(){
    	if (flag) {
    		$(".big-you").addClass('bianse');
    	    $(".big-zuo").removeClass('bianse');
    	    $(".tuji1").animate({marginLeft:0},500);
    	    flag=false;
    	}else{
    		$(".big-zuo").addClass('bianse');
    	    $(".big-you").removeClass('bianse');
    	    $(".tuji1").animate({marginLeft:-1240},500);
    	    flag=true;
    	}
    }
    /*选项卡*/
    function dong(type,obj){
    	$(type).hover(function() {
	    	$(obj).css("display","none");
	    	$(obj).eq($(this).index()).css("display","block");
	    }, function() {});
    	
    }
    /*家电*/dong(".chaquanbu1>li",".yiceng");
    /*智能*/dong(".chaquanbu2>li",".erceng");
            dong(".chaquanbu3>li",".sanceng");
            dong(".chaquanbu4>li",".siceng");
            dong(".chaquanbu5>li",".wuceng");

/*为你推荐*/
    let  num3=0;
    $(".wangzuo").click(function(){
    	num3++;
    	if (num3==0) {
    		$(".wangzuo").removeClass("huanse");
    	}
    	if (num3>=1) {
            return num3=0;
    	}
    	$(".wangyou").addClass('huanse');
    	$('.xiang1').animate({marginLeft:1240*num3}, 500)
    	return num3;
    })
     $(".wangyou").click(function(){
    	num3--;
    	if (num3==-3) {
    		$(".wangyou").removeClass("huanse");
    	}
    	if (num3<=-4) {
    		return num3=-3;
    	}
    	$(".wangzuo").addClass('huanse');
    	$('.xiang1').animate({marginLeft:1240*num3}, 500)
    	return num3;
    })
/*内容*/
    let num4=0;
    $(".righttt").click(function(){
        num4--;
        if (num4<=-$(".quan1").length) {
            return num4=-$(".quan1").length+1;
        }
        $(".quan1").css("border","none");
        $(".quan1").eq(-num4).css("border","1px solid #ff6700");
        $(".baozhu1").animate({marginLeft:296*num4}, 200);
    })
      $(".lefttt").click(function(){
        num4++;
        if (num4>=1) {
            return num4=0;
        }
        $(".quan1").css("border","none");
        $(".quan1").eq(-num4).css("border","1px solid #ff6700");
        $(".baozhu1").animate({marginLeft:296*num4}, 200);
    })
    let num5=0;
    $(".right1").click(function(){
        num5--;
        if (num5<=-$(".quan2").length) {
            return num5=-$(".quan2").length+1;
        }
        $(".quan2").css("border","none");
        $(".quan2").eq(-num5).css("border","1px solid #ff6700");
        $(".baozhu3").animate({marginLeft:296*num5}, 200);
    })
      $(".left1").click(function(){
        num5++;
        if (num5>=1) {
            return num5=0;
        }
        $(".quan2").css("border","none");
        $(".quan2").eq(-num5).css("border","1px solid #ff6700");
        $(".baozhu3").animate({marginLeft:296*num5}, 200);
    })  
    let num6=0;
    $(".right2").click(function(){
        num6--;
        if (num6<=-$(".quan3").length) {
            return num6=-$(".quan3").length+1;
        }
        $(".quan3").css("border","none");
        $(".quan3").eq(-num6).css("border","1px solid #ff6700");
        $(".baozhu5").animate({marginLeft:296*num6}, 200);
    })
      $(".left2").click(function(){
        num6++;
        if (num6>=1) {
            return num6=0;
        }
        $(".quan3").css("border","none");
        $(".quan3").eq(-num6).css("border","1px solid #ff6700");
        $(".baozhu5").animate({marginLeft:296*num6}, 200);
    }) 
    let num7=0;
    $(".right3").click(function(){
        num7--;
        if (num7<=-$(".quan4").length) {
            return num7=-$(".quan4").length+1;
        }
        $(".quan4").css("border","none");
        $(".quan4").eq(-num7).css("border","1px solid #ff6700");
        $(".baozhu7").animate({marginLeft:296*num7}, 200);
    })
      $(".left3").click(function(){
        num7++;
        if (num7>=1) {
            return num7=0;
        }
        $(".quan4").css("border","none");
        $(".quan4").eq(-num7).css("border","1px solid #ff6700");
        $(".baozhu7").animate({marginLeft:296*num7}, 200);
    })      

  
   /*点动图*/
    $(".quan1").click(function(){
    	$(".quan1").css("border","none");
   	    $(".quan1").eq($(this).index()).css("border","1px solid #ff6700")
    	$(".baozhu1").animate({marginLeft:-296*$(this).index()}, 200)
    })
    $(".quan2").click(function(){
    	$(".quan2").css("border","none");
   	    $(".quan2").eq($(this).index()).css("border","1px solid #ff6700")
    	$(".baozhu3").animate({marginLeft:-296*$(this).index()}, 200)
    })
    $(".quan3").click(function(){
    	$(".quan3").css("border","none");
   	    $(".quan3").eq($(this).index()).css("border","1px solid #ff6700")
    	$(".baozhu5").animate({marginLeft:-296*$(this).index()}, 200)
    })
    $(".quan4").click(function(){
    	$(".quan4").css("border","none");
   	    $(".quan4").eq($(this).index()).css("border","1px solid #ff6700")
    	$(".baozhu7").animate({marginLeft:-296*$(this).index()}, 200)
    })
})
   

	

    


























