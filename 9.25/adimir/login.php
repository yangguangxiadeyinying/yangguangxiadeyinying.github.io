<?php
session_start();
if(isset($_SESSION["login"])){
    echo "<script>alert('已登录');location.href='index.php';</script>";
    exit;
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../../validata/lib/jquery-3.1.1.js"></script>
    <script src="../../validata/dist/jquery.validate.min.js"></script>
</head>
<style>
    form{
        width:300px;
        height:300px;
        margin:50px auto;
        border:1px solid #ccc;
        border-radius: 5px;
    }
    h3{
        width:100%;
        height:30px;
        text-align: center;
        line-height: 30px;
    }
    input{
        width: 300px;
        height:30px;
        border-radius: 5px;
        padding:0px 5px;
        font-size: 14px;
        margin:10px 0px;
        outline: none;
        border:1px solid #ccc;
        box-sizing: border-box;
    }
    .box{
        width: 300px;
        height:30px;
        text-align: center;
        font-size:14px;
    }
    a{
        display: block;
        font-size: 20px;
        color: red;
        text-decoration: none;
    }
</style>
<body>
    <form  action="denglu.php" method="post">
         <h3>登陆界面</h3>
         管理员名：<input type="text" name="aname" ><br>
         密  码：  <input type="text" name="apass" ><br>
        <input type="submit" value="登录">
        <div class="box">如果不是管理员身份，请点击<a href="tianjia.php">这里</a></div>
    </form>
</body>
</html>
<script>
     $("form").validate({
         rules:{
             aname:{
                 required:true,
                 minlength:2
             },
             apass:{
                 required:true,
                 minlength:2
             }

         },
         messages:{
             aname:{
                 required:"用户名必填",
                 minlength:"不得少于2位"
             },
             apass:{
                 required:"密码必填",
                 minlength:"不得少于2位"
             }
         }
     })
</script>
