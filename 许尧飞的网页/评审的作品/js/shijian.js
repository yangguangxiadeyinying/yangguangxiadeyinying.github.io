/*
* @Author: HASEE
* @Date:   2017-08-18 17:41:57
* @Last Modified by:   HASEE
* @Last Modified time: 2017-08-18 18:03:42
*/
function drag(obj){
	this.obj=obj;
}
drag.prototype={
	move:function(){
		this.down();
	},
	down:function(){
		let that=this;
        this.obj.onmousedown=function(e){
            let ox=e.offsetX,oy=e.offsetY;
            document.onmousemove=function(e){
            	let cx=e.clientX,cy=e.clientY;
            	that.obj.style.left=`${cx-ox}px`;
            	that.obj.style.top=`${cy-oy}px`;
            }
        }
        this.obj.onmouseup=function(){
        	document.onmousemove=null;
        }
	}
}