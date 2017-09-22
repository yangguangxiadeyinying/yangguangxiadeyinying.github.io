/*面向对象

属性：哪些字符     个数  速度   得分  关卡
      生命   减分


方法：消除  产生字符 ： 
下一关  重新开始


*/
function Game(){
	/*字符串的取值范围*/
	this.charSheet=[['Q','img/A_Z/Q.png'],['W','img/A_Z/W.png'],['E','img/A_Z/E.png'],['R','img/A_Z/R.png'],['T','img/A_Z/T.png'],
	['Y','img/A_Z/Y.png'],['U','img/A_Z/U.png'],['I','img/A_Z/I.png'],['O','img/A_Z/O.png'],['P','img/A_Z/P.png'],['A','img/A_Z/A.png'],
	['S','img/A_Z/S.png'],['D','img/A_Z/D.png'],['F','img/A_Z/F.png'],['G','img/A_Z/G.png'],['H','img/A_Z/H.png'],['J','img/A_Z/J.png'],
	['K','img/A_Z/K.png'],['L','img/A_Z/L.png'],['Z','img/A_Z/Z.png'],['X','img/A_Z/X.png'],['C','img/A_Z/C.png'],['V','img/A_Z/V.png'],
	['B','img/A_Z/B.png'],['N','img/A_Z/N.png'],['M','img/A_Z/M.png']];
	/*每次调的个数*/
	this.length=5;
	this.elements=[];
	this.speed=1;
	this.score=0;
	this.position=[];
	this.scoreObj=document.querySelector('div.score>span');
	this.jihuiObj=document.querySelector('div.score1>span');
	this.stop=20;
	this.jihui=10;
	/*this->Game*/
}
Game.prototype={
	/*游戏开始*/
	start:function(){
       this.games(this.length);
       this.drop();
       this.key();
       /*this->Game.charSheet*/
      
   },
   /*获取一组的字符串值*/
	games:function (length) {
		for(let i=0;i<this.length;i++){
           this.game();
		}
	},
	checkRepeat:function(num){
       return this.elements.some(value=>value.innerText==this.charSheet[num][0]);
	},
	checkPosition:function(lefts){
		return this.position.some(function(value){
			return Math.abs(value-lefts)<50;
		})
	},
	/*具体一组中的值*/
	game:function(){
		let num;/*=Math.floor(Math.random()*this.charSheet.length)*/
		let divs=document.createElement('div');
		divs.classList.add('char');
		document.body.appendChild(divs);
		let lefts;/*=Math.floor((innerWidth-400)*Math.random()+200)*/
		let  tops=Math.random()*100;
		do{
           num=Math.floor(Math.random()*this.charSheet.length);
        }while(this.checkRepeat(num));
         do{
           lefts=Math.floor((innerWidth-400)*Math.random()+200);
        }while(this.checkPosition(lefts))
        divs.innerText=this.charSheet[num][0];
		divs.style.cssText=`
		left:${lefts}px;top:${tops}px;
		background-image:url(${this.charSheet[num][1]});`;
		this.elements.push(divs);
		this.position.push(lefts);
    },
    /*下落*/
    drop:function(){
    	let that=this;
    	this.t=setInterval(function(){
    		for(let i=0;i<that.elements.length;i++){
    			let tops=that.elements[i].offsetTop;
    			that.elements[i].style.top=`${tops+that.speed}px`;
    			if (tops>=500) {
    				that.jihui--;
    				document.body.removeChild(that.elements[i]);
    				that.elements.splice(i,1);
    				that.position.splice(i,1);
                    that.jihuiObj.innerText=that.jihui;
                    if (that.jihui==0) {
                    	/*that.over();*/
                    }
    			}
    		}
    		if (that.elements.length < that.length) {
    			that.game();
    		}
    	}, 10)
    },
    /*消除字*/
    key:function(){
    	let that=this;
    	document.onkeydown=function(e){
          let char=String.fromCharCode(e.keyCode);
          for(let i=0;i<that.elements.length;i++){
          	if (char==that.elements[i].innerText) {
                that.score++;
                that.scoreObj.innerText=that.score;
                if (that.score==that.stop) {
                	that.next();
                	confirm('恭喜进入下一关');
                }
          		document.body.removeChild(that.elements[i]);
                that.elements.splice(i,1);
                that.position.splice(i,1);
          	}
          }
    	}
    },
    next:function(){
    	clearInterval(this.t);
    	for(let i=0;i<this.elements.length;i++){
    		document.body.removeChild(this.elements[i]);
    	}
    	this.elements=[];
    	this.position=[];
    	this.length++;
    	this.stop+=20;
    	this.start();
    },
    /*over:function(){
        let p=confirm('很遗憾，你没有过关，再来一次');
        if (p) {
           window.location.reload();
        }else{
        	window.close();
        }
    },*/
    /*xiaochu:function(){
    	clearInterval(this.t);
    },*/
    
}