/*
* @Author: HASEE
* @Date:   2017-08-10 22:10:50
* @Last Modified by:   HASEE
* @Last Modified time: 2017-08-17 22:16:37
*/
window.onload=function(){
	/*购物车的js*/
	let gouwuche=document.getElementsByClassName('gouwuche');
	let zhuangche=document.getElementsByClassName('zhuangche');
	gouwuche[0].onmouseover=function(){
		zhuangche[0].style.display='block';
		zhuangche[0].style.height="50px";
	}
	gouwuche[0].onmouseout=function(){
		zhuangche[0].style.height="0px";
	}
	/*菜单栏js*/
	let lis=document.getElementsByClassName('dh');
	let xialas=document.getElementsByClassName('xiala');
	for(let i=0;i<lis.length;i++){
	lis[i].onmouseover=function(){
		// xialas[i].style.display='block';
		xialas[i].style.height='300px';
	}
	lis[i].onmouseout=function(){
		// xialas[i].style.display='none';
		xialas[i].style.height='0px';
    }
}   
/*搜索框的效果*/
    let  tex=document.getElementsByClassName('tex');
    tex[0].onclick=function(){
      tex[0].placeholder=tex[0].getAttribute('name');
    }
/*banner图的效果*/ 
	let btus=document.getElementsByClassName('btu');
	let yuans=document.getElementsByClassName('yuan');
	let now=0;
	/*点动图*/
	for (let i = 0; i < yuans.length; i++) {
		yuans[i].onclick=function(){
			yuans[now].classList.remove('yanse');
			yuans[i].classList.add('yanse');
            btus[now].style.display='none';
            btus[i].style.display='block';
            now=i;
		}
	}
	/*自动轮播*/
	let t=setInterval(fn, 1000);
	function fn(){
		now++;
		if (now==btus.length) {
			now=0;
		}
		for (let j= 0; j < btus.length; j++) {
			btus[j].style.display='none';
			yuans[j].classList.remove('yanse');
		}
		    btus[now].style.display='block';
		    yuans[now].classList.add('yanse');
	}
	/*左右箭头*/
	let zuo=document.getElementsByClassName('bannaleft')[0];
	let you=document.getElementsByClassName('bannaright')[0];
    
    function fn1(){
		now--;
		if (now==-1) {
			now=5;
		}
		for (let j= 0; j < btus.length; j++) {
			btus[j].style.display='none';
			yuans[j].classList.remove('yanse');
		}
		    btus[now].style.display='block';
		    yuans[now].classList.add('yanse');
	}
	zuo.onclick=fn1;
	you.onclick=fn;
/*暂停*/
    let zhuangtu=document.getElementsByClassName('zhuangtu')[0];
    zhuangtu.onmouseenter=function(){
    	clearTimeout(t);
    }
    zhuangtu.onmouseleave=function(){
    	t=setInterval(fn, 1000)
    }
}