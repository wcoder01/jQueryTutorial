$(document).ready(function(){ 
		
		//classe small
		//$('.small').css('border', '5px solid red');

		//classe small e big
		//$('.small, .big').css('color', 'blue');

		//classe small e span dentro da classe big
		//$('.small, span.big').css('background-color', 'green');

		//classe small dentro da #div1
		//$('#div1 .small').css('background-color', 'red');

		//elemento com classe small e big juntos
		//$('.small.big').css('color', 'pink');

		//mesmo efeito do anterior
		$('.small').filter('.big').css('color', 'pink');

		



});