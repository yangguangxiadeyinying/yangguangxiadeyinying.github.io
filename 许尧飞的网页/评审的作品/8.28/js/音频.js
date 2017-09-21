/*
* @Author: HASEE
* @Date:   2017-08-30 22:57:15
* @Last Modified by:   HASEE
* @Last Modified time: 2017-09-01 15:11:33
*/
window.onload=function(){
	let sing=document.getElementsByClassName('sing')[0];
	let singer=document.getElementsByClassName('singer')[0];
	let audio=document.querySelector('audio');
	let zhong=document.getElementsByClassName('zhong');
	let pause=document.getElementsByClassName('pause')[0];
	let goon=document.getElementsByClassName('goon')[0];
	let list=document.getElementsByClassName('ci')[0];
	let current=document.querySelector('.current');
	let duration=document.querySelector('.duration');
	let progressbar=document.querySelector('.progressbar');
	let xiaotu=document.querySelector('.xiaotu>img');
	let tu=document.querySelector('.tu>img');
	let gequ=document.querySelector('.gequ');
	let i=0;
	zhong[0].onclick=function(){
		if (audio.paused) {
			audio.play();
			pause.style.display='block';
            goon.style.display='none';
		}else{
			audio.pause();
			pause.style.display='none';
			goon.style.display='block';
			
		}
	}
	
	render(database[0]);
	function render(data){
		sing.innerText=data.songs;
		singer.innerText=data.name;
        audio.src=data.src;
        tu.src=xiaotu.src=data.photo;
        duration.innerText=data.alltime;
        gequ.innerText=`${data.songs}-${data.name}`
        list.innerHTML=``;

        for (let i =0; i<data.lyrics.length; i++) {
        	list.innerHTML+=`
        	<li>${data.lyrics[i].lyric}</li>`
        }
	}
	audio.ontimeupdate=function(){
		let ct=time(audio.currentTime);
		current.innerText=ct; 
		let bili=audio.currentTime/audio.duration;
		progressbar.style.width=`${bili*100}%`;
        database[i].lyrics.forEach((element,index)=>{
	     	if (element.time==ct) {
	     		let a=index;
	     		list.innerHTML=``;
	     		if (index<=3){
	     			index=0;
	     		}else{
	     			index-=3;
	     		}
	     		for(let j=index;j<database[i].lyrics.length;j++){
	     			list.innerHTML+=`
	     			<li class="list${j}">${database[i].lyrics[j].lyric}</li>`;
	     		}
	     		let obj=document.querySelector(`.list${a}`);
	     		obj.style.color='#00ffef';
	     	}
	     })
	}
	audio.onended=function(){
		i++;
		if (i>5) {
			i=0;
		}
		render(database[i]);
		current.innerText=`00:00`;
		audio.play();
		pause.style.display='block';
        goon.style.display='none'; 

	}
	let zuo=document.querySelector('.zuo');
	zuo.onclick=function(){
		i--;
		if (i<0) {
			i=5;
		}
		render(database[i]);
		current.innerText=`00:00`;
		audio.play();
		pause.style.display='block';
        goon.style.display='none';
	}
	let you=document.querySelector('.you');
	you.onclick=function(){
		i++;
		if (i>5) {
			i=0;
		}
		render(database[i]);
		current.innerText=`00:00`;
		audio.play();
		pause.style.display='block';
        goon.style.display='none'; 
	}
	// /*格式化时间*/
	function time(t){
       let m= Math.floor(t/60)>10? Math.floor(t/60):`0${Math.floor(t/60)}`
       let n=Math.floor(t%60)>10?  Math.floor(t%60):`0${Math.floor(t%60)}`
       return `${m}:${n}`;
	 }
	/*声音*/
	let volumn=document.querySelector('.volumn');
	let dian=document.querySelector('.dian');
	let shengyin=document.querySelector('.shengyin');
	document.onmousedown=function(e){
		e.preventDefault();
         let ox=e.clientX;
         let gw=volumn.offsetWidth;
         document.onmousemove=function(e){
         	let ax=e.clientX;
         	let lefts=ax-ox+gw;
         	if (lefts<=0) {
         		lefts=0;
         	}
         	let q=lefts/(shengyin.offsetWidth);
         	if (q>=1) {
         		q=1;
         	}
         	dian.style.left=`${q*100}%`;
         	volumn.style.width=`${q*100}%`;
         	audio.volume=q;
        }
        document.onmouseup=function(){
		   document.onmousemove=null;
		   document.onmouseup=null;
       }
	}
}
         