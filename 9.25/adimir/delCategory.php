<?php
$cid=$_GET["cid"];
include "public.php";
include "../libs/functions.php";
$obj=new tree();
$obj->del($cid,$db,"cegetory");