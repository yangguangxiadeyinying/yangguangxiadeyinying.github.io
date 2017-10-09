<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<style>
    .scan{
        width: 100px;
        height:100px;
        margin-top: 20px;
        border:1px solid #ccc;
        font-size: 30px;
        color: #ccc;
        line-height: 100px;
        text-align: center;
    }
    .progress{
        width: 100px;
        height:6px;
        border-radius: 6px;
        position: relative;
        background:cyan;
    }
    .tip{
        width: 100px;
        height:20px;
    }
    .forword{
        width: 0;
        height:6px;
        border-radius: 6px;
        position: absolute;
        left:0px;
        height:10px;
        background: red;
    }
    img{
        width:100px;
        height:100px;
    }
    input[type=button]{
        width:100px;
        height:20px;
        outline: none;
        border-radius: 5px;
        border:1px solid #ccc;
        cursor: pointer;
    }
</style>
<body>
    <input type="file" name="file">
    <div class="scan">
        <img src="" alt="">
    </div>
    <div class="progress">
        <div class="forword"></div>
    </div>
    <input type="button" value="上传">
    <div class="tip"></div>
</body>
</html>
<script>
    window.onload=function(){
        let btn=document.querySelector("input[type=button]");
        let file=document.querySelector("input[type=file]");
        let size=1024*1024;
        let forword=document.querySelector(".forword");
        let type=["img/jpeg","img/png","img/gif"];
        let img=document.querySelector("img");
        let tip=document.querySelector(".tip");
        let obj;
        file.onchange=function() {
             obj=this.files[0];
             if(obj.size>size){
                tip.innerText="文件过大";
                return;
             }
            let files=new FileReader();
            files.onload=function (e) {
                img.src=e.target.result;
            }
            files.readAsDataURL(obj);
            btn.onclick=function(){
                if(obj.size>size){
                    alert('禁止上传');
                    return;
                }
                let formobj = new FormData();
                let ajax=new XMLHttpRequest();
                obj.upload.onprogress=function(e){
                    let total=e.total;
                    let loaded=e.loaded;
                    let bili=loaded/total*100;
                    forword.style.width=bili+'%';
                }
                ajax.onload=function(){
                    console.log(ajax.response);
                }
                ajax.open("post", "aaa.php");
                ajax.send(formobj);
            }

        }
    }
</script>