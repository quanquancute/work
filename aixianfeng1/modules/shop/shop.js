define(['text!./shop.html','css!./shop.css'],function(html){
	function render(){
		$('.container').html(html);
	}
    
    
    function getData(){
    	$.ajax({
    		type:"get",
    		url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=热销榜",
    		async:false,
    		success:function(req){
//  			console.log(req);
    			var htmlStr = "";
    			function showData(starI,endI){
    				req = JSON.parse(req);
    				$.each(req.data, function(i,elem) {
//  					console.log(elem.name);
                        if(i>=starI && i<=endI){
                        	
                        	htmlStr +="<div class='shop_buy'><div class='img'><a href = '#find'><img src=" + elem.img +"/></a></div>";
                        	htmlStr +="<div class='price'><p>" + elem.name +"</p>";
                        	htmlStr += "<p><span>" + elem.pm_desc +"</p>";
                        	htmlStr += "<p>" + elem.specifics + "</p>";
                        	htmlStr += "<p>￥" +elem.price + "<span>￥" + elem.market_price +"</span></p></div>";
                        	htmlStr += "<span class='shop_jian'><img src='images/gimg/jian.jpg'/></span>";
                        	htmlStr += "<input id='shop_num' value='0' class='shop_text' />";
                        	htmlStr += "<span class='shop_jia'><img src='images/mimg/jia.jpg'/></span></div>";

                        }
    				});
    				$("#shop_shop").empty();
    				$("#shop_shop").html(htmlStr);
    			}
    			showData(0,20);
    		}
    	});
    }

    function add(){
    	 var add = document.getElementsByClassName("shop_jia");
	     var num = document.getElementById("index_number");
	     var text = document.getElementsByClassName("shop_text");
	     
		var a = 1;
		
        for(var i=0;i<add.length;i++){
        	add[i].onclick = function(){
               	a++;
        		num.innerHTML = a;
        	    text.innerHTML = num.innerHTML;
        	    
        	}
        }
	}
   
	 function reduce(){
	 	var reduce = document.getElementsByClassName("shop_jian");
	   	var num = document.getElementById("index_number");
		var text = document.getElementsByClassName("shop_text");
		for(var i=0;i<reduce.length;i++){
	   		reduce[i].onclick = function(){
				
	   		}
		}
	   }

    
    function addGoods(){
    	$(".shop_jia").click(function(){
    		var self = $(this);
    		var num = parseInt(self.siblings("input").val());
    		var text = $("#index_number");
    		text.html(num);
    		num+=1;
    		
    		if(num>0){
    			self.siblings(".shop_jian").fadeIn();
    			self.siblings(".shop_text").fadeIn();
    		}
    		self.siblings("input").val(num);
    		
    	})
    }
    
    function reduceGoods(){
    	$(".shop_jian").click(function(){
          
    		var self = $(this);
    		var num = parseInt(self.siblings("input").val());
    		var text = $("#index_number");
    		text.html(num);
    		
    	if(num>0){
    		num-=1;
    	}
    	if(num<1){
    		self.fadeOut();
    		self.siblings(".shop_text").fadeOut();
    	}
    		self.siblings("input").val(num);
    	})
    }
	return {
		render:render,
//		add:add,
		addGoods:addGoods,
		reduceGoods:reduceGoods,
		getData:getData,
//		reduce:reduce
	}
	
	
})