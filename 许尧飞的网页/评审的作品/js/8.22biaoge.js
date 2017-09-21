/*
* @Author: HASEE
* @Date:   2017-08-22 15:05:20
* @Last Modified by:   HASEE
* @Last Modified time: 2017-09-17 00:20:26
*/
/*修改
可编辑状态：当前单元格里面插入一个input
   1. input
   2.content->  input;
   3.清空当前单元格
   4.input->td
  更新：表单失去焦点 blur
   1. input内容保存
   2. input    removeChild
   3. newvalue  ->  单元格
  */
window.onload=function(){
 	let tbody=document.querySelector('tbody');
 	let add=document.querySelector('.add');
 	let student=[
 		{'name':'张三','sex':'男','age':'25','call':'1234567','jg':'山西'},
 		{'name':'李四','sex':'女','age':'25','call':'6565468','jg':'山西'},
 		{'name':'王五','sex':'男','age':'25','call':'2511982','jg':'山西'},
 		{'name':'赵六','sex':'男','age':'25','call':'8799545','jg':'山西'},
 	]
 	localStorage.student=JSON.stringify(student);
 	let data=JSON.parse(localStorage.student);
 	data.forEach(value=>{
 		tbody.innerHTML +=`
 		<tr>
   		        <td>${value.name}</td>
				<td>${value.sex}</td>
				<td>${value.age}</td>
				<td>${value.call}</td>
				<td>${value.jg}</td>
				<td><button>删除</button></td>
		</tr>`;
 	})
  /*增加*/
 	add.onclick=function(){
 		let zeng=document.createElement('tr');
 		zeng.innerHTML=`
 		    <td>李四</td>
				<td>女</td>
				<td>20</td>
				<td>123456</td>
				<td>山西小店</td>
				<td><button>删除</button></td>`;
        tbody.appendChild(zeng);
 	}
  /*修改*/
  tbody.ondblclick=function(e){
    let ele=e.target;
    if (ele.nodeName=='TD'&& ele.className!= 'del') {
         let baoliu=ele.innerText;
         let inputs=document.createElement('input');
         inputs.value=baoliu;
         ele.innerText='';
         ele.appendChild(inputs);
         inputs.onblur=function(e){
           let newvalue=inputs.value;
           ele.removeChild(inputs);
           inputs=null;
           ele.innerText=newvalue.trim();
       }
    }
    /*删除*/
    else if(ele.nodeName=='BUTTON'){
      let tr=ele.parentNode.parentNode;
      tbody.removeChild(tr);
      tr=null;
    }

  }
}