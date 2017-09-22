function Palette(canvas,mask){
    this.canvas=canvas;
    this.mask=mask;
	this.ctx=this.canvas.getContext("2d");
	this.history=[];
	this.ax=this.canvas.width;
	this.ay=this.canvas.height;
	this.num;
	/*样式*/
	this.lineWidth=1;
	this.lineCap='butt';
	this.fillStyle="#000";
	this.strokeStyle='#000';
	this.style='stroke';
}
Palette.prototype={
	init:function(){
			this.ctx.lineWidth=this.lineWidth;
			this.ctx.strokeStyle=this.strokeStyle;
			this.ctx.fillStyle=this.fillStyle;
			this.ctx.setLineDash([0,0]);
	},
	line:function(ox,oy,ax,ay){
	        this.ctx.beginPath();
	        this.ctx.moveTo(ox,oy);
	        this.ctx.lineTo(ax,ay);
	        this.ctx.closePath();
	        this.ctx.stroke();           
	},
	pencil:function(){
	        let that=this;
			this.mask.onmousedown=function(e){
		        let ox=e.offsetX;  
		        let oy=e.offsetY;
		            that.ctx.beginPath();
		            that.ctx.moveTo(ox,oy);
		        that.mask.onmousemove=function(e){
		            let ax=e.offsetX    
		            let ay=e.offsetY
		            that.ctx.lineTo(ax,ay);
		            that.ctx.stroke();           
		            that.mask.onmouseup=function(){
		                that.mask.onmousemove=null;
		                that.mask.onmouseup=null;
		            }
		        }
		    }
	},
	juxing:function (ox, oy, ax, ay) {
        this.ctx.beginPath();
        this.ctx.rect(ox, oy, (ax - ox),(ay - oy));
        this.ctx.closePath();
        this.ctx[this.style]();
    },
	polyjon:function(ox,oy,ax,ay){
	            let r=Math.sqrt(Math.pow(ax-ox,2)+Math.pow(ay-oy,2));
			    this.ctx.beginPath();
			    let P=Math.PI;
			    let angle=2*P/this.num; 
			    this.ctx.clearRect(0, 0, this.mask.width, this.mask.height)
			    for(let i=0;i<this.num;i++){
			       this.ctx.lineTo(ox+r*Math.cos(angle*i),oy+r*Math.sin(angle*i));
			    }
			    this.ctx.closePath();
			    this.ctx.fill();
	},
	circle:function(ox,oy,ax,ay){
	            let r=Math.sqrt(Math.pow(ax-ox,2)+Math.pow(ay-oy,2));
	            this.init();
			    this.ctx.beginPath();
			    let P=Math.PI;
			    this.ctx.clearRect(0, 0, this.mask.width, this.mask.height)
			    this.ctx.arc(ox, oy, r, 0, 2*P, false);
			    this.ctx[this.style]();
	},
    dashed:function(ox,oy,ax,ay){
	            this.ctx.setLineDash([10,10]);
	            this.ctx.beginPath();
	            this.ctx.moveTo(ox,oy);
	            this.ctx.lineTo(ax,ay);
	            this.ctx.stroke();           
    },
    polygon:function(ox,oy,ax,ay){
	            let r=Math.sqrt(Math.pow(ax-ox,2)+Math.pow(ay-oy,2));
			    this.ctx.beginPath();
			    let P=Math.PI;
			    let angle=P/this.num; 
		        this.ctx.clearRect(0, 0, this.mask.width, this.mask.height);
			    this.ctx.moveTo(ox+r, oy);
			    for(let i=0;i<2*this.num;i++){
			       if (i%2==0) {
			       this.ctx.lineTo(ox+r*Math.cos(angle*i),oy+r*Math.sin(angle*i));
			       }
			       else if(i%2==1){
			       this.ctx.lineTo((ox+(r/2)*Math.cos(angle*i)),(oy+(r/2)*Math.sin(angle*i)));
                   }
			    }
			    this.ctx.closePath();
			    this.ctx.fill();
    },
    draw:function(type){
    	 let that=this;
			this.mask.onmousedown=function(e){
		        let ox=e.offsetX   
		        let oy=e.offsetY
		        that.init();
		        that.mask.onmousemove=function(e){
		            let ax=e.offsetX    
		            let ay=e.offsetY
		            that.ctx.clearRect(0, 0, that.ax, that.ay);
		            if (that.history.length>0) {
                        that.ctx.putImageData( that.history[that.history.length-1],0,0);
		            }
		            that[type](ox,oy,ax,ay);
		       }
		       that.mask.onmouseup=function(){
	            	that.history.push(that.ctx.getImageData(0, 0, that.ax, that.ay))
	                that.mask.onmousemove=null;
	                that.mask.onmouseup=null;
	            }
		   }
    },
    eraser:function(obj,w,h){
    	let that=this;
    	this.mask.onmousedown=function(e){
    		obj.style.display='block';
    		e.preventDefault();
    		let ox=e.offsetX,oy=e.offsetY;
    		that.mask.onmousemove=function(e){
    			let ax=e.offsetX,  ay=e.offsetY 
		        let lefts=(ax-w/2);
    			let tops=(ay-h/2);
    			if (lefts<=2) {
    				lefts=2;
    			}
    			if (lefts>=that.ax-w) {
    				lefts=that.ax-w;
    			}
    			if (tops<=2) {
    				tops=2;
    			}
    			if (tops>=that.ay-h) {
    				tops=that.ay-h;
    			}
    			obj.style.left=`${lefts}px`;
    			obj.style.top=`${tops}px`;
    			that.ctx.clearRect(lefts, tops, w, h);
    		}
    	}
    	that.mask.onmouseup=function(){
    		that.history.push(that.ctx.getImageData(0, 0, that.ax, that.ay))
    		that.onmousemove=null;
    		that.onmouseup=null;
    		obj.style.display='none';
    	}
    },
    /*文字*/
    text: function(){
    	let that=this;
    	this.mask.onmousedown=function(e){
    	let ox=e.offsetX, oy=e.offsetY;
    		let divs=document.createElement('div');
    		divs.style.cssText=`
    		width:50px; height:20px; border:1px dashed #777;
            position:absolute;`
    		that.mask.appendChild(divs);
    		divs.style.left=`${ox}px`;
    		divs.style.top=`${oy}px`;
    		divs.contentEditable=true;
    		that.mask.appendChild(divs);
    		that.mask.onmousedown=null;
    		let lefts,tops;
    		divs.onmousedown=function(e){
    			let ox=e.clientX,oy=e.clientY;
    			let ol=divs.offsetLeft,ot=divs.offsetTop;
    			that.mask.onmousemove=function(e){
    				let ax=e.clientX,ay=e.clientY;
    				lefts=ax-ox+ol;
    				tops=ay-oy+ot;
    				divs.style.left=`${lefts}px`;
    				divs.style.top=`${tops}px`;
    			}
    			divs.onmouseup=function(){
    				that.mask.onmousemove=null;
    				this.onmouseup=null;
    			}
    		}
    		divs.onblur=function(){
    			let value=divs.innerText;
    			that.mask.removeChild(divs);
    			that.ctx.font='30px sans-serif';
    			that.textAlign='center';
    			that.ctx.textBaseLine='middle';
    			that.ctx.fillText(value,lefts,tops);
    			that.history.push(that.ctx.getImageData(0,0,that.ax,that.ay));
    		}
    	}
    },
    /*反向*/
    reverse:function(){
    	let imgData=this.ctx.getImageData(0, 0, this.ax, this.ay);
    	let data=imgData.data;
    	for(let i=0;i<data.length;i+=4){
    		data[i]=255-data[i];
    		data[i+1]=255-data[i+1];
    		data[i+2]=255-data[i+2];
    	}
    	this.ctx.putImageData(imgData,0,0);
    },
 /*裁切*/
    clip:function(clipObj){
         let that=this;
         this.mask.onmousedown=function(e){
         	let w,h,minX,minY;
         	let ox=e.offsetX,oy=e.offsetY;
         	that.mask.onmousemove=function(e){
         		e.preventDefault();
         		let ax=e.offsetX,ay=e.offsetY;
         		w=Math.abs(ox-ax),h=Math.abs(oy-ay);
         		minX=ax>=ox?ox:ax;
         		minY=ay>=oy?oy:ay;
         		clipObj.style.cssText=`
         		display:block;
         		left:${ox}px;top:${minY}px;
         		width:${w}px;height:${h}px`;
         	}
         	that.mask.onmouseup=function(){
         		that.temp=that.ctx.getImageData(minX, minY, w, h);
         		that.ctx.clearRect(minX, minY, w, h);
         		that.history.push(that.ctx.getImageData(0, 0, that.ax, that.ay));
                that.ctx.putImageData(that.temp,minX,minY);
         		that.mask.onmousedown=null;
         		that.mask.onmouseup=null;
         		that.drag(minX,minY,w,h,clipObj);
         	}
         }
    },
    /*撤销*/
    repeal:function () {
        let img = this.history.pop();
        if (this.history.length == 0){
            this.ctx.clearRect(0,0,this.ax, this.ay);
            return;
        }
        this.ctx.putImageData(img,0,0);
    },
    drag:function(minX,minY,w,h,Obj){
        let that=this;
        this.mask.onmousemove=function(e){
          let ox=e.offsetX,oy=e.offsetY;
         if (ox>minX&&ox<minX+w&&oy>minY&&oy<minY+h){
         	that.mask.style.cursor='move';
         }else{
         	that.mask.style.cursor='default';
         }
        }
        this.mask.onmousedown=function(e){
        	let ox=e.offsetX,oy=e.offsetY;
        	that.mask.onmousemove=function(e){
        		let ax=e.offsetX,ay=e.offsetY;
        		let lefts=minX+(ax-ox);
        		let tops=minY+(ay-oy);
        		if (lefts<=0) {
        			lefts=0;
        		}
        		if (lefts>=that.ax-w) {
        			lefts=that.ax-w;
        		}
        		if (tops<=0) {
        			tops=0;
        		}
        		if (tops>=that.ay-h) {
        			tops=that.ay-h;
        		}
        		Obj.style.left=`${lefts}px`;
        		Obj.style.top=`${tops}px`;
        		that.ctx.clearRect(0, 0, that.ax, that.ay);
        		if (that.history.length>0) {
        			that.ctx.putImageData(that.history[that.history.length-1],0,0)
        		}
        		that.ctx.putImageData(that.temp,lefts,tops);
        	}
        	that.mask.onmouseup=function(){
        		that.temp=null;
        		Obj.style.display='none';
        		that.history.push(that.ctx.getImageData(0,0,that.ax,that.ay));
        		that.mask.onmousemove=null;
        		that.mask.onmouseup=null;
        	}
        }
    }
}
			        

			



	      