/*
* @Author: HASEE
* @Date:   2017-08-10 15:27:09
* @Last Modified by:   HASEE
* @Last Modified time: 2017-09-08 17:05:46
*/
window.onload=function(){
	/*购物车的js*/
	let ches=document.getElementsByClassName('che');
	let zhuangche=document.getElementsByClassName('zhuangche');
	let chezi=document.getElementsByClassName('chezi');
	ches[0].onmouseover=function(){
		zhuangche[0].style.display="block";
		zhuangche[0].style.height='100px';
		chezi[0].style.display='block';
	}
	ches[0].onmouseout=function(){
		chezi[0].style.display='none';

	}
	/*搜索框的js*/
	let tishi=document.getElementsByClassName('tishi');
	let xiaomi=document.getElementsByClassName('xiaomimix');
	let rengong=document.getElementsByClassName('rengongzhineng');
	let text=document.getElementsByClassName('text123')[0];
	text.onclick=function(){
		xiaomi[0].style.display="none";
		rengong[0].style.display="none";
		tishi[0].style.display="block";
	}
	text.onblur=function(){
		xiaomi[0].style.display="block";
		rengong[0].style.display="block";
		tishi[0].style.display="none";
	}
	/*导航的js*/
    let navs=document.getElementsByClassName('xiala')[0];
    let navsli=navs.getElementsByTagName('li');
    
	  let xiangqing=document.getElementsByClassName('xiangqing');
    for(let i=0;i<navsli.length;i++){
	  navsli[i].onmouseover=function(){
        xiangqing[i].style.display='block';
	}
}
    for(let j=0;j<navsli.length;j++){
    navsli[j].onmouseout=function(){
        xiangqing[j].style.display='none';
  }
}
	/*侧导航的js*/
	let  cemian=document.getElementsByClassName('cemian');
	let  juti=document.getElementsByClassName('juti');
	for(let i=0;i<cemian.length;i++){
	  cemian[i].onmouseover=function(){
		juti[i].style.display='block';
	  }
	  cemian[i].onmouseout=function(){
		juti[i].style.display='none';
	  }
    }
   /*banner图的效果*/
   let bxias=document.getElementsByClassName('bxia');
   let yanse=document.getElementsByClassName('yanse');
   let luoguo = document.getElementsByClassName('luoguo')[0];
   let luoguoli = luoguo.getElementsByTagName('li');
   let num=0;
    /*点动图*/
   for(let i=0;i<luoguoli.length;i++){
   	 luoguoli[i].onclick=function(){
   	   luoguoli[num].classList.remove('yanse');
   	   this.classList.add('yanse');
       bxias[num].style.display='none';
       bxias[i].style.display='block';
       num=i;
     }
   }
   /*自动轮播*/
    let t;
    t=setInterval(fn,5000);
    function fn(){
    	num++;
    	if (num==bxias.length) {
    		num=0;
    	}
    	for(let k=0;k<bxias.length;k++){
    		bxias[k].style.display='none';
    		luoguoli[k].classList.remove('yanse');
    	}   
    	    luoguoli[num].classList.add('yanse');
    	    bxias[num].style.display='block';
    }
    /*左右箭头的*/
    let  back=document.getElementsByClassName('fangxiang1');
    let  forward=document.getElementsByClassName('fangxiang2');
    forward[0].onclick=fn;
    back[0].onclick=function(){
    	num--;
    	if (num==-1) {
    		num=bxias.length-1;
    	} 
    	for(let k=0;k<bxias.length;k++){
    		bxias[k].style.display='none';
    		luoguoli[k].classList.remove('yanse');
    	}   
    	    luoguoli[num].classList.add('yanse');
    	    bxias[num].style.display='block';
    }
    /*暂停的*/
   let banner=document.getElementsByClassName('banner')[0];
    banner.onmouseenter=function(){
    	clearTimeout(t);
    }
    banner.onmouseleave=function(){
       t=setInterval(fn,5000)
    }
    /*小米明星单品*/
    let bleft=document.getElementsByClassName('big-zuo')[0];
    let bright=document.getElementsByClassName('big-you')[0];
    let tujis=document.getElementsByClassName('tuji1');
    let tu=document.getElementsByClassName('picture1');
    let tushu=tujis.childElementCount;
    let width=tu[0].offsetWidth+parseInt(getComputedStyle(tu[0],null).marginRight);
    let num1=0;
    let zong=tujis[0].childElementCount;
    let pingshu=zong/5;
    tu[0].style.height=`${width*tushu}px`; 
    bright.onclick=function (){  
      bright.classList.remove('bianse');
      bleft.classList.add('bianse');
      if (num1==1) {
       
        return;
      }
      num1++;
      tujis[0].style.marginLeft=`${-1240*num1}px`;
    }
     bleft.onclick=function (){
      bleft.classList.remove('bianse');
      bright.classList.add('bianse');
      if (num1==0) {
        return
      }
      num1--;
      tujis[0].style.marginLeft=`${-1240*num1}px`;
    }
    let m=setInterval(dong,5000);
    function dong(){
      if (num1==0) {
         num1++;
         tujis[0].style.marginLeft=`${-1240*num1}px`;
         bright.classList.remove('bianse');
         bleft.classList.add('bianse');
      }else{
         num1--;
         tujis[0].style.marginLeft=`${-1240*num1}px`;
         bleft.classList.remove('bianse');
         bright.classList.add('bianse'); 
      }
    }
    /*为你推荐的效果*/
    let wangyou=document.getElementsByClassName('wangyou');
    let wangzuo=document.getElementsByClassName('wangzuo');
    let zhaopians=document.getElementsByClassName('zhaopian');
    let xiang1=document.getElementsByClassName('xiang1');
    let dang=0;
    wangyou[0].onclick=function(){
      if (dang>=3) {
        return
      } 
        dang++;
        if (dang<3) {
        wangyou[0].classList.add('huanse');
      }else{
        wangyou[0].classList.remove('huanse');
        } 
        wangzuo[0].classList.add('huanse');
        xiang1[0].style.marginLeft=`${-1240*dang}px`;
    }
    wangzuo[0].onclick=function(){
       if (dang==0) {
        return
      }
        dang--;
        if (dang>0) { 
          wangzuo[0].classList.add('huanse');
        }
        else{
          wangzuo[0].classList.remove('huanse');
        }
        wangyou[0].classList.add('huanse');
        xiang1[0].style.marginLeft=`${-1240*dang}px`;
    }
/*内容的效果1*/
    let lefttt=document.querySelector('.lefttt');
    let righttt=document.querySelector('.righttt');
    let baozhu1=document.querySelector('.baozhu1');
    let quan1=document.getElementsByClassName('quan1');
    let shu=0;
    righttt.onclick=function(){  
      if (shu>1) {
        return;
      } 
      quan1[shu].style.border='0px solid #ff6700';
        shu++;  
        baozhu1.style.marginLeft=`${-296*shu}px`;
        quan1[shu].style.border='1px solid #ff6700';
    }

     lefttt.onclick=function(){
     if (shu<1) {
      return;
     } 
     quan1[shu].style.border='0px solid #ff6700'; 
        shu--;  
        baozhu1.style.marginLeft=`${-296*shu}px`;
        quan1[shu].style.border='1px solid #ff6700';

    }
      for(let m=0;m<quan1.length;m++){
        quan1[m].onclick=function(){
        quan1[shu].style.border='0px solid #ff6700';
        quan1[m].style.border='1px solid #ff6700';
        baozhu1.style.marginLeft=`${-296*m}px`;
        shu=m;
        }
      }
/*内容的效果2*/
    let left1=document.querySelector('.left1');
    let right1=document.querySelector('.right1');
    let baozhu3=document.querySelector('.baozhu3');
    let quan2=document.getElementsByClassName('quan2');
    let shu1=0;
    /*左右箭头*/
    right1.onclick=function(){  
      
      if (shu1>1) {
        return;
      } 
        quan2[shu1].style.border='0px solid #ff6700';
        shu1++;  
        baozhu3.style.marginLeft=`${-296*shu1}px`;
        quan2[shu1].style.border='1px solid #ff6700';
    }

     left1.onclick=function(){
      
     if (shu1<1) {
      return;
     } 
        quan2[shu1].style.border='0px solid #ff6700';
        shu1--;  
        baozhu3.style.marginLeft=`${-296*shu1}px`;
        quan2[shu1].style.border='1px solid #ff6700';

    }
    /*点动图*/
      for(let m=0;m<quan2.length;m++){
        quan2[m].onclick=function(){
        quan2[shu1].style.border='0px solid #ff6700';
        quan2[m].style.border='1px solid #ff6700';
        baozhu3.style.marginLeft=`${-296*m}px`;
        shu1=m;
        }
      }
/*内容的效果3*/
    let left2=document.querySelector('.left2');
    let right2=document.querySelector('.right2');
    let baozhu5=document.querySelector('.baozhu5');
    let quan3=document.getElementsByClassName('quan3');
    let shu2=0;
    /*左右箭头*/
    right2.onclick=function(){  
      
      if (shu2>1) {
        return;
      } 
        quan3[shu2].style.border='0px solid #ff6700';
        shu2++;  
        baozhu5.style.marginLeft=`${-296*shu2}px`;
        quan3[shu2].style.border='1px solid #ff6700';
    }

     left2.onclick=function(){
      
     if (shu2<1) {
      return;
     } 
        quan3[shu2].style.border='0px solid #ff6700';
        shu2--;  
        baozhu5.style.marginLeft=`${-296*shu2}px`;
        quan3[shu2].style.border='1px solid #ff6700';

    }
    /*点动图*/
      for(let m=0;m<quan3.length;m++){
        quan3[m].onclick=function(){
        quan3[shu2].style.border='0px solid #ff6700';
        quan3[m].style.border='1px solid #ff6700';
        baozhu5.style.marginLeft=`${-296*m}px`;
        shu2=m;
        }
      }
/*内容的效果4*/
    let left3=document.querySelector('.left3');
    let right3=document.querySelector('.right3');
    let baozhu7=document.querySelector('.baozhu7');
    let quan4=document.getElementsByClassName('quan4');
    let shu3=0;
    /*左右箭头*/
    right3.onclick=function(){  
      if (shu3>2) {
        return;
      }
        quan4[shu3].style.border='0px solid #ff6700';
        shu3++;  
        baozhu7.style.marginLeft=`${-296*shu3}px`;
        quan4[shu3].style.border='1px solid #ff6700';
    }

     left3.onclick=function(){
      if (shu3<1) {
      return;
     } 
        quan4[shu3].style.border='0px solid #ff6700';
        shu3--;  
        baozhu7.style.marginLeft=`${-296*shu3}px`;
        quan4[shu3].style.border='1px solid #ff6700';

    }
    /*点动图*/
      for(let m=0;m<quan4.length;m++){
        quan4[m].onclick=function(){
        quan4[shu3].style.border='0px solid #ff6700';
        quan4[m].style.border='1px solid #ff6700';
        baozhu7.style.marginLeft=`${-296*m}px`;
        shu3=m;
        }
      }
/*选项卡*/
    /*家电*/
    let chaquanbu=document.getElementsByClassName('chaquanbu1')[0];
    let chaquanbu1=chaquanbu.getElementsByTagName('li');
    let yiceng=document.getElementsByClassName('yiceng');
    let n=0;
    for(let i=0;i<chaquanbu1.length;i++){
       chaquanbu1[i].onmouseenter=function(){
            yiceng[n].style.display='none';
            yiceng[i].style.display='block'; 
            n=i;
        }
    }
    /*智能*/
    let quanbu=document.getElementsByClassName('chaquanbu2')[0];
    let chaquanbu2=quanbu.getElementsByTagName('li');
    let erceng=document.getElementsByClassName('erceng');
    let l=0;
    for(let i=0;i<chaquanbu2.length;i++){
       chaquanbu2[i].onmouseenter=function(){
            erceng[l].style.display='none';
            erceng[i].style.display='block'; 
            l=i;
        }
    }
    /*搭配*/
    let quan=document.getElementsByClassName('chaquanbu3')[0];
    let chaquanbu3=quan.getElementsByTagName('li');
    let sanceng=document.getElementsByClassName('sanceng');
    let q=0;
    for(let i=0;i<chaquanbu3.length;i++){
       chaquanbu3[i].onmouseenter=function(){
            sanceng[q].style.display='none';
            sanceng[i].style.display='block'; 
            q=i;
        }
    }
    /*配件*/
    let quan6=document.getElementsByClassName('chaquanbu4')[0];
    let chaquanbu4=quan6.getElementsByTagName('li');
    let siceng=document.getElementsByClassName('siceng');
    let p=0;
    for(let i=0;i<chaquanbu4.length;i++){
       chaquanbu4[i].onmouseenter=function(){
            siceng[p].style.display='none';
            siceng[i].style.display='block'; 
            p=i;
        }
    } 
/* 周边*/
    let quan7=document.getElementsByClassName('chaquanbu5')[0];
        let chaquanbu5=quan7.getElementsByTagName('li');
        let wuceng=document.getElementsByClassName('wuceng');
        let y=0;
        for(let i=0;i<chaquanbu5.length;i++){
           chaquanbu5[i].onmouseenter=function(){
                wuceng[y].style.display='none';
                wuceng[i].style.display='block'; 
                y=i;
            }
        } 
}