<?php
include "public.php";
$aid=$_POST["aid"];
$sql="delete from admir WHERE aid=".$aid;
$db->query($sql);
var_dump($db->query($sql));
if ($db->affected_rows>0){
    echo "<script>alert('删除成功');location.href='index.php'</script>";
}