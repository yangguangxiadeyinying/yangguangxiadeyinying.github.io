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
/*留言板*/
   let inputs=$('input');
   let reset=$('.reset')[0];
   let submit=$('.submit')[0];
   let textarea=$('textarea')[0];
   reset.onclick=function(){
    for(let i=0;i<inputs.length;i++){
     inputs[i].value='';
     textarea.value='';
    }
   }
   submit.onclick=function(){
        for(let i=0;i<inputs.length;i++){
            if (inputs[i].value==''||textarea.value==''){
               inputs[i].style.borderColor='red';
               textarea.style.borderColor='red';
            }else{
               alert('您的信息已经上传');
               return ;
            }
        }
        
   }
}
            
            
