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
    select{
        width: 100px;
        height:20px;
        border:1px solid #ccc;
    }
    input{
        margin-top: 20px;
    }
    button{
        margin-top: 20px;
    }
</style>
<body>
<form action="addsort.php" method="post">
   选择目录：<select name="pid">
        <option value="0">一级目录</option>
    <?php
        include "public.php";
        include  "../libs/functions.php";
        $obj=new tree();
        $obj->aa("0",$db,"cegetory",0,"-","");
        echo $obj->str;
    ?>
    </select>
    <br>
    目录名称：<input type="text" name="cname" ><br>
    <input type="submit" name="button" value="上传">
</form>
</body>
</html>
