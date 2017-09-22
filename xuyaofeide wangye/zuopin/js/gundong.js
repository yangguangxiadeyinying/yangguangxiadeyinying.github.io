/*
* @Author: HASEE
* @Date:   2017-08-21 12:54:06
* @Last Modified by:   HASEE
* @Last Modified time: 2017-08-21 12:55:03
*/
class Drag{
		constructor(obj){
			this.obj=obj;
		}
		start(){
			this.move();
		}
		move(){
			let that=this;
			this.obj.onmousedown=function(e){
                let ox=e.offsetX, oy=e.offsetY;
                document.ommousemove=function(e){
                 let cx=e.clientX, cy=e.clientY;
                 that.obj.style.left=`${cx-ox}px`;
                 that.obj.style.top=`${cy-oy}px`;
                }
                that.obj.onmouseup=function(){
                	document.onmousemove=null;
                	that.obj.onmouseup=null;
                }
			}
		}
	}