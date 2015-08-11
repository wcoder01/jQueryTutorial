$(document).ready(function(){ 
		
	//elementos com o atributo 'title' 	
	//$('[title]').css('border', '5px solid red');

	//elementos div com atributo 'title'
	//$('div[title]').css('border', '5px solid red');

	//elemento com atributo 'title' e valor div1Title
	//$('[title="div1Title"]').css('border', '5px solid red');

	//div com atributo 'title' e valor div1Title
	//$('div[title="div1Title"]').css('border', '5px solid red');

	//div com atributo 'title' e valor div1Title e atributo 'style'
	//$('div[title="div1Title"][style]').css('border', '5px solid green');

	//div com atributo 'title' ou elementos com atributo 'style'
	$('div[title],[style]').css('border', '5px solid green');


});