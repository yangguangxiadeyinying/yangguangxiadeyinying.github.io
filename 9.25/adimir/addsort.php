<?php
include "public.php";
$pid=$_POST["pid"];
$cname=$_POST["cname"];
$sql = "insert into cegetory (cname,pid,state) VALUES ('{$cname}','{$pid}',0)";
if($db->query($sql)){

    if($pid!=0) {
        $sql = "update cegetory set state=1 WHERE cid=" . $pid;

        $db->query($sql);
        echo "<script>alert('添加成功');location.href='fenlei.php'</script>";


    }else{
        echo "<script>alert('添加成功');location.href='fenlei.php'</script>";
    }
}