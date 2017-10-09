<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../../validata/lib/jquery-3.1.1.js"></script>
    <script src="../../validata/dist/jquery.validate.min.js"></script>
</head>
<style>
    form{
        width:300px;
        height:300px;
        margin:50px auto;
        border:1px solid #ccc;
        border-radius: 5px;
    }
    h3{
        width:100%;
        height:30px;
        text-align: center;
        line-height: 30px;
    }
    input{
        width: 300px;
        height:30px;
        border-radius: 5px;
        padding:0px 5px;
        font-size: 14px;
        margin:10px 0px;
        outline: none;
        border:1px solid #ccc;
        box-sizing: border-box;
    }
</style>
<body>
    <form action="reset.php" method="post">
        <h3>新添界面</h3>
        管理员名：<input type="text" name="username" required><br>
        密  码：  <input type="text" name="password" required><br>
        再次输入密码：  <input type="text" name="password1" required><br>
        <input type="submit" value="新添">
    </form>
</body>
</html>
<script>
    $(function() {

        $("form").validate({

            rules: {

                loginName:{ required: true },

                password: { required: true },

                password2: { equalTo: "#password1" },
                messages:{
                    username:{
                        required:"请输入用户名"
                    },
                    password:{
                        require:"请输入输入密码"
                    },
                    password1:{
                        required:"请输入密码",
                        equalTo:"两次密码输入不一致"
                    },
                }

            }

        });

    });

</script>