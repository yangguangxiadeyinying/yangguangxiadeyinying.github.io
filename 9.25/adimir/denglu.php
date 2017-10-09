<?php
session_start();
include "public.php";
$aname=$_POST["aname"];
$apass=$_POST["apass"];
$sql="select * from admir WHERE aname='{$aname}' and apass='{$apass}'";
$result=$db->query($sql);
$row=$result->fetch_assoc();
if($result->num_rows>0){
    echo "<script>alert('登陆成功');location.href='index.php';</script>";
    $_SESSION["aname"]=$aname;
    $_SESSION["login"]="yes";
    $_SESSION["aid"]=$row["aid"];
}else{
    echo "<script>alert('登陆失败');location.href='login.php';</script>";
}