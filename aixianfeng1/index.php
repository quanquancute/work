<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx4675fea69e02fd31", "39f512a7105dd6366990cacd7539442a");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
		 <meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>°®ÏÊ·ä</title>
		<link rel="stylesheet" href="css/reset.css" />
		<link rel="stylesheet" href="css/common.css" />
	</head>
	<body>
		<div class="container"></div>
	<!--	<div class="footer">-->
			<aside class="footer">
		    	<dl>
		    		<dt><a href="#home"><img src="images/img/a1.jpg"/></a></dt>
		    		<dd>Ê×Ò³</dd>
		    	</dl>
		    	<dl>
		    		<dt><a href="#shop"><img src="images/img/a2.jpg"/></a></dt>
		    		<dd>ÉÁËÍ³¬ÊÐ</dd>
		    	</dl>
		    	<dl>
		    		<dt><a href="#order"><img src="images/img/a3.jpg"/></a></dt>
		    		<dd>ÐÂÏÊÔ¤¶¨</dd>
		    	</dl>
		    	<dl>
		    		<dt><a href="#cart"><img src="images/img/a4.jpg"/></a></dt>
		    		<dd>¹ºÎï³µ</dd>
		    	</dl>
		    	<dl>
		    		<dt><a href="#mine"><img src="images/img/a5.jpg"/></a></dt>
		    		<dd>ÎÒµÄ</dd>
		    	</dl>
		    	<span id="index_number">1</span>
		    </aside>	

<!--		</div>	-->	    
      <script src="lib/require.js" data-main='main'></script>
      <script type="text/javascript">
		document.documentElement.style.fontSize = innerWidth/10+"px";
		window.onresize = function(){
			document.documentElement.style.fontSize = innerWidth/10+"px";
		}

		 wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
		</script>
		
			</body>
</html>
