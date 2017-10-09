<?php
session_start();
unset($_SESSION["aname"]);
unset($_SESSION["apass"]);
unset($_SESSION["login"]);
echo "<script>alert('退出成功');location.href='login.php';</script>";