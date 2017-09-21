window.onload=function(){
	let banner1=$('.banner');
	let bxias=$('.bxia');
	let xiao=$('.xiao');
	let num=0;
	// 点动图
	for(let i=0;i<xiao.length;i++){
		xiao[i].onclick=function(){
			xiao[num].classList.remove('yanse');
			bxias[num].style.display='none';
			bxias[i].style.display='block';
			xiao[i].classList.add('yanse');
			num=i;
		}
	}
	/*自动轮播*/
    let t=setInterval(fn, 1000);
    function fn(){
    	num++;
    	if (num==bxias.length) {
    		num=0;
    	}
    	for(let i=0;i<bxias.length;i++){
            xiao[i].classList.remove('yanse');
            bxias[i].style.display='none';
        }
    		xiao[num].classList.add('yanse');
    		bxias[num].style.display='block';
			
		}
    /*左右箭头*/
    let yuan=$('.yuan');
    let yuan1=$('.yuan1');
    yuan[0].onclick=fn;
    yuan1[0].onclick=function(){
    	    num--;
    	if (num==-1) {
    		num=bxias.length-1;
    	}
    	for(let i=0;i<bxias.length;i++){
    		xiao[i].classList.add('yanse');
    		bxias[i].style.display='block';
    	}
			xiao[num].classList.remove('yanse');
			bxias[num].style.display='none';
    }
    /*暂停*/
    banner1[0].onmouseenter=function(){
    	clearInterval(t);
    }
     banner1[0].onmouseleave=function(){
    	t=setInterval(fn, 1000); 
    }
    /*最下面*/
    let h3=$('h3');
    let biaoti=$('.biaoti')
    // let li=biaoti[0].getElementsByTagName('li');
    // let ol1=li[0].getElementsByTagName('ol');
    for(let i=0;i<h3.length;i++){
    	h3[i].onclick=function(){
    		console.log(i)
    		let li=biaoti[0].getElementsByTagName('li');
    		let ol=li[i].getElementsByTagName('ol');
    		for(let j=0;j<ol.length;j++){
    		ol[j].style.display='block';
    	    }
        }
    }























}