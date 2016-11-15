define(['text!./score.html','css!./score.css'],function(html){
	function render(){
		$('.container').html(html);
	}

	return{
		render:render
	}
})