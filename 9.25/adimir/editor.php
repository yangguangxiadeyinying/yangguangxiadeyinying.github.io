<?php
include "public.php";
$aid=$_GET["aid"];
$aname=$_GET["aname"];
$value=$_GET["value"];
$sql="update admir set $aname='$value' WHERE aid=".$aid;
$db->query($sql);
if ($db->affected_rows>0){
    echo "ok";
}
?>