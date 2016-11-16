define(['text!./cart.html','css!./cart.css'],function(html){
	function render(){
		$('.container').html(html);
	}

    function getData(){
    	$.ajax({
    		type:"get",
    		url:"http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",
    		async:true,
    		success: function(req){
    			console.log(req);
    			var htmlStr = " ";
    		function showData(starI,endI){
    			req = JSON.parse(req);
    			$.each(req.product, function(i,elem) {
//  				console.log(elem.img);
                     alert(1);
//                  htmlStr += "<span><img src='images/gimg/dui.jpg'/></span>";
//                  htmlStr +="<div id='coke'><div><img src=" +elem.img +"/></div>";
//                  htmlStr += "<div><p>" +elem.name + "</p>";
//                  htmlStr += "<p>￥" +elem.price + "</p></div></div>";
//                  htmlStr += "<span class = 'decrease'><img src='images/gimg/jian.jpg'/></span>";
//                  htmlStr += "<input id='cart_num' value = '0'>";
//                  htmlStr += "<span class = 'increase'><img src='images/gimg/jia.jpg'/></span>";

    			});
//  			$("#four").empty();
//  			$("#four").html(htmlStr);
    		}
    		showData(0,2);
    		}
    	});
    }
    
    function upNum(){
    	$(".increase").click(function(){
            var self = $(this);
    		var num = parseInt(self.siblings("input").val());
    		var text = $("#index_number");
    		var a = $("#index_number").html();
    		text.html(num);
    		num+=1;
    		a++;
    		$("#index_number").html(a);
      		 if(a==0){
    	   	$("#index_number").css("display","none");
    	   }
    		if(num>0){
    			self.siblings(".shop_jian").fadeIn();
    			self.siblings(".shop_text").fadeIn();
    			$("#index_number").css("display","block");
    		}
    		self.siblings("input").val(num);
    		
    	})
    }
    
  function downNum(){
  	$(".decrease").click(function(){
            var b = $("#index_number").html();
    		var self = $(this);
    		var num = parseInt(self.siblings("input").val());
    		var text = $("#index_number");
    		b--;
    		if(b<=0){
    		$("#index_number").hide();
    		}	
    		$("#index_number").html(b);
    		num--;
    		self.siblings("input").val(num);
    	})
  }

    
	return{
		render:render,
		getData:getData,
		upNum:upNum,
		downNum: downNum
	}
})