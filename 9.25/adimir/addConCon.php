<?php
$cid=$_GET["cid"];
$stitle=$_GET["stitle"];
$scon=$_GET["scon"];
$sphoto=$_GET["sphoto"];
var_dump($sphoto);
include "public.php";
$sql="insert into shows (stitle,scon,cid,sphoto) values ('{$stitle}','{$scon}','{$cid}','${sphoto}')";
if($db->query($sql)){
    echo "<script>alert('添加成功');location.href='addCon.php';</script>";
}