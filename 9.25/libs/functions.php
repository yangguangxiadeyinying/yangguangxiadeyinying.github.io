<?php
class tree{
    public $str="";
    public $ul="";

    public  function aa($pid,$db,$table,$step,$flag,$currentcid){
        /*通过当前的cid   获取当前的 pid*/
        $currentPid="";
        if ($currentcid){
            $sql="select * from ".$table." where cid=".$currentcid;
            $result=$db->query($sql);
            $row=$result->fetch_assoc();
            $currentPid=$row["pid"];
        }
        $sql="select * from ".$table." where pid=".$pid;
        $step+=1;
        $str=str_repeat($flag,$step);
        $result=$db->query($sql);
        while ($row=$result->fetch_assoc()){
            $cid=$row["cid"];
            $cname=$row["cname"];
            if($cid==$currentPid) {
                $this->str .= "<option value='" . $cid . "' selected>" . $str . $cname . "</option>";
            }else{
                $this->str .= "<option value='" . $cid . "'>" . $str . $cname . "</option>";
            }

            $this->aa($cid,$db,$table,$step,$flag,$currentcid);
        }
    }

    public  function getTree1($pid,$db,$table,$step,$flag){
        $sql="select * from ".$table." where pid=".$pid;
        $result=$db->query($sql);
        if($result->fetch_assoc()==0){
            return false;
        }
        $this->ul.="<ul>";
        while ($row=$result->fetch_assoc()){
            $cid=$row["cid"];
            $cname=$row["cname"];
            var_dump($cname);
            $this->ul.="<li>".$cname."<a href='delCategory.php?cid={$cid}'>删除</a> <a href='editCategory.php?cid={$cid}'>编辑</a></li>";
            $this->getTree1($cid,$db,$table,$step,$flag);
        }
        $this->ul.="</ul>";
    }
    function del($cid,$db,$table){
        $sql="select * from ".$table." where pid=".$cid;
        $result=$db->query($sql);
        if($result->fetch_assoc()>0){
            echo "<script>alert('有子分类不能删除');location.href='search.php'</script>";
        }else{

            //根据cid查找pid

            $sql1="select pid from ".$table." where cid=".$cid;
            $result=$db->query($sql1);
            $row=$result->fetch_assoc();
            $pid=$row["pid"];

            $sql="delete from ".$table." where cid=".$cid;
            if($db->query($sql)){

                $sql="select cname from cegetory where pid= ".$pid;
                $result=$db->query($sql);
                if($result->fetch_assoc()==0){
                    $sql="update cegetory set state=0 where cid=".$pid;
                    if($db->query($sql)){
                        echo "<script>alert('删除成功');location.href='search.php'</script>";
                    }
                }else{
                    echo "<script>alert('删除成功');location.href='search.php'</script>";
                }
            }
        }
    }
}