/*
* @Author: HASEE
* @Date:   2017-08-31 21:29:53
* @Last Modified by:   HASEE
* @Last Modified time: 2017-09-01 00:09:01
*/
window.addEventListener('load', function(){
	let box=document.querySelector('.box');
	let imgbox=document.querySelector('.imgbox');
	let imw=box.offsetWidth;
	let ox,offleft,w;
	box.addEventListener('touchstart', function(e){
		let touches=e.changedTouches[0];
		ox=touches.clientX;
		offleft=imgbox.offsetLeft;
        imgbox.style.transition='0s';
	})  
		box.addEventListener('touchmove', function(e){
			let touches=e.changedTouches[0];
			let ax=touches.clientX;
			 w=ax-ox+offleft;
			imgbox.style.left=`${w}px`;
		})
	box.addEventListener('touchend', function(){
		let a=Math.round(imgbox.offsetLeft/imw);
		imgbox.style.left=`${a*imw}px`;
		imgbox.style.transition='0.5s';
	})
})