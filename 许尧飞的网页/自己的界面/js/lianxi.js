/*
* @Author: HASEE
* @Date:   2017-08-28 09:19:43
* @Last Modified by:   HASEE
* @Last Modified time: 2017-09-01 11:07:06
*/
window.onload=function(){
	let zhongjian=$('.zhongjian');
	let sanjiao=$('.sanjiao');
	let juti=$('.juti');
	let num=0;
	let zhongjianli=zhongjian[0].getElementsByTagName('li');
    /*导航栏*/
    for(let i=0;i<zhongjianli.length-2;i++){
    	zhongjianli[i].onmouseenter=function(){
            sanjiao[num].style.display='none';
            juti[num].style.display='none';
            sanjiao[i].style.display='block';
            juti[i].style.display='block';
            num=i;
    	}
    }
      for(let j=1;j<zhongjianli.length-2;j++)
    	zhongjianli[j].onmouseleave=function(){
            sanjiao[j].style.display='none';
            juti[j].style.display='none';
    	}
         /*返回顶部*/
    let guding=$('.guding');
    window.onscroll=function(){
        let gh=document.body.scrollTop;
        if (gh<400) {
            guding[0].style.display='none';
        }
        else if (gh>=400) {
            guding[0].style.display='block';
        }
    }
    guding[0].onclick=function(){
        document.body.scrollTop=0;
    }
}