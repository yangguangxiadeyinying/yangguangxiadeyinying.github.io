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
    /*banner*/
    let datu=$('.datu');
    let bxia=$('.bxia');
    let yuan=$('.yuan');
    let yanse=$('yanse')
    let index=0;
    for(let i=0;i<yuan.length;i++){
        yuan[i].onclick=function(){
        yuan[index].classList.remove('yanse');
        yuan[i].classList.add('yanse');   
        bxia[index].style.display='none';
        bxia[i].style.display='block';
        index=i;
        }
    }
    /*自动轮播*/
    let t=setInterval(fn, 5000);
    function fn(){
        index++;
        if (index==bxia.length) {
            index=0;
        }
        for(let i=0;i<bxia.length;i++){
            yuan[i].classList.remove('yanse');     
            bxia[i].style.display='none';
         }
            bxia[index].style.display='block';
            yuan[index].classList.add('yanse');
    }
    /*左右箭头*/
    let bleft=$('.bleft');
    let bright=$('.bright');
      bright[0].onclick=fn;
      bleft[0].onclick=function (){
        index--;
        if (index==-1) {
            index=bxia.length-1;
        }
        for(let i=0;i<bxia.length;i++){
            yuan[i].classList.remove('yanse');     
            bxia[i].style.display='none';
        }
            bxia[index].style.display='block';
            yuan[index].classList.add('yanse');
      }
/*暂停*/
      datu[0].onmouseenter=function(){
        clearInterval(t);
      }
       datu[0].onmouseleave=function(){
        t=setInterval(fn, 5000);
      }
/* 产品案例*/
    let tuzhong1=$('.tuzhong1');
    let tuzhong=$('.tuzhong');
    let tuzhong2=$('.tuzhong2');
    let back=$('.tuzuo');
    let forward=$('.tuyou');
    let dongtu=$('.dongtu')
    // 自动
    let a=0;
    let s=-1;
    let n=setInterval(fn1, 10);
    function  fn1(){
       a++;
    tuzhong1[0].style.left=`${0-1*a}px`;
    tuzhong2[0].style.left=`${1440-1*a}px`;
        if (a>=1440) {
            s++;
            tuzhong1[0].style.left=`${1440-s*1}px`;
            tuzhong2[0].style.left=`${1440-1*a}px`;
            if (a>=2880) {
              tuzhong2[0].style.left=`${1440-s*1}px`;
              a=0;
              s=-1;
              tuzhong1[0].style.left=`${0}px`;

            }
        }
    }
     /*暂停*/
    tuzhong[0].onmouseenter=function  (){
        clearInterval(n);
    }
    tuzhong[0].onmouseleave=function  (){
        n=setInterval(fn1, 10);
    }
    // }
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