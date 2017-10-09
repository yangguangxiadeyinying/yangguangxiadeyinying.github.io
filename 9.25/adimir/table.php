<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../static/js/jquery-3.2.1.js"></script>
</head>
<style>
    table{
        width:600px;
        height:50px;
        border-collapse: collapse;
    }
    th,tr{
        height: 20px;
        text-align: center;
        border:1px solid #777;
    }
    td{
        text-align: center;
        line-height: 20px;
        padding:8px 0px;
        border:1px solid #777;
    }
</style>
<body>
    <table>
        <tr>
            <td>姓名</td>
            <td>密码</td>
            <td>昵称</td>
            <td>头像</td>
            <td>操作</td>
        </tr>
        <?php
        include "public.php";
        $sql="select * from admir";
        $result=$db->query($sql);
        while($row=$result->fetch_assoc()){
        ?>
       <tr>
           <td attr="<?php echo $row['aid']?>" name="aname"><?php echo $row['aname']?></td>
           <td attr="<?php echo $row['aid']?>" name="apass"><?php echo $row['apass']?></td>
           <td attr="<?php echo $row['aid']?>" name="anicheng"><?php echo $row['anicheng']?></td>
           <td attr="<?php echo $row['aid']?>" name="aphoto"><img src="<?php echo $row['aphoto']?>"width="50px" height="50px"></td>
           <td><button attr="<?php echo $row['aid']?>">删除</button></td>
        </tr>
        <?php
          }
        ?>
    </table>
</body>
</html>
<script>
    $("tbody").on("click","button",function(){
        $(this).parents("tr").remove();
        let aid=$(this).attr("attr");
        $.ajax({
            url:"dele.php",
            type:"post",
            data:{aid:aid}
        })
    })
    let oldval;
    $("tbody").on("dblclick","td",function(){
       oldval=$(this).html();
       $(this).attr("contenteditable",true);
       $("tbody").on("blur","td",function(){
           editor.call(this);
       })
       $("tbody").on("keydown","td",function(e){
           if(e.keyCode==13){
               editor.call(this);
           }
       })
    })
    function editor(){
        let newval=$(this).html();
        let aname=$(this).attr("name");
        let aid=$(this).attr("attr");
        if(newval!=oldval){
            $.ajax({
                url:"editor.php",
                type:"get",
                data:{aid:aid,aname:aname,value:newval},
                success:function (data) {
                    if(data=="ok"){
                        alert('修改成功');
                    }
                }
            })
        }
    }
</script>
