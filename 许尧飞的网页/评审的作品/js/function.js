//获取元素的封装对象
function $(select,ranger = document){
	if (typeof select == 'string') {
		//ranger = ranger?ranger:document;
		//ranger = ranger || document;
		let selector = select.trim();
		let firstChar = selector.charAt(0);
		if(firstChar == '#'){
			return ranger.getElementById(selector.substring(1));
		}else if(firstChar == '.'){
			return ranger.getElementsByClassName(selector.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
			return ranger.getElementsByTagName(selector);
		}
	}else if (typeof select == 'function'){
		window.onload = function(){
			select();
		}
	}		
}

function html(element,content){
	if(arguments.length == 2){
		element.innerHTML = content;
	}else if(arguments.length == 1){
		return element.innerHTML;
	}
}
function text(element,content){
	if(arguments.length == 2){
		element.innerText = content;
	}else if(arguments.length == 1){
		return element.innerText;
	}
}


//设置样式
function css(element,attrObj){
	for(let i in attrObj){
		element.style[i] = attrObj[i];
	}
}

//添加事件
function on(collection,type,fn){
	for(let i = 0; i < collection.length; i++){
		collection[i][type] = fn;
	}
}
//删除事件
function off(collection,type){
	for(let i = 0; i < collection.length; i++){
		collection[i][type] = null;
	}
}




