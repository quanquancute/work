define(['text!./location.html','css!./location.css'],function(html){
	function render(){
		$('.container').html(html);
	}

	return{
		render:render
	}
})