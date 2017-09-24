window.addEventListener('load', function(){
	let banner=document.querySelector('.banner');
	let imgs1=document.querySelector('.imgs1');
	let imgs2=document.querySelector('.imgs2');
	let imw=banner.offsetWidth;
	/*let lunbo=document.querySelector(".lunbo");
	let lunboli=lunbo.querySelectorAll("li");*/
	let ox,offleft,w;
	banner.addEventListener('touchstart', function(e){
		let touches=e.changedTouches[0];
		ox=touches.clientX;
		offleft=imgs1.offsetLeft;
		offleft1=imgs2.offsetLeft;
        imgs1.style.transition='0s';
        clearInterval(t);
	})  
	banner.addEventListener('touchmove', function(e){
		let touches=e.changedTouches[0];
		let ax=touches.clientX;
		 w=ax-ox+offleft;
		 w1=ax-ox+offleft1;
		imgs1.style.left=`${w}px`;
		imgs2.style.left=`${w1}px`;

	})
	let num=0;
	banner.addEventListener('touchend', function(){
		let a=Math.round((imgs1.offsetLeft)/imw);
		if(a<0){
			let b=(Math.abs(a)%4);
			imgs1.style.left=`${a*imw}px`;/*1*/
			imgs2.style.left=`${4*imw+a*imw}px`;
			if(a<=-4){
				imgs1.style.left=`${a*imw}px`;/*2*/
			    imgs2.style.left=`${4*imw+a*imw}px`;
			    if(a<=-7){
			    	imgs1.style.left=`${8*imw+a*imw}px`;/*1*/
			        imgs2.style.left=`${4*imw+a*imw}px`;
			    }
			}
			
			/*lunboli[-num].classList.remove('color');
			lunboli[b].classList.add('color');
			num=-b;*/
	    }
		if(a>=0){
			/*let b;
			if(a==0){
				b=0;
			}else{
				b=4-a;
			}*/
			imgs1.style.left=`${a*imw}px`;
		    imgs2.style.left=`${-4*imw+a*imw}px`;
		    if(a>3){
		    	imgs1.style.left=`${-8*imw+a*imw}px`;
		    	imgs2.style.left=`${-4*imw+a*imw}px`;
		    }
			/*lunboli[-num].classList.remove('color');
			lunboli[b].classList.add('color');
			num=-b;*/
		}
		t=setInterval(fn, 1000);
	})
	let index=0;
	let t=setInterval(fn, 1000);
	function fn(){
		num--;
		num=num%4;
		imgs1.style.left=`${num*imw}px`;
		imgs2.style.left=`${4*imw+num*imw}px`;
		/*lunboli[-index].classList.remove('color');
		lunboli[-num].classList.add('color');
		index=num;*/
	}
})