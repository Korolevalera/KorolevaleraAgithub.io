var form =$('#myform');
form.on('submit', function(evt){
	evt.preventDefault();
	$.ajax({
		type: 'POST',
		url: 'Vol.php',
		data: $(this).serialize()
	}) .done(function(response)  {
		console.log(response);
		alert('ВІТАЮ,ВСЕ ПРОЙШЛО УСПІШНО!');
		form.html('ТЕПЕР ВИ ЗАРЕЄСТРОВАНІ');
	});
});