define(['text!./kill.html','css!./kill.css'],function(html){
	function render(){
		$('.container').html(html);
	}
    
    function getData(){
        $.ajax({
        	type:"get",
        	url:"http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php",
        	async:true,
        	success:function(req){
        		console.log(req);
        		var htmlStr = "";
        		function showData(starI,endI){
        			req = JSON.parse(req);
        			$.each(req.product, function(i,elem) {
//      				console.log(elem.name);
                        if(i>=starI && i<=endI){
                        	htmlStr +="<dl><dt><img src = " +elem.img +"/></dt>";
                        	htmlStr +="<dd>" + elem.name +"</dt>";
                        	htmlStr += "<dd>" +elem.specifics + "</dd>";
                        	htmlStr += "<dd><span>￥<b>"+elem.price +"</b></span>/原价:" + elem.market_price +"</span></dd>";
                        	htmlStr +="<dd><span>" + elem.btnText +"</span></dd></dl>";                        	

                        }
        			});
        			$(".Goods").empty();
        			$(".Goods").html(htmlStr);
        		}
        		showData(0,20);
        	}
        });
    }
    
	return{
		render:render,
		getData:getData
	}
})