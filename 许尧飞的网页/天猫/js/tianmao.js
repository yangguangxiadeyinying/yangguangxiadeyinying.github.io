window.onload=function(){
	/*头部*/
	let  taobao=document.getElementsByClassName('quanbian');
	let  taobao1=document.getElementsByClassName('quanbian1');
	let  zhichi=document.getElementsByClassName('zhichi');
	let  baoxia=document.getElementsByClassName('baoxia');
	let  baoxia1=document.getElementsByClassName('baoxia1');
    let  baoxia2=document.getElementsByClassName('baoxia2');
    let  baoxia3=document.getElementsByClassName('baoxia3');
    let  wangzhan=document.getElementsByClassName('wangzhan');
	let  tanma=document.getElementsByClassName('tanma');
    let  shoujiban=document.getElementsByClassName('shoujiban');
    let  sanjiao5=document.getElementsByClassName('sanjiao5');
    // for(let j=0;j<taobao.length;j++){
	taobao[0].onmouseover=function(){
          baoxia[0].style.display='block';
	}
	taobao1[0].onmouseover=function(){
          baoxia1[0].style.display='block';
	}
	zhichi[0].onmouseover=function(){
          baoxia2[0].style.display='block';
	}
    wangzhan[0].onmouseover=function(){
          baoxia3[0].style.display='block';
    }
    shoujiban[0].onmouseover=function(){
          tanma[0].style.display='block';
          sanjiao5[0].style.display='block';
    }
	taobao[0].onmouseout=function(){
          baoxia[0].style.display='none';
    }
    taobao1[0].onmouseout=function(){
          baoxia1[0].style.display='none';
    }
    zhichi[0].onmouseout=function(){
          baoxia2[0].style.display='none';
    }
    wangzhan[0].onmouseout=function(){
          baoxia3[0].style.display='none';
    }
    shoujiban[0].onmouseout=function(){
          tanma[0].style.display='none';
          sanjiao5[0].style.display='none';
    }
	// }
	/*侧导航*/
	let cela=document.getElementsByClassName('cela');
	let zuodans=document.getElementsByClassName('zuodan')[0];
	let zuodan=zuodans.getElementsByTagName('li');
	for(let i=0;i<zuodan.length;i++){
	  zuodan[i].onmouseover=function (){
		 cela[i].style.display='block';
	  }
	  zuodan[i].onmouseout=function (){
		cela[i].style.display='none';
	  }
    }
    /*banner图*/
    let bxias=document.getElementsByClassName('bxia');
    let lunguos=document.getElementsByClassName('lunguo')[0];
    let lunguoli=lunguos.getElementsByTagName('li');
    let huanse=document.getElementsByClassName('huanse')[0];
    let num=0;
    for(let i=0;i<lunguoli.length;i++){
    	lunguoli[i].onclick=function(){
    		lunguoli[num].classList.remove('huanse');
    		lunguoli[i].classList.add('huanse');
    		bxias[num].style.display='none';
    		bxias[i].style.display='block';
    		num=i;
    	}
    }
    let t=setInterval(fn, 1000);
    function fn(){
    	num++;
    	if(num==bxias.length){
    		num=0;
    	}
    	for(let j=0;j<lunguoli.length;j++){
            bxias[j].style.display='none';
            lunguoli[j].classList.remove('huanse');
        }
    	    bxias[num].style.display='block';
            lunguoli[num].classList.add('huanse');
    }
    /*暂停*/
    let zhuye=document.getElementsByClassName('zhuye')[0];
    zhuye.onmouseenter=function(){
    	clearTimeout(t);
    }
    zhuye.onmouseleave=function(){
       t=setInterval(fn,1000)
    }
    /*左定位的效果*/
    let zhibiao=document.getElementsByClassName('zhibiao');
    let fukuang=document.querySelector('.fukuang');
    let zhibiaoli=zhibiao[0].getElementsByTagName('li');
    let kong=true;
   /*消失与出现*/
    window.onscroll=function(){
        let  gd= document.body.scrollTop;
        if (gd>800) {
            zhibiao[0].style.display='block';
        }
        else{
            zhibiao[0].style.display='none';
        }
    /*浮框*/
      if (gd>700) {
                if(kong){
                    kong=false;
                    animate(fukuang,{top:0});
                }
                }
            else if(!kong){
                    kong=true;
                    animate(fukuang,{top:-60});
           }
/*显现*/
      if (gd>1930&&gd<2430) {
        zhibiaoli[1].style.background='pink';
        zhibiaoli[2].style.background='#525151';
        zhibiaoli[3].style.background='#525151';
        zhibiaoli[7].style.background='#525151';
      }
      else if(gd>2430&&gd<3050){
        zhibiaoli[1].style.background='#525151';
        zhibiaoli[2].style.background='green';
        zhibiaoli[3].style.background='#525151';
        zhibiaoli[7].style.background='#525151';
      }
      else if(gd>3050&&gd<3500){
        zhibiaoli[1].style.background='#525151';
        zhibiaoli[2].style.background='#525151';
        zhibiaoli[3].style.background='cyan';
        zhibiaoli[7].style.background='#525151';
      }
      else if(gd>3500){
        zhibiaoli[1].style.background='#525151';
        zhibiaoli[2].style.background='#525151';
        zhibiaoli[3].style.background='#525151';
        zhibiaoli[7].style.background='purple';
      }
   }

   /*匹配问题*/
  
    zhibiaoli[1].onclick=function() {
        document.body.scrollTop=1930;
    }
    zhibiaoli[2].onclick=function() {
        document.body.scrollTop=2430;
    }
    zhibiaoli[3].onclick=function() {
        document.body.scrollTop=3050;
    }
    zhibiaoli[7].onclick=function() {
        document.body.scrollTop=3500;
    }
    zhibiaoli[8].onclick=function() {
        document.body.scrollTop=0;
    }
/* banner左边的效果图*/
    let  da1=document.querySelector('.da1');
    let  fangzuo=document.querySelector('.fangzuo');
    let  fangyou=document.querySelector('.fangyou');
    fangzuo.onclick=function(){
         da1.style.left='0px';
         fangzuo.style.display='none';
         fangyou.style.display='block';
    }
    fangyou.onclick=function(){
         da1.style.left='-492px';
         fangyou.style.display='none';
         fangzuo.style.display='block';
    }
/*暂停的*/
    let pause=document.getElementsByClassName('pause');
    let one=document.getElementsByClassName('one');
    let s=0;
    console.log(one.length)
    for(let i=0;i<one.length;i++){
        one[i].onclick=function(){
            pause[s].style.display='none';
            pause[i].style.display='block';
            s=i;
        }
    }
/* 右边定位的效果*/
    let biaoji1=document.querySelector('.biaoji1');
    let chuxian1=document.querySelector('.chuxian1');
    biaoji1.onmouseenter=function(){
        chuxian1.style.opacity='1';
    }
    biaoji1.onmouseleave=function(){
        chuxian1.style.opacity='0';
    }
}