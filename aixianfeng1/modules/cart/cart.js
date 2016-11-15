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
    		text.innerHTML = num;
            num+=1;
            self.siblings("input").val(num);
    	})
    }
    
  function downNum(){
  	$(".decrease").click(function(){
  		var self = $(this);
  		var num = parseInt(self.siblings("input").val());
  		if(num>0){
  			num -=1;
  		}
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