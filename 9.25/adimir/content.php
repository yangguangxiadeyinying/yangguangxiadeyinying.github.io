<?php
$row=$_GET["$row"];
if($row["state"]==1){
    $sql1="select * from shows where sid=".$row["cid"];
    $result1=$db->query($sql1);
}