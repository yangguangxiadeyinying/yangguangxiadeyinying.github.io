window.onload=function(){
	let lxr=[
	{'name':'赵老大','phone':'11111111111','pinyin':'zhaolaoda'},
	{'name':'钱老二','phone':'22222222222','pinyin':'qianlaoer'},
	{'name':'孙老三','phone':'33333333333','pinyin':'sunlaosan'},
	{'name':'李老四','phone':'44444444444','pinyin':'lilaosi'},
	{'name':'周老五','phone':'55555555555','pinyin':'zhoulaowu'},
	{'name':'吴老六','phone':'66666666666','pinyin':'wulaoliu'},
	{'name':'郑老七','phone':'77777777777','pinyin':'zhenglaoqi'},
	{'name':'王老八','phone':'88888888888','pinyin':'wanglaoba'},
	{'name':'马小九','phone':'99999999999','pinyin':'maxiaojiu'},
	{'name':'唐长老','phone':'12345678910','pinyin':'tangzhanglao'}
    ]
     localStorage.lxr=JSON.stringify(lxr);
     let data=JSON.parse(localStorage.lxr);
	 render(data);
	
	/*数据分类*/
	function render(data){
	  let dataObj={};
	  for(let i=0;i<data.length;i++){
	  	let first=data[i].pinyin.charAt(0).toUpperCase();
	  	if (!dataObj[first]) {
	  		dataObj[first]=[];
	  	}
	  		dataObj[first].push(data[i]);
	  }
	let keys=Object.keys(dataObj).sort();
	let header=document.querySelector('header');
	let dts=document.querySelectorAll('dt');
	let tishi=document.querySelector('.tishi');
	let heights=header.offsetHeight+tishi.offsetHeight;
	let arr=[];
	let dl=document.querySelector('dl');
	let dd=document.querySelector('dd');
    keys.forEach(element=>{
    	dl.innerHTML+=`
    	<dt>${element}</dt>`;
	    dataObj[element].forEach(value=>{
	    	dl.innerHTML+=`
	    	<dd><a href="${value.phone}">${value.name}</a></dd>`
	    })
		let aside=document.querySelector('.aside');
		aside.innerHTML+=`
		<li>${element}</li>`;
		aside.style.top=`${300}px`;
    })
	/*滚动事件*/
	tishi.innerText=`${keys[0]}`;
	dts.forEach(element=>{
		arr.push(element.offsetTop);
	})
	  window.onscroll=function(){
	  	let  gh=document.body.scrollTop;
	  	arr.forEach((value,index)=>{
	  		if (value<heights+gh) {
	  			tishi.innerText=keys[index];
	  		}
	  	})
      }  
  }
  /*搜索框*/
  	let inputs=document.querySelector('input');
     inputs.onkeyup=function(){
		let val=this.value.trim();
		let filter=data.filter(element=>element.name.includes(val))||
		element.pinyin.includes(val)||element.phone.includes(val);
		render (filter);
	 }


	

    /*function  getdata(){
    	let data=localStorage.getItems('lxr')?JSON.parse(localStorage.lxr):false;
    	if (!data) {
    	   data = localStorage.setItem('lxr',JSON.stringify(lxr));
    	}
    	return data;
    }*/

}