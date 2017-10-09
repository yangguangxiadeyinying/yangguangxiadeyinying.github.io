<?php
$cid=$_GET["cid"];
$pid=$_GET["pid"];
$cname=$_GET["cname"];
include  "public.php";
$sql="update cegetory set pid={$pid},cname='{$cname}' where cid=".$cid;
if($db->query($sql)){
    echo "<script>alert('修改成功');location.href='search.php'</script>";
}