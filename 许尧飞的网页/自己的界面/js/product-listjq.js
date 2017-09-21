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
        $(document.documentElement).animate({scrollTop:0},200);
    })
})
