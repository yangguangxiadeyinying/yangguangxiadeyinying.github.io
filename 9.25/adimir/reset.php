<?php
include "public.php";
$aname=$_POST["username"];
$apass=($_POST["password"]);
$sql="insert into admir(aname,apass,anicheng,aphoto)VALUES ('{$aname}','{$apass}','','')";
$db->query($sql);
if($db->affected_rows>0){
    echo "<script>alert('添加成功');location.href='login.php'</script>";
}
