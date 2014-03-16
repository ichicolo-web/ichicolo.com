<?php
require_once (dirname(__FILE__) . '/apprications/Twitter.php');

$twitter_ishikawa = new Twitter();
$twitter_ishikawa->name('3', '@ishikawa67');

$twitter_inoue = new Twitter();
$twitter_inoue->name('3', '@kobitoino');
?>

<!DOCTYPE HTML>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js"><!--<![endif]-->
<head>
<meta http-equiv="content-language" content="ja">
<meta charset="UTF-8">
<meta content="ichicolo,イチコロ,art,design,web,unit" name="keywords">
<meta content="ichicolo is the artistic design unit.Web, Design, Art....." name="description">
<meta name="author" content="">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>ichicolo</title>
<link rel="shortcut icon" href="/public/images/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="/public/images/iphone-logo.jpg"> 
<link href='http://fonts.googleapis.com/css?family=Days+One' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Flamenco:300,400' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Wallpoet' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="/public/stylesheets/common.css" type="text/css" media="screen">
<!-- <link rel="stylesheet" href="css/style.min.css" type="text/css" media="screen"> -->
<!--[if IE]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<script src="/public/javascripts/jquery/jquery-2.1.0.min.js"></script>
<script src="/public/javascripts/jquery/jquery.stellar.min.js"></script>
<script src="/public/javascripts/jquery/waypoints.min.js"></script>
<script src="/public/javascripts/jquery/jquery.easing.1.3.js"></script>
<script src="/public/javascripts/igniter.js"></script>
<script src="/public/javascripts/contact.js"></script>
</head>
<body>
  <video autoplay loop>
    <source src="/public/movies/ino.mp4">
  </video>

  <nav id="side">
    <p data-slide="1">top</p>
    <p data-slide="2">members</p>
    <p data-slide="3">works</p>
    <p data-slide="4">topics</p>
    <p data-slide="5">contacts</p>
  </nav>

  <div class="earth">
    <img data-slide="1" width="248" height="248" src="/public/images/members.png" alt="ichicolo">
  </div>

  <article class="slide top" data-slide="1" data-stellar-background-ratio="0.5">
    <div class="container">
      <section class="main">
        <h1><img src="/public/images/logo.png" alt="ichicolo"></h1>
        <h2 class="title">top</h2>
        <h2 class="number"></h2>
      </section>

      <footer>
        <p class="copyright">Copyright &copy; <strong>ichicolo</strong> ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  </article>

  <article class="slide members" data-slide="2" data-stellar-background-ratio="0.5">
   <div class="container clearfix">
     <h2 class="title">members</h2>
     <h2 class="number"></h2>
     <h3><strong>ichicolo</strong> is the artistic design unit. Web, Design, Art.....</h3>
     <div class="panel ishikawa">
       <img src="/public/images/members/ishikawa.png" alt="ishikawa">
       <ul>
         <li class="name">ishikawa</li>
         <li>mixed media</li>
         <li>programming</li>
         <li><a href="http://ishikawa.ichicolo.com" target="_blank">ishikawa.ichicolo.com</a></li>
       </ul>

       <? foreach ($twitter_ishikawa->result as $result): ?>
       <ul class="tweets">
         <li class="user clearfix">
           <a href="https://twitter.com/<?= $result->user->screen_name ?>" target="_blank">
             <img src="<?= $result->user->profile_image_url ?>" title="<?= $result->user->name ?>" alt="<?= $result->user->name ?>">
           </a>
           <span><?= $result->user->name ?></span>
         </li>
         <li class="tweet"><?= preg_replace('/(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)/', '<A class="underline" href="\\1\\2" target="_blank">\\1\\2</A>', $result->text) ?></li>
         <li class="created_at"><?= date('Y-m-d H:i:s', strtotime($result->created_at)) ?></li>
       </ul>
       <? endforeach; ?>
     </div><!--

  --><div class="panel inoue">
       <img src="/public/images/members/inoue.png" alt="inoue">
       <ul>
         <li class="name">inoue</li>
         <li>mixed media</li>
         <li>designing</li>
         <li><a href="http://inoue.ichicolo.com" target="_blank">inoue.ichicolo.com</a></li>
       </ul>

       <? foreach ($twitter_inoue->result as $result): ?>
       <ul class="tweets">
         <li class="user clearfix">
           <span><?= $result->user->name ?></span>
           <a href="https://twitter.com/<?= $result->user->screen_name ?>" target="_blank">
             <img src="<?= $result->user->profile_image_url ?>" title="<?= $result->user->name ?>" alt="<?= $result->user->name ?>">
           </a>
         </li>
         <li class="tweet"><?= preg_replace('/(https?|ftp)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)/', '<A class="underline" href="\\1\\2" target="_blank">\\1\\2</A>', $result->text) ?></li>
         <li class="created_at"><?= date('Y-m-d H:i:s', strtotime($result->created_at)) ?></li>
       </ul>
       <? endforeach; ?>
     </div>
   </div>
  </article>

  <article class="slide works" data-slide="3" data-stellar-background-ratio="0.5">
    <div class="container clearfix">
      <h2 class="title">works</h2>
      <h2 class="number"></h2>
      <h3>Please check out works!</h3>

      <!-- unripe -->
      <section class="unripe">
        <div class="panel name">
          <h4>Unripe</h4>
        </div><!--
     --><div class="panel photo">
          <img src="/public/images/works/frame.png" alt="">
        </div><!--
     --><div class="panel description">
          <ul>
            <li>アットホームさとスタッフの個性を重視。</li>
            <li class="data">業種：ヘアサロン</li>
            <li>"unripeらしさ = スタッフらしさ"がコンセプト。<br>アットホームでフレンドリーな居心地の良い空間を、スタッフさんを思い切って全面に出す事で伝えよう。そんなご提案をさせて頂きました。<br>スタッフのつぶやきをキービジュアルに表示、出勤カレンダー登録・表示機能、スナップ写真投稿機能など、ご依頼者にも活用して頂けるウェブサイトとなっております。</li>
            <li class="data"><a href="http://unripe-sun.com/" target="_blank">visit this website</a></li>
          </ul>
        </div>
      </section>

      <!-- Haus-de-musik Aoyama -->
      <section class="aoyama">
        <div class="panel name">
          <h4>Haus-de-musik Aoyama</h4>
        </div><!--
     --><div class="panel photo">
          <img src="/public/images/works/frame.png" alt="">
        </div><!--
     --><div class="panel description">
          <ul>
            <li>ベーシックな作りで見やすく。</li>
            <li class="data">業種：音楽教室</li>
            <li>リニューアルでのご依頼。<br>ベーシックで見やすいデザインとし、生徒様用ページなども設置するなど管理面も充実したサイトになっております。簡易更新機能を設置し、ご依頼者でいつでも更新可能としています。</li>
            <li class="data"><a href="http://haus-de-musik-aoyama.com/" target="_blank">visit this website</a></li>
          </ul>
        </div>
      </section>

      <!-- プレコム -->
      <section class="precom">
        <div class="panel name">
          <h4>Present.jpn.com<span class="jap">【プレコム】</span></h4>
        </div><!--
     --><div class="panel photo">
          <img src="/public/images/works/frame.png" alt="">
        </div><!--
     --><div class="panel description">
          <ul>
            <li>プレゼントに迷った時は。</li>
            <li class="data">業種：通信販売</li>
            <li>最大の目的は商品を見てもらい買って頂く事。<br>目的に辿り着くまでの導線を考え、検索機能などの充実させました。</li>
            <li class="data"><a href="http://present.jpn.com/" target="_blank">visit this website</a></li>
          </ul>
        </div>
      </section>

      <!-- cust -->
      <section class="cust">
        <div class="panel name">
          <h4>cust</h4>
        </div><!--
     --><div class="panel photo">
          <img src="/public/images/works/frame.png" alt="">
        </div><!--
     --><div class="panel description">
          <ul>
            <li>かゆいところに手が届く顧客管理システム</li>
            <li>顧客の管理はもちろん、希望期間に来店されていない顧客のピックアップや、お誕生日メールの送信など、様々な機能を実装しています。<br>また、店舗に合わせたカスタマイズも致します。</li>
          </ul>
        </div>
      </section>

      <!-- mew -->
      <section class="mew">
        <div class="panel name">
          <h4><span class="jap">ねこの集会所 みゅ〜</span></h4>
        </div><!--
     --><div class="panel photo">
          <img src="/public/images/works/frame.png" alt="">
        </div><!--
     --><div class="panel description">
          <ul>
            <li>ねこ好きのための総合サイト</li>
            <li>猫の画像・動画、迷子のお知らせなど、SNSを駆使した総合サイトです。</li>
            <li class="data"><a href="http://mew.in.net/" target="_blank">visit this website</a></li>
          </ul>
        </div>
      </section>

    </div>
  </article>

  <article class="slide topics" data-slide="4" data-stellar-background-ratio="0.5">
    <div class="container clearfix">
      <h2 class="title">topics</h2>
      <h2 class="number"></h2>
      <h3>Please check our activities!</h3>

      <iframe id="facebook" src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fichicolo&amp;width=400&amp;height=558&amp;show_faces=true&amp;colorscheme=light&amp;stream=true&amp;header=false&amp;appId=252224458181036" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:400px; height:558px;" allowTransparency="true"></iframe>
    </div>
  </article>

  <article class="slide contacts" data-slide="5" data-stellar-background-ratio="0.5">
    <div class="container clearfix">
      <h2 class="title">contacts</h2>
      <h2 class="number"></h2>
      <h3>Please feel free to contact us!</h3>

      <div id="contact">
        <form action="" method="post" class="contact">
          <p><span class="require">*</span>is the mark for required item. | <span class="jap"><span class="require">*</span>が付いている項目は必須入力です。</span></p>

          <table>
            <tr>
              <th><label for="name">Name<span class="require"> *</span></label></th>
              <td>
                <input class="validate required" name="name" type="text" id="name">
              </td>
            </tr>

            <tr>
              <th><label for="email">E-mail Address<span class="require"> *</span></label></th>
              <td><input class="validate required" name="email" type="text" id="email"></td>
            </tr>

            <tr>
              <th><label for="confirm_email">Confirm E-mail Address<span class="require"> *</span></label></th>
              <td><input class="validate required" name="confirm_email" type="text" id="confirm_email"></td>
            </tr>

            <tr>
              <th><label for="address">Address</label></th>
              <td><input name="address" type="text" id="address"></td>
            </tr>

            <tr>
              <th><label for="content">Message<span class="require"> *</span></label></th>
              <td><textarea class="validate required" name="content" id="content"></textarea></td>
            </tr>
          </table>

          <div class="button">
            <button id="submit" type="button">Confirm<br><span class="jap">確認する</span></button>
            <button id="myreset" type="reset">Reset<br><span class="jap">リセット</span></button>
          </div>
        </form>
      </div>
    </div>
  </article>
</body>
</html>
