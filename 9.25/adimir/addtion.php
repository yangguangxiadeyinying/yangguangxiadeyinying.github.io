<?php
include "public.php";
$aname=htmlspecialchars(addslashes($_POST["aname"]));
$apass=($_POST["apass"]);
$anicheng=$_POST["anicheng"];
$aphoto=$_POST["aphoto"];
$sql="insert into admir(aname,apass,anicheng,aphoto)VALUES('{$aname}','{$apass}','{$anicheng}','{$aphoto}')";
$db->query($sql);
if($db->affected_rows>0){
    echo "<script>alert('插入成功');location.href='table.php'</script>";
}
