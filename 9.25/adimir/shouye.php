<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首页</title>
    <link rel="stylesheet" href="shouye.css">
    <script src="../static/js/jquery-3.2.1.js"></script>
    <script src="../static/js/shouye.js"></script>
</head>
<body>
     <header>
         <main>
             <head>
                 <div class="headleft">
                     <img src="root/17-10-09/1507517224175logo.png" alt="">
                 </div>
                 <ul class="zhongjian">
                     <?php
                     include "public.php";
                     $sql="select * from cegetory where pid=0";
                     $result=$db->query($sql);
                     while($row=$result->fetch_assoc()){
                         ?>
                         <li><a href="" ><?php echo $row["cname"]?></a></li>
                         <?php
                     }
                     echo $row;
                     ?>
                 </ul>
                 <div class="headright">
                     <div class="lianxi">
                         <div class="dianhua">&#xe638;</div>
                         <span class="rexian">咨询热线</span>
                     </div>
                     <span class="tel">400-6666-55566</span>
                 </div>
             </head>
         </main>
     </header>
     <section>
         <div class="banner1">
             <div class="datu">
                 <a href="javascript:;" class="bxia"><img src="root/17-10-09/150751828232aaa.jpg" alt=""></a>
                 <a href="javascript:;" class="bxia" style="display:none;"  ><img src="root/17-10-09/1507518662812bbb.jpg" alt=""></a>
                 <a href="javascript:;" class="bxia" style="display:none;" ><img src="root/17-10-09/1507518662552ccc.jpg" alt=""></a>
                 <ul class="lunbodian">
                     <li class="yuan yanse"></li>
                     <li class="yuan"></li>
                     <li class="yuan"></li>
                 </ul>
                 <div class="bleft">&#xe65d;</div>
                 <div class="bright">&#xe63e;</div>
             </div>
         </div>
     </section>
     <!-- 搜索框 -->
     <div class="sousuo">
         <div class="neirong">
             <ul class="keywords">
                 <li>热门关键词:</li>
                 <li><a href="">伊思红参系列</a></li>
                 <li><a href="">大家闺秀</a></li>
             </ul>
             <span class="key-input">
          <div class="fangdajing">
              <div class="fangdajing1">&#xe61b;
              </div>
          </div>
          <input type="text"  name="searchword" size="20" placeholder="请输入关键字">
        </span>
             <div class="key-anniu">搜索</div>
         </div>
     </div>
     <!-- 图文并茂 -->
     <section class="tuwen">
         <main class="box1">
             <a href="product-list.html" class="left1">
                 <img src="img/ddd.jpg" alt="">
             </a>
             <div class="right1">
                 <h1>
                     <a href="">大家闺秀水嫩润白系列</a>
                 </h1>
                 <p class="jieshao1">水盈润泽，嫩白透亮，水盈润泽，嫩白透亮，水盈润泽，嫩白透亮，水盈润泽，嫩白透亮</p>
                 <a href="product-list.html" class="chakan">查看详情</a>
             </div>
         </main>
         <ul class="box2">
             <li><a href="product-list.html">
                     <img src="img/ddd.jpg" alt="">
                     <h4>大家闺秀水嫩润白系列</h4>
                     <p>水盈润泽，嫩白透亮，水盈润泽，嫩白透亮,水盈润泽</p>
                 </a>
             </li>
             <li><a href="product-list.html">
                     <img src="img/fff.jpg" alt="">
                     <h4>Chanel香奈儿邂逅柔情淡香水</h4>
                     <p>Chanel香奈儿邂逅柔情淡香水 50ml（又名：香奈儿..</p>
                 </a>
             </li>
             <li><a href="product-list.html">
                     <img src="img/ggg.jpg" alt="">
                     <h4>蜜丝佛陀（Max Factor）透滑粉饼</h4>
                     <p>蜜丝佛陀（Max Factor）透滑粉饼1号 10g 玉..</p>
                 </a>
             </li>
             <li><a href="product-list.html">
                     <img src="img/hhh.jpg" alt="">
                     <h4>伊思晶钻系列</h4>
                     <p>伊思晶钻系列伊思晶钻系列伊思晶钻系列伊思晶钻系列</p>
                 </a>
             </li>
         </ul>
     </section>
     <!-- 中间图片 -->
     <section class="middle">
         <img src="img/iii.jpg" alt="">
     </section>
     <!-- 化妆品套餐 -->
     <section class="taocan">
         <div class="biaoti">
             <h2>化妆品套餐选择
                 <br>
                 化妆品一线品牌&nbsp;行业中的领导者
             </h2>
             <hr>
             <div class="kuai"></div>
         </div>
         <dl>
             <dt>
                 <img src="img/jjj.jpg" alt="">
             </dt>
             <dd>
                 <p>梦幻美肌修颜套餐</p>
                 <span>全新御龄美颜概念，于护肤同时，瞬息美颜，焕亮迷人的女性魅力。
      无论年龄、肌肤类型与肤色，为每位女性带来每一天的倾力呵宠。</span>
             </dd>
         </dl>
         <dl>
             <dd>
                 <p>梦幻美肌修颜套餐</p>
                 <span>全新御龄美颜概念，于护肤同时，瞬息美颜，焕亮迷人的女性魅力。
      无论年龄、肌肤类型与肤色，为每位女性带来每一天的倾力呵宠。</span>
             </dd>
             <dt>
                 <img src="img/jjj.jpg" alt="">
             </dt>
         </dl>
         <dl>
             <dt>
                 <img src="img/jjj.jpg" alt="">
             </dt>
             <dd>
                 <p>梦幻美肌修颜套餐</p>
                 <span>全新御龄美颜概念，于护肤同时，瞬息美颜，焕亮迷人的女性魅力。
      无论年龄、肌肤类型与肤色，为每位女性带来每一天的倾力呵宠。</span>
             </dd>
         </dl>
         <dl>
             <dd>
                 <p>梦幻美肌修颜套餐</p>
                 <span>全新御龄美颜概念，于护肤同时，瞬息美颜，焕亮迷人的女性魅力。
      无论年龄、肌肤类型与肤色，为每位女性带来每一天的倾力呵宠。</span>
             </dd>
             <dt>
                 <img src="img/jjj.jpg" alt="">
             </dt>
         </dl>
     </section>
     <!-- 加盟店 -->
     <section class="jmd">
         <main>
             <div class="title">
                 <div class="lt">
                     <div class="icon">&#xe63a;</div>
                     <div class="zhi">加盟店展示</div>
                 </div>
                 <a href="" class="rt">更多+</a>
             </div>
             <div class="dajiameng">
                 <div class="banner">
                     <section id="dg-container" class="dg-container">
                         <div class="dg-wrapper">
                             <a href="jmd.html"><img src="img/thumb (1).jpg" alt=""></a>
                             <a href="jmd.html"><img src="img/thumb (2).jpg" alt=""></a>
                             <a href="jmd.html"><img src="img/thumb (3).jpg" alt=""></a>
                             <a href="jmd.html"><img src="img/thumb.jpg" alt=""></a>
                             <a href="jmd.html"><img src="img/thumb (3).jpg" alt=""></a>
                         </div>
                         <ol class="button" id="lightButton" style="display: none;">
                             <li index="0">
                             <li index="1">
                             <li index="2">
                             <li index="3">
                             <li index="4">
                         </ol>
                     </section>
                 </div>
             </div>
             <a href="jmd.html" class="zhanshi">体验店展示</a>
         </main>
     </section>
     <section class="jianjie">
         <div class="jz">
             <img src="img/1464658160.jpg" alt="">
         </div>
         <div class="jr">
             <p>化妆有限公司成立于2015年，注册资金：1000万元人民币，是一家在网上集聚了全球中高端品牌化妆品的网上商城平台以及在线下发展实体化妆品加盟店的 o2o互联网公司。</p>
             <br>
             <p>化妆有限公司在化妆品加盟行业首创社区加盟店和网上商城相结合，厂家一手货源加盟的商业模式，打造线上线下立体的消费服务平台，公司以产品的质量为核心，与全球中高端化妆品品牌厂家合作，严格把控产品流入市场的每个环节，保证平台绝不销售一件假货，从而赢得消费者的信任。化妆有限公司也把合作加盟商定位在中高端的社区和写字楼，让公司的体验店避开高租金高成本的临街铺面和商场。</p>
             <a href="" class="rt1">更多+</a>
         </div>

     </section>
     <div class="anli">
         <div class="al">
             <div class="icon">&#xe63a;</div>
             <div class="zhi">产品案例</div>
         </div>
         <div class="ar">MORE+</div>
     </div>
     <div class="tupian">
         <div class="tuzuo">&#xe65d;</div>
         <div class="tuzhong">
             <div class="tuzhong1">
                 <a href="" class="dongtu"><img src="img/tu1.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu2.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu3.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu1.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu2.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu3.jpg" alt=""></a>
             </div>
             <div class="tuzhong2">
                 <a href="" class="dongtu"><img src="img/tu1.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu2.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu3.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu1.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu2.jpg" alt=""></a>
                 <a href="" class="dongtu"><img src="img/tu3.jpg" alt=""></a>
             </div>
         </div>
         <div class="tuyou">&#xe63e;</div>
     </div>
     <div class="new">
         <div class="new1">
             <div class="newtitle1">
                 <div class="newleft">
                     <div class="icon">&#xe63a;</div>
                     <div class="zhi">新闻动态</div>
                 </div>
                 <div class="newright">MORE+</div>
             </div>
             <div class="newp">
                 <img src="img/new.jpg" alt="">
             </div>
             <ul class="dongtai">
                 <li><a href="">
                         <p class="hufu">外资护肤品、化妆品、香水品...</p>
                         <span class="date">2017-5-03</span>
                     </a></li>
                 <li><a href="">
                         <p class="hufu">韩国化妆品持续火爆：中国出口量...</p>
                         <span class="date">2017-5-03</span>
                     </a></li>
                 <li><a href="">
                         <p class="hufu">"乡村版沃尔玛"化妆品自营采购占...</p>
                         <span class="date">2017-5-03</span>
                     </a></li>
                 <li><a href="">
                         <p class="hufu">化妆品将不得以“医生”命名</p>
                         <span class="date">2017-5-03</span>
                     </a></li>
                 <li><a href="">
                         <p class="hufu">阿玛尼在华首尝O2O</p>
                         <span class="date">2017-5-03</span>
                     </a></li>
             </ul>
         </div>
         <div class="new2">
             <div class="newtitle1">
                 <div class="newleft">
                     <div class="icon">&#xe63a;</div>
                     <div class="zhi">推荐产品</div>
                 </div>
                 <div class="newright">MORE+</div>
             </div>
             <div class="newp">
                 <img src="img/new1.jpg" alt="">
             </div>
             <ul class="tuijian">
                 <li><a href="">大家闺秀水嫩润白系列</a></li>
                 <li>
                     <p>水盈润泽，嫩白透亮，水盈润泽，嫩白透亮</p>
                     <p>水盈润泽，嫩白透亮，水盈润泽，嫩白透亮</p>
                 </li>
                 <li><a href="">Chanel香奈儿邂逅柔情淡香水</a></li>
                 <li>
                     <p>Chanel香奈儿邂逅柔情淡香水 50ml(又名：</p>
                     <p>香奈儿邂逅柔情淡香水(瓶装)50ml)</p>
                 </li>
             </ul>
         </div>
     </div>
     <!-- 底部 -->
     <section class="footer">
         <div class="dibu">
             <div class="zuobu">
                 <div class="dilogo">
                     <img src="img/ming.png" alt="">
                 </div>
                 <ul class="footer-nav">
                     <li><a href="aboutus.html">关于我们</a></li>
                     <li><a href="新闻资讯.html">新闻资讯</a></li>
                     <li><a href="product-list.html">产品显示</a></li>
                     <li><a href="jmd.html">加盟店展示</a></li>
                     <li><a href="lianxi.html">联系我们</a></li>
                     <li><a href="">网站地图</a></li>
                     <li><a href="">网站管理</a></li>
                 </ul>
                 <ul class="footer-contact">
                     <p>化妆品有限公司&nbsp;版权所有&nbsp;©2010-2016&nbsp;|&nbsp;备案号：
                         <a href="">粤12312312-1231</a>
                     </p>
                 </ul>
             </div>
             <ul class="center">
                 <h3>友情链接</h3>
                 <li>
                     <a href="">
                         <div class="meili">
                             <p>美丽说</p>
                         </div>
                     </a>
                 </li>
                 <li>
                     <a href="">
                         <div class="meili">
                             <p>中国化妆品网</p>
                         </div>
                     </a>
                 </li>
                 <li>
                     <a href="">
                         <div class="meili">
                             <p>爱美女性网</p>
                         </div>
                     </a>
                 </li>
                 <li>
                     <a href="">
                         <div class="meili">
                             <p>太平洋时尚网</p>
                         </div>
                     </a>
                 </li>
                 <li>
                     <a href="">
                         <div class="meili">
                             <p>乐蜂网</p>
                         </div>
                     </a>
                 </li>
                 <li>
                     <a href="">
                         <div class="meili">
                             <p>聚美优品</p>
                         </div>
                     </a>
                 </li>

             </ul>
             <div class="youbu">
                 <div class="saoma">
                     <img src="img/saoma.jpg" alt="">
                 </div>
                 <p>扫描关注微信公众平台！</p>
             </div>
         </div>
     </section>
     <div class="copyright">
         <p>网址：www.abc.com </p>
         <p>公司地址：长沙市西南区199号五栋604房</p>
         <p>400-666666-5555566</p>
         <p>Powered by MetInfo 5.3.6 ©2008-2017 www.metinfo.cn</p>
     </div>
     <!-- 底端结束 -->
     <section class="guding">&#xe63c;</section>
</body>
</html>
<script >
    $(function () {
        $('#dg-container').carrousel({
            current: 0,
            autoplay: true,
            interval: 3000
        });
    });
</script>
</body>
</html>