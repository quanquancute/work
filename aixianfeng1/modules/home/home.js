define(['text!./home.html','css!./home.css'],function(html){
	function render(){
		$('.container').html(html);
	}

    function getData(){
         $.ajax({
         	type:"get",
         	url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
         	async:true,
         	success:function(req){
//       		console.log(req);
         		var htmlStr = "";
         		function showData(starI,endI){
         			req =JSON.parse(req);
         			$.each(req.data.slide, function(i,elem) {
         				if(i>=starI && i<=endI){
         					htmlStr += "<img src="+elem.activity.img+"/>";		     
         				}
         			});
        
         			$("#show").empty();
         			$("#show").html(htmlStr);
         		}
         		
         		showData(0,5);
         	}
         });
    }   
    
    function getJson(){
         $.ajax({
         	type:"get",
         	url:"http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=天天特价",
         	async:true,
         	success:function(req){
         		console.log(req);
         		var htmlStr =  " ";
         		function showData(starI,endI){
         			req = JSON.parse(req);
         		$.each(req.data, function(i,elem) {
//       			console.log(elem.img);
                         if(i>=starI && i<=endI){
//                  htmlStr += "<div class='home_title'><span><img src ='images/img/t1'/>优选水果</span>";
//                  htmlStr += "<span><a href ='#'>更多<img src='images/img/t2.jpg'/></a></span></div>";
//                  htmlStr += "<div class='fruit'><img src='images/img/furit.jpg'/></div><div class='home_main3'>";
                    htmlStr += "<p><img src=" +elem.img +" class='a'/></p>";
                    htmlStr += "<div class='dec'><p>" +elem.name +"</p>";
                    htmlStr += "<p><span class = 'zengsong'>" +elem.pm_desc + "</span></p>";
                    htmlStr+= "<p>" + elem.specifics + "</p>";
                    htmlStr+= "<p>￥" + elem.price +"<span style='color: gray;text-decoration: line-through;'>￥" +elem.market_price +"</span></p>";
                    htmlStr+= "<span class='jia'><img src = 'images/img/jia.jpg'/></span></div>";
                    
//                     <p><img src="images/img/f1.jpg"/></p>						
//							<div class="dec">
//							<p>蜂觅 15度蜜梨</p>
//							<p><!--<span class="jingxuan">精选</span>--><span class="zengsong">买一赠一</span></p>
//							<p>400-500/盒</p>
//							<p>￥14.6<span style="color: gray;text-decoration: line-through;"> ￥16</span></p>
//							<span class="jia"><img src="images/img/jia.jpg"/></span>
//							</div>				
                    }
         		});
         		$(".home_things").empty();
         		$(".home_things").html(htmlStr);
         		}
         	 showData(0,6);
         	}
         	
         });
    }

	return{
		render:render,
		getData:getData,
		getJson:getJson
	}
})