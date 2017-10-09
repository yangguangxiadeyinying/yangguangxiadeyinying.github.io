<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../static/js/uuuu.js"></script>
</head>
<style>
    form{
        background: #dfdfdf;
        border-radius: 5px;
    }
    input{
        width: 95%;
        border-radius: 5px;
        border:1px solid #777;
        padding:8px 3px;
        font-size: 14px;
        margin:8px 6px;
        box-sizing: border-box;
    }
</style>
<body>
<form action="addtion.php" method="post">
    姓名：<input type="text" name="aname" required><br>
    密码：<input type="text" name="apass" required><br>
    昵称：<input type="text" name="anicheng" required><br>
    头像：<div class="parent">
        <input type="hidden" name="aphoto">
    </div>
    <input type="submit" value="添加">
</form>
</body>
</html>
<script>
    let parent=document.querySelector(".parent");
    let inputs=document.querySelector("input[type=hidden]");
    window.onload=function(){
        let obj=new upload();
        obj.createView({parent:parent});
        obj.up("aaa.php",function(e){
                let str=e.join(";");
                inputs.value+=str;
        });

    }
</script>