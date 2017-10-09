<?php
session_start();
if(!isset($_SESSION["login"])){
    echo "<script>alert('请先登录');location.href='login.php';</script>";
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
    <link rel="stylesheet" href="../static/bootstrap/css/bootstrap.css">
</head>
<style>
    html,body{
        overflow: hidden;

    }
    .content{
        width: 1000px;
        height:640px;
        border:1px solid #777;
        margin:0px auto;
    }
    h1{
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border-bottom: 1px solid #777;
        position: relative;
    }
    .photo{
        width:50px;
        height:50px;
        border-radius: 50%;
        background: red;
        position: absolute;
        right:210px;
        top:10px;
    }
    .left{
        width: 20%;
        height:580px;
        border-right: 1px solid #777;
        box-sizing: border-box;
        float: left;
        position: relative;
    }
    .right{
        width: 80%;
        height:580px;
        float: left;
    }
    iframe{
        width: 100%;
        height:100%;
    }
    .out{
        width: 100%;
        height: 20px;
        position: absolute;
        bottom:250px;
        left:0px;
    }
    .go{
        width: 100%;
        height: 20x;
        position: absolute;
        bottom:220px;
        left:0;
    }
    .out, .go a{
        display: block;
        width: 100%;
        height:20px;
        text-align: center;
        text-decoration: none;
        color: blue;
        font-size: 18px;
        line-height: 20px;
    }
</style>
<body>
     <div class="content">
         <h1>欢迎<?php echo $_SESSION['aname']; ?>来到管理系统</h1>
         <?php
         include "public.php";
         $sql="select * from admir where aid=".$_SESSION["aid"];
         $result=$db->query($sql);
         $rows=$result->fetch_assoc();
         $t=$rows["aphoto"];
         ?>
         <div class="photo"><img src="<?php echo $t;?>" alt=""></div>
         <div class="col-xs-4  col-sm-3   left">
             <ul>
                 <li>管理员
                     <ul>
                         <li><a href="table.php" target="right">管理员查询</a></li>
                         <li><a href="add.php" target="right">添加管理员</a></li>
                     </ul>
                 </li>
             </ul>
             <ul>
                 <li>分类管理
                     <ul>
                         <li><a href="fenlei.php" target="right">添加分类</a></li>
                         <li><a href="search.php" target="right">查询分类</a></li>
                     </ul>
                 </li>
             </ul>
             <ul>
                 <li>内容部分
                     <ul>
                         <li><a href="addCon.php" target="right">添加内容</a></li>
                         <li>查看内容</li>
                     </ul>
                 </li>
             </ul>
             <ul>
                 <li>添加其他分类
                     <ul>
                         <li><a href="addCon.php" target="right">添加分类</a></li>
                         <li>查看分类</li>
                     </ul>
                 </li>
             </ul>
             <div class="out"><a href="out.php">退出系统</a></div>
             <div class="go"><a href="shouye.php">返回首页</a></div>
         </div>
         <div class="col-xs-8  col-sm-9   right">
             <iframe src="" frameborder="0" name="right"></iframe>
         </div>
     </div>
</body>
</html>