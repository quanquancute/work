define(['text!./find2.html','css!./find2.css'],function(html){
	function render(){
		$('.container').html(html);
	}

	return{
		render:render
	}
})