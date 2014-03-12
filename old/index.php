<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="chrome=1,IE=9">
<meta http-equiv="X-UA-Compatible" content="IE=8">
<title>ichicolo</title>
<meta content="ichicolo,イチコロ,art,design,web,unit" name="keywords">
<meta content="ichicolo is the artistic design unit.Web, Design, Art....." name="description">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">
<meta name="viewport" content="width=device-width; initial-scale=1.0" />
<link rel="icon" href="/images/base/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="/images/base/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="/images/base/iphone-logo.jpg"> 
<link type="text/css" rel="stylesheet" href="/stylesheets/base.css" media="all" charset="utf-8">
<link type="text/css" rel="stylesheet" href="/stylesheets/index.css" media="all" charset="utf-8">
<link type="text/css" rel="stylesheet" href="/stylesheets/animations.css" media="all" charset="utf-8">
<link rel="stylesheet" media="screen and (max-width: 600px)" href="/stylesheets/devices.css" />
<link href='http://fonts.googleapis.com/css?family=Days+One' rel='stylesheet' type='text/css'>
<script type='text/javascript' src='/javascripts/jquery/jquery-1.8.2.min.js'></script>
<script type='text/javascript' src='/javascripts/jquery/jquery.easing.1.3.js'></script>
<script type="text/javascript" src="/javascripts/jquery/jquery.jtweetsanywhere-1.3.1.min.js"></script>
<script type="text/javascript" src="/javascripts/jquery/jtweetsanywhere-de-1.3.1.min.js"></script>
<script type="text/javascript" src="/javascripts/jquery/jquery.powertip.js"></script>
<script type="text/javascript" src="/javascripts/jquery/jquery.hashchange.js"></script>
<script type='text/javascript' src='/javascripts/ichicolo.js'></script>
<script type='text/javascript' src='/javascripts/ichicolo/index.js'></script>
<script type='text/javascript' src='/javascripts/ichicolo/index/animations.js'></script>
<script>
$(function(){
  $(window).hashchange(function(){
    var href = location.href
      , container = $('.container.top')
      , animations = $('.animations')
      , members = $('.members')
      , works = $('.works')
      , contacts = $('.contacts')
      ;

      if(href.indexOf('top') != '-1') {
        animations.remove();
        container.remove();
        window.ichicolo.index.animations.top();
      }
      else if(href.indexOf('works') != '-1') {
        animations.remove();
        window.ichicolo.index.animations.works();
      }
      else if(href.indexOf('members') != '-1') {
        animations.remove();
        window.ichicolo.index.animations.members();
      }
      else if(href.indexOf('contacts') != '-1') {
        animations.remove();
        window.ichicolo.index.animations.contacts();
      }
  })
  $(window).hashchange();
});
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-43671027-1', 'ichicolo.com');
  ga('send', 'pageview');

</script>
</head>
<body class="index">
	<div class="wrapper">
    <div class="contents">
      <div class="animations">
        <div class="world">
			    <h5><img class="dot parent" width="34" height="32" src="/images/index/animations/dot.png" alt="ichicolo" onmouseover="window.ichicolo.index.hop()" onclick="window.ichicolo.index.firstPhase()"></h5>
          <img class="circle exclamation" width="34" height="32" src="/images/index/animations/dot.png" alt="ichicolo">
          <img class="bar exclamation" width="66" height="182" src="/images/index/animations/exclamation.png" alt="ichicolo">
          <a href="/#!top" onclick="window.ichicolo.index.lastPhaseNext()">skip</a>
        </div><!-- /world -->
      </div><!-- /animations -->
      <div class="container top">
        <div class="inner">
          <h1><a href="/"><img src="/images/base/logo.png" width="260" height="42" alt="ichicolo"></a></h1>
          <div class="navi">
            <a href="/#!members">members</a>
            <a href="/#!works">works</a>
            <a href="/#!contacts">contact</a>
          </div>
          <img class="key-visual" src="/images/index/main.png" width="248" height:"248">
      
          <iframe class="like-box" src="//www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fichicolo&amp;width=400&amp;height=558&amp;show_faces=true&amp;colorscheme=light&amp;stream=true&amp;border_color=%23333333&amp;header=false&amp;appId=252224458181036" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:400px; height:558px;" allowTransparency="true"></iframe>
      
          <div class="twitter">
            <div class="ishikawa">
              <h3 class="ishikawa"><a href="https://twitter.com/ishikawa67" target="_blank">ishikawa</a></h3>
      
      <a id="jTweetsAnywherehide" class="twitter-timeline" href="https://twitter.com/ishikawa67" data-widget-id="384006360888664064">@ishikawa67 からのツイート</a>
      <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
      
            </div>
      
            <div class="inoue">
              <h3 class="inoue"><a href="https://twitter.com/kobitoino" target="_blank">inoue</a></h3>
      
      <a id="jTweetsAnywhereino" class="twitter-timeline" href="https://twitter.com/kobitoino" data-widget-id="384006753047683072">@kobitoino からのツイート</a>
      <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
              
            </div>
          </div>
      
          <a href="/#!works" class="links works" title="check our works here..."><img src="/images/index/dot.png" width="16" height:"16"></a>
          <a href="/#!members" class="links members" title="about members..."><img src="/images/index/dot.png" width="12" height:"12"></a>
          <a href="/#!contacts" class="links contact" title="contact us..."><img src="/images/index/dot.png" width="8" height:"8"></a>
          <p class="copyright">Copyright &copy; <strong>ichicolo</strong> ALL RIGHTS RESERVED.</p>
      
          <canvas id="main"></canvas>
      
        </div><!-- /inner -->
      </div><!-- /container top -->
    </div><!-- /contents -->
	</div><!-- /wrapper -->
</body>
</html>
