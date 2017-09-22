window.onload=function(){
	let canvas=document.querySelector('canvas');
	let mask=document.querySelector('.mask');
	let play= new Palette(canvas,mask);
	let gongneng=document.querySelectorAll('label');
	let eraser=document.querySelector('.eraser');
	let xiangpi=document.querySelector('.xiangpi');
	let word=document.querySelector('.word');
	let caiqie=document.querySelector('.caiqie');
	let clip=document.querySelector('.clip');
	let active=document.querySelectorAll('label[active="false"]');
	let num=0;
    for (let i = 0; i <active.length; i++) {
    	gongneng[i].addEventListener('click', function(){
	    	active[num].setAttribute("active", false);
	    	active[i].setAttribute("active", true);
	    	num=i;
    	})
    }
	gongneng.forEach(element=>{
		element.onclick=function(){
		  if (this.id=='pencil') {
		  	play.pencil();
		  }
		  else if (this.id=="polygon"||this.id=="polyjon") {
               play.num=prompt('请输入你的数',6)
		  } 
           play.draw(this.id);   
		}
	})
    xiangpi.onclick = function(){
	   play.eraser(eraser,22,22);
	}
    caiqie.onclick=function(){
    	play.clip(clip);
    }
    word.onclick=function(){
    	play.text();
    }
    /*填充*/
	let yanse = document.querySelectorAll('.yanse');
	yanse.forEach((element,index)=>{
		    element.onchange=function(){
			if(index == 0){
				play.fillStyle=this.value;
			}else if(index == 1){
				play.strokeStyle=this.value;
			}
		}
	})
	let stroke=document.getElementsByClassName('color')[1];
	stroke.onclick=function(){
		play.style='stroke';
	}
	let fill=document.getElementsByClassName('color')[0];
	fill.onclick=function(){
		play.style='fill';
	}
	/*反向*/
	let fanxiang=document.querySelector('.fanxiang');	
    fanxiang.onclick=function(){
    	play.reverse();
    }
    /*撤销*/
    let repeal = document.querySelector('.chexiao');
    repeal.onclick = function () {
		play.repeal();
    }
    /*保存*/
    let save=document.querySelector('#baocun');
    save.onclick=function(){
    	save.href=canvas.toDataURL('img/png');
    	save.download='a.png';
    } 
}