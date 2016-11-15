define(['text!./order.html','css!./order.css'],function(html){
	function render(){
		$('.container').html(html);
	}

    function getData(){
    	$.ajax({
    		type:"get",
    		url:"http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
    		async:false,
    		success:function(req){
    			console.log(req);
    			var htmlStr = "";
    			function showData(){
    				req = JSON.parse(req);
    				$.each(req.product, function(i,elem) {
//  					console.log(elem.name);
//                      if(i>=starI && i<=endI){
                        	htmlStr += "<div class ='order_shop'><div><img src=" +elem.img +"/></div>";
                        	htmlStr += "<div><p>" +elem.name + "</p>";
                        	htmlStr += "<p>￥" +elem.price + "<span>￥" +elem.market_price +"</span></p></div>";
                        	htmlStr += "<span class = 'car'><img src='images/ximg/car.jpg'/></span></div>";
                        	
    				});
    				$("#order_main").empty();
    				$("#order_main").html(htmlStr);
    			}
    			showData();
    		}
    	});
    	
    }
    function increase(){
    	var car = document.getElementsByClassName("car");
    	var num = document.getElementById("index_number");
    	var a = 1;
    	for(var i=0;i<car.length;i++){
    		car[i].onclick = function(){
    			a++;
    		num.innerHTML = a;
    		}
    	}
    }


	return{
		render:render,
		increase:increase,
		getData:getData
	}
})