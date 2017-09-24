window.addEventListener('load', function(){
	let banner=document.querySelector('.banner');
	let imgs=document.querySelector('.imgs');
	let imw=banner.offsetWidth;
	let lunbo=document.querySelector(".lunbo");
	let lunboli=lunbo.querySelectorAll("li");
	let ox,offleft,w;
	banner.addEventListener('touchstart', function(e){
		let touches=e.changedTouches[0];
		ox=touches.clientX;
		offleft=imgs.offsetLeft;
        imgs.style.transition='0s';
	})  
	banner.addEventListener('touchmove', function(e){
			let touches=e.changedTouches[0];
			let ax=touches.clientX;
			 w=ax-ox+offleft;
			imgs.style.left=`${w}px`;
		})
	let num=0;
	banner.addEventListener('touchend', function(){
		let a=Math.round(imgs.offsetLeft/imw);
		console.log(a);
		if(a<-4){
			a=-4;
			imgs.style.left=`${-4*imw}px`;
		    imgs.style.transition='0.5s';
		}else if(a>0){
			a=0;
			imgs.style.left=`0px`;
		    imgs.style.transition='0.5s';
		}else{
			imgs.style.left=`${a*imw}px`;
		    imgs.style.transition='0.5s';
		}
		lunboli[num].classList.remove("color");
		lunboli[-a].classList.add('color');
		num=-a;
	})
})