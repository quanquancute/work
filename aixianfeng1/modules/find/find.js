define(['text!./find.html','css!./find.css'],function(html){
	function render(){
		$('.container').html(html);
	}

	return{
		render:render
	}
})